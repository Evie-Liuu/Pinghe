<template>
  <div class="page-background content-scroller" @scroll="handleAppScroll">
    <header class="pt-25 w-full z-10 shadow-md bg-header text-rice-500">
      <div class="container mx-auto flex items-center p-4">
        <div class="w-1/3">
          <router-link to="/story" class="back-home-btn">
            <span class="text">
              <CJKSub align="center">
                <template #zh>回上頁</template>
                <template #en>Return</template>
              </CJKSub>
            </span>
            <span class="icon">←</span>
          </router-link>
        </div>
        <div class="w-1/3 text-center"></div>
        <div class="w-1/3"></div>
      </div>
    </header>
    <main class="max-w-4xl mx-auto p-4 pt-10 text-[1.2rem]">
      <section
        class="animate-fade-in-up flex flex-col gap-8"
        v-if="selectedInfo"
      >
        <!-- Article Header -->
        <div
          :style="bgImageStyle"
          class="relative bg-cover bg-center bg-opacity-70 p-7 rounded-md md:h-80 grid grid-cols-1 content-end overflow-hidden"
        >
          <div class="absolute inset-0 bg-black/40"></div>
          <button
            v-if="isTeacher"
            @click="openEditModal"
            class="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 z-20"
          >
            編輯
          </button>
          <div class="relative z-10 text-white">
            <h1 class="text-4xl font-bold mb-4">{{ selectedInfo.title }}</h1>
            <p class="mb-2 text-lg">{{ selectedInfo.intro }}</p>
            <small>{{
              new Date(selectedInfo.time * 1000).toLocaleDateString()
            }}</small>
            <div class="flex flex-wrap gap-2 mt-2">
              <span
                v-for="t in selectedInfo.types"
                :key="t"
                class="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800"
              >
                {{ sdgsData[t].title }}
              </span>
            </div>
          </div>
        </div>

        <!-- Article Body -->
        <section class="flex flex-col gap-4 items-start">
          <!-- Control Buttons -->
          <div class="self-end flex gap-2">
            <button
              v-if="!isEditing && isTeacher"
              @click="enterEditMode"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              編輯內容
            </button>
            <button
              v-if="isEditing && isTeacher"
              @click="saveContent"
              class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              儲存
            </button>
            <button
              v-if="isEditing && isTeacher"
              @click="cancelEdit"
              class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              取消
            </button>
            <button
              @click="share"
              class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              分享
            </button>
          </div>

          <!-- Content Display / Editor -->
          <div
            v-if="!isEditing"
            class="prose max-w-none"
            v-html="selectedInfo.content"
          ></div>
          <div v-else class="w-full">
            <!-- Toolbar -->
            <div v-if="editor" class="border p-2 flex gap-2 rounded-t-md">
              <button
                @click="editor.chain().focus().toggleTaskList().run()"
                :class="{
                  'bg-blue-200': editor.isActive('taskList'),
                }"
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
              <!-- Add other Tiptap controls here -->
            </div>
            <!-- Editor -->
            <EditorContent
              :editor="editor"
              class="w-full prose max-w-none border-x border-b p-4 rounded-b-md"
            />
          </div>
        </section>

        <!-- Comments Section -->
        <section class="my-20">
          <h2 class="text-xl mb-4">留言板</h2>
          <!-- Comments List -->
          <div class="flex flex-col gap-4 mb-6 text-black">
            <div
              v-for="comment in selectedInfo.comment"
              :key="comment.uuid"
              :class="[
                'p-4 rounded-md',
                comment.author_uuid === currentUser.author_uuid
                  ? 'bg-green-100'
                  : 'bg-gray-100',
              ]"
            >
              <p class="font-bold">{{ comment.author }}</p>
              <p class="text-gray-800">{{ comment.text }}</p>
              <div class="flex items-center justify-end mt-2">
                <button
                  @click="toggleLike(comment.uuid)"
                  class="text-gray-500 hover:text-red-500"
                >
                  <i
                    :class="[
                      'fa-heart',
                      comment.liked ? 'fa-solid text-red-500' : 'fa-regular',
                    ]"
                  ></i>
                  <span class="ml-1">{{ comment.likes }}</span>
                </button>
              </div>
            </div>
          </div>
          <!-- Post Comment Form -->
          <div>
            <textarea
              v-model="newComment"
              class="w-full p-2 border rounded-md"
              rows="3"
              placeholder="在這裡寫下你的留言..."
            ></textarea>
            <button
              @click="addComment"
              class="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              發布留言
            </button>
          </div>
        </section>
      </section>
      <div v-else>
        <p>找不到這篇故事。</p>
      </div>
    </main>

    <!-- Edit Modal -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black"
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
              editStory.time
                ? new Date(editStory.time * 1000).toISOString().split('T')[0]
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
import { ref, computed, inject, onUnmounted } from "vue";
import infos from "@/data/Story.json";
import sdgsData from "@/data/SDGs_goal.json";
import CJKSub from "@/components/CJKSub.vue";
import { useClickOutside } from "@/composables/useClickOutside.js";
import { useAuth } from "@/stores/auth";

import { EditorContent, useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";

const props = defineProps({ id: String });
const handleAppScroll = inject("handleAppScroll");
const { isTeacher } = useAuth();

const selectedInfo = ref(infos.find((item) => item.id === parseInt(props.id)));
// jsonData
const isEditing = ref(false);

const bgImageStyle = computed(() => {
  if (!selectedInfo.value) return {};
  const img = selectedInfo.value.img_url || "Background_2.png";
  try {
    const imageUrl = new URL(`../assets/images/${img}`, import.meta.url).href;
    return { backgroundImage: `url(${imageUrl})` };
  } catch (e) {
    const fallbackUrl = new URL(
      "../assets/images/Background_2.png",
      import.meta.url
    ).href;
    return { backgroundImage: `url(${fallbackUrl})` };
  }
});

const editor = useEditor({
  content: "",
  extensions: [
    StarterKit,
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
  ],
});

onUnmounted(() => {
  if (editor.value) {
    editor.value.destroy();
  }
});

const enterEditMode = () => {
  if (editor.value) {
    editor.value.commands.setContent(selectedInfo.value.content || "");
  }
  isEditing.value = true;
};

const saveContent = () => {
  if (editor.value) {
    selectedInfo.value.content = editor.value.getHTML();
  }
  isEditing.value = false;
  console.log("內容已儲存:", editor.value.getJSON());
  alert("內容已儲存！");
};

const cancelEdit = () => {
  if (editor.value) {
    editor.value.commands.setContent(selectedInfo.value.content || "");
  }
  isEditing.value = false;
};

const share = () => {
  if (navigator.share) {
    navigator
      .share({
        title: selectedInfo.value.title,
        text: selectedInfo.value.intro,
        url: window.location.href,
      })
      .catch(console.error);
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("連結已複製到剪貼簿！");
  }
};

// --- Comment Section Logic ---
const currentUser = { author_uuid: "0", author: "我" }; // Simulate current user
const newComment = ref("");
const addComment = () => {
  if (newComment.value.trim() === "") return;
  selectedInfo.value.comment.unshift({
    uuid: Date.now(),
    author_uuid: currentUser.author_uuid,
    author: currentUser.author,
    time: Date.now(),
    delete_time: null,
    text: newComment.value,
    likes: 0,
    liked: false,
  });
  newComment.value = "";
};
const toggleLike = (commentId) => {
  const comment = selectedInfo.value.comment.find((c) => c.uuid === commentId);
  if (comment) {
    if (comment.liked) {
      comment.likes--;
    } else {
      comment.likes++;
    }
    comment.liked = !comment.liked;
  }
};

// --- Edit Modal Logic ---
const showEditModal = ref(false);
const editStory = ref({ ...selectedInfo.value });
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

const openEditModal = () => {
  editStory.value = { ...selectedInfo.value };
  showEditModal.value = true;
};

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

const filterEditSdgs = () => {
  // handled by computed
};
</script>

<style scoped>
/* Scoped styles for Tiptap task lists */
.prose :deep(ul[data-type="taskList"]) {
  list-style: none;
  padding: 0;
}

.prose :deep(li[data-type="taskItem"]) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.prose :deep(li[data-type="taskItem"] > label) {
  flex: 0 0 auto;
  margin-right: 0.5rem;
}

.prose :deep(li[data-type="taskItem"] > div) {
  flex: 1 1 auto;
}

.prose :deep(li[data-type="taskItem"][data-checked="true"]) {
  text-decoration: line-through;
  color: #888;
}

/* Scoped styles for Tiptap bullet lists */
.prose :deep(ul:not([data-type="taskList"])) {
  list-style-type: disc;
  padding-left: 2rem;
}

.prose :deep(ul:not([data-type="taskList"])) li {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}
</style>
