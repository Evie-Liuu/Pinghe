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
        <!-- Button 1 -->
        <div class="relative group self-stretch">
          <router-link
            to="/about"
            class="relative block rounded-full bg-orange-300 p-2 px-5 overflow-hidden"
          >
            <span
              class="block transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
              >校園探索</span
            >
            <span
              class="absolute inset-0 bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"
              >Explore →</span
            >
          </router-link>
        </div>
        <!-- Button 2 -->
        <div class="relative group self-stretch">
          <router-link
            to="/actions"
            class="relative block rounded-full bg-orange-300 p-2 px-5 overflow-hidden"
          >
            <span
              class="block transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
              >SDGs行動</span
            >
            <span
              class="absolute inset-0 bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"
              >Actions →</span
            >
          </router-link>
        </div>
        <!-- Button 3 -->
        <div class="relative group self-stretch">
          <router-link
            to="/sdgs"
            class="relative block lg:-translate-x-1/6 rounded-full bg-orange-300 p-2 px-5 overflow-hidden"
          >
            <span
              class="block transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
              >SDGs成果</span
            >
            <span
              class="absolute inset-0 bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"
              >Results →</span
            >
          </router-link>
        </div>
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