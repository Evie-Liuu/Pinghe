<template>
  <div
    class="gantt-chart border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
  >
    <!-- Header -->
    <div
      class="gantt-header flex bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 relative shadow-sm"
    >
      <!-- Time indicator -->
      <div
        class="absolute top-2 left-10 text-xs text-gray-700 bg-white bg-opacity-90 px-2 py-1 rounded-md shadow-sm z-10 font-medium"
      >
        {{ yearMonthHint }}
      </div>

      <!-- Time axis controls - improved layout -->
      <div
        :class="`${leftColumnWidth} border-r border-gray-200 flex text-gray-700`"
      >
        <!-- Time unit selector -->
        <div
          class="w-1/2 p-2 font-medium text-center text-xs bg-gray-50 border-r border-gray-200 flex flex-col items-center justify-center gap-1"
        >
          <select
            v-model="selectedUnit"
            class="text-xs border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white shadow-sm"
            aria-label="選擇時間單位"
          >
            <option value="week">週</option>
            <option value="month">月</option>
          </select>
          <span class="text-xs text-gray-600 font-normal">時間軸</span>
        </div>
        <!-- Date header -->
        <div
          class="w-1/2 p-2 font-medium text-center text-xs bg-white border-r border-gray-200 flex items-center justify-center text-gray-700"
        >
          日期
        </div>
      </div>

      <!-- Phase headers -->
      <div class="flex flex-1">
        <div
          v-for="(phase, index) in phases"
          :key="phase.id"
          class="flex-1 p-3 font-semibold text-center bg-gradient-to-b from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-200 text-gray-800"
          :class="{
            'border-r border-gray-200': index < phases.length - 1,
          }"
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
      <div :class="`${leftColumnWidth} border-r border-gray-200`">
        <!-- Week view -->
        <div v-if="selectedUnit === 'week'" class="time-column">
          <div
            v-for="week in weeks"
            :key="week.weekStart.toISOString()"
            class="week-group"
          >
            <div class="flex w-full">
              <div
                class="w-1/2 font-semibold bg-gray-100 border-b text-center text-xs border-r border-gray-200 flex items-center justify-center"
                :style="{
                  height: week.days.length * timePointHeight + 'px',
                  minHeight: week.days.length * timePointHeight + 'px',
                }"
              >
                <span
                  class="transform -rotate-90 whitespace-nowrap text-gray-700"
                  >{{ formatWeekHeader(week.weekStart) }}</span
                >
              </div>
              <div class="w-1/2">
                <div
                  v-for="day in week.days"
                  :key="day.toISOString()"
                  class="day-cell w-full flex flex-col items-center justify-center border-b border-gray-200"
                  :style="{
                    height: timePointHeight + 'px',
                    minHeight: timePointHeight + 'px',
                  }"
                >
                  <span class="text-xs text-gray-700 font-medium">{{
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
                class="w-1/2 font-semibold bg-gray-100 border-b border-gray-200 text-center text-xs border-r border-gray-200 flex items-center justify-center"
                :style="{
                  height: month.days.length * timePointHeight + 'px',
                  minHeight: month.days.length * timePointHeight + 'px',
                }"
              >
                <span
                  class="transform -rotate-90 whitespace-nowrap text-gray-700"
                  >{{ formatMonthHeader(month.monthStart) }}</span
                >
              </div>
              <div class="w-1/2">
                <div
                  v-for="day in month.days"
                  :key="day.toISOString()"
                  class="day-cell w-full flex flex-col items-center justify-center border-b border-gray-200"
                  :style="{
                    height: timePointHeight + 'px',
                    minHeight: timePointHeight + 'px',
                  }"
                >
                  <span class="text-xs text-gray-700 font-medium">{{
                    formatDate(day)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Phase columns -->
      <div class="flex flex-1 border-r border-gray-200">
        <div
          v-for="(phase, index) in phases"
          :key="phase.id"
          class="phase-column flex-1 relative"
        >
          <!-- Day cells in phase column -->
          <div
            v-for="day in days"
            :key="day.toISOString()"
            class="phase-day-cell relative hover:bg-blue-50 transition-colors duration-200 border-r border-gray-200"
            :style="{
              height: timePointHeight + 'px',
              minHeight: timePointHeight + 'px',
            }"
            :class="{
              'bg-gray-100': isHoliday(day),
              'bg-gray-50': isWeekend(day),
              'has-posts': hasPostsOnDay(day),
            }"
          >
            <!-- Post indicators -->
            <div
              v-if="hasPostsOnDay(day)"
              class="post-indicator absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
              @click="showPostContent(day)"
            >
              <img
                v-if="avatar"
                :src="getImageUrl(avatar)"
                class="w-6 h-6 rounded-full object-cover border-2 border-white shadow-md hover:scale-110 transition-transform"
                alt="使用者頭像"
              />
              <div
                v-else
                class="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold shadow-md hover:scale-110 transition-transform"
                :title="`${postsByDay[day.toDateString()].length} 則貼文`"
              >
                {{ postsByDay[day.toDateString()].length }}
              </div>
            </div>
          </div>

          <!-- Phase timeline -->
          <div
            v-if="getPhaseLineStyle(phase)"
            class="phase-line absolute w-1 bg-gradient-to-b from-blue-500 to-blue-600 opacity-75 rounded-full"
            :style="getPhaseLineStyle(phase)"
          ></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, shallowRef, watch, nextTick } from "vue";

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
      return (
        Array.isArray(phases) &&
        phases.every(
          (phase) =>
            phase &&
            typeof phase.id !== "undefined" &&
            typeof phase.name === "string"
        )
      );
    },
  },
  posts: {
    type: Array,
    default: () => [],
    validator: (posts) => {
      return (
        Array.isArray(posts) &&
        posts.every((post) =>
          post &&
          typeof post.time !== "undefined" &&
          (typeof post.time === "string" || typeof post.time === "number")
        )
      );
    },
  },
  avatar: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:scrollTime", "phase-click", "day-click", "post-click"]);

