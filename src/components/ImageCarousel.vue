<template>
  <div class="relative w-full mx-auto md:mt-15">
    <Swiper
      :initial-slide="props.initialIndex"
      :centered-slides="true"
      :space-between="20"
      :loop="props.images.length > currentSlidesPerView"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      class="mySwiper h-96"
      @swiper="onSwiper"
    >
      <SwiperSlide
        v-for="(img, index) in props.images"
        :key="img.post_id"
        class="relative"
        v-slot="{ isActive }"
      >
        <div
          @click="handleSlideClick(isActive, img.post_id, index)"
          class="h-full cursor-pointer"
        >
          <!-- Label -->
          <div class="absolute top-2 left-2 z-20">
            <div class="flex flex-wrap gap-2 mt-2">
              <span
                v-for="t in img.sdgs_goals"
                :key="t"
                class="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800"
              >
                {{ sdgsData[t].title.replace(/<br\s*\/?>/gi, "") }}
              </span>
            </div>
          </div>
          <!-- Kebab Menu -->
          <div v-if="isTeacher" class="absolute top-2 right-2 z-20">
            <button
              @click.stop="toggleMenu(img.post_id)"
              class="text-white bg-black/30 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/50"
            >
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <!-- Dropdown -->
            <div
              v-if="isMenuOpen === img.post_id"
              ref="menuDropdown"
              class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg text-black ring-1 ring-black ring-opacity-5"
            >
              <a
                @click.stop="editStory(img.post_id)"
                class="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >編輯</a
              >
              <a
                @click.stop="deleteStory(img.post_id)"
                class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                >刪除</a
              >
            </div>
          </div>

          <img
            :src="getImageUrl(img.img_url || 'lightBulb.png')"
            :alt="`slide-${index}`"
            class="rounded-2xl overflow-hidden transition-all duration-300 ease-in-out w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-300/70 text-center rounded-lg px-2"
          >
            <p>{{ img.title }}</p>
            <small class="text-xs">{{
              formatDate(formatTimestamp(img.start_time))
            }}</small>
            <p class="text-sm text-justify leading-relaxed">
              {{ img.intro }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- 左右箭頭 -->
    <div class="swiper-button-prev !text-gray-600" @click="goPrev"></div>
    <div class="swiper-button-next !text-gray-600" @click="goNext"></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import sdgsData from "@/data/SDGs_goal.json";

import { useRouter } from "vue-router";
import { useClickOutside } from "@/composables/useClickOutside.js";
import { useDateFormat } from "@/composables/useDateFormat.js";
import { useAuth } from "@/stores/auth";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

const router = useRouter();
const { formatDate, formatISO, formatTimestamp } = useDateFormat();
const { isTeacher, user, isAuthenticated, checkAuth } = useAuth();

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  path: {
    type: String,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["edit-story", "delete-story"]);

const isMenuOpen = ref(null); // Holds the ID of the open menu
const menuDropdown = ref(null);

const toggleMenu = (storyId) => {
  isMenuOpen.value = isMenuOpen.value === storyId ? null : storyId;
};

useClickOutside(menuDropdown, () => {
  isMenuOpen.value = null;
});

const editStory = (storyId) => {
  isMenuOpen.value = null; // Close menu
  emit("edit-story", storyId);
};

const deleteStory = (storyId) => {
  isMenuOpen.value = null; // Close menu
  emit("delete-story", storyId);
};

const swiperOptions = {
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1280: { slidesPerView: 4, spaceBetween: 20 },
  },
};

const swiperInstance = ref(null);
const currentSlidesPerView = ref(1);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  currentSlidesPerView.value = swiper.params.slidesPerView;

  // 監聽滑動事件，實時更新位置
  swiper.on("slideChange", () => {
    const currentIndex = swiper.realIndex;
    sessionStorage.setItem("lastStoryIndex", currentIndex);
    console.log("滑動到索引:", currentIndex);
  });
};

watch(
  () => [swiperInstance.value, props.initialIndex],
  ([swiper, index]) => {
    if (swiper && index != null) {
      swiper.slideToLoop(index, 0);
    }
  },
  { immediate: true }
);

const goToStory = (id) => {
  if (swiperInstance.value) {
    const currentIndex = swiperInstance.value.realIndex;
    sessionStorage.setItem("lastStoryIndex", currentIndex);
    console.log("保存卡片索引:", currentIndex, "故事ID:", id);
  }
  router.push({ name: "story-detail", params: { id } });
};

const handleSlideClick = (isActive, id, index) => {
  if (isActive) {
    goToStory(id);
  } else {
    if (swiperInstance.value) {
      swiperInstance.value.slideToLoop(swiperInstance.value.clickedIndex);
    }
  }
};

const goNext = () => {
  if (swiperInstance.value) swiperInstance.value.slideNext();
};

const goPrev = () => {
  if (swiperInstance.value) swiperInstance.value.slidePrev();
};

function getImageUrl(name) {
  if (!name) return "";
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}
</script>

<style scoped>
/* 基本縮放動畫 */
.mySwiper .swiper-slide {
  transform: scale(0.8);
  opacity: 0.6;
  transition: all 0.3s ease-in-out;
}

.mySwiper .swiper-slide-active {
  transform: scale(1);
  opacity: 1;
}

.mySwiper .swiper-slide-prev,
.mySwiper .swiper-slide-next {
  transform: scale(0.9);
  opacity: 0.85;
}
</style>

