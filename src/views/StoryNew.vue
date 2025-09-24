<template>
  <div class="page-background content-scroller">
    <header class="pt-25 w-full z-10 shadow-md bg-header text-rice-500">
      <div class="container mx-auto flex items-center p-4">
        <div class="w-1/3">
          <router-link to="/story" class="back-home-btn">
            <span class="text">
              <CJKSub align="left">
                <template #zh>取消</template>
                <template #en>Cancel</template>
              </CJKSub>
            </span>
            <span class="icon">←</span>
          </router-link>
        </div>
        <div class="w-1/3 text-center">
          <h1 class="text-2xl md:text-3xl font-bold">建立故事</h1>
        </div>
        <div class="w-1/3"></div>
      </div>
    </header>
    <main class="max-w-4xl mx-auto p-4 pt-10 text-[1.2rem]">
      <div class="flex flex-col gap-4">
        <!-- Title Input -->
        <div>
          <label for="title" class="block text-lg font-medium">標題*</label>
          <input
            type="text"
            v-model="story.title"
            id="title"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            :class="{ 'border-red-500': errors.title }"
          />
          <p v-if="errors.title" class="text-red-500 text-sm mt-1">
            請輸入標題
          </p>
        </div>

        <!-- SDGs Input -->
        <div>
          <label class="block text-lg font-medium">SDGs標籤*</label>
          <div class="mt-2 relative">
            <!-- Search Input with Selected Tags -->
            <div class="relative">
              <div
                class="flex flex-wrap items-center gap-1 p-2 border border-gray-300 rounded-md shadow-sm focus-within:ring-indigo-500 focus-within:border-indigo-500 min-h-[2.5rem]"
                :class="{ 'border-red-500': errors.tags }"
              >
                <!-- Selected Tags inside input -->
                <span
                  v-for="sdg in selectedSdgs"
                  :key="sdg.value"
                  class="inline-flex items-center px-2 py-1 text-sm bg-blue-500 text-white rounded-full"
                >
                  <span>{{ sdg.title }}</span>
                  <button
                    @click="removeTag(sdg.value)"
                    class="ml-1 text-white hover:text-gray-200"
                  >
                    ×
                  </button>
                </span>
                <!-- Search Input -->
                <input
                  type="text"
                  v-model="sdgSearch"
                  @focus="showDropdown = true"
                  @input="filterSdgs"
                  class="flex-1 min-w-0 outline-none bg-transparent"
                  :placeholder="
                    selectedSdgs.length === 0 ? '搜尋SDGs標籤...' : ''
                  "
                  ref="searchInput"
                />
              </div>
              <div
                v-if="showDropdown"
                ref="dropdown"
                class="absolute z-10 w-full bg-pblue-200 border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto mt-1"
              >
                <div
                  v-for="sdg in filteredSdgs"
                  :key="sdg.value"
                  @click="selectTag(sdg)"
                  class="px-3 py-2 hover:bg-orange-300 cursor-pointer"
                >
                  {{ sdg.title }}
                </div>
                <div
                  v-if="filteredSdgs.length === 0"
                  class="px-3 py-2 text-gray-500"
                >
                  無匹配的標籤
                </div>
              </div>
            </div>
            <p v-if="errors.tags" class="text-red-500 text-sm mt-1">
              請至少選擇一個SDGs標籤
            </p>
          </div>
        </div>

        <!-- Intro Input -->
        <div>
          <label for="intro" class="block text-lg font-medium">簡介</label>
          <input
            type="text"
            v-model="story.intro"
            id="intro"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <!-- Start Time Input -->
        <div>
          <label for="start_time" class="block text-lg font-medium"
            >時間*</label
          >
          <input
            type="datetime-local"
            v-model="story.start_time"
            id="start_time"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            :class="{ 'border-red-500': errors.start_time }"
          />
          <p v-if="errors.start_time" class="text-red-500 text-sm mt-1">
            請選擇開始時間
          </p>
        </div>

        <!-- End Time Input -->
        <div>
          <!-- <label for="end_time" class="block text-lg font-medium">結束時間</label> -->
          <div class="mt-1 flex gap-2 items-center">
            <button
              @click="addEndTime"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              加入結束時間
            </button>
            <input
              type="datetime-local"
              v-model="story.end_time"
              id="end_time"
              class="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              :class="{ 'border-red-500': errors.end_time }"
              readonly
            />
          </div>
          <p v-if="errors.end_time" class="text-red-500 text-sm mt-1">
            請新增有效的結束時間
          </p>
        </div>

        <!-- Tiptap Editor -->
        <div>
          <label class="block text-lg font-medium">內容*</label>
          <div
            v-if="editor"
            class="border p-2 flex gap-2 rounded-t-md mt-1"
            :class="{ 'border-red-500': errors.content }"
          >
            <button
              @click="editor.chain().focus().toggleTaskList().run()"
              :class="{ 'bg-blue-200': editor.isActive('taskList') }"
              class="p-2 rounded hover:bg-blue-200"
              title="待辦清單"
            >
              <i class="fa-solid fa-list-check"></i>
            </button>
            <button
              @click="editor.chain().focus().toggleBulletList().run()"
              :class="{ 'bg-blue-200': editor.isActive('bulletList') }"
              class="p-2 rounded hover:bg-blue-200"
              title="項目符號清單"
            >
              <i class="fa-solid fa-list-ul"></i>
            </button>
          </div>
          <EditorContent
            :editor="editor"
            class="w-full prose max-w-none border-x border-b p-4 rounded-b-md bg-white text-black"
            :class="{ 'border-red-500': errors.content }"
          />
          <p v-if="errors.content" class="text-red-500 text-sm mt-1">
            請輸入內容
          </p>
        </div>

        <!-- Save Button -->
        <div class="self-end">
          <button
            @click="saveStory"
            class="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            儲存
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onUnmounted, computed, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import CJKSub from "@/components/CJKSub.vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { useClickOutside } from "@/composables/useClickOutside.js";
import { useDateTime } from "@/composables/useDateTime.js";
import sdgsData from "@/data/SDGs_goal.json";
import { useAuth } from "@/stores/auth";
import { apiService } from "@/services/api.js";

