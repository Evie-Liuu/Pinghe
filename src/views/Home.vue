<template>
  <main
    class="w-screen h-screen flex flex-col gap-12 lg:gap-0 max-[380px]:gap-1 justify-start items-center lg:flex-row text-center bg-[url('@/assets/images/Mobile/Mobile_MainPage_Background.png')] bg-cover bg-center overflow-hidden lg:bg-[url('@/assets/images/MainPage_Pic.webp'),_url('@/assets/images/MainPage_Background.webp')] lg:[background-repeat:no-repeat,no-repeat] lg:[background-position:right,center] lg:[background-size:contain,cover]"
  >
    <!-- School Title -->
    <section
      class="order-1 lg:order-2 z-10 lg:w-1/2 flex justify-center items-center pt-25 lg:pt-0 lg:h-full lg:items-start lg:translate-y-18"
    >
      <div
        :class="[
          'transition-all duration-3000 ease-out',
          isLoaded ? 'opacity-100' : 'opacity-0',
        ]"
        class="w-full flex justify-center lg:justify-start"
      >
        <picture>
          <img
            src="@/assets/images/Title.png"
            class="pointer-events-none select-none max-w-77 lg:max-w-150"
            alt="Pinghe_Text_H"
          />
        </picture>
      </div>
    </section>
    <!-- Menu Buttons -->
    <section
      class="order-2 lg:order-1 z-10 lg:w-1/2 flex justify-center items-center lg:h-full lg:items-start lg:translate-66 lg:translate-x-78"
    >
      <div
        :class="[
          'transition-all duration-3000 ease-out',
          isLoaded ? 'opacity-100' : 'opacity-0',
        ]"
        class="inline-flex flex-col gap-4 pe-18 lg:gap-10 items-center justify-center text-xl lg:text-4xl text-black"
      >
        <!-- Button 1 -->
        <div class="relative group self-stretch">
          <router-link
            to="/about"
            class="relative block rounded-full bg-orange-300 p-2 lg:p-4 lg:mx-2 overflow-hidden"
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
            class="relative block translate-x-6/12 rounded-full bg-orange-300 p-2 lg:p-4 lg:mx-2 overflow-hidden"
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
            class="relative block translate-x-12/12 rounded-full bg-orange-300 p-2 lg:p-4 lg:mx-2 overflow-hidden"
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