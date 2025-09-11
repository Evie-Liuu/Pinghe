<template>
  <div class="page-background content-scroller h-screen flex flex-col">
    <header class="pt-25 w-full shadow-md z-10 bg-header text-rice-500">
      <div class="container mx-auto flex items-center p-4">
        <div class="w-1/3">
          <router-link to="/" class="back-home-btn">
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
          <h1 class="text-2xl md:text-3xl font-bold">成果展示</h1>
        </div>
        <div class="w-1/3"></div>
      </div>
    </header>
    <main class="flex flex-col gap-10 md:gap-5 w-full px-4 md:p-15 md:px-80 pt-10 flex-1">
      <!-- Cards -->
      <router-link
        v-for="info in infos"
        :to="info.to"
        :key="info.id"
        :class="[
          'relative group flex flex-col md:flex-row rounded-lg overflow-hidden flex-1',
          { 'md:flex-row-reverse': info.title === '資源下載' },
        ]"
      >
        <div
          class="absolute inset-0 bg-white/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
        <div class="relative w-full h-64 md:h-auto md:w-1/2">
          <img
            :src="getImageUrl(path + info.img_url)"
            alt="Card Image"
            class="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div class="relative md:w-1/2 text-center bg-white/40">
          <div class="bg-orange-300 pb-1">
            <CJKSub align="left">
              <template #zh>{{ info.title }}</template>
              <template #en>{{ info.en }}</template>
            </CJKSub>
          </div>
          <p class="text-lg">
            {{ info.content }}
          </p>
        </div>
      </router-link>
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";
import CJKSub from "@/components/CJKSub.vue";

// import { inject } from "vue";

// const handleAppScroll = inject("handleAppScroll");

const path = "../assets/images/";

const infos = ref([
  {
    id: 1,
    to: "",
    title: "數據呈現",
    en: "Data Presentation",
    img_url: "lightBulb.png",
    content: "成效視覺化",
  },
  {
    id: 2,
    to: "",
    title: "資源下載",
    en: "Resource Download",
    img_url: "logo.png",
    content: "提供活動簡章",
  },
  {
    id: 3,
    to: "/story",
    title: "故事牆",
    en: "Story Wall",
    img_url: "lightBulb2.png",
    content: "共同實踐的精采回憶",
  },
]);

function getImageUrl(name) {
  if (!name) return "";
  return new URL(`${name}`, import.meta.url).href;
}
</script>
<style scoped>
</style>