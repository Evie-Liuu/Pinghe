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
      <TrainTrack></TrainTrack>
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
              v-model="editStory.title"
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
            v-model="editStory.intro"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <!-- Time Input -->
        <div class="mb-4">
          <label class="block text-lg font-medium mb-2">時間</label>
          <input
            type="date"
            :value="
              editStory.start_time
                ? formatDate(formatTimestamp(editStory.start_time), '-')
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

          <!-- Drag and Drop Upload Area -->
          <div
            ref="dropZone"
            @click="openFileSelector"
            @dragover.prevent="handleDragOver"
            @dragleave.prevent="handleDragLeave"
            @drop.prevent="handleDrop"
            class="relative border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all duration-200"
            :class="{
              'border-blue-500 bg-blue-50': isDragging || isUploadingImage,
              'border-gray-300 bg-gray-50 hover:bg-gray-100':
                !isDragging && !isUploadingImage,
              'cursor-not-allowed opacity-50': isUploadingImage,
            }"
          >
            <!-- Hidden file input -->
            <input
              ref="fileInput"
              type="file"
              @change="handleImageUpload"
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
              class="hidden"
              :disabled="isUploadingImage"
            />

            <!-- Current image preview (if exists) -->
            <div
              v-if="editStory.img_url && !isUploadingImage"
              class="text-center"
            >
              <div
                class="mx-auto mb-3 w-24 h-24 border border-gray-300 rounded-lg overflow-hidden"
              >
                <img
                  :src="
                    editStory.img_url.startsWith('blob:')
                      ? editStory.img_url
                      : `./src/assets/images/${editStory.img_url}`
                  "
                  :alt="editStory.title || '故事圖片'"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
              </div>
              <p class="text-sm text-gray-600 mb-2">點擊或拖曳新圖片來替換</p>
              <p class="text-xs text-gray-500">
                支援 JPG、PNG、GIF、WebP，最大 5MB
              </p>
            </div>

            <!-- Upload area (when no image or uploading) -->
            <div v-else class="text-center">
              <div v-if="isUploadingImage" class="text-blue-600">
                <i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i>
                <p class="text-lg">正在上傳圖片...</p>
                <p class="text-sm">請稍等片刻</p>
              </div>
              <div v-else>
                <div
                  class="mx-auto mb-3 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <i class="fa-solid fa-image text-gray-400 text-xl"></i>
                </div>
                <p class="text-lg font-medium text-gray-700 mb-1">
                  <span v-if="isDragging">放開以上傳圖片</span>
                  <span v-else>點擊選擇圖片或拖曳到此處</span>
                </p>
                <p class="text-sm text-gray-500">
                  支援 JPG、PNG、GIF、WebP 格式，大小不超過 1MB
                </p>
              </div>
            </div>
          </div>
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
import TrainTrack from "@/components/TrainTrack.vue";
import { useClickOutside } from "@/composables/useClickOutside.js";
import { useDateFormat } from "@/composables/useDateFormat.js";
import { useAuth } from "@/stores/auth";
import { apiService } from "@/services/api.js";

const { isAuthenticated, user, isTeacher } = useAuth();
const { formatDate, formatISO, formatTimestamp } = useDateFormat();

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

