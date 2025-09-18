<template>
  <div class="page-background">
    <div v-if="isLoading" class="loading-overlay text-pblue-500">
      <div class="train-track">
        <img
          src="@/assets/images/LoadingTrain.png"
          class="loader"
          alt="Loading..."
          @error="onImageError"
          @load="onImageLoad"
        />
        <!-- Fallback visual train if image fails to load -->
        <div class="fallback-train" v-if="imageError">🚂</div>
      </div>
      <p>載入中...</p>
    </div>
    <main
      class="absolute bottom-0 w-screen h-screen lg:max-h-280 flex justify-center items-center"
    >
      <div
        class="relative w-full h-2/3 2xl:w-285 2xl:h-165 mx-auto translate-y-0 2xl:translate-y-7"
      >
        <iframe
          @load="onIframeLoad"
          src="https://www.thinglink.com/view/scene/2024716940248875685"
          type="text/html"
          class="w-full h-full"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          scrolling="no"
        ></iframe>
        <div class="absolute inset-0 2xl:border-10 pointer-events-none"></div>
      </div>
      <TrainTrack></TrainTrack>
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TrainTrack from "@/components/TrainTrack.vue";

const isLoading = ref(true);
const imageError = ref(false);

const onIframeLoad = () => {
  isLoading.value = false;
};

const onImageError = () => {
  console.log("Train image failed to load");
  imageError.value = true;
};

const onImageLoad = () => {
  console.log("Train image loaded successfully");
  imageError.value = false;
};
</script>
<style scoped>
</style>