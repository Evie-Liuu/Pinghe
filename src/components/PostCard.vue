<template>
  <div class="bg-white rounded-lg shadow-md p-6 mb-4">
    <!-- Post Header -->
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
        {{ post.author.charAt(0) }}
      </div>
      <div class="flex-1">
        <h4 class="font-semibold text-gray-800">{{ post.author }}</h4>
        <p class="text-sm text-gray-500">{{ formatTimestamp(post.timestamp) }}</p>
      </div>
      <div class="relative">
        <button
          @click="showMenu = !showMenu"
          class="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
        >
          <i class="fas fa-ellipsis-h"></i>
        </button>
        <!-- Dropdown menu -->
        <div
          v-if="showMenu"
          v-click-outside="() => showMenu = false"
          class="absolute right-0 top-full mt-1 w-32 bg-white border rounded-lg shadow-lg z-10"
        >
          <button class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">編輯</button>
          <button class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-red-600">刪除</button>
        </div>
      </div>
    </div>

    <!-- Post Content -->
    <div class="mb-4">
      <p class="text-gray-800 leading-relaxed">{{ post.content }}</p>
    </div>

    <!-- Post Images -->
    <div v-if="post.images && post.images.length > 0" class="mb-4">
      <div
        class="grid"
        :class="getImageGridClass(post.images.length)"
        style="gap: 0.5rem;"
      >
        <img
          v-for="(image, index) in post.images"
          :key="index"
          :src="image"
          :alt="`Image ${index + 1}`"
          class="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
          :class="getImageClass(index, post.images.length)"
          @click="openImageModal(image)"
        />
      </div>
    </div>

    <!-- Post Stats -->
    <div class="flex justify-between items-center py-3 border-t border-b border-gray-100">
      <div class="flex items-center" style="gap: 1rem;">
        <span class="text-sm text-gray-500">
          <i class="fas fa-heart text-red-500 mr-1"></i>
          {{ post.likes }} 人按讚
        </span>
        <span class="text-sm text-gray-500">
          <i class="fas fa-comment text-blue-500 mr-1"></i>
          {{ post.comments.length }} 則留言
        </span>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-around py-2">
      <button
        @click="toggleLike"
        class="flex items-center px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex-1 justify-center"
        :class="post.isLiked ? 'text-red-500' : 'text-gray-600'"
        style="gap: 0.5rem;"
      >
        <i class="fas fa-heart" :class="post.isLiked ? 'text-red-500' : 'text-gray-400'"></i>
        <span class="text-sm font-medium">按讚</span>
      </button>
      <button
        @click="toggleComments"
        class="flex items-center px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex-1 justify-center text-gray-600"
        style="gap: 0.5rem;"
      >
        <i class="fas fa-comment text-gray-400"></i>
        <span class="text-sm font-medium">留言</span>
      </button>
      <button
        class="flex items-center px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex-1 justify-center text-gray-600"
        style="gap: 0.5rem;"
      >
        <i class="fas fa-share text-gray-400"></i>
        <span class="text-sm font-medium">分享</span>
      </button>
    </div>

    <!-- Comments Section -->
    <div v-if="showComments" class="mt-4" style="display: flex; flex-direction: column; gap: 0.75rem;">
      <!-- Existing Comments -->
      <div
        v-for="comment in post.comments"
        :key="comment.id"
        class="flex"
        style="gap: 0.75rem;"
      >
        <div class="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {{ comment.author.charAt(0) }}
        </div>
        <div class="flex-1">
          <div class="bg-gray-100 rounded-lg px-3 py-2">
            <p class="font-semibold text-sm text-gray-800">{{ comment.author }}</p>
            <p class="text-gray-700 text-sm">{{ comment.content }}</p>
          </div>
          <p class="text-xs text-gray-500 mt-1">{{ formatTimestamp(comment.timestamp) }}</p>
        </div>
      </div>

      <!-- New Comment Input -->
      <div class="flex" style="gap: 0.75rem;">
        <div class="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
          我
        </div>
        <div class="flex-1">
          <div class="flex">
            <input
              v-model="newComment"
              type="text"
              placeholder="寫下您的留言..."
              class="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
              @keypress.enter="submitComment"
            />
            <button
              @click="submitComment"
              class="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
              :disabled="!newComment.trim()"
            >
              發送
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      @click="closeImageModal"
    >
      <div class="max-w-4xl max-h-full p-4">
        <img
          :src="selectedImage"
          alt="Enlarged image"
          class="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
      <button
        @click="closeImageModal"
        class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['like', 'comment'])

// Local state
const showComments = ref(false)
const showMenu = ref(false)
const newComment = ref('')
const selectedImage = ref(null)

// Methods
const toggleLike = () => {
  emit('like', props.post.id)
}

const toggleComments = () => {
  showComments.value = !showComments.value
}

const submitComment = () => {
  if (newComment.value.trim()) {
    emit('comment', props.post.id, newComment.value.trim())
    newComment.value = ''
  }
}

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now - date

  // Less than 1 minute
  if (diff < 60000) {
    return '剛剛'
  }
  // Less than 1 hour
  if (diff < 3600000) {
    return `${Math.floor(diff / 60000)} 分鐘前`
  }
  // Less than 1 day
  if (diff < 86400000) {
    return `${Math.floor(diff / 3600000)} 小時前`
  }
  // Less than 1 week
  if (diff < 604800000) {
    return `${Math.floor(diff / 86400000)} 天前`
  }
  // Older than 1 week
  return date.toLocaleDateString('zh-TW')
}

const getImageGridClass = (count) => {
  switch (count) {
    case 1:
      return 'grid-cols-1'
    case 2:
      return 'grid-cols-2'
    case 3:
      return 'grid-cols-2'
    case 4:
      return 'grid-cols-2'
    default:
      return 'grid-cols-3'
  }
}

const getImageClass = (index, total) => {
  const baseClass = 'w-full h-48'

  if (total === 3 && index === 0) {
    return `${baseClass} row-span-2 h-96`
  }

  return baseClass
}

const openImageModal = (image) => {
  selectedImage.value = image
}

const closeImageModal = () => {
  selectedImage.value = null
}

// Click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = function(event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>

<style scoped>
/* Ensure FontAwesome icons display correctly */
.fas {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
</style>