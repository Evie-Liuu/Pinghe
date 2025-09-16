<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden">
      <!-- Modal Header -->
      <div class="flex justify-between items-center p-6 border-b border-gray-200">
        <h3 class="text-xl font-bold text-gray-800">新增貼文</h3>
        <button
          @click="$emit('close')"
          class="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
        >
          <i class="fas fa-times text-lg"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 max-h-[calc(90vh-140px)] overflow-y-auto">
        <!-- User Info -->
        <div class="flex items-center mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
            我
          </div>
          <div>
            <p class="font-semibold text-gray-800">當前用戶</p>
            <p class="text-sm text-gray-500">發表到行動追蹤</p>
          </div>
        </div>

        <!-- Content Input -->
        <div class="mb-4">
          <textarea
            v-model="postContent"
            placeholder="分享您的行動進度、心得或遇到的挑戰..."
            class="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
            maxlength="500"
          ></textarea>
          <div class="text-right text-sm text-gray-500 mt-1">
            {{ postContent.length }}/500
          </div>
        </div>

        <!-- Image Upload -->
        <div class="mb-4">
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              ref="fileInput"
              type="file"
              multiple
              accept="image/*"
              @change="handleFileSelect"
              class="hidden"
            />

            <div v-if="selectedImages.length === 0">
              <i class="fas fa-camera text-3xl text-gray-400 mb-2"></i>
              <p class="text-gray-600 mb-2">新增相片</p>
              <button
                @click="$refs.fileInput.click()"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                選擇檔案
              </button>
            </div>

            <!-- Image Preview -->
            <div v-else style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div class="grid grid-cols-2" style="gap: 0.75rem;">
                <div
                  v-for="(image, index) in selectedImages"
                  :key="index"
                  class="relative group"
                >
                  <img
                    :src="image.preview"
                    :alt="`Preview ${index + 1}`"
                    class="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    @click="removeImage(index)"
                    class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <i class="fas fa-times text-xs"></i>
                  </button>
                </div>
              </div>
              <button
                @click="$refs.fileInput.click()"
                class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                新增更多圖片
              </button>
            </div>
          </div>
        </div>

        <!-- Post Options -->
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <!-- Mood/Feeling -->
          <div class="flex items-center" style="gap: 0.75rem;">
            <i class="fas fa-smile text-yellow-500"></i>
            <select
              v-model="selectedMood"
              class="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">選擇心情（可選）</option>
              <option value="excited">興奮</option>
              <option value="happy">開心</option>
              <option value="satisfied">滿意</option>
              <option value="thoughtful">深思</option>
              <option value="concerned">擔心</option>
              <option value="determined">堅定</option>
            </select>
          </div>

          <!-- Privacy Settings -->
          <div class="flex items-center" style="gap: 0.75rem;">
            <i class="fas fa-globe text-blue-500"></i>
            <select
              v-model="privacySetting"
              class="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="public">公開 - 所有人都可以看到</option>
              <option value="team">僅限團隊成員</option>
              <option value="teachers">僅限老師查看</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="flex justify-end p-6 border-t border-gray-200" style="gap: 0.75rem;">
        <button
          @click="$emit('close')"
          class="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          取消
        </button>
        <button
          @click="submitPost"
          :disabled="!postContent.trim() || isSubmitting"
          class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          <span v-if="isSubmitting">發布中...</span>
          <span v-else>發布</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'submit'])

// Form data
const postContent = ref('')
const selectedImages = ref([])
const selectedMood = ref('')
const privacySetting = ref('public')
const isSubmitting = ref(false)

// Methods
const handleFileSelect = (event) => {
  const files = Array.from(event.target.files)

  files.forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        selectedImages.value.push({
          file: file,
          preview: e.target.result
        })
      }
      reader.readAsDataURL(file)
    }
  })

  // Clear input to allow selecting the same file again
  event.target.value = ''
}

const removeImage = (index) => {
  selectedImages.value.splice(index, 1)
}

const submitPost = async () => {
  if (!postContent.value.trim()) return

  isSubmitting.value = true

  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const postData = {
      content: postContent.value.trim(),
      images: selectedImages.value.map(img => img.preview), // In real app, upload to server first
      mood: selectedMood.value,
      privacy: privacySetting.value,
      timestamp: new Date().toISOString()
    }

    emit('submit', postData)

    // Reset form
    postContent.value = ''
    selectedImages.value = []
    selectedMood.value = ''
    privacySetting.value = 'public'

  } catch (error) {
    console.error('Error submitting post:', error)
    alert('發布失敗，請重試')
  } finally {
    isSubmitting.value = false
  }
}

// Handle ESC key to close modal
const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

// Add event listener when component mounts
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  // Focus on textarea when modal opens
  setTimeout(() => {
    const textarea = document.querySelector('textarea')
    if (textarea) {
      textarea.focus()
    }
  }, 100)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Ensure FontAwesome icons display correctly */
.fas {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
</style>