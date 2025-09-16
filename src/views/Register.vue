<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-900">註冊新帳號</h2>
      <form @submit.prevent="handleRegister">
        <div class="space-y-4">
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
              >姓名</label
            >
            <input
              type="text"
              v-model="username"
              id="username"
              required
              class="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >電子郵件</label
            >
            <input
              type="email"
              v-model="email"
              id="email"
              required
              class="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="school" class="block text-sm font-medium text-gray-700"
              >學校</label
            >
            <div class="flex flex-row gap-4">
              <select
                v-model="selectedRegion"
                id="region"
                required
                class="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">請選擇地區</option>
                <option v-for="region in regions" :key="region" :value="region">
                  {{ region }}
                </option>
              </select>
              <select
                v-model="selectedSchool"
                id="school"
                required
                :disabled="!selectedRegion"
                class="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">請先選擇地區</option>
                <option
                  v-for="school in availableSchools"
                  :key="school"
                  :value="school"
                >
                  {{ school }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >密碼</label
            >
            <input
              type="password"
              v-model="password"
              id="password"
              required
              class="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            :disabled="loading"
            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            <span v-if="loading">註冊中...</span>
            <span v-else>註冊</span>
          </button>
        </div>
      </form>
      <div
        v-if="message"
        :class="messageClass"
        class="p-4 mt-4 text-sm rounded-md"
      >
        {{ message }}
      </div>
      <div class="text-sm text-center">
        <router-link
          to="/login"
          class="font-medium text-indigo-600 hover:text-indigo-500"
          >已經有帳號了？ 登入</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/stores/auth";
import { getRegions, getSchoolsByRegion } from "@/data/schools";

const username = ref("");
const email = ref("");
const password = ref("");
const selectedRegion = ref("");
const selectedSchool = ref("");
const loading = ref(false);
const message = ref("");
const isError = ref(false);

const auth = useAuth();
const router = useRouter();

// 獲取所有地區
const regions = getRegions();

// 根據選擇的地區獲取學校列表
const availableSchools = computed(() => {
  return selectedRegion.value ? getSchoolsByRegion(selectedRegion.value) : [];
});

const handleRegister = async () => {
  loading.value = true;
  message.value = "";
  isError.value = false;

  // 驗證必填欄位
  if (!username.value.trim()) {
    message.value = "請輸入姓名";
    isError.value = true;
    loading.value = false;
    return;
  }

  if (!email.value.trim()) {
    message.value = "請輸入電子郵件";
    isError.value = true;
    loading.value = false;
    return;
  }

  if (!password.value.trim()) {
    message.value = "請輸入密碼";
    isError.value = true;
    loading.value = false;
    return;
  }

  if (!selectedRegion.value) {
    message.value = "請選擇地區";
    isError.value = true;
    loading.value = false;
    return;
  }

  if (!selectedSchool.value) {
    message.value = "請選擇學校";
    isError.value = true;
    loading.value = false;
    return;
  }

  const { success, message: resultMessage } =
    await auth.registerWithEmailAndPassword(
      username.value,
      email.value,
      password.value,
      selectedSchool.value
    );

  loading.value = false;
  if (success) {
    message.value = "註冊成功！將為您跳轉到首頁...";
    setTimeout(() => {
      router.push("/");
    }, 2000);
  } else {
    message.value = `註冊失敗: ${resultMessage}`;
    isError.value = true;
  }
};

const messageClass = computed(() => ({
  "bg-red-100 text-red-700": isError.value,
  "bg-green-100 text-green-700": !isError.value,
}));
</script>
