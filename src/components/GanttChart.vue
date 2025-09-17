<template>
  <div class="gantt-chart border border-gray-300 rounded-lg overflow-hidden bg-white">
    <!-- Header -->
    <div class="gantt-header flex bg-gray-100 border-b border-gray-300 relative">
      <!-- Time indicator -->
      <div
        class="absolute top-1 left-1 text-xs text-gray-600 bg-white bg-opacity-80 px-1.5 py-0.5 rounded z-10"
      >
        {{ yearMonthHint }}
      </div>

      <!-- Time axis controls -->
      <div
        :class="`${leftColumnWidth} p-3 font-bold text-center border-r border-gray-300`"
      >
        <select
          v-model="selectedUnit"
          class="block mb-1 text-xs border border-gray-300 rounded px-1 py-0.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="選擇時間單位"
        >
          <option value="week">週</option>
          <option value="month">月</option>
        </select>
        時間軸
      </div>

      <!-- Phase headers -->
      <div class="flex flex-1">
        <div
          v-for="phase in phases"
          :key="phase.id"
          class="p-3 font-bold text-center border-r border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors"
          :style="{ width: phaseWidth + 'px' }"
        >
          {{ phase.name }}
        </div>
      </div>
    </div>

    <!-- Error/Empty state -->
    <div
      v-if="!isValidTimeRange"
      class="flex items-center justify-center h-32 text-gray-500 bg-gray-50"
    >
      <div class="text-center">
        <p class="text-sm">無效的時間範圍</p>
        <p class="text-xs text-gray-400 mt-1">請確認開始時間小於結束時間</p>
      </div>
    </div>

    <div
      v-else-if="days.length === 0"
      class="flex items-center justify-center h-32 text-gray-500 bg-gray-50"
    >
      <div class="text-center">
        <p class="text-sm">沒有可顯示的時間資料</p>
        <p class="text-xs text-gray-400 mt-1">請檢查時間設定</p>
      </div>
    </div>

    <!-- Content area -->
    <div
      v-else
      class="gantt-content flex h-150 overflow-y-auto"
      ref="scrollContainer"
      @scroll="onScroll"
    >
      <!-- Time labels column -->
      <div :class="`${leftColumnWidth} border-r border-gray-300`">
        <!-- Week view -->
        <div v-if="selectedUnit === 'week'" class="time-column">
          <div
            v-for="week in weeks"
            :key="week.weekStart.toISOString()"
            class="week-group"
          >
            <div class="flex w-full">
              <div
                class="w-1/2 p-2 font-bold bg-gray-200 border-b border-gray-400 text-center text-xs border-r border-gray-300 flex items-center justify-center"
                :style="{
                  height: week.days.length * timePointHeight + 'px',
                }"
              >
                <span class="transform -rotate-90 whitespace-nowrap">{{
                  formatWeekHeader(week.weekStart)
                }}</span>
              </div>
              <div class="w-1/2">
                <div
                  v-for="day in week.days"
                  :key="day.toISOString()"
                  class="day-cell w-full border-b border-gray-100 flex flex-col items-center justify-center"
                  :style="{
                    height: timePointHeight + 'px',
                    minHeight: timePointHeight + 'px',
                  }"
                >
                  <span class="text-xs text-gray-600">{{
                    formatDate(day)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Month view -->
        <div v-else-if="selectedUnit === 'month'" class="time-column">
          <div
            v-for="month in months"
            :key="month.monthStart.toISOString()"
            class="month-group"
          >
            <div class="flex w-full">
              <div
                class="w-1/2 p-2 font-bold bg-gray-200 border-b border-gray-400 text-center text-xs border-r border-gray-300 flex items-center justify-center"
                :style="{
                  height: month.days.length * timePointHeight + 'px',
                }"
              >
                <span class="transform -rotate-90 whitespace-nowrap">{{
                  formatMonthHeader(month.monthStart)
                }}</span>
              </div>
              <div class="w-1/2">
                <div
                  v-for="day in month.days"
                  :key="day.toISOString()"
                  class="day-cell w-full border-b border-gray-100 flex flex-col items-center justify-center"
                  :style="{
                    height: timePointHeight + 'px',
                    minHeight: timePointHeight + 'px',
                  }"
                >
                  <span class="text-xs text-gray-600">{{
                    formatDate(day)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Phase columns -->
      <div class="flex flex-1">
        <div
          v-for="phase in phases"
          :key="phase.id"
          class="phase-column border-r border-gray-100 relative"
          :style="{ width: phaseWidth + 'px' }"
        >
          <!-- Day cells in phase column -->
          <div
            v-for="day in days"
            :key="day.toISOString()"
            class="phase-day-cell border-b border-gray-100 relative hover:bg-gray-50 transition-colors"
            :style="{
              height: timePointHeight + 'px',
              minHeight: timePointHeight + 'px',
            }"
            :class="{
              'bg-gray-200': isHoliday(day),
              'weekend': isWeekend(day),
              'has-posts': hasPostsOnDay(day)
            }"
          >
            <!-- Post indicators -->
            <div
              v-if="hasPostsOnDay(day)"
              class="post-indicator absolute right-1 top-1/2 transform -translate-y-1/2 z-10"
            >
              <img
                v-if="avatar"
                :src="avatar"
                class="w-5 h-5 rounded-full object-cover border border-white shadow-sm"
                alt="使用者頭像"
              />
              <div
                v-else
                class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium"
                :title="`${postsByDay[day.toDateString()].length} 則貼文`"
              >
                {{ postsByDay[day.toDateString()].length }}
              </div>
            </div>
          </div>

          <!-- Phase timeline -->
          <div
            v-if="getPhaseLineStyle(phase)"
            class="phase-line absolute w-0.5 bg-black opacity-80"
            :style="getPhaseLineStyle(phase)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, shallowRef, watch, nextTick } from 'vue'