const { isAuthenticated, user } = useAuth();
const router = useRouter();
const { formatISO } = useDateTime();

const story = ref({
  title: "",
  img_url: "",
  content: "",
  intro: "",
  start_time: "",
  end_time: "",
  duration_value: 1,
  duration_unit: "day",
  sdgs_goals: [],
  author_id: user.value.id,
  post_type: "general",
});

// Filter out the "All" option and clean titles
const sdgOptions = sdgsData
  .filter((s) => s.value !== 0)
  .map((tag) => ({
    ...tag,
    title: tag.title.replace(/<br\s*\/?>/g, ""),
  }));

const sdgSearch = ref("");
const showDropdown = ref(false);
const dropdown = ref(null);

const filteredSdgs = computed(() => {
  if (!sdgSearch.value)
    return sdgOptions.filter(
      (sdg) => !story.value.sdgs_goals.includes(sdg.value)
    );
  return sdgOptions.filter(
    (sdg) =>
      sdg.title.toLowerCase().includes(sdgSearch.value.toLowerCase()) &&
      !story.value.sdgs_goals.includes(sdg.value)
  );
});

const selectedSdgs = computed(() => {
  return sdgOptions.filter((sdg) => story.value.sdgs_goals.includes(sdg.value));
});

const durationDisplay = computed(() => {
  if (!story.value.start_time || !story.value.duration_value) return "";
  const startDate = new Date(story.value.start_time);
  const endDate = new Date(startDate);

  switch (story.value.duration_unit) {
    case "day":
      endDate.setDate(endDate.getDate() + parseInt(story.value.duration_value));
      break;
    case "week":
      endDate.setDate(
        endDate.getDate() + parseInt(story.value.duration_value) * 7
      );
      break;
    case "month":
      endDate.setMonth(
        endDate.getMonth() + parseInt(story.value.duration_value)
      );
      break;
  }

  return endDate.toLocaleString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
});

const selectTag = (sdg) => {
  if (!story.value.sdgs_goals.includes(sdg.value)) {
    story.value.sdgs_goals.push(sdg.value);
  }
  sdgSearch.value = "";
  showDropdown.value = false;
};

