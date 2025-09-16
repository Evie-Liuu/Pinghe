<template>
  <main
    class="relative w-screen h-screen flex flex-col gap-12 lg:gap-0 max-[380px]:gap-1 justify-start items-center lg:flex-row text-center bg-[url('@/assets/images/Mobile/Mobile_MainPage_Background2.png')] bg-cover bg-center overflow-hidden lg:bg-[url('@/assets/images/MainPage_Pic.webp'),_url('@/assets/images/MainPage_Background_T.png')] lg:[background-repeat:no-repeat,no-repeat] lg:[background-position:right,center] lg:[background-size:contain,cover]"
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
      class="order-2 lg:order-1 z-20 lg:w-1/2 flex justify-center items-center lg:h-full lg:items-start lg:translate-66 lg:translate-x-78"
    >
      <div
        :class="[
          'transition-all duration-3000 ease-out',
          isLoaded ? 'opacity-100' : 'opacity-0',
        ]"
        class="inline-flex flex-col gap-4 lg:gap-10 items-start justify-center text-xl lg:text-4xl text-black"
      >
        <!-- Button 1 -->
        <div class="relative group self-stretch">
          <router-link
            to="/about"
            class="relative block ml-22 mr-50 lg:ml-10 lg:mr-50 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"
          >
            <span
              class="block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
              >校園探索</span
            >
            <span
              class="absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"
              >Explore →</span
            >
          </router-link>
        </div>
        <!-- Button 2 -->
        <div class="relative group self-stretch">
          <router-link
            to="/actions"
            class="relative block ml-36 mr-36 lg:ml-30 lg:mr-30 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"
          >
            <span
              class="block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
              >SDGs行動</span
            >
            <span
              class="absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"
              >Actions →</span
            >
          </router-link>
        </div>
        <!-- Button 3 -->
        <div class="relative group self-stretch">
          <router-link
            to="/sdgs"
            class="relative block ml-50 mr-22 lg:ml-60 lg:mr-0 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"
          >
            <span
              class="block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
              >SDGs成果</span
            >
            <span
              class="absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"
              >Results →</span
            >
          </router-link>
        </div>
      </div>
    </section>

    <!-- Cover -->
    <!-- Train Smoke Animation -->
    <div
      class="w-full absolute bottom-0 lg:-bottom-15 left-0 lg:w-1/2 pointer-events-non"
    >
      <img
        :src="Train_smoke"
        class="select-none animate-train-enter"
        alt="Pinghe_Train_Smoke"
      />
    </div>

    <!-- 身分選擇彈窗 -->
    <div
      v-if="showRoleModal"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">
          請選擇您的身分
        </h2>

        <div class="space-y-4">
          <!-- 管理員選項 -->
          <button
            @click="selectAdminRole"
            class="w-full p-4 border-2 border-red-200 rounded-lg hover:border-red-400 hover:bg-red-50 transition-colors group"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white group-hover:bg-red-600"
              >
                <i class="fas fa-user-shield text-xl"></i>
              </div>
              <div class="text-left">
                <h3 class="text-lg font-semibold text-gray-800">管理員</h3>
                <p class="text-sm text-gray-600">系統管理員權限</p>
              </div>
            </div>
          </button>

          <!-- 老師選項 -->
          <button
            @click="selectTeacherRole"
            class="w-full p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"
          >
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white group-hover:bg-blue-600">
                <i class="fas fa-user-tie text-xl"></i>
              </div>
              <div class="text-left">
                <h3 class="text-lg font-semibold text-gray-800">老師</h3>
                <p class="text-sm text-gray-600">具有編輯和管理權限</p>
              </div>
            </div>
          </button>

          <!-- 學生選項 -->
          <button
            @click="selectStudentRole"
            class="w-full p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors group"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:bg-green-600"
              >
                <i class="fas fa-user-graduate text-xl"></i>
              </div>
              <div class="text-left">
                <h3 class="text-lg font-semibold text-gray-800">學生</h3>
                <p class="text-sm text-gray-600">瀏覽內容並參與互動</p>
              </div>
            </div>
          </button>

          <!-- 訪客選項 -->
          <button
            @click="selectVisitorRole"
            class="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors group"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white group-hover:bg-gray-600"
              >
                <i class="fas fa-user text-xl"></i>
              </div>
              <div class="text-left">
                <h3 class="text-lg font-semibold text-gray-800">訪客</h3>
                <p class="text-sm text-gray-600">瀏覽所有公開內容</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- 管理員登入彈窗 -->
    <div
      v-if="showAdminLogin"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-gray-700"
    >
      <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-800">管理員登入</h2>
          <button
            @click="backToRoleSelection"
            class="text-gray-400 hover:text-gray-600"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <form @submit.prevent="handleAdminLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >帳號</label
            >
            <input
              v-model="adminForm.username"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="請輸入管理員帳號"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >密碼</label
            >
            <input
              v-model="adminForm.password"
              type="password"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="請輸入密碼"
            />
          </div>

          <div v-if="loginError" class="text-red-600 text-sm">
            {{ loginError }}
          </div>

          <div class="flex gap-3">
            <button
              type="button"
              @click="backToRoleSelection"
              class="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              返回
            </button>
            <button
              type="submit"
              :disabled="loginLoading"
              class="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
            >
              {{ loginLoading ? "登入中..." : "登入" }}
            </button>
          </div>
        </form>

        <div class="mt-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-600">
          <p><strong>預設帳號：</strong>admin</p>
          <p><strong>預設密碼：</strong>admin</p>
        </div>
      </div>
    </div>

    <!-- 老師登入彈窗 -->
    <div
      v-if="showTeacherLogin"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-gray-700"
    >
      <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-800">老師登入</h2>
          <button
            @click="backToRoleSelection"
            class="text-gray-400 hover:text-gray-600"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <form @submit.prevent="handleTeacherLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >帳號</label
            >
            <input
              v-model="teacherForm.username"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="請輸入老師帳號"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >密碼</label
            >
            <input
              v-model="teacherForm.password"
              type="password"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="請輸入密碼"
            />
          </div>

          <div v-if="loginError" class="text-red-600 text-sm">
            {{ loginError }}
          </div>

          <div class="flex gap-3">
            <button
              type="button"
              @click="backToRoleSelection"
              class="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              返回
            </button>
            <button
              type="submit"
              :disabled="loginLoading"
              class="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
            >
              {{ loginLoading ? "登入中..." : "登入" }}
            </button>
          </div>
        </form>

        <div class="mt-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-600">
          <p><strong>預設帳號：</strong>tc</p>
          <p><strong>預設密碼：</strong>tc</p>
        </div>
      </div>
    </div>

    <!-- 學生姓名輸入彈窗 -->
    <div
      v-if="showStudentForm"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-800">學生登入</h2>
          <button
            @click="backToRoleSelection"
            class="text-gray-400 hover:text-gray-600"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <form @submit.prevent="confirmStudentRole" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >請輸入您的姓名</label
            >
            <input
              v-model="studentName"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="例如：王小明"
            />
          </div>

          <div class="flex gap-3">
            <button
              type="button"
              @click="backToRoleSelection"
              class="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              返回
            </button>
            <button
              type="submit"
              class="flex-1 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              進入網站
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useAuth } from "@/stores/auth";
import Train_smoke from "@/assets/images/Train_Smoke.gif";

const { isAuthenticated, selectRole, adminLogin, teacherLogin, checkAuth } = useAuth();

const isLoaded = ref(false);
const showRoleModal = ref(false);
const showAdminLogin = ref(false);
const showTeacherLogin = ref(false);
const showStudentForm = ref(false);
const studentName = ref("");
const adminForm = ref({ username: "", password: "" });
const teacherForm = ref({ username: "", password: "" });
const loginLoading = ref(false);
const loginError = ref("");

// 檢查是否已經登入
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);

  checkAuth();

  // 如果沒有登入，顯示身分選擇彈窗
  if (!isAuthenticated.value) {
    setTimeout(() => {
      showRoleModal.value = true;
    }, 1500); // 延遲一點顯示，讓首頁動畫先完成
  }
});

const selectAdminRole = () => {
  showRoleModal.value = false;
  showAdminLogin.value = true;
};

const selectTeacherRole = () => {
  showRoleModal.value = false;
  showTeacherLogin.value = true;
};

const selectStudentRole = () => {
  showRoleModal.value = false;
  showStudentForm.value = true;
};

const selectVisitorRole = () => {
  selectRole("visitor");
  showRoleModal.value = false;
};

const handleAdminLogin = async () => {
  loginLoading.value = true;
  loginError.value = "";

  const { success, message } = adminLogin(adminForm.value.username, adminForm.value.password);

  loginLoading.value = false;
  if (success) {
    showAdminLogin.value = false;
    adminForm.value = { username: "", password: "" };
  } else {
    loginError.value = message;
  }
};

const handleTeacherLogin = async () => {
  loginLoading.value = true;
  loginError.value = "";

  const { success, message } = teacherLogin(teacherForm.value.username, teacherForm.value.password);

  loginLoading.value = false;
  if (success) {
    showTeacherLogin.value = false;
    teacherForm.value = { username: "", password: "" };
  } else {
    loginError.value = message;
  }
};

const confirmStudentRole = () => {
  selectRole("student", { name: studentName.value });
  showStudentForm.value = false;
  studentName.value = "";
};

const backToRoleSelection = () => {
  showAdminLogin.value = false;
  showTeacherLogin.value = false;
  showStudentForm.value = false;
  showRoleModal.value = true;
  adminForm.value = { username: "", password: "" };
  teacherForm.value = { username: "", password: "" };
  studentName.value = "";
  loginError.value = "";
};
</script>
<style scoped>
@keyframes train-enter {
  from {
    transform: translateX(-50%) scale(0.7);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}
.animate-train-enter {
  animation: train-enter 1s ease-out forwards; /* Add 1s delay */
}
</style>
