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
                {{ typeTags[t].title }}
              </span>
            </div>
          </div>
        </div>

        <!-- Article Body -->
        <section class="flex flex-col gap-4 items-start">
          <!-- Control Buttons -->
          <div class="self-end flex gap-2">
            <button
              v-if="!isEditing"
              @click="enterEditMode"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              編輯
            </button>
            <button
              v-if="isEditing"
              @click="saveContent"
              class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              儲存
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
  </div>
</template>

<script setup>
import { ref, computed, inject, onUnmounted } from "vue";
import infos from "@/data/Story.json";
import typeTags from "@/data/SDGs_goal.json";
import CJKSub from "@/components/CJKSub.vue";

import { EditorContent, useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";

const props = defineProps({ id: String });
const handleAppScroll = inject("handleAppScroll");

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
  // In a real app, you'd send this to a server.
  // alert("內容已儲存(僅限於此頁面)!");
  console.log(editor.value.getJSON());
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
