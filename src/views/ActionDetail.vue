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
        <div v-if="actionData" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Left Sidebar -->
          <div
            class="lg:col-span-1"
            style="display: flex; flex-direction: column; gap: 1.5rem"
          >
            <!-- Action Header Info -->
            <div class="bg-white rounded-xl shadow-lg p-6 sticky top-6">
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

              <div
                class="mb-4"
                style="display: flex; flex-direction: column; gap: 0.75rem"
              >
                <div>
                  <span class="font-semibold text-gray-700 text-sm"
                    >時間：</span
                  >
                  <p class="text-gray-600 text-sm mt-1">
                    {{
                      formatDateRange(actionData.startTime, actionData.endTime)
                    }}
                  </p>
                </div>
                <div>
                  <span class="font-semibold text-gray-700 text-sm"
                    >成員：</span
                  >
                  <p class="text-gray-600 text-sm mt-1">
                    {{ actionData.group }}
                  </p>
                </div>
                <div>
                  <span class="font-semibold text-gray-700 text-sm"
                    >描述：</span
                  >
                  <p class="text-gray-600 text-sm mt-1">
                    {{ actionData.intro || "暫無描述" }}
                  </p>
                </div>
              </div>

              <!-- SDGs Tags -->
              <div class="flex flex-wrap" style="gap: 0.5rem">
                <span
                  v-for="type in actionData.types"
                  :key="type"
                  class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                >
                  {{ getSDGTitle(type) }}
                </span>
              </div>
            </div>

            <!-- Collapsible Progress Timeline -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                @click="isProgressExpanded = !isProgressExpanded"
                class="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
              >
                <div>
                  <h3 class="text-lg font-bold text-gray-800">專案進度</h3>
                  <p class="text-sm text-gray-600">
                    整體進度 {{ actionData.progress }}%
                  </p>
                </div>
                <i
                  class="fas transition-transform duration-300"
                  :class="
                    isProgressExpanded ? 'fa-chevron-up' : 'fa-chevron-down'
                  "
                ></i>
              </button>

              <!-- Collapsible Content -->
              <div
                class="transition-all duration-300 overflow-hidden"
                :class="
                  isProgressExpanded
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                "
              >
                <div class="p-4">
                  <ProgressTimeline
                    :progress="actionData.progress"
                    :compact="true"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Right Content Area -->
          <div class="lg:col-span-2">
            <!-- Posts Section -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-bold text-gray-800">活動動態</h3>
                <button
                  @click="showNewPostModal = true"
                  class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                  style="gap: 0.5rem"
                >
                  <i class="fas fa-plus text-sm"></i>
                  新增貼文
                </button>
              </div>

              <!-- Post List -->
              <div style="display: flex; flex-direction: column; gap: 1rem">
                <PostCard
                  v-for="post in posts"
                  :key="post.id"
                  :post="post"
                  @like="handleLike"
                  @comment="handleComment"
                />
              </div>

              <!-- Empty State -->
              <div
                v-if="posts.length === 0"
                class="text-center py-12 text-gray-500"
              >
                <i class="fas fa-comments text-4xl text-gray-300 mb-4"></i>
                <p class="text-lg mb-2">還沒有任何動態</p>
                <p class="text-sm">成為第一個分享的人吧！</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div v-else class="flex justify-center items-center h-64">
          <div class="text-gray-500">載入中...</div>
        </div>
      </main>
    </div>

    <!-- New Post Modal -->
    <NewPostModal
      v-if="showNewPostModal"
      @close="showNewPostModal = false"
      @submit="handleNewPost"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
import CJKSub from "@/components/CJKSub.vue";
import ProgressTimeline from "@/components/ProgressTimeline.vue";
import PostCard from "@/components/PostCard.vue";
import NewPostModal from "@/components/NewPostModal.vue";
import actionsData from "@/data/Action.json";
import sdgsData from "@/data/SDGs_goal.json";

const route = useRoute();
const handleAppScroll = inject("handleAppScroll");

// Data
const actionData = ref(null);
const posts = ref([]);
const showNewPostModal = ref(false);
const isProgressExpanded = ref(false);

// Computed
const actionId = computed(() => parseInt(route.params.id));

// Methods
const loadActionData = () => {
  actionData.value = actionsData.find((action) => action.id === actionId.value);
  if (!actionData.value) {
    console.error("Action not found");
    return;
  }

  // Load posts for this action (mock data for now)
  loadPosts();
};

const loadPosts = () => {
  // Mock posts data - in real app, this would come from API
  posts.value = [
    {
      id: 1,
      author: "李小明",
      avatar: "",
      content: "今天我們開始進行剩食調查，發現學校餐廳每天都有很多食物被浪費。",
      images: [],
      timestamp: new Date().toISOString(),
      likes: 5,
      comments: [
        {
          id: 1,
          author: "王小華",
          content: "這個問題確實很嚴重",
          timestamp: new Date().toISOString(),
        },
      ],
      isLiked: false,
    },
    {
      id: 2,
      author: "張老師",
      content: "同學們的觀察很仔細，接下來我們要設計解決方案。",
      images: [],
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      likes: 8,
      comments: [],
      isLiked: true,
    },
  ];
};

const formatDateRange = (startTime, endTime) => {
  if (!startTime || !endTime) return "無";
  const start = new Date(startTime * 1000).toLocaleDateString();
  const end = new Date(endTime * 1000).toLocaleDateString();
  return `${start} ~ ${end}`;
};

const getSDGTitle = (typeId) => {
  return sdgsData[typeId]?.title || `SDG ${typeId}`;
};

const handleLike = (postId) => {
  const post = posts.value.find((p) => p.id === postId);
  if (post) {
    if (post.isLiked) {
      post.likes--;
      post.isLiked = false;
    } else {
      post.likes++;
      post.isLiked = true;
    }
  }
};

const handleComment = (postId, comment) => {
  const post = posts.value.find((p) => p.id === postId);
  if (post) {
    post.comments.push({
      id: Date.now(),
      author: "當前用戶", // In real app, get from auth store
      content: comment,
      timestamp: new Date().toISOString(),
    });
  }
};

const handleNewPost = (postData) => {
  const newPost = {
    id: Date.now(),
    author: "當前用戶", // In real app, get from auth store
    avatar: "",
    content: postData.content,
    images: postData.images || [],
    timestamp: new Date().toISOString(),
    likes: 0,
    comments: [],
    isLiked: false,
  };

  posts.value.unshift(newPost);
  showNewPostModal.value = false;
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

/* .back-home-btn {
  @apply flex items-center gap-2 px-4 py-2 rounded-lg transition-colors;
  @apply hover:bg-white/20 text-white;
}

.back-home-btn .icon {
  @apply text-xl;
} */
</style>