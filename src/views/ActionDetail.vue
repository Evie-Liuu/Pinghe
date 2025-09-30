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
      <main class="max-w-7xl mx-auto p-6 text-sm">
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
                    formatDateRange(actionData.start_date, actionData.end_date)
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
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-bold text-gray-800">專案甘特圖</h3>
              <!-- <button
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
              >
                <i class="fas fa-plus"></i>
                建立貼文
              </button> -->
              <!-- <router-link v-if="isTeacher" to="/actions/new" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
              >
                <i class="fas fa-plus"></i>
                建立貼文
              </router-link> -->
            </div>
            <GanttChart
              v-if="actionData.start_date && actionData.end_date"
              :start-time="
                Math.floor(new Date(actionData.start_date).getTime() / 1000)
              "
              :end-time="
                Math.floor(new Date(actionData.end_date).getTime() / 1000)
              "
              :phases="ganttPhases"
              :posts="actionData.post || []"
              :avatar="'student.png'"
              @post-click="handlePostClick"
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

    <!-- Post Content Sidebar -->
    <div
      v-if="showPostModal"
      class="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out"
      :class="showPostModal ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="h-full flex flex-col">
        <!-- Header -->
        <div
          class="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50"
        >
          <h3 class="text-lg font-semibold text-gray-800">
            {{ formatModalDate(selectedPostDate) }} 的貼文
          </h3>
          <button
            @click="closePostModal"
            class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="flex-1 overflow-y-auto p-6">
          <div class="space-y-6">
            <div
              v-for="post in selectedPosts"
              :key="post.id"
              class="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 class="font-medium text-gray-800 mb-3 text-base">
                {{ post.title }}
              </h4>
              <p class="text-gray-600 text-sm mb-3 leading-relaxed">
                {{ post.content }}
              </p>
              <div class="flex items-center text-xs text-gray-500">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ formatPostTime(post.time) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-gray-200 bg-gray-50">
          <p class="text-xs text-gray-500 text-center">
            共 {{ selectedPosts.length }} 則貼文
          </p>
        </div>
      </div>
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

// Modal state
const showPostModal = ref(false);
const selectedPostDate = ref(null);
const selectedPosts = ref([]);

// Computed
const actionId = computed(() => parseInt(route.params.id));

// Gantt phases data from action stages
const ganttPhases = computed(() => {
  if (!actionData.value || !actionData.value.stage) return [];
  const colors = ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0"];
  return Object.entries(actionData.value.stage).map(([key, stage], index) => ({
    id: parseInt(key) + 1,
    name: stage.title,
    startTime: Math.floor(new Date(stage.start_date).getTime() / 1000),
    endTime: Math.floor(new Date(stage.end_date).getTime() / 1000),
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

const formatDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) return "無";
  const start = new Date(startDate).toLocaleDateString("zh-TW");
  const end = new Date(endDate).toLocaleDateString("zh-TW");
  return `${start} ~ ${end}`;
};

// Modal methods
const handlePostClick = (data) => {
  selectedPostDate.value = data.date;
  selectedPosts.value = data.posts;
  showPostModal.value = true;
};

const closePostModal = () => {
  showPostModal.value = false;
  selectedPostDate.value = null;
  selectedPosts.value = [];
};

const formatModalDate = (date) => {
  if (!date) return "";
  return date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
};

const formatPostTime = (time) => {
  let date;
  if (typeof time === "string") {
    date = new Date(time);
  } else {
    date = new Date(time * 1000);
  }

  return date.toLocaleTimeString("zh-TW", {
    hour: "2-digit",
    minute: "2-digit",
  });
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