const props = defineProps({
  startTime: {
    type: Number,
    required: true,
    validator: (value) => value > 0,
  },
  endTime: {
    type: Number,
    required: true,
    validator: (value) => value > 0,
  },
  phases: {
    type: Array,
    default: () => [],
    validator: (phases) => {
      return Array.isArray(phases) && phases.every(phase =>
        phase &&
        typeof phase.id !== 'undefined' &&
        typeof phase.name === 'string'
      )
    },
  },
  posts: {
    type: Array,
    default: () => [],
    validator: (posts) => {
      return Array.isArray(posts) && posts.every(post =>
        post &&
        typeof post.time !== 'undefined'
      )
    },
  },
  avatar: {
    type: String,
    default: "",
  },
})

const emit = defineEmits(['update:scrollTime', 'phase-click', 'day-click'])

const selectedUnit = ref('week')
const scrollContainer = shallowRef(null)
const currentScrollTime = ref(props.startTime)

const isValidTimeRange = computed(() => {
  return props.startTime > 0 && props.endTime > 0 && props.endTime > props.startTime
})

const totalDuration = computed(() => {
  if (!isValidTimeRange.value) return 0
  return props.endTime - props.startTime
})

const HOLIDAY_DATES = new Map([
  ['1-1', '元旦'],
  ['2-10', '春節'],
  ['2-11', '春節'],
  ['2-12', '春節'],
  ['4-4', '兒童節'],
  ['4-5', '清明節'],
  ['6-10', '端午節'],
  ['9-17', '中秋節'],
  ['10-10', '國慶日'],
])

const leftColumnWidth = computed(() => 'w-20')

const phaseWidth = computed(() =>
  selectedUnit.value === 'week' ? 160 : 140
)

const timePointHeight = computed(() =>
  selectedUnit.value === 'week' ? 40 : 30
)

const days = computed(() => {
  if (!isValidTimeRange.value) return []

  try {
    const startDate = new Date(props.startTime * 1000)
    const endDate = new Date(props.endTime * 1000)

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.warn('Invalid date range provided')
      return []
    }

    const daysArray = []
    const current = new Date(startDate)
    const maxDays = 3650

    let dayCount = 0
    while (current <= endDate && dayCount < maxDays) {
      daysArray.push(new Date(current))
      current.setDate(current.getDate() + 1)
      dayCount++
    }

    if (dayCount >= maxDays) {
      console.warn('Date range too large, truncated to prevent performance issues')
    }

    return daysArray
  } catch (error) {
    console.error('Error generating days array:', error)
    return []
  }
})

const weeks = computed(() => {
  const weekMap = new Map()

  days.value.forEach((day) => {
    const weekStart = new Date(day)
    weekStart.setDate(day.getDate() - day.getDay())
    const key = weekStart.toISOString().split('T')[0]

    if (!weekMap.has(key)) {
      weekMap.set(key, { weekStart, days: [] })
    }
    weekMap.get(key).days.push(day)
  })

  return Array.from(weekMap.values())
})

const months = computed(() => {
  const monthMap = new Map()

  days.value.forEach((day) => {
    const monthKey = `${day.getFullYear()}-${day.getMonth() + 1}`

    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, {
        monthStart: new Date(day.getFullYear(), day.getMonth(), 1),
        days: [],
      })
    }
    monthMap.get(monthKey).days.push(day)
  })

  return Array.from(monthMap.values())
})

