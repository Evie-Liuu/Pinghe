<template>
  <div class="page-background content-scroller" @scroll="handleAppScroll">
    <!-- <img
      src="@/assets/images/Background_1_B.png"
      class="fixed inset-0 -z-20"
    />
    <img
      src="@/assets/images/Background_1_F.png"
      class="fixed inset-0 -z-10"
    /> -->
    <div>
      <header
        class="relative z-5 pt-25 w-full shadow-md bg-header text-rice-500"
      >
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
            <h1 class="text-2xl md:text-3xl font-bold">行動追蹤</h1>
          </div>
          <div class="w-1/3 flex items-center justify-end pr-4 gap-2">
            <router-link v-if="isTeacher" to="/actions/new" title="建立新故事">
              <div
                class="w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center text-white cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                <i class="fa-solid fa-plus font-bold text-pblue-500"></i>
              </div>
            </router-link>
          </div>
        </div>
      </header>
      <main
        class="p-10 flex flex-col justify-center items-center gap-8 max-w-7xl md:mx-auto"
      >
        <HeaderFilter
          @update:filters="handleFilterUpdate"
          class="flex flex-wrap justify-center items-center gap-4"
        ></HeaderFilter>
        <ActionCard
          :filteredInfo="paginatedActions"
          class="flex flex-col gap-10 w-full md:px-0"
        ></ActionCard>
        <div
          v-if="allFilteredInfos.length === 0"
          class="text-center text-gray-500 mt-8"
        >
          <p>找不到符合條件的行動。</p>
        </div>
        <PageLabel
          class="flex justify-center items-center gap-4 mt-8"
          :totalItems="allFilteredInfos.length"
          :itemsPerPage="itemsPerPage"
          v-model="currentPage"
        ></PageLabel>
        <TrainTrack></TrainTrack>
      </main>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, inject, onMounted, onBeforeMount } from "vue";
import infosData from "@/data/Action.json";
import typeTags from "@/data/SDGs_goal.json";
import HeaderFilter from "@/components/HeaderFilter.vue";
import ActionCard from "@/components/ActionCard.vue";
import PageLabel from "@/components/PageLabel.vue";
import CJKSub from "@/components/CJKSub.vue";
import TrainTrack from "@/components/TrainTrack.vue";
import { useAuth } from "@/stores/auth";
import { apiService } from "@/services/api.js";

const { isTeacher, user, isAuthenticated, checkAuth } = useAuth();

const handleAppScroll = inject("handleAppScroll");

const allActions = ref(infosData);
const filters = ref({
  sdgs: [],
  time: "all",
  startDate: "",
  endDate: "",
  keyword: "",
});
const currentPage = ref(1);
const itemsPerPage = 3;

onBeforeMount(async () => {
  try {
    if (user.value) {
      // console.log("User found:", user.value);
      // console.log("Auth token:", localStorage.getItem("auth_token"));
      let res = await apiService.getActivities();
      console.log("Activities response:", res);
      allActions.value = res.items;
    } else {
      console.log("No user found, skipping getActivities call");
    }
  } catch (error) {
    console.error("Failed to fetch activities:", error);
    console.error("Error details:", error.message);
  }
});

const handleFilterUpdate = (newFilters) => {
  filters.value = newFilters;
  currentPage.value = 1; // Reset page when filters change
};

const allFilteredInfos = computed(() => {
  let result = allActions.value;

  // Filter by SDGs
  if (filters.value.sdgs.length > 0) {
    result = result.filter(
      (info) =>
        info.sdgs_goals &&
        info.sdgs_goals.some((type) => filters.value.sdgs.includes(type))
    );
  }

  // Filter by time (activity overlap)
  if (filters.value.time !== "all") {
    const now = new Date();
    let filterStart, filterEnd;

    switch (filters.value.time) {
      case "day":
        filterEnd = new Date(now);
        filterStart = new Date(now);
        filterStart.setDate(now.getDate() - 1);
        break;
      case "week":
        filterEnd = new Date(now);
        filterStart = new Date(now);
        filterStart.setDate(now.getDate() - 7);
        break;
      case "custom":
        if (filters.value.startDate && filters.value.endDate) {
          filterStart = new Date(filters.value.startDate);
          filterStart.setHours(0, 0, 0, 0);
          filterEnd = new Date(filters.value.endDate);
          filterEnd.setHours(23, 59, 59, 999);
        }
        break;
    }

    if (filterStart && filterEnd) {
      result = result.filter((info) => {
        if (
          !info.startTime ||
          !info.endTime ||
          !String(info.startTime).trim() ||
          !String(info.endTime).trim()
        )
          return false;
        const projectStart = new Date(Number(info.startTime) * 1000);
        const projectEnd = new Date(Number(info.endTime) * 1000);
        return projectStart <= filterEnd && projectEnd >= filterStart;
      });
    }
  }

  // Filter by keyword
  if (filters.value.keyword) {
    result = result.filter((info) =>
      info.title.toLowerCase().includes(filters.value.keyword.toLowerCase())
    );
  }

  return result;
});

const paginatedActions = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return allFilteredInfos.value.slice(startIndex, endIndex);
});
</script>
<style scoped>
</style>
