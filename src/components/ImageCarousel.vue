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
        :key="img.id"
        class="relative"
        v-slot="{ isActive }"
      >
        <div @click="handleSlideClick(isActive, img.id, index)" class="h-full">
          <img
            :src="getImageUrl(img.img_url || 'lightBulb.png')"
            :alt="`slide-${index}`"
            class="rounded-2xl overflow-hidden transition-all duration-300 ease-in-out w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-300/70 text-center rounded-lg px-2"
          >
            <p>{{ img.title }}</p>
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
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

const router = useRouter();

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
  swiper.on('slideChange', () => {
    const currentIndex = swiper.realIndex;
    sessionStorage.setItem("lastStoryIndex", currentIndex);
    console.log("滑動到索引:", currentIndex);
  });
};

// Watch for the swiper instance and the initialIndex prop to be ready
watch(() => [swiperInstance.value, props.initialIndex], ([swiper, index]) => {
  if (swiper && index != null) {
    swiper.slideToLoop(index, 0);
  }
}, { immediate: true });

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
  // This pattern is recognizable by Vite during the build process.
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
