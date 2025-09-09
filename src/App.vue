<template>
  <div
    v-if="isLoading && $route.path !== '/' && $route.path !== '/about'"
    class="loading-overlay"
  >
    <div class="loading-text">
      <span style="--i: 1">載</span>
      <span style="--i: 2">入</span>
      <span style="--i: 3">中</span>
      <span style="--i: 4">.</span>
      <span style="--i: 5">.</span>
      <span style="--i: 6">.</span>
    </div>
  </div>
  <nav
    class="fixed top-0 left-0 z-10 w-full p-2 text-rice-500 md:text-4xl font-bold flex flex-row justify-between items-center transition-transform duration-300 ease-in-out"
    :class="[
      $route.path !== '/' ? 'bg-header' : '',
      isHeaderVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full',
      { 'pointer-events-none': !isHeaderVisible && !isMenuOpen },
    ]"
  >
    <router-link
      to="/"
      @click="isMenuOpen = false"
      class="flex flex-row items-center gap-2"
    >
      <img
        src="@/assets/images/Logo.png"
        alt="School Logo Watercolor"
        :class="{ hidden: $route.path === '/' }"
        class="relative z-20 inset-0 w-1/11 object-center md:w-1/15"
      />
      <div
        :class="{ hidden: $route.path === '/' }"
        class="relative z-20 my-auto md:text-3xl text-2xl"
      >
        彰化市平和國民小學
      </div>
      <!-- <img
        src="@/assets/images/var02/Title.png"
        alt=""
        :class="{ hidden: $route.path === '/' }"
        class="relative z-20 inset-0 max-h-10 object-end md:w-auto md:max-h-15"
      /> -->
    </router-link>

    <!-- Hamburger Button -->
    <button
      v-if="$route.path !== '/'"
      @click="isMenuOpen = !isMenuOpen"
      class="md:hidden z-20"
    >
      <i class="fa-solid fa-bars"></i>
    </button>

    <!-- Menu -->
  </nav>
  <router-view />
</template>
<script setup>
import { ref, onMounted, provide, onBeforeUnmount } from "vue";

const isLoading = ref(true);
const isMenuOpen = ref(false);
const isHeaderVisible = ref(true);
const lastScrollY = ref(0);

const handleScroll = (event) => {
  // Get scroll position from either the event target or the window
  const currentScrollY =
    event.target.scrollTop === undefined
      ? window.scrollY
      : event.target.scrollTop;

  // Always show header when at the top or if the menu is open
  if (currentScrollY < 100 || isMenuOpen.value) {
    isHeaderVisible.value = true;
  } else if (currentScrollY > lastScrollY.value) {
    // Scrolling down
    isHeaderVisible.value = false;
  } else {
    // Scrolling up
    isHeaderVisible.value = true;
  }
  lastScrollY.value = currentScrollY < 0 ? 0 : currentScrollY;
};

provide("handleAppScroll", handleScroll);

onMounted(() => {
  window.addEventListener("scroll", handleScroll); // Fallback for pages that scroll the window
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
</style>