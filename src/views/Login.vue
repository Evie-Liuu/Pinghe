<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-900">登入</h2>
      <form @submit.prevent="handleLogin" novalidate>
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              電子郵件
            </label>
            <input
              type="email"
              v-model="email"
              id="email"
              required
              class="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="email"
              autocomplete="email"
            />
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
              name="password"
              autocomplete="current-password"
            />
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            :disabled="loading"
            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            <span v-if="loading">登入中...</span>
            <span v-else>登入</span>
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
          to="/register"
          class="font-medium text-indigo-600 hover:text-indigo-500"
          >還沒有帳號？ 註冊</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/stores/auth";

const email = ref("");
const password = ref("");
const loading = ref(false);
const message = ref("");
const isError = ref(false);

const auth = useAuth();
const router = useRouter();

const handleLogin = async () => {
  loading.value = true;
  message.value = "";
  isError.value = false;

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

  const { success, message: resultMessage } =
    await auth.loginWithEmailAndPassword(email.value, password.value);

  loading.value = false;
  if (success) {
    message.value = "登入成功！將為您跳轉到首頁...";
    setTimeout(() => {
      router.push("/");
    }, 2000);
  } else {
    message.value = `登入失敗: ${resultMessage}`;
    isError.value = true;
  }
};

const messageClass = computed(() => ({
  "bg-red-100 text-red-700": isError.value,
  "bg-green-100 text-green-700": !isError.value,
}));
</script>
