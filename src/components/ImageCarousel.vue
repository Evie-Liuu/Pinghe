<template>
  <div class="relative w-full max-w-6xl mx-auto">
    <Swiper
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
        @click="goToStory(img.id)"
      >
        <img
          :src="getImageUrl(props.path + (img.img_url || 'lightBulb.png'))"
          :alt="`slide-${index}`"
          class="rounded-2xl transition-all duration-300 ease-in-out w-full h-full object-cover"
        />
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-300/70 text-center rounded-lg px-2"
        >
          <p>{{ img.title }}</p>
          <p class="text-left text-sm">{{ img.intro }}</p>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- 左右箭頭 -->
    <div class="swiper-button-prev !text-gray-600" @click="goPrev"></div>
    <div class="swiper-button-next !text-gray-600" @click="goNext"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

const router = useRouter();
const goToStory = (id) => {
  router.push({ name: "story-detail", params: { id } });
};

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const swiperOptions = {
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1280: { slidesPerView: 4, spaceBetween: 20 },
  },
};

let swiperInstance = null;
const currentSlidesPerView = ref(1);

const onSwiper = (swiper) => {
  swiperInstance = swiper;
  currentSlidesPerView.value = swiper.params.slidesPerView;
};

const goNext = () => {
  if (swiperInstance) swiperInstance.slideNext();
};

const goPrev = () => {
  if (swiperInstance) swiperInstance.slidePrev();
};

function getImageUrl(name) {
  if (!name) return "";
  return new URL(`${name}`, import.meta.url).href;
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