const selectedUnit = ref("week");
const scrollContainer = shallowRef(null);
const currentScrollTime = ref(props.startTime);


function getImageUrl(name) {
  if (!name) return "";
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

const isValidTimeRange = computed(() => {
  return (
    props.startTime > 0 && props.endTime > 0 && props.endTime > props.startTime
  );
});

const totalDuration = computed(() => {
  if (!isValidTimeRange.value) return 0;
  return props.endTime - props.startTime;
});

const HOLIDAY_DATES = new Map([
  ["1-1", "元旦"],
  ["2-10", "春節"],
  ["2-11", "春節"],
  ["2-12", "春節"],
  ["4-4", "兒童節"],
  ["4-5", "清明節"],
  ["6-10", "端午節"],
  ["9-17", "中秋節"],
  ["10-10", "國慶日"],
]);

const leftColumnWidth = computed(() => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width < 480) return "w-16";
    if (width < 640) return "w-18";
    if (width < 768) return "w-20";
  }
  return "w-20";
});

const timePointHeight = computed(() => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width < 480) {
      return selectedUnit.value === "week" ? 32 : 24;
    }
    if (width < 768) {
      return selectedUnit.value === "week" ? 36 : 28;
    }
  }
  return selectedUnit.value === "week" ? 42 : 32;
});

const days = computed(() => {
  if (!isValidTimeRange.value) return [];

  try {
    const startDate = new Date(props.startTime * 1000);
    const endDate = new Date(props.endTime * 1000);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.warn("Invalid date range provided");
      return [];
    }

    const daysArray = [];
    const current = new Date(startDate);
    const maxDays = 3650;

    let dayCount = 0;
    while (current <= endDate && dayCount < maxDays) {
      daysArray.push(new Date(current));
      current.setDate(current.getDate() + 1);
      dayCount++;
    }

    if (dayCount >= maxDays) {
      console.warn(
        "Date range too large, truncated to prevent performance issues"
      );
    }

    return daysArray;
  } catch (error) {
    console.error("Error generating days array:", error);
    return [];
  }
});

const weeks = computed(() => {
  const weekMap = new Map();

  days.value.forEach((day) => {
    const weekStart = new Date(day);
    weekStart.setDate(day.getDate() - day.getDay());
    const key = weekStart.toISOString().split("T")[0];

    if (!weekMap.has(key)) {
      weekMap.set(key, { weekStart, days: [] });
    }
    weekMap.get(key).days.push(day);
  });

  return Array.from(weekMap.values());
});

const months = computed(() => {
  const monthMap = new Map();

  days.value.forEach((day) => {
    const monthKey = `${day.getFullYear()}-${day.getMonth() + 1}`;

    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, {
        monthStart: new Date(day.getFullYear(), day.getMonth(), 1),
        days: [],
      });
    }
    monthMap.get(monthKey).days.push(day);
  });

  return Array.from(monthMap.values());
});

const postsByDay = computed(() => {
  const map = new Map();

  try {
    props.posts.forEach((post) => {
      if (!post || typeof post.time === "undefined") {
        console.warn("Invalid post data:", post);
        return;
      }

      // Handle both ISO 8601 string format and Unix timestamp
      let date;
      if (typeof post.time === "string") {
        // ISO 8601 format like "2025-04-10T10:00:00"
        date = new Date(post.time);
      } else {
        // Unix timestamp
        const timestamp = parseInt(post.time);
        if (isNaN(timestamp)) {
          console.warn("Invalid post time:", post.time);
          return;
        }
        date = new Date(timestamp * 1000);
      }

      if (isNaN(date.getTime())) {
        console.warn("Invalid date from post time:", post.time);
        return;
      }

      const key = date.toDateString();

      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(post);
    });
  } catch (error) {
    console.error("Error processing posts:", error);
  }

  return Object.fromEntries(map);
});

const formatDate = (date) => date.getDate();

const formatWeekHeader = (date) => {
  const weekNumber = getWeekNumber(date);
  return `第${weekNumber}週`;
};

const formatMonthHeader = (date) => `${date.getMonth() + 1}月`;

const getWeekNumber = (date) => {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + startOfYear.getDay() + 1) / 7);
};

const getDayIndex = (time) => {
  const date = new Date(time * 1000);
  return days.value.findIndex((d) => d.toDateString() === date.toDateString());
};

const getPhaseLineStyle = (phase) => {
  if (!phase.startTime || !phase.endTime) return null;

  const startIndex = getDayIndex(phase.startTime);
  const endIndex = getDayIndex(phase.endTime);

  if (startIndex >= 0 && endIndex >= 0 && startIndex <= endIndex) {
    const top = startIndex * timePointHeight.value;
    const height = (endIndex - startIndex + 1) * timePointHeight.value;

    return {
      top: `${top}px`,
      height: `${height}px`,
      left: "50%",
      transform: "translateX(-50%)",
    };
  }

  return null;
};

const isWeekend = (date) => {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

const isHoliday = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const key = `${month}-${day}`;

  return HOLIDAY_DATES.has(key);
};

const hasPostsOnDay = (day) => {
  if (!day || typeof day.toDateString !== "function") return false;

  try {
    const key = day.toDateString();
    return postsByDay.value[key] && postsByDay.value[key].length > 0;
  } catch (error) {
    console.warn("Error checking posts for day:", day, error);
    return false;
  }
};

const onScroll = () => {
  if (!scrollContainer.value) return;

  const scrollTop = scrollContainer.value.scrollTop;
  const dayIndex = Math.floor(scrollTop / timePointHeight.value);
  const day = days.value[dayIndex];

  if (day) {
    const newTime = day.getTime() / 1000;
    currentScrollTime.value = newTime;
    emit("update:scrollTime", newTime);
  }
};

const yearMonthHint = computed(() => {
  const date = new Date(currentScrollTime.value * 1000);
  return date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
  });
});

// Post click handler
const showPostContent = (day) => {
  const key = day.toDateString();
  const postsForDay = postsByDay.value[key] || [];

  if (postsForDay.length > 0) {
    emit('post-click', {
      date: day,
      posts: postsForDay
    });
  }
};

watch(
  () => props.startTime,
  (newStartTime) => {
    currentScrollTime.value = newStartTime;
  }
);
</script>

<style scoped>
.gantt-chart {
  max-width: 100%;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.025em;
}

.gantt-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.gantt-content {
  position: relative;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
}

.time-column {
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
}

.week-group,
.month-group {
  /* Remove border-bottom to prevent extra spacing */
}

.day-cell {
  font-size: 12px;
  transition: all 0.2s ease;
  border-bottom: 1px solid #e2e8f0;
  box-sizing: border-box;
  background: white;
}

.day-cell:hover {
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0) !important;
  transform: scale(1.02);
}

.phase-column {
  position: relative;
  min-width: 120px;
  flex: 1 1 0%;
}

.phase-day-cell {
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid #e2e8f0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Weekend styling */
.phase-day-cell.bg-gray-50 {
  background: #f9fafb !important;
}

/* Holiday styling */
.phase-day-cell.bg-gray-100 {
  background: #f3f4f6 !important;
}

/* Posts indicator styling */
.phase-day-cell.has-posts {
  background: linear-gradient(135deg, #fef3c7, #fde68a) !important;
}

.phase-day-cell:hover {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe) !important;
  transform: scale(1.01);
  box-shadow: inset 0 1px 3px rgba(59, 130, 246, 0.1);
}

/* Specific hover states for different day types */
.phase-day-cell.bg-gray-50:hover {
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1) !important;
}

