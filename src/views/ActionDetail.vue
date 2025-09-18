<template>
  <div class="page-background content-scroller" @scroll="handleAppScroll">
    <div>
      <!-- Header -->
      <header
        class="relative z-5 pt-25 w-full shadow-md bg-header text-rice-500"
      >
        <div class="container mx-auto flex items-center p-4">
          <div class="w-1/3">
            <router-link :to="{ name: 'Actions' }" class="back-home-btn">
              <span class="text">
                <CJKSub align="center">
                  <template #zh>返回</template>
                  <template #en>Back</template>
                </CJKSub>
              </span>
              <span class="icon">←</span>
            </router-link>
          </div>
          <div class="w-1/3 text-center">
            <h1 class="text-2xl md:text-3xl font-bold">行動詳情</h1>
          </div>
          <div class="w-1/3"></div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto p-6">
        <div v-if="actionData" class="space-y-6">
          <!-- Action Info -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex items-center mb-4" style="gap: 1rem">
              <img
                src="@/assets/images/lightBulb2.png"
                alt="Action Image"
                class="w-16 h-16 rounded-lg object-cover"
              />
              <div class="flex-1">
                <h2 class="text-xl font-bold text-gray-800 mb-1">
                  {{ actionData.title }}
                </h2>
                <p class="text-gray-600 text-sm">{{ actionData.group }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <span class="font-semibold text-gray-700 text-sm">時間：</span>
                <p class="text-gray-600 text-sm mt-1">
                  {{
                    formatDateRange(actionData.startTime, actionData.endTime)
                  }}
                </p>
              </div>
              <div>
                <span class="font-semibold text-gray-700 text-sm">進度：</span>
                <p class="text-gray-600 text-sm mt-1">
                  {{ actionData.progress }}%
                </p>
              </div>
              <div>
                <span class="font-semibold text-gray-700 text-sm">描述：</span>
                <p class="text-gray-600 text-sm mt-1">
                  {{ actionData.intro || "暫無描述" }}
                </p>
              </div>
            </div>
          </div>

          <!-- Gantt Chart -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-6">專案甘特圖</h3>
            <GanttChart
              v-if="actionData.startTime && actionData.endTime"
              :start-time="parseInt(actionData.startTime)"
              :end-time="parseInt(actionData.endTime)"
              :phases="ganttPhases"
              :posts="actionData.post || []"
              :avatar="'student.png'"
            />
            <div v-else class="text-center py-12 text-gray-500">
              <i class="fas fa-chart-bar text-4xl text-gray-300 mb-4"></i>
              <p class="text-lg mb-2">時間資訊不完整</p>
              <p class="text-sm">無法顯示甘特圖</p>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div v-else class="flex justify-center items-center h-64">
          <div class="text-gray-500">載入中...</div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
import CJKSub from "@/components/CJKSub.vue";
import GanttChart from "@/components/GanttChart.vue";
import actionsData from "@/data/Action.json";

const route = useRoute();
const handleAppScroll = inject("handleAppScroll");

// Data
const actionData = ref(null);

// Computed
const actionId = computed(() => parseInt(route.params.id));

// Gantt phases data from action stages
const ganttPhases = computed(() => {
  if (!actionData.value || !actionData.value.stage) return [];
  const colors = ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0"];
  return Object.entries(actionData.value.stage).map(([key, stage], index) => ({
    id: parseInt(key) + 1,
    name: stage.title,
    startTime: parseInt(stage.startTime),
    endTime: parseInt(stage.endTime),
    color: colors[index % colors.length],
  }));
});

// Methods
const loadActionData = () => {
  actionData.value = actionsData.find((action) => action.id === actionId.value);
  if (!actionData.value) {
    console.error("Action not found");
    return;
  }
};

const formatDateRange = (startTime, endTime) => {
  if (!startTime || !endTime) return "無";
  const start = new Date(startTime * 1000).toLocaleDateString("zh-TW");
  const end = new Date(endTime * 1000).toLocaleDateString("zh-TW");
  return `${start} ~ ${end}`;
};

// Lifecycle
onMounted(() => {
  loadActionData();
});
</script>

<style scoped>
.page-background {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>
