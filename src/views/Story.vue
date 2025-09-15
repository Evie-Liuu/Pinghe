<template>
  <div
    class="page-background content-scroller h-screen flex flex-col"
    @scroll="handleAppScroll"
  >
    <header class="relative z-5 pt-25 w-full shadow-md bg-header text-rice-500">
      <div class="container mx-auto flex items-center p-4">
        <div class="w-1/3">
          <router-link to="/sdgs" class="back-home-btn">
            <span class="text">
              <CJKSub align="center">
                <template #zh>回上頁</template>
                <template #en>Return</template>
              </CJKSub>
            </span>
            <span class="icon">←</span>
          </router-link>
        </div>
        <div class="w-1/3 text-center">
          <h1 class="text-2xl md:text-3xl font-bold">故事牆</h1>
        </div>
        <div class="w-1/3 flex items-center justify-end pr-4 gap-2">
          <router-link v-if="isTeacher" to="/story/new" title="建立新故事">
            <div
              class="w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center text-white cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <i class="fa-solid fa-plus font-bold text-pblue-500"></i>
            </div>
          </router-link>
        </div>
      </div>
    </header>
    <main class="p-10 flex flex-col justify-center items-center gap-8">
      <HeaderFilter
        @update:filters="handleFilterUpdate"
        class="flex flex-wrap justify-center items-center gap-4 md:px-50"
      ></HeaderFilter>
      <ImageCarousel
        :images="allFilteredInfos"
        :path="path"
        :initialIndex="initialSlideIndex"
        @edit-story="handleEdit"
        @delete-story="handleDelete"
      />
    </main>

    <!-- Edit Modal -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 text-black"
    >
      <div
        class="bg-white p-6 rounded-md max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      >
        <h2 class="text-xl mb-4">編輯故事</h2>

        <!-- Title Input -->
        <div class="mb-4">
          <label class="block text-lg font-medium mb-2">標題*</label>
          <div class="relative flex flex-wrap items-center">
            <input
              type="text"
              v-model="selectedInfo.title"
              class="w-full p-2 border border-gray-300 rounded-md"
              :class="{ 'border-red-500': errors.title }"
            />
            <div v-if="errors.title" class="absolute right-2 text-red-500">
              <i class="fa-solid fa-circle-exclamation"></i>
            </div>
          </div>
          <p v-if="errors.title" class="text-red-500 text-sm mt-1">
            請輸入標題
          </p>
        </div>

        <!-- Intro Input -->
        <div class="mb-4">
          <label class="block text-lg font-medium mb-2">介紹</label>
          <input
            type="text"
            v-model="selectedInfo.intro"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <!-- Time Input -->
        <div class="mb-4">
          <label class="block text-lg font-medium mb-2">時間</label>
          <input
            type="date"
            :value="
              selectedInfo.time
                ? new Date(selectedInfo.time * 1000).toISOString().split('T')[0]
                : ''
            "
            @input="updateTime"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <!-- SDGs Tags -->
        <div class="mb-4">
          <label class="block text-lg font-medium mb-2">SDGs標籤*</label>
          <div class="relative">
            <div
              class="relative flex flex-wrap items-center gap-1 p-2 border border-gray-300 rounded-md min-h-[2.5rem]"
              :class="{ 'border-red-500': errors.tags }"
            >
              <span
                v-for="sdg in selectedEditSdgs"
                :key="sdg.value"
                class="inline-flex items-center px-2 py-1 text-sm bg-blue-500 text-white rounded-full"
              >
                <span v-html="sdg.title"></span>
                <button
                  @click="removeEditTag(sdg.value)"
                  class="ml-1 text-white hover:text-gray-200"
                >
                  ×
                </button>
              </span>
              <input
                type="text"
                v-model="editSdgSearch"
                @focus="showEditDropdown = true"
                @input="filterEditSdgs"
                class="flex-1 min-w-0 outline-none bg-transparent"
                :placeholder="
                  selectedEditSdgs.length === 0 ? '搜尋SDGs標籤...' : ''
                "
              />
              <div v-if="errors.tags" class="absolute right-2 text-red-500">
                <i class="fa-solid fa-circle-exclamation"></i>
              </div>
            </div>
            <div
              v-if="showEditDropdown"
              ref="editDropdown"
              class="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto mt-1"
            >
              <div
                v-for="sdg in filteredEditSdgs"
                :key="sdg.value"
                @click="selectEditTag(sdg)"
                class="px-3 py-2 hover:bg-orange-300 cursor-pointer"
                v-html="sdg.title"
              ></div>
              <div
                v-if="filteredEditSdgs.length === 0"
                class="px-3 py-2 text-gray-500"
              >
                無匹配的標籤
              </div>
            </div>
            <p v-if="errors.tags" class="text-red-500 text-sm mt-1">
              請至少選擇一個SDGs標籤
            </p>
          </div>
        </div>

        <!-- Image Upload -->
        <div class="mb-4">
          <label class="block text-lg font-medium mb-2">背景圖片</label>
          <input
            type="file"
            @change="handleImageUpload"
            accept="image/*"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
          <p class="text-sm text-gray-500 mt-1">
            選擇新圖片上傳，將替換現有背景圖片。
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end gap-2">
          <button
            @click="closeEditModal"
            class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            取消
          </button>
          <button
            @click="saveEdit"
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, inject, onBeforeMount, watch } from "vue";
import carouselImages from "@/data/Story.json";
import sdgsData from "@/data/SDGs_goal.json";
import CJKSub from "@/components/CJKSub.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import HeaderFilter from "@/components/HeaderFilter.vue";
import { useClickOutside } from "@/composables/useClickOutside.js";
import { useAuth } from "@/stores/auth";

const { isTeacher, user, isAuthenticated, checkAuth } = useAuth();

// 初始檢查
onMounted(() => {
  checkAuth();
  // console.log("Story.vue onMounted - isAuthenticated:", isAuthenticated.value);
  // console.log("Story.vue onMounted - user:", user.value);
  // console.log("Story.vue onMounted - isTeacher:", isTeacher.value);
});

const path = "../assets/images/";

const initialSlideIndex = ref(0);

// onMounted(() => {
onBeforeMount(() => {
  const storedIndex = sessionStorage.getItem("lastStoryIndex");
  console.log("讀取到的 storedIndex:", storedIndex);
  if (storedIndex !== null && storedIndex !== "") {
    const index = parseInt(storedIndex, 10);
    if (!isNaN(index) && index >= 0) {
      initialSlideIndex.value = index;
      console.log("設置初始索引為:", initialSlideIndex.value);
    }
  }
});

const handleAppScroll = inject("handleAppScroll");

const allInfos = ref(carouselImages);

const showEditModal = ref(false);
// const selectedId = ref(null);
// const selectedInfo = computed(() => {
//   return allInfos.value.find((item) => item.id === parseInt(selectedId.value));
// });
const selectedInfo = ref({});
const editStory = ref(null);

const handleEdit = (storyId) => {
  // selectedId.value = storyId;
  selectedInfo.value = allInfos.value.find(
    (item) => item.id === parseInt(storyId.value)
  );
  editStory.value = { ...selectedInfo.value };

  showEditModal.value = true;
};
const handleDelete = (storyId) => {
  if (confirm("確定要刪除這篇故事嗎？此操作無法復原。")) {
    const index = allInfos.value.findIndex((story) => story.id === storyId);
    if (index !== -1) {
      allInfos.value.splice(index, 1);
    }
  }
};

// --- Filter Logic ---
const filters = ref({
  sdgs: [],
  time: "all",
  startDate: "",
  endDate: "",
  keyword: "",
});
const currentPage = ref(1);
const itemsPerPage = 6;

const handleFilterUpdate = (newFilters) => {
  filters.value = newFilters;
  currentPage.value = 1; // Reset page when filters change
};

const allFilteredInfos = computed(() => {
  let result = allInfos.value;

  // Filter by SDGs
  if (filters.value.sdgs.length > 0) {
    result = result.filter(
      (info) =>
        info.types &&
        info.types.some((type) => filters.value.sdgs.includes(type))
    );
  }

  // Filter by time
  if (filters.value.time !== "all") {
    const now = new Date();
    result = result.filter((info) => {
      if (!info.time || String(info.time).trim() === "") return false;
      const infoDate = new Date(Number(info.time) * 1000);

      if (filters.value.time === "day") {
        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);
        return infoDate >= yesterday;
      } else if (filters.value.time === "week") {
        const lastWeek = new Date();
        lastWeek.setDate(now.getDate() - 7);
        return infoDate >= lastWeek;
      } else if (
        filters.value.time === "custom" &&
        filters.value.startDate &&
        filters.value.endDate
      ) {
        const start = new Date(filters.value.startDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(filters.value.endDate);
        end.setHours(23, 59, 59, 999);
        return infoDate >= start && infoDate <= end;
      }
      return true; // Should not happen if time is not 'all', but as a fallback
    });
  }

  // Filter by keyword
  if (filters.value.keyword) {
    result = result.filter((info) =>
      info.title.toLowerCase().includes(filters.value.keyword.toLowerCase())
    );
  }

  return result;
});

// --- Edit Modal Logic ---
const editSdgSearch = ref("");
const showEditDropdown = ref(false);
const editDropdown = ref(null);

const sdgOptions = sdgsData.filter((s) => s.value !== 0);

const selectedEditSdgs = computed(() => {
  return sdgOptions.filter((sdg) => editStory.value.types.includes(sdg.value));
});

const filteredEditSdgs = computed(() => {
  if (!editSdgSearch.value)
    return sdgOptions.filter(
      (sdg) => !editStory.value.types.includes(sdg.value)
    );
  return sdgOptions.filter(
    (sdg) =>
      sdg.title.toLowerCase().includes(editSdgSearch.value.toLowerCase()) &&
      !editStory.value.types.includes(sdg.value)
  );
});

useClickOutside(editDropdown, () => {
  showEditDropdown.value = false;
});

const errors = ref({
  title: false,
  tags: false,
});

const closeEditModal = () => {
  showEditModal.value = false;
};

const saveEdit = () => {
  let hasError = false;
  if (!editStory.value.title.trim()) {
    errors.value.title = true;
    hasError = true;
  }
  if (editStory.value.types.length === 0) {
    errors.value.tags = true;
    hasError = true;
  }
  if (hasError) {
    return;
  }

  selectedInfo.value.title = editStory.value.title;
  selectedInfo.value.intro = editStory.value.intro;
  selectedInfo.value.time = editStory.value.time;
  selectedInfo.value.types = editStory.value.types;
  selectedInfo.value.img_url = editStory.value.img_url;
  showEditModal.value = false;
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    editStory.value.img_url = file.name;
    // In a real app, upload the file to server
  }
};

const updateTime = (event) => {
  const date = new Date(event.target.value);
  editStory.value.time = Math.floor(date.getTime() / 1000);
};

const selectEditTag = (sdg) => {
  if (!editStory.value.types.includes(sdg.value)) {
    editStory.value.types.push(sdg.value);
  }
  editSdgSearch.value = "";
  showEditDropdown.value = false;
};

const removeEditTag = (tagValue) => {
  const index = editStory.value.types.indexOf(tagValue);
  if (index !== -1) {
    editStory.value.types.splice(index, 1);
  }
};
</script>
<style scoped>
</style>