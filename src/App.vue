<template>
  <div
    v-if="isLoading && $route.path !== '/' && $route.path !== '/about'"
    class="loading-overlay text-pblue-500"
  >
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
  <nav
    class="fixed top-0 left-0 z-50 w-full p-2 text-rice-500 md:text-4xl flex flex-row justify-between items-center transition-transform duration-300 ease-in-out"
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
        src="@/assets/images/Logo.gif"
        alt="School Logo"
        :class="{ hidden: $route.path === '/' }"
        class="relative z-20 inset-0 w-1/11 object-center md:w-1/20"
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
    <div
      v-if="$route.path !== '/'"
      :class="[
        'fixed top-0 left-0 w-full flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:relative md:h-[4rem] md:w-auto md:bg-transparent md:flex-row md:gap-3 text-xl md:text-2xl md:whitespace-nowrap',
        isMenuOpen ? 'h-screen' : 'h-0',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
        isMenuOpen
          ? 'bg-[url(@/assets/images/Mobile/mobile_Bcakground_2.png)] bg-cover bg-center overflow-hidden'
          : '',
      ]"
      class="md:text-shadow-none"
    >
      <div class="absolute z-[-10] inset-0 bg-black/40 md:hidden"></div>
      <router-link
        to="/"
        class="px-8 text-rice-500 text-shadow-3d"
        @click="isMenuOpen = false"
        :class="{
          'pointer-events-none text-orange-300': $route.path === '/',
        }"
      >
        <div class="p-3">首頁</div>
      </router-link>
      <router-link
        to="/about"
        class="px-4 text-rice-500 text-shadow-3d"
        @click="isMenuOpen = false"
        :class="{
          'pointer-events-none text-orange-300': $route.path === '/about',
        }"
      >
        <div class="p-3">
          <span v-if="$route.path !== '/about'">校園探索</span>
          <span v-else>EXPLORATION</span>
        </div>
      </router-link>
      <router-link
        to="/actions"
        class="px-4 text-rice-500 text-shadow-3d"
        @click="isMenuOpen = false"
        :class="{
          'pointer-events-none text-orange-300': $route.path === '/actions',
        }"
      >
        <div class="p-3 md:p-3">
          <span v-if="$route.path !== '/actions'">SDGs行動</span>
          <span v-else>SDGs ACTION</span>
        </div>
      </router-link>
      <router-link
        to="/sdgs"
        class="px-4 text-rice-500 text-shadow-3d"
        @click="isMenuOpen = false"
        :class="{
          'pointer-events-none text-orange-300':
            $route.path === '/sdgs' || $route.path.includes('/story'),
        }"
      >
        <div class="p-3">
          <span
            v-if="$route.path !== '/sdgs' && !$route.path.includes('/story')"
            >SDGs成果</span
          >
          <span v-else>SDGs RESULT</span>
        </div>
      </router-link>

      <!-- 身分顯示/登出 -->
      <div class="px-4 text-rice-500 text-shadow-3d">
        <div class="p-3" v-if="!isAuthenticated">
          <router-link
            to="/"
            @click="isMenuOpen = false"
            class="hover:text-orange-300 transition-colors flex items-center gap-2"
          >
            <i class="fas fa-user-plus"></i>
            選擇身分
          </router-link>
        </div>
        <!-- New Profile Dropdown -->
        <div v-else class="relative" ref="profileMenu">
          <button
            @click="isProfileMenuOpen = !isProfileMenuOpen"
            class="min-w-10"
          >
            <img
              src="@/assets/images/student.png"
              alt="User Profile"
              class="w-10 h-10 rounded-full object-cover"
            />
          </button>
          <div
            v-if="isProfileMenuOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 text-gray-800"
          >
            <div class="px-4 py-2">
              <p
                class="text-sm font-medium"
                :class="{
                  'text-blue-500': isTeacher,
                  'text-green-500': isStudent,
                  'text-gray-500': isVisitor,
                }"
              >
                {{ user?.displayName }}
              </p>
              <p class="text-sm text-gray-500">{{ user?.username }}</p>
            </div>
            <div class="border-t border-gray-200"></div>
            <button
              @click="handleLogout"
              class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              登出
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script setup>
import { ref, onMounted, provide, onBeforeUnmount } from "vue";
import { useAuth } from "@/stores/auth";
import { useRouter } from "vue-router";
import { useClickOutside } from "@/composables/useClickOutside";

const {
  isAuthenticated,
  user,
  isTeacher,
  isStudent,
  isVisitor,
  logout,
  checkAuth,
} = useAuth();
const router = useRouter();

const isLoading = ref(true);
const imageError = ref(false);

const isMenuOpen = ref(false);
const isHeaderVisible = ref(true);
const lastScrollY = ref(0);

const isProfileMenuOpen = ref(false);
const profileMenu = ref(null);
useClickOutside(profileMenu, () => {
  isProfileMenuOpen.value = false;
});

const onImageError = () => {
  console.log("Train image failed to load");
  imageError.value = true;
};

const onImageLoad = () => {
  console.log("Train image loaded successfully");
  imageError.value = false;
};

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

const handleLogout = () => {
  logout();
  isMenuOpen.value = false;
  isProfileMenuOpen.value = false;
  router.push("/");
};

provide("handleAppScroll", handleScroll);

onMounted(() => {
  checkAuth(); // 初始化時檢查認證狀態
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