onMounted(async () => {
  try {
    let res = await apiService.getShowcases(user.value.institution_id);
    console.log(res);
    // allInfos.value = res.items
    allInfos.value = [...carouselImages, ...res.items];
    console.log(allInfos.value);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
});

const showEditModal = ref(false);
const selectedInfo = ref(null);
const editStory = ref({
  sdgs_goals: [],
  title: "",
  intro: "",
  start_time: null,
  img_url: "",
});
console.log(formatISO(formatTimestamp("2025-10-05T09:00:00") / 1000));

const handleEdit = (storyId) => {
  const story = allInfos.value.find(
    (item) => item.post_id === parseInt(storyId)
  );

  console.log(story);

  if (story) {
    selectedInfo.value = story;
    editStory.value = {
      ...story,
      sdgs_goals: [...(story.sdgs_goals || [])],
      title: story.title || "",
      intro: story.intro || "",
      start_time: story.start_time || null,
      img_url: story.img_url || "",
    };
  }

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
        info.sdgs_goals &&
        info.sdgs_goals.some((type) => filters.value.sdgs.includes(type))
    );
  }

  // Filter by time
  if (filters.value.time !== "all") {
    const now = new Date();
    result = result.filter((info) => {
      if (!info.start_time || String(info.start_time).trim() === "")
        return false;
      const infoDate = formatTimestamp(info.start_time);

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
  if (!editStory.value || !editStory.value.sdgs_goals) return [];
  return sdgOptions.filter((sdg) =>
    editStory.value.sdgs_goals.includes(sdg.value)
  );
});

const filteredEditSdgs = computed(() => {
  if (!editStory.value || !editStory.value.sdgs_goals) return sdgOptions;

  if (!editSdgSearch.value)
    return sdgOptions.filter(
      (sdg) => !editStory.value.sdgs_goals.includes(sdg.value)
    );
  return sdgOptions.filter(
    (sdg) =>
      sdg.title.toLowerCase().includes(editSdgSearch.value.toLowerCase()) &&
      !editStory.value.sdgs_goals.includes(sdg.value)
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
  // Clean up any object URLs to prevent memory leaks
  if (
    editStory.value &&
    editStory.value.img_url &&
    editStory.value.img_url.startsWith("blob:")
  ) {
    URL.revokeObjectURL(editStory.value.img_url);
  }

  // Reset states
  showEditModal.value = false;
  isDragging.value = false;
  isUploadingImage.value = false;
  errors.value.title = false;
  errors.value.tags = false;

  // Reset editStory to default state
  editStory.value = {
    sdgs_goals: [],
    title: "",
    intro: "",
    time: null,
    img_url: "",
  };
};

const saveEdit = async () => {
  let hasError = false;
  errors.value.title = false;
  errors.value.tags = false;

  if (
    !editStory.value ||
    !editStory.value.title ||
    !editStory.value.title.trim()
  ) {
    errors.value.title = true;
    hasError = true;
  }
  if (
    !editStory.value ||
    !editStory.value.sdgs_goals ||
    editStory.value.sdgs_goals.length === 0
  ) {
    errors.value.tags = true;
    hasError = true;
  }
  if (hasError) {
    return;
  }

  // If there's a pending file upload, try to upload it now
  if (editStory.value._pendingFile) {
    try {
      // const result = await apiService.uploadImage(
      //   editStory.value._pendingFile,
      //   "story"
      // );
      // if (result && result.url) {
      //   editStory.value.img_url = result.url;
      //   delete editStory.value._pendingFile;
      // }
    } catch (error) {
      console.warn("Failed to upload pending file during save:", error);
      // Continue with local URL - user was already warned
    }
  }

  if (selectedInfo.value && editStory.value) {
    selectedInfo.value.title = editStory.value.title;
    selectedInfo.value.intro = editStory.value.intro;
    selectedInfo.value.start_time = editStory.value.start_time;
    selectedInfo.value.sdgs_goals = editStory.value.sdgs_goals;
    selectedInfo.value.img_url = editStory.value.img_url;

    // TODO: Save to server API when available
    // try {
    //   await apiService.updateArticle(selectedInfo.value.id, selectedInfo.value);
    //   console.log('Story updated on server');
    // } catch (error) {
    //   console.warn('Failed to update story on server:', error);
    //   alert('故事已在本地更新，但無法同步到服務器。');
    // }
  }

  showEditModal.value = false;
};

// Add loading state for image upload
const isUploadingImage = ref(false);
const isDragging = ref(false);
const dropZone = ref(null);
const fileInput = ref(null);

const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    await processFileUpload(file);
    // Clear the input to allow selecting the same file again
    event.target.value = "";
  }
};

const updateTime = (event) => {
  if (editStory.value) {
    const date = new Date(event.target.value);
    editStory.value.time = Math.floor(date.getTime() / 1000);
  }
};

const selectEditTag = (sdg) => {
  if (
    editStory.value &&
    editStory.value.sdgs_goals &&
    !editStory.value.sdgs_goals.includes(sdg.value)
  ) {
    editStory.value.sdgs_goals.push(sdg.value);
  }
  editSdgSearch.value = "";
  showEditDropdown.value = false;
};

const removeEditTag = (tagValue) => {
  if (editStory.value && editStory.value.sdgs_goals) {
    const index = editStory.value.sdgs_goals.indexOf(tagValue);
    if (index !== -1) {
      editStory.value.sdgs_goals.splice(index, 1);
    }
  }
};

// Handle image loading errors
const handleImageError = (event) => {
  console.warn("Image failed to load:", event.target.src);
  event.target.style.display = "none";
};

// Drag and drop handlers
const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (!isUploadingImage.value) {
    isDragging.value = true;
    // Change cursor to show drop is allowed
    event.dataTransfer.dropEffect = "copy";
  }
};

const handleDragLeave = (event) => {
  event.preventDefault();
  event.stopPropagation();
  // Only set to false if we're leaving the drop zone entirely
  if (!dropZone.value.contains(event.relatedTarget)) {
    isDragging.value = false;
  }
};

const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();
  isDragging.value = false;

  if (isUploadingImage.value) {
    return;
  }

  const files = event.dataTransfer.files;
  if (files.length === 0) {
    alert("沒有檢測到文件，請重試");
    return;
  }

  if (files.length > 1) {
    alert("一次只能上傳一個圖片文件");
    return;
  }

  const file = files[0];
  processFileUpload(file);
};

const openFileSelector = () => {
  if (!isUploadingImage.value && fileInput.value) {
    fileInput.value.click();
  }
};

// Extract file processing logic for reuse
const processFileUpload = async (file) => {
  if (!file || !editStory.value) {
    return;
  }
  return;
  // Validate file using API service
  const validationErrors = apiService.validateImageFile(file);
  if (validationErrors.length > 0) {
    alert(`文件驗證失敗:\n${validationErrors.join("\n")}`);
    return;
  }

  isUploadingImage.value = true;

  try {
    // Try to upload to server first
    const result = await apiService.uploadImage(file, "story");

    editStory.value.img_url = result.url;
    console.log("Image uploaded successfully:", result.url);
    alert("圖片上傳成功！");
  } catch (error) {
    console.warn("Server upload failed, using local file:", error);

    // Fallback: Create a local object URL for preview
    const localUrl = URL.createObjectURL(file);
    editStory.value.img_url = localUrl;

    // Store the file for potential later upload
    editStory.value._pendingFile = file;

    console.log("Using local file preview:", localUrl);
    alert("暫時無法連接到服務器，將使用本地預覽。保存時可能需要重新上傳圖片。");
  } finally {
    isUploadingImage.value = false;
  }
};
</script>
<style scoped>
</style>
