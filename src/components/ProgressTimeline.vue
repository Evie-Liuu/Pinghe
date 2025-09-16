<template>
  <div :class="compact ? '' : 'bg-white rounded-xl shadow-lg p-6'">
    <h3 v-if="!compact" class="text-xl font-bold text-gray-800 mb-6">專案進度</h3>

    <!-- Progress Bar -->
    <div :class="compact ? 'mb-4' : 'mb-8'">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-medium text-gray-700">整體進度</span>
        <span class="text-sm font-medium text-gray-700">{{ progress }}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full" :class="compact ? 'h-2' : 'h-3'">
        <div
          class="rounded-full transition-all duration-500"
          :class="[progressColor, compact ? 'h-2' : 'h-3']"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>

    <!-- Timeline Stages -->
    <div class="relative">
      <!-- Timeline Line -->
      <div class="absolute top-0 bottom-0 w-0.5 bg-gray-200" :class="compact ? 'left-4' : 'left-6'"></div>

      <!-- Stage Items -->
      <div :style="`display: flex; flex-direction: column; gap: ${compact ? '1rem' : '1.5rem'};`">
        <div
          v-for="(stage, index) in stages"
          :key="stage.id"
          class="relative flex items-start"
        >
          <!-- Stage Icon -->
          <div
            class="relative z-10 flex items-center justify-center rounded-full border-4"
            :class="[getStageClasses(stage.status), compact ? 'w-8 h-8' : 'w-12 h-12']"
          >
            <i
              :class="[stage.icon, compact ? 'text-sm' : 'text-lg']"
            ></i>
          </div>

          <!-- Stage Content -->
          <div :class="compact ? 'ml-4' : 'ml-6'" class="flex-1">
            <div class="bg-gray-50 rounded-lg" :class="compact ? 'p-3' : 'p-4'">
              <div class="flex justify-between items-start mb-2">
                <h4 :class="compact ? 'text-sm font-semibold' : 'text-lg font-semibold'" class="text-gray-800">{{ stage.title }}</h4>
                <span
                  class="px-2 py-1 text-xs rounded-full"
                  :class="getStatusBadgeClasses(stage.status)"
                >
                  {{ getStatusText(stage.status) }}
                </span>
              </div>

              <p v-if="!compact" class="text-gray-600 text-sm mb-3">{{ stage.description }}</p>

              <!-- Stage Timeline -->
              <div v-if="!compact" class="text-xs text-gray-500">
                <div class="flex justify-between">
                  <span>預計開始：{{ formatDate(stage.startDate) }}</span>
                  <span>預計完成：{{ formatDate(stage.endDate) }}</span>
                </div>
                <div v-if="stage.actualStartDate" class="mt-1">
                  實際開始：{{ formatDate(stage.actualStartDate) }}
                  <span v-if="stage.actualEndDate" class="ml-4">
                    實際完成：{{ formatDate(stage.actualEndDate) }}
                  </span>
                </div>
              </div>

              <!-- Stage Progress -->
              <div v-if="stage.status === 'in-progress'" :class="compact ? 'mt-2' : 'mt-3'">
                <div class="flex justify-between text-xs text-gray-600 mb-1">
                  <span>階段進度</span>
                  <span>{{ stage.progress }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="h-2 bg-blue-500 rounded-full transition-all duration-300"
                    :style="{ width: stage.progress + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  progress: {
    type: Number,
    default: 0
  },
  compact: {
    type: Boolean,
    default: false
  }
})

// Mock timeline stages - in real app, this could be passed as props or fetched from API
const stages = [
  {
    id: 1,
    title: '行動表決',
    description: '確定行動主題，進行小組討論和投票決定',
    icon: 'fas fa-vote-yea',
    status: 'completed',
    startDate: '2025-01-15',
    endDate: '2025-01-20',
    actualStartDate: '2025-01-15',
    actualEndDate: '2025-01-18',
    progress: 100
  },
  {
    id: 2,
    title: '行動規劃',
    description: '制定詳細的行動計畫，分配任務和資源',
    icon: 'fas fa-clipboard-list',
    status: 'completed',
    startDate: '2025-01-21',
    endDate: '2025-01-30',
    actualStartDate: '2025-01-19',
    actualEndDate: '2025-01-28',
    progress: 100
  },
  {
    id: 3,
    title: '行動紀錄',
    description: '執行行動計畫，記錄過程和收集數據',
    icon: 'fas fa-camera',
    status: 'in-progress',
    startDate: '2025-02-01',
    endDate: '2025-03-15',
    actualStartDate: '2025-01-30',
    progress: 65
  },
  {
    id: 4,
    title: '成果評估',
    description: '分析行動成果，評估影響力和效果',
    icon: 'fas fa-chart-line',
    status: 'pending',
    startDate: '2025-03-16',
    endDate: '2025-03-31',
    progress: 0
  },
  {
    id: 5,
    title: '成效分享',
    description: '整理成果報告，對外分享經驗和學習',
    icon: 'fas fa-share-alt',
    status: 'pending',
    startDate: '2025-04-01',
    endDate: '2025-04-15',
    progress: 0
  }
]

const progressColor = computed(() => {
  if (props.progress < 40) return 'bg-red-500'
  if (props.progress < 70) return 'bg-yellow-400'
  return 'bg-green-500'
})

const getStageClasses = (status) => {
  const baseClasses = 'border-4'
  switch (status) {
    case 'completed':
      return `${baseClasses} bg-green-500 border-green-500 text-white`
    case 'in-progress':
      return `${baseClasses} bg-blue-500 border-blue-500 text-white`
    case 'pending':
      return `${baseClasses} bg-gray-200 border-gray-300 text-gray-500`
    default:
      return `${baseClasses} bg-gray-200 border-gray-300 text-gray-500`
  }
}

const getStatusBadgeClasses = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'in-progress':
      return 'bg-blue-100 text-blue-800'
    case 'pending':
      return 'bg-gray-100 text-gray-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getStatusText = (status) => {
  switch (status) {
    case 'completed':
      return '已完成'
    case 'in-progress':
      return '進行中'
    case 'pending':
      return '待開始'
    default:
      return '未知'
  }
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('zh-TW')
}
</script>

<style scoped>
/* Custom styles for FontAwesome icons */
.fas {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
</style>