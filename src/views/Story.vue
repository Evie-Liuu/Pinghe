<template>
  <div class="page-background content-scroller h-screen flex flex-col">
    <header class="relative z-5 pt-25 w-full shadow-md bg-header text-rice-500">
      <div class="container mx-auto flex items-center p-4">
        <div class="w-1/3">
          <router-link to="/sdgs" class="back-home-btn">
            <span class="text">
              <CJKSub align="center">
                <template #zh>回首頁</template>
                <template #en>Home</template>
              </CJKSub>
            </span>
            <span class="icon">←</span>
          </router-link>
        </div>
        <div class="w-1/3 text-center">
          <h1 class="text-2xl md:text-3xl font-bold">故事牆</h1>
        </div>
        <div class="w-1/3"></div>
      </div>
    </header>
    <main
      class="p-10 flex flex-col justify-center items-center gap-8 md:my-auto"
    >
      <ImageCarousel :images="carouselImages" :path="path" />
    </main>
  </div>
</template>
<script setup>
import carouselImages from "@/data/Story.json";
import CJKSub from "@/components/CJKSub.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";

const path = "../assets/images/"

</script>
<style scoped>
</style>