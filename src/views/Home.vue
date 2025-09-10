<template>
  <main
    class="w-screen h-screen grid lg:grid-flow-col content-center lg:content-stretch lg:grid-rows-2 text-center bg-[url('@/assets/images/Mobile/Mobile_MainPage_Background.png')] bg-cover bg-center overflow-hidden lg:bg-[url('@/assets/images/MainPage_Pic.webp'),_url('@/assets/images/MainPage_Background.webp')] lg:[background-repeat:no-repeat,no-repeat] lg:[background-position:right,center] lg:[background-size:contain,cover]"
  >
    <!-- School Title -->
    <section class="lg:col-span-1 z-10">
      <div
        :class="[
          'transition-all duration-3000 ease-out',
          isLoaded ? 'opacity-100' : 'opacity-0',
        ]"
        class="w-full flex items-right justify-center lg:gap-5 lg:pt-10 lg:translate-x-30"
      >
        <picture>
          <img
            src="@/assets/images/Title.png"
            class="pointer-events-none select-none max-w-150"
            alt="Pinghe_Text_H"
          />
        </picture>
      </div>
    </section>
    <!-- Menu Buttons -->
    <section class="lg:col-span-1 z-10">
      <div
        :class="[
          'transition-all duration-3000 ease-out',
          isLoaded ? 'opacity-100' : 'opacity-0',
        ]"
        class="inline-flex flex-col pt-8 lg:pt-0 lg:gap-5 items-center justify-center text-xl lg:text-2xl"
      >
        <router-link
          to="/about"
          class="self-stretch rounded-full font-bold bg-orange-300 p-2 px-5"
        >
          <span>校園探索</span>
        </router-link>
        <router-link
          to="/actions"
          class="self-stretch rounded-full font-bold bg-orange-300 p-2 px-5"
        >
          <span>SDGs行動</span></router-link
        >
        <router-link
          to="/sdgs"
          class="self-stretch lg:-translate-x-1/6 rounded-full font-bold bg-orange-300 p-2 px-5"
        >
          <span>SDGs成果</span></router-link
        >
      </div>
    </section>

    <!-- Cover -->
    <!-- <section class="lg:row-span-2">
      <div
        :class="[
          'transition-all duration-3000 ease-out',
          isLoaded ? 'opacity-100' : 'opacity-0',
        ]"
        class="lg:h-full flex items-center justify-center"
      >
      </div>
    </section> -->
  </main>
</template>
<script setup>
import { ref, onMounted } from "vue";

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>
<style scoped>
</style>