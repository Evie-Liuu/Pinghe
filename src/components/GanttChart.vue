<template>
  <div class="border border-gray-300 rounded-lg overflow-hidden bg-white">
    <div class="flex bg-gray-100 border-b border-gray-300 relative">
      <div
        class="absolute top-1 left-1 text-xs text-gray-600 bg-white bg-opacity-80 px-1.5 py-0.5 rounded z-10"
      >
        {{ yearMonthHint }}
      </div>
      <div class="w-20 p-3 font-bold text-center border-r border-gray-300">
        <select
          v-model="selectedUnit"
          class="block mb-1 text-xs border border-gray-300 rounded px-1 py-0.5"
        >
          <option value="week">週</option>
          <option value="month">月</option>
        </select>
        時間軸
      </div>
      <div class="flex flex-1">
        <div
          v-for="phase in phases"
          :key="phase.id"
          class="p-3 font-bold text-center border-r border-gray-300 bg-gray-50"
          :style="{ width: phaseWidth + 'px' }"
        >
          {{ phase.name }}
        </div>
      </div>
    </div>

    <div
      class="flex h-150 overflow-y-auto"
      ref="scrollContainer"
      @scroll="onScroll"
    >
      <div class="flex w-20 border-r border-gray-300">
        <div v-if="selectedUnit === 'week'">
          <div v-for="week in weeks" :key="week.weekStart" class="week-group">
            <div class="flex w-full">
              <div
                class="w-1/2 p-2 font-bold bg-gray-200 border-b border-gray-400 text-center text-xs border-r border-gray-300"
              >
                {{ formatWeek(week.weekStart) }}
              </div>
              <div
                class="w-1/2 p-2 font-bold bg-gray-200 border-b border-gray-400 text-center text-xs"
              >
                貼文
              </div>
            </div>
            <div
              v-for="day in week.days"
              :key="day"
              class="flex w-full border-b border-gray-100"
              :style="{ height: timePointHeight + 'px' }"
            >
              <div class="w-1/2 flex items-center justify-center border-r border-gray-100 p-1">
                <span class="text-xs text-gray-600">{{ formatDate(day) }}</span>
              </div>
              <div class="w-1/2 flex items-center justify-center p-1">
                <img
                  v-if="postsByDay[day.toDateString()] && postsByDay[day.toDateString()].length > 0 && avatar"
                  :src="avatar"
                  class="w-6 h-6 rounded-full object-cover"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="selectedUnit === 'month'">
          <div
            v-for="month in months"
            :key="month.monthStart"
            class="month-group"
          >
            <div class="flex w-full">
              <div
                class="w-1/2 p-2 font-bold bg-gray-200 border-b border-gray-400 text-center text-xs border-r border-gray-300"
              >
                {{ formatMonth(month.monthStart) }}
              </div>
              <div
                class="w-1/2 p-2 font-bold bg-gray-200 border-b border-gray-400 text-center text-xs"
              >
                貼文
              </div>
            </div>
            <div
              v-for="day in month.days"
              :key="day"
              class="flex w-full border-b border-gray-100"
              :style="{ height: timePointHeight + 'px' }"
            >
              <div class="w-1/2 flex items-center justify-center border-r border-gray-100 p-1">
                <span class="text-xs text-gray-600">{{ formatDate(day) }}</span>
              </div>
              <div class="w-1/2 flex items-center justify-center p-1">
                <img
                  v-if="postsByDay[day.toDateString()] && postsByDay[day.toDateString()].length > 0 && avatar"
                  :src="avatar"
                  class="w-6 h-6 rounded-full object-cover"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-1">
        <div
          v-for="phase in phases"
          :key="phase.id"
          class="border-r border-gray-100 relative"
          :style="{ width: phaseWidth + 'px' }"
        >
          <div
            v-for="day in days"
            :key="day"
            class="border-b border-gray-100 relative"
            :style="{ height: timePointHeight + 'px' }"
            :class="{ 'bg-gray-200': isHoliday(day) }"
          >
            <!-- 貼文顯示在直向實線旁 -->
            <div
              v-if="postsByDay[day.toDateString()] && postsByDay[day.toDateString()].length > 0"
              class="absolute right-1 top-1/2 transform -translate-y-1/2 z-10"
            >
              <img
                v-if="avatar"
                :src="avatar"
                class="w-5 h-5 rounded-full object-cover border border-white"
                alt="Avatar"
              />
              <div
                v-else
                class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs"
              >
                {{ postsByDay[day.toDateString()].length }}
              </div>
            </div>
          </div>
          <!-- Vertical continuous phase line -->
          <div
            v-if="getPhaseLineStyle(phase)"
            class="absolute w-0.5 bg-black"
            :style="getPhaseLineStyle(phase)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  phases: {
    type: Array,
    default: () => [],
  },
  posts: {
    type: Array,
    default: () => [],
  },
  avatar: {
    type: String,
    default: '',
  },
});

const phaseWidth = ref(120);
const timePointHeight = ref(30);
const selectedUnit = ref("week");
const scrollContainer = ref(null);
const currentScrollTime = ref(props.startTime);
const totalDuration = computed(() => props.endTime - props.startTime);

const days = computed(() => {
  const startDate = new Date(props.startTime * 1000);
  const endDate = new Date(props.endTime * 1000);
  const daysArray = [];
  const current = new Date(startDate);
  while (current <= endDate) {
    daysArray.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return daysArray;
});

const weeks = computed(() => {
  const weekMap = {};
  days.value.forEach((day) => {
    const weekStart = new Date(day);
    weekStart.setDate(day.getDate() - day.getDay()); // Sunday start
    const key = weekStart.toISOString().split("T")[0];
    if (!weekMap[key]) {
      weekMap[key] = { weekStart, days: [] };
    }
    weekMap[key].days.push(day);
  });
  return Object.values(weekMap);
});

const months = computed(() => {
  const monthMap = {};
  days.value.forEach((day) => {
    const monthKey = day.getFullYear() + "-" + (day.getMonth() + 1);
    if (!monthMap[monthKey]) {
      monthMap[monthKey] = {
        monthStart: new Date(day.getFullYear(), day.getMonth(), 1),
        days: [],
      };
    }
    monthMap[monthKey].days.push(day);
  });
  return Object.values(monthMap);
});

const postsByDay = computed(() => {
  const map = {};
  props.posts.forEach(post => {
    const date = new Date(parseInt(post.time) * 1000);
    const key = date.toDateString();
    if (!map[key]) map[key] = [];
    map[key].push(post);
  });
  return map;
});

const formatDate = (date) => {
  return date.getDate();
};

const formatWeek = (date) => {
  const endOfWeek = new Date(date);
  endOfWeek.setDate(date.getDate() + 6);
  return `${date.toLocaleDateString("zh-TW", {
    month: "short",
    day: "numeric",
  })} - ${endOfWeek.toLocaleDateString("zh-TW", {
    month: "short",
    day: "numeric",
  })}`;
};

const formatMonth = (date) => {
  return date.toLocaleDateString("zh-TW", { year: "numeric", month: "long" });
};

const isTimeInPhase = (time, phase) => {
  return time >= phase.startTime && time <= phase.endTime;
};

const getDayIndex = (time) => {
  const date = new Date(time * 1000);
  return days.value.findIndex((d) => d.toDateString() === date.toDateString());
};

const getPhaseLineStyle = (phase) => {
  const startIndex = getDayIndex(phase.startTime);
  const endIndex = getDayIndex(phase.endTime);
  if (startIndex >= 0 && endIndex >= 0 && startIndex <= endIndex) {
    const top = startIndex * timePointHeight.value;
    const height = (endIndex - startIndex + 1) * timePointHeight.value;
    return {
      top: top + "px",
      height: height + "px",
      left: "50%",
      transform: "translateX(-50%)",
    };
  }
  return null;
};

const onScroll = () => {
  if (!scrollContainer.value) return;
  const scrollTop = scrollContainer.value.scrollTop;
  const dayIndex = Math.floor(scrollTop / timePointHeight.value);
  const day = days.value[dayIndex];
  if (day) {
    currentScrollTime.value = day.getTime() / 1000;
  }
};

const yearMonthHint = computed(() => {
  const date = new Date(currentScrollTime.value * 1000);
  return date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
  });
});

// 判斷是否為假日
const isHoliday = (date) => {
  const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

  // 週末
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return true;
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  // 國定假日 (簡化版，主要假日)
  const holidays = [
    // 元旦
    { month: 1, day: 1 },
    // 春節 (農曆，簡化為固定日期)
    { month: 2, day: 10 }, // 春節
    { month: 2, day: 11 }, // 春節
    { month: 2, day: 12 }, // 春節
    // 清明節
    { month: 4, day: 5 },
    // 兒童節
    { month: 4, day: 4 },
    // 端午節
    { month: 6, day: 10 },
    // 中秋節
    { month: 9, day: 17 },
    // 國慶日
    { month: 10, day: 10 },
  ];

  return holidays.some(holiday => holiday.month === month && holiday.day === day);
};
</script>
