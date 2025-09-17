<template>
  <div class="page-train-track hidden lg:block">
    <img
      src="@/assets/images/Train_Long_Full.png"
      :class="['page-loader', { 'animate-train': isAnimating }]"
      class="absolute top-0 left-0 w-full h-full object-cover object-center select-none"
      alt="Train"
      @error="onImageError"
      @load="onImageLoad"
    />
    <!-- Fallback visual train if image fails to load -->
    <div class="fallback-train" v-if="imageError">🚂</div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const imageError = ref(false);
const isAnimating = ref(false);
let animationTimer = null;

const onImageError = () => {
  console.log("Train image failed to load");
  imageError.value = true;
};

const onImageLoad = () => {
  console.log("Train image loaded successfully");
  imageError.value = false;
};

const startAnimation = () => {
  isAnimating.value = true;
  // 動畫持續15秒後停止
  setTimeout(() => {
    isAnimating.value = false;
  }, 15000);
};

onMounted(() => {
  // 頁面加載後5秒開始第一次動畫
  setTimeout(() => {
    startAnimation();
  }, 5000);

  // 每30秒播放一次動畫
  animationTimer = setInterval(() => {
    startAnimation();
  }, 30000);
});

onUnmounted(() => {
  if (animationTimer) {
    clearInterval(animationTimer);
  }
});
</script>
<style scoped>
.page-train-track {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: -15;
}

.page-loader {
  position: absolute;
  left: -700px;
  /* bottom: 20vh; */
  /* transform: translateY(50%); */
  /* width: 180px; */
  /* Make train larger and more visible */
  z-index: 10;
}

.animate-train {
  animation: trainTravel 15s linear;
}

/* @media (max-width: 768px) {
  .page-loader {
    bottom: 18vh;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .page-loader {
    bottom: 20vh;
  }
}

@media (min-width: 1025px) {
  .page-loader {
    bottom: 15.2vh;
  }
} */

@keyframes trainTravel {
  0% {
    left: -700px;
    /* Start completely off-screen from left */
    opacity: 1;
  }

  20% {
    left: 0px;
    /* Enter the visible area */
    opacity: 1;
  }

  80% {
    left: calc(100% - 120px);
    /* Travel to near the right edge */
    opacity: 1;
  }

  100% {
    left: calc(100% + 20px);
    /* Exit completely off-screen to right */
    opacity: 1;
  }
}
</style>