const removeTag = (tagValue) => {
  const index = story.value.sdgs_goals.indexOf(tagValue);
  if (index !== -1) {
    story.value.sdgs_goals.splice(index, 1);
  }
};

const filterSdgs = () => {
  // This is handled by computed
};

const addDuration = (amount, unit) => {
  if (!story.value.start_time) {
    alert("請先選擇開始時間");
    return;
  }

  const startDate = new Date(story.value.start_time);
  const endDate = new Date(startDate);

  switch (unit) {
    case "day":
      endDate.setDate(endDate.getDate() + amount);
      break;
    case "week":
      endDate.setDate(endDate.getDate() + amount * 7);
      break;
    case "month":
      endDate.setMonth(endDate.getMonth() + amount);
      break;
  }

  // Format to datetime-local format (YYYY-MM-DDTHH:MM)
  const year = endDate.getFullYear();
  const month = String(endDate.getMonth() + 1).padStart(2, "0");
  const day = String(endDate.getDate()).padStart(2, "0");
  const hours = String(endDate.getHours()).padStart(2, "0");
  const minutes = String(endDate.getMinutes()).padStart(2, "0");

  story.value.end_time = `${year}-${month}-${day}T${hours}:${minutes}`;
};

const addEndTime = () => {
  if (!story.value.start_time) {
    alert("請先選擇開始時間");
    return;
  }
  // 設置默認結束時間為開始時間 + 1 天
  addDuration(1, "day");
};

const errors = ref({
  title: false,
  tags: false,
  content: false,
  start_time: false,
  end_time: false,
});

const editor = useEditor({
  content: "<p>開始寫下你的故事...</p>",
  extensions: [
    StarterKit,
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
  ],
});

useClickOutside(dropdown, () => {
  showDropdown.value = false;
});

onUnmounted(() => {
  if (editor.value) {
    editor.value.destroy();
  }
});

const saveStory = () => {
  // Reset errors
  errors.value = {
    title: false,
    tags: false,
    content: false,
    start_time: false,
    end_time: false,
  };

  // 1. Set editor content
  if (editor.value) {
    story.value.content = editor.value.getHTML();
  }

  // 2. Validation
  let hasError = false;
  if (!story.value.title.trim()) {
    errors.value.title = true;
    hasError = true;
  }
  if (story.value.sdgs_goals.length === 0) {
    errors.value.tags = true;
    hasError = true;
  }
  if (editor.value.isEmpty) {
    errors.value.content = true;
    hasError = true;
  }
  if (!story.value.start_time) {
    errors.value.start_time = true;
    hasError = true;
  }
  if (story.value.end_time && story.value.start_time) {
    const startDate = new Date(story.value.start_time);
    const endDate = new Date(story.value.end_time);
    if (endDate <= startDate) {
      errors.value.end_time = true;
      hasError = true;
    }
  }

  if (hasError) {
    return;
  }

  // 3. Convert datetime-local to timestamps
  const processedStory = { ...story.value };
  if (processedStory.start_time) {
    processedStory.start_time = formatISO(
      new Date(processedStory.start_time).getTime() / 1000
    );
  }
  if (processedStory.end_time) {
    processedStory.end_time = formatISO(
      new Date(processedStory.end_time).getTime() / 1000
    );
  }

  // 4. "Save" data
  console.log("New Story Data:", processedStory);
  // alert("故事已儲存 (請查看主控台)！");
  apiService.createShowcase(user.value.institution_id, processedStory);

  // 5. Navigate back
  // router.push("/story");
};
</script>

<style scoped>
.prose :deep(ul[data-type="taskList"]) {
  list-style: none;
  padding: 0;
}
.prose :deep(li[data-type="taskItem"]) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.prose :deep(li[data-type="taskItem"]) > label {
  flex: 0 0 auto;
  margin-right: 0.5rem;
}
.prose :deep(li[data-type="taskItem"]) > div {
  flex: 1 1 auto;
}
.prose :deep(li[data-type="taskItem"][data-checked="true"]) {
  text-decoration: line-through;
  color: #888;
}
.prose :deep(ul:not([data-type="taskList"])) {
  list-style-type: disc;
  padding-left: 2rem;
}
.prose :deep(ul:not([data-type="taskList"])) li {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}
</style>