const postsByDay = computed(() => {
  const map = new Map()

  try {
    props.posts.forEach((post) => {
      if (!post || typeof post.time === 'undefined') {
        console.warn('Invalid post data:', post)
        return
      }

      const timestamp = parseInt(post.time)
      if (isNaN(timestamp)) {
        console.warn('Invalid post time:', post.time)
        return
      }

      const date = new Date(timestamp * 1000)
      if (isNaN(date.getTime())) {
        console.warn('Invalid date from timestamp:', timestamp)
        return
      }

      const key = date.toDateString()

      if (!map.has(key)) {
        map.set(key, [])
      }
      map.get(key).push(post)
    })
  } catch (error) {
    console.error('Error processing posts:', error)
  }

  return Object.fromEntries(map)
})

const formatDate = (date) => date.getDate()

const formatWeekHeader = (date) => {
  const weekNumber = getWeekNumber(date)
  return `第${weekNumber}週`
}

const formatMonthHeader = (date) => `${date.getMonth() + 1}月`

const getWeekNumber = (date) => {
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  const days = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000))
  return Math.ceil((days + startOfYear.getDay() + 1) / 7)
}

const getDayIndex = (time) => {
  const date = new Date(time * 1000)
  return days.value.findIndex((d) => d.toDateString() === date.toDateString())
}

const getPhaseLineStyle = (phase) => {
  if (!phase.startTime || !phase.endTime) return null

  const startIndex = getDayIndex(phase.startTime)
  const endIndex = getDayIndex(phase.endTime)

  if (startIndex >= 0 && endIndex >= 0 && startIndex <= endIndex) {
    const top = startIndex * timePointHeight.value
    const height = (endIndex - startIndex + 1) * timePointHeight.value

    return {
      top: `${top}px`,
      height: `${height}px`,
      left: '50%',
      transform: 'translateX(-50%)',
    }
  }

  return null
}

const isWeekend = (date) => {
  const dayOfWeek = date.getDay()
  return dayOfWeek === 0 || dayOfWeek === 6
}

const isHoliday = (date) => {
  if (isWeekend(date)) return true

  const month = date.getMonth() + 1
  const day = date.getDate()
  const key = `${month}-${day}`

  return HOLIDAY_DATES.has(key)
}

const hasPostsOnDay = (day) => {
  if (!day || typeof day.toDateString !== 'function') return false

  try {
    const key = day.toDateString()
    return postsByDay.value[key] && postsByDay.value[key].length > 0
  } catch (error) {
    console.warn('Error checking posts for day:', day, error)
    return false
  }
}

const onScroll = () => {
  if (!scrollContainer.value) return

  const scrollTop = scrollContainer.value.scrollTop
  const dayIndex = Math.floor(scrollTop / timePointHeight.value)
  const day = days.value[dayIndex]

  if (day) {
    const newTime = day.getTime() / 1000
    currentScrollTime.value = newTime
    emit('update:scrollTime', newTime)
  }
}

const yearMonthHint = computed(() => {
  const date = new Date(currentScrollTime.value * 1000)
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
  })
})

watch(
  () => props.startTime,
  (newStartTime) => {
    currentScrollTime.value = newStartTime
  }
)
</script>

<style scoped>
.gantt-chart {
  max-width: 100%;
  font-size: 14px;
}

.gantt-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(8px);
}

.gantt-content {
  position: relative;
}

.time-column {
  background-color: #fafafa;
}

.week-group,
.month-group {
  border-bottom: 2px solid #e5e7eb;
}

.day-cell {
  font-size: 12px;
  transition: background-color 0.2s ease;
}

.day-cell:hover {
  background-color: #f3f4f6 !important;
}

.phase-column {
  position: relative;
  min-width: 120px;
}

.phase-day-cell {
  cursor: pointer;
  position: relative;
}

.phase-day-cell.weekend {
  background-color: #f9fafb;
}

.phase-day-cell.has-posts::before {
  content: '';
  position: absolute;
  top: 2px;
  right: 8px;
  width: 4px;
  height: 4px;
  background-color: #3b82f6;
  border-radius: 50%;
}

.post-indicator {
  transition: transform 0.2s ease;
}

.post-indicator:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.phase-line {
  transition: opacity 0.3s ease;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.phase-column:hover .phase-line {
  opacity: 1;
}

@media (max-width: 768px) {
  .gantt-chart {
    font-size: 12px;
  }

  .gantt-header .p-3 {
    padding: 0.5rem;
  }

  .phase-column {
    min-width: 100px;
  }

  .day-cell,
  .phase-day-cell {
    font-size: 11px;
  }
}

@media (max-width: 640px) {
  .gantt-chart {
    font-size: 11px;
  }

  .phase-column {
    min-width: 80px;
  }
}

.select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.transform.-rotate-90 {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>