.phase-day-cell.bg-gray-100:hover {
  background: linear-gradient(135deg, #d1d5db, #9ca3af) !important;
}

.phase-day-cell.has-posts:hover {
  background: linear-gradient(135deg, #fcd34d, #f59e0b) !important;
}

/* 確保格線完全對齊 - 統一 box-sizing */
.gantt-chart *,
.gantt-chart *::before,
.gantt-chart *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 重置並確保精確佈局 */
.gantt-chart {
  contain: layout style;
  width: 100%;
  overflow-x: auto;
}

/* 確保容器不會被壓縮 */
.gantt-content,
.gantt-header {
  min-width: fit-content;
}

.gantt-content {
  border-top: 1px solid #e5e7eb;
}

/* 統一所有邊框顏色和寬度 */
.gantt-chart .border-r {
  border-right-color: #e2e8f0 !important;
  border-right-width: 1px !important;
}

.gantt-chart .border-b {
  border-bottom-color: #e2e8f0 !important;
  border-bottom-width: 1px !important;
}

/* 確保所有網格元素具有相同的高度和對齊方式 */
.gantt-header > div,
.gantt-header > div > div {
  box-sizing: border-box;
}

.time-column .week-group > div,
.time-column .month-group > div {
  box-sizing: border-box;
}

/* 移除所有元素的預設 margin 和 padding */
.day-cell,
.phase-day-cell {
  margin: 0;
  padding: 2px;
  box-sizing: border-box;
}

/* 改善內容間距 */
.gantt-header > div {
  padding: 12px 8px;
}

.time-column .week-group > div > div:last-child,
.time-column .month-group > div > div:last-child {
  padding: 0px 4px;
}

/* 確保週和月分組的底邊框與日期格線一致 */
.week-group:last-child .day-cell:last-child,
.month-group:last-child .day-cell:last-child {
  border-bottom: 1px solid #e2e8f0;
}

/* 改善整體間距和對比 */
.gantt-chart {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.gantt-header {
  min-height: 3rem;
}

.phase-column {
  min-width: 130px;
  background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);
}

/* 確保頭部區域的邊框與內容對齊 */
.gantt-header {
  border-bottom-color: #e5e7eb;
}

/* 統一格線顏色 */
.gantt-chart * {
  border-color: #e2e8f0;
}

/* 確保內容區域的左側時間欄與標題欄完全對齊 */
.time-column .week-group > div > div:first-child,
.time-column .month-group > div > div:first-child {
  background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
  border-right: 1px solid #e2e8f0;
}

.time-column .week-group > div > div:last-child,
.time-column .month-group > div > div:last-child {
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
}

/* 確保階段列對齊 */
.phase-column {
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
  box-sizing: border-box;
}

/* 確保flexbox佈局精確性 */
.gantt-header > div:last-child,
.gantt-content > div:last-child {
  flex-shrink: 0;
}

.gantt-header > div:last-child > div,
.gantt-content > div:last-child > div {
  flex-shrink: 0;
}

/* 避免過度伸縮 */
.flex-1 {
  flex: 1 1 0%;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.phase-day-cell.has-posts::before {
  content: "";
  position: absolute;
  top: 3px;
  right: 10px;
  width: 5px;
  height: 5px;
  background: radial-gradient(circle, #3b82f6, #1e40af);
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(59, 130, 246, 0.4);
}

.post-indicator {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.post-indicator:hover {
  transform: translate(-50%, -50%) scale(1.15);
  filter: brightness(1.1) saturate(1.1);
}

.post-indicator img:hover,
.post-indicator div:hover {
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.phase-line {
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.phase-column:hover .phase-line {
  opacity: 0.9;
  transform: translateX(-50%) scale(1.1);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

@media (max-width: 1024px) {
  .gantt-chart {
    font-size: 13px;
  }

  .phase-column {
    min-width: 110px;
  }
}

@media (max-width: 768px) {
  .gantt-chart {
    font-size: 12px;
  }

  .gantt-header > div {
    padding: 0.5rem;
  }

  .phase-column {
    min-width: 90px;
  }

  .day-cell,
  .phase-day-cell {
    font-size: 11px;
  }

  .post-indicator img,
  .post-indicator div {
    width: 1.25rem;
    height: 1.25rem;
  }

  .time-column .w-1\/2 {
    padding: 0.375rem;
  }
}

@media (max-width: 640px) {
  .gantt-chart {
    font-size: 11px;
  }

  .phase-column {
    min-width: 70px;
  }

  .gantt-header {
    flex-direction: column;
  }

  .gantt-header > div:first-child {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgb(229 231 235);
  }

  .post-indicator {
    right: 0.25rem;
  }

  .post-indicator img,
  .post-indicator div {
    width: 1rem;
    height: 1rem;
    font-size: 0.625rem;
  }
}

@media (max-width: 480px) {
  .gantt-chart {
    font-size: 10px;
  }

  .phase-column {
    min-width: 60px;
  }

  .time-column .transform.-rotate-90 {
    font-size: 10px;
  }

  .day-cell span,
  .phase-day-cell span {
    font-size: 10px;
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
