<template>
  <div class="page-background content-scroller">
    <header class="pt-25 w-full z-10 shadow-md bg-header text-rice-500">
      <div class="container mx-auto flex items-center p-4">
        <div class="w-1/3">
          <router-link to="/actions" class="back-home-btn">
            <span class="text">
              <CJKSub align="left">
                <template #zh>取消</template>
                <template #en>Cancel</template>
              </CJKSub>
            </span>
            <span class="icon">←</span>
          </router-link>
        </div>
        <div class="w-1/3 text-center">
          <h1 class="text-2xl md:text-3xl font-bold">建立行動</h1>
        </div>
        <div class="w-1/3"></div>
      </div>
    </header>
    <main class="max-w-4xl mx-auto p-4 pt-10 text-[1.2rem]">
      <div class="flex flex-col gap-4">
        <!-- Title Input -->
        <div>
          <label for="title" class="block text-lg font-medium">標題*</label>
          <input
            type="text"
            v-model="action.title"
            id="title"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            :class="{ 'border-red-500': errors.title }"
          />
          <p v-if="errors.title" class="text-red-500 text-sm mt-1">
            請輸入標題
          </p>
        </div>

        <!-- Time Input -->
        <div class="flex flex-row gap-5">
          <div class="w-1/2">
            <label for="startTime" class="block text-lg font-medium"
              >起始時間*</label
            >
            <input
              type="date"
              v-model="action.startTime"
              id="startTime"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              :class="{ 'border-red-500': errors.startTime }"
            />
            <p v-if="errors.startTime" class="text-red-500 text-sm mt-1">
              請輸入起始時間
            </p>
          </div>
          <div class="w-1/2">
            <label for="endTime" class="block text-lg font-medium"
              >結束時間*</label
            >
            <input
              type="date"
              v-model="action.endTime"
              id="endTime"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              :class="{ 'border-red-500': errors.endTime }"
            />
            <p v-if="errors.endTime" class="text-red-500 text-sm mt-1">
              請輸入結束時間
            </p>
          </div>
        </div>
        <p v-if="timeRangeError" class="text-red-500 text-sm mt-1">
          結束時間必須晚於起始時間
        </p>

        <!-- SDGs Input -->
        <div>
          <label class="block text-lg font-medium">SDGs標籤*</label>
          <div class="mt-2 relative">
            <!-- Search Input with Selected Tags -->
            <div class="relative">
              <div
                class="flex flex-wrap items-center gap-1 p-2 border border-gray-300 rounded-md shadow-sm focus-within:ring-indigo-500 focus-within:border-indigo-500 min-h-[2.5rem]"
                :class="{ 'border-red-500': errors.tags }"
              >
                <!-- Selected Tags inside input -->
                <span
                  v-for="sdg in selectedSdgs"
                  :key="sdg.value"
                  class="inline-flex items-center px-2 py-1 text-sm bg-blue-500 text-white rounded-full"
                >
                  <span>{{ sdg.title }}</span>
                  <button
                    @click="removeTag(sdg.value)"
                    class="ml-1 text-white hover:text-gray-200"
                  >
                    ×
                  </button>
                </span>
                <!-- Search Input -->
                <input
                  type="text"
                  v-model="sdgSearch"
                  @focus="showDropdown = true"
                  @input="filterSdgs"
                  class="flex-1 min-w-0 outline-none bg-transparent"
                  :placeholder="
                    selectedSdgs.length === 0 ? '搜尋SDGs標籤...' : ''
                  "
                  ref="searchInput"
                />
              </div>
              <div
                v-if="showDropdown"
                ref="dropdown"
                class="absolute z-10 w-full bg-pblue-200 border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto mt-1"
              >
                <div
                  v-for="sdg in filteredSdgs"
                  :key="sdg.value"
                  @click="selectTag(sdg)"
                  class="px-3 py-2 hover:bg-orange-300 cursor-pointer"
                >
                  {{ sdg.title }}
                </div>
                <div
                  v-if="filteredSdgs.length === 0"
                  class="px-3 py-2 text-gray-500"
                >
                  無匹配的標籤
                </div>
              </div>
            </div>
            <p v-if="errors.tags" class="text-red-500 text-sm mt-1">
              請至少選擇一個SDGs標籤
            </p>
          </div>
        </div>

        <!-- Intro Input -->
        <div>
          <label for="intro" class="block text-lg font-medium">描述</label>
          <input
            type="text"
            v-model="action.intro"
            id="intro"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <!-- Progress Stages -->
        <div>
          <label class="block text-lg font-medium">階段規劃</label>

          <!-- Action Timeline Info -->
          <div class="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <div class="flex items-center gap-2 text-sm text-blue-800">
              <i class="fa-solid fa-info-circle"></i>
              <span v-if="action.startTime && action.endTime">
                行動期間：{{ formatDateForDisplay(action.startTime) }} 至
                {{ formatDateForDisplay(action.endTime) }} （{{
                  getActionDurationText()
                }}）
              </span>
              <span v-else-if="action.startTime">
                行動起始：{{
                  formatDateForDisplay(action.startTime)
                }}（無結束期限）
              </span>
              <span v-else class="text-orange-600">
                請先設定行動時間以便規劃階段
              </span>
            </div>
          </div>

          <!-- Timeline Visualization -->
          <div
            v-if="action.stages.length > 0 && hasValidActionTime"
            class="mt-4"
          >
            <div class="text-sm font-medium text-gray-700 mb-2">
              時間軸視覺化
            </div>
            <div class="bg-white border border-gray-200 rounded-md p-4">
              <div class="relative">
                <!-- Timeline background -->
                <div
                  class="h-8 bg-gray-100 rounded-full relative overflow-hidden"
                >
                  <!-- Stage bars -->
                  <div
                    v-for="(stage, index) in validStages"
                    :key="stage.id"
                    :style="getStageBarStyle(stage, index)"
                    class="absolute h-full rounded transition-all duration-300 hover:opacity-80 cursor-pointer border-2 border-white"
                    :class="getStageBarColor(index)"
                    @click="editStageTime(getStageOriginalIndex(stage))"
                    :title="`${stage.name}: ${formatDateForDisplay(
                      stage.startTime
                    )} - ${formatDateForDisplay(stage.endTime)}`"
                  >
                    <div class="text-xs text-white font-medium p-1 truncate">
                      {{ stage.name }}
                    </div>
                  </div>

                  <!-- Overlap indicators -->
                  <div
                    v-for="overlap in stageOverlaps"
                    :key="`overlap-${overlap.start}-${overlap.end}`"
                    :style="getOverlapStyle(overlap)"
                    class="absolute h-full bg-red-500 opacity-70 border-2 border-red-600"
                    title="時間重疊"
                  ></div>
                </div>

                <!-- Timeline labels -->
                <div class="flex justify-between mt-2 text-xs text-gray-500">
                  <span>{{ formatDateForDisplay(timelineStart) }}</span>
                  <span v-if="hasEndTime">{{
                    formatDateForDisplay(timelineEnd)
                  }}</span>
                  <span v-else>進行中...</span>
                </div>
              </div>

              <!-- Legend -->
              <div class="mt-3 flex flex-wrap gap-2 text-xs">
                <div class="flex items-center gap-1">
                  <div class="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>已規劃階段</span>
                </div>
                <div class="flex items-center gap-1">
                  <div class="w-3 h-3 bg-gray-300 rounded"></div>
                  <span>空檔期間</span>
                </div>
                <div
                  v-if="stageOverlaps.length > 0"
                  class="flex items-center gap-1"
                >
                  <div class="w-3 h-3 bg-red-500 rounded"></div>
                  <span>時間重疊</span>
                </div>
              </div>
            </div>
          </div>

          <section class="flex flex-row gap-4">
            <!-- Add New Stage -->
            <div class="mt-4 p-4 border border-gray-200 rounded-md">
              <h3 class="text-md font-medium mb-3">新增階段</h3>
              <div class="flex flex-col gap-3">
                <div>
                  <label for="newStageName" class="block text-sm font-medium"
                    >階段名稱</label
                  >
                  <input
                    type="text"
                    v-model="newStage.name"
                    id="newStageName"
                    placeholder="輸入階段名稱"
                    class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  />
                </div>
                <div class="flex gap-3">
                  <div class="flex-1">
                    <label
                      for="newStageStartTime"
                      class="block text-sm font-medium"
                      >開始時間</label
                    >
                    <input
                      type="date"
                      v-model="newStage.startTime"
                      id="newStageStartTime"
                      :min="action.startTime"
                      :max="action.endTime"
                      class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      :class="{
                        'border-orange-500': newStageTimeWarning.start,
                      }"
                    />
                    <p
                      v-if="newStageTimeWarning.start"
                      class="text-orange-500 text-xs mt-1"
                    >
                      {{ newStageTimeWarning.start }}
                    </p>
                  </div>
                  <div class="flex-1">
                    <label
                      for="newStageEndTime"
                      class="block text-sm font-medium"
                      >結束時間</label
                    >
                    <input
                      type="date"
                      v-model="newStage.endTime"
                      id="newStageEndTime"
                      :min="newStage.startTime || action.startTime"
                      :max="action.endTime"
                      class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      :class="{ 'border-orange-500': newStageTimeWarning.end }"
                    />
                    <p
                      v-if="newStageTimeWarning.end"
                      class="text-orange-500 text-xs mt-1"
                    >
                      {{ newStageTimeWarning.end }}
                    </p>
                  </div>
                </div>

                <!-- Conflict warnings -->
                <div
                  v-if="newStageConflicts.length > 0"
                  class="p-2 bg-yellow-50 border border-yellow-200 rounded text-sm"
                >
                  <div class="text-yellow-800 font-medium mb-1">
                    ⚠️ 時間衝突警告：
                  </div>
                  <ul class="text-yellow-700 text-xs space-y-1">
                    <li v-for="conflict in newStageConflicts" :key="conflict">
                      {{ conflict }}
                    </li>
                  </ul>
                </div>

                <button
                  @click="addStage"
                  :disabled="!canAddStage"
                  class="self-start bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm transition-colors"
                >
                  <i class="fa-solid fa-plus mr-1"></i>
                  新增階段
                </button>
              </div>
            </div>

            <!-- Existing Stages List -->
            <div v-if="action.stages.length > 0" class="mt-4">
              <div class="flex items-center justify-between mb-3">
                <div class="text-sm font-medium text-gray-700">
                  已規劃階段 ({{ action.stages.length }})
                </div>
                <div class="text-xs text-gray-500">可拖曳調整順序</div>
              </div>

              <div ref="sortableContainer" class="space-y-3">
                <div
                  v-for="(stage, index) in action.stages"
                  :key="stage.id"
                  :data-id="stage.id"
                  class="sortable-item p-4 border rounded-lg bg-white hover:shadow-md transition-all duration-200"
                  :class="getStageCardClass(stage, index)"
                >
                  <div class="flex items-start justify-between">
                    <div class="flex-1">
                      <div class="flex items-center gap-2">
                        <span
                          class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium"
                        >
                          第{{ index + 1 }}階段
                        </span>
                        <div class="font-medium text-gray-900">
                          {{ stage.name }}
                        </div>
                      </div>

                      <div class="mt-2 text-sm">
                        <div
                          v-if="stage.startTime && stage.endTime"
                          class="text-gray-600"
                        >
                          <i class="fa-solid fa-calendar mr-1"></i>
                          {{ formatDateForDisplay(stage.startTime) }} 至
                          {{ formatDateForDisplay(stage.endTime) }}
                          <span class="text-gray-400 ml-2">
                            ({{
                              getDurationText(stage.startTime, stage.endTime)
                            }})
                          </span>
                        </div>
                        <div v-else class="text-orange-500">
                          <i class="fa-solid fa-exclamation-triangle mr-1"></i>
                          請設定時間
                        </div>

                        <!-- Stage validation messages -->
                        <div
                          v-if="getStageValidationMessage(stage, index)"
                          class="text-red-500 text-xs mt-1"
                        >
                          {{ getStageValidationMessage(stage, index) }}
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 ml-4">
                      <button
                        @click="editStageTime(index)"
                        class="text-blue-500 hover:text-blue-700 text-sm px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                        title="編輯時間"
                      >
                        <i class="fa-solid fa-edit mr-1"></i>編輯
                      </button>
                      <button
                        @click="removeStage(index)"
                        class="text-red-500 hover:text-red-700 text-sm px-2 py-1 rounded hover:bg-red-50 transition-colors"
                        title="刪除階段"
                      >
                        <i class="fa-solid fa-trash mr-1"></i>刪除
                      </button>
                      <div
                        class="text-gray-400 cursor-move px-2 py-1 hover:text-gray-600"
                        title="拖曳排序"
                      >
                        <i class="fa-solid fa-grip-vertical"></i>
                      </div>
                    </div>
                  </div>

                  <!-- Edit Time Inputs -->
                  <div
                    v-if="editingStageIndex === index"
                    class="mt-4 pt-4 border-t border-gray-200 bg-gray-50 -mx-4 -mb-4 px-4 pb-4 rounded-b-lg"
                  >
                    <div class="text-sm font-medium text-gray-700 mb-3">
                      編輯階段時間
                    </div>
                    <div class="flex gap-3">
                      <div class="flex-1">
                        <label class="block text-sm font-medium text-gray-700"
                          >開始時間</label
                        >
                        <input
                          type="date"
                          v-model="editingStage.startTime"
                          :min="action.startTime"
                          :max="action.endTime"
                          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        />
                      </div>
                      <div class="flex-1">
                        <label class="block text-sm font-medium text-gray-700"
                          >結束時間</label
                        >
                        <input
                          type="date"
                          v-model="editingStage.endTime"
                          :min="editingStage.startTime || action.startTime"
                          :max="action.endTime"
                          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        />
                      </div>
                    </div>
                    <div class="flex gap-2 mt-3">
                      <button
                        @click="saveStageTime(index)"
                        :disabled="!canSaveStageTime"
                        class="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        <i class="fa-solid fa-check mr-1"></i>儲存
                      </button>
                      <button
                        @click="cancelEditStageTime"
                        class="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
                      >
                        <i class="fa-solid fa-times mr-1"></i>取消
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Tiptap Editor -->
        <!-- <div>
          <label class="block text-lg font-medium">內容*</label>
          <div
            v-if="editor"
            class="border p-2 flex gap-2 rounded-t-md mt-1"
            :class="{ 'border-red-500': errors.content }"
          >
            <button
              @click="editor.chain().focus().toggleTaskList().run()"
              :class="{ 'bg-blue-200': editor.isActive('taskList') }"
              class="p-2 rounded hover:bg-blue-200"
              title="待辦清單"
            >
              <i class="fa-solid fa-list-check"></i>
            </button>
            <button
              @click="editor.chain().focus().toggleBulletList().run()"
              :class="{ 'bg-blue-200': editor.isActive('bulletList') }"
              class="p-2 rounded hover:bg-blue-200"
              title="項目符號清單"
            >
              <i class="fa-solid fa-list-ul"></i>
            </button>
          </div>
          <EditorContent
            :editor="editor"
            class="w-full prose max-w-none border-x border-b p-4 rounded-b-md bg-white text-black"
            :class="{ 'border-red-500': errors.content }"
          />
          <p v-if="errors.content" class="text-red-500 text-sm mt-1">
            請輸入內容
          </p>
        </div> -->

        <!-- Save Button -->
        <div class="self-end">
          <button
            @click="saveAction"
            class="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            儲存
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onUnmounted, computed, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import CJKSub from "@/components/CJKSub.vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { useClickOutside } from "@/composables/useClickOutside.js";
import { useDateTime } from "@/composables/useDateTime.js";
import sdgsData from "@/data/SDGs_goal.json";
import Sortable from "sortablejs";

const router = useRouter();
const { formatISO } = useDateTime();

const action = ref({
  title: "",
  img_url: "",
  content: "",
  intro: "",
  types: [],
  startTime: "",
  endTime: "",
  stages: [],
});

// Filter out the "All" option and clean titles
const sdgOptions = sdgsData
  .filter((s) => s.value !== 0)
  .map((tag) => ({
    ...tag,
    title: tag.title.replace(/<br\s*\/?>/g, ""),
  }));

const sdgSearch = ref("");
const showDropdown = ref(false);
const dropdown = ref(null);

// Progress Stages
const newStage = ref({
  name: "",
  startTime: "",
  endTime: "",
});

const editingStageIndex = ref(-1);
const editingStage = ref({
  startTime: "",
  endTime: "",
});

const sortableContainer = ref(null);
let sortableInstance = null;

const filteredSdgs = computed(() => {
  if (!sdgSearch.value)
    return sdgOptions.filter((sdg) => !action.value.types.includes(sdg.value));
  return sdgOptions.filter(
    (sdg) =>
      sdg.title.toLowerCase().includes(sdgSearch.value.toLowerCase()) &&
      !action.value.types.includes(sdg.value)
  );
});

const selectedSdgs = computed(() => {
  return sdgOptions.filter((sdg) => action.value.types.includes(sdg.value));
});

const timeRangeError = computed(() => {
  if (!action.value.startTime || !action.value.endTime) return false;
  return new Date(action.value.startTime) > new Date(action.value.endTime);
});

const canAddStage = computed(() => {
  return (
    newStage.value.name.trim() &&
    newStage.value.startTime &&
    newStage.value.endTime &&
    new Date(newStage.value.startTime) <= new Date(newStage.value.endTime) &&
    isStageTimeValidForAction(newStage.value)
  );
});

// Timeline and validation computed properties
const hasValidActionTime = computed(() => {
  return action.value.startTime;
});

const hasEndTime = computed(() => {
  return !!action.value.endTime;
});

const timelineStart = computed(() => {
  return action.value.startTime;
});

const timelineEnd = computed(() => {
  return action.value.endTime || getDefaultEndTime();
});

const validStages = computed(() => {
  return action.value.stages.filter((stage) => stage.startTime && stage.endTime);
});

const stageOverlaps = computed(() => {
  const overlaps = [];
  const sortedStages = [...validStages.value].sort(
    (a, b) => new Date(a.startTime) - new Date(b.startTime)
  );

  for (let i = 0; i < sortedStages.length - 1; i++) {
    const current = sortedStages[i];
    const next = sortedStages[i + 1];

    if (new Date(current.endTime) > new Date(next.startTime)) {
      overlaps.push({
        start: next.startTime,
        end: current.endTime < next.endTime ? current.endTime : next.endTime,
      });
    }
  }

  return overlaps;
});

const newStageTimeWarning = computed(() => {
  const warnings = { start: "", end: "" };

  if (newStage.value.startTime) {
    if (
      action.value.startTime &&
      new Date(newStage.value.startTime) < new Date(action.value.startTime)
    ) {
      warnings.start = "開始時間不能早於行動開始時間";
    }
    if (
      action.value.endTime &&
      new Date(newStage.value.startTime) > new Date(action.value.endTime)
    ) {
      warnings.start = "開始時間不能晚於行動結束時間";
    }
  }

  if (newStage.value.endTime) {
    if (
      action.value.endTime &&
      new Date(newStage.value.endTime) > new Date(action.value.endTime)
    ) {
      warnings.end = "結束時間不能晚於行動結束時間";
    }
  }

  return warnings;
});

const newStageConflicts = computed(() => {
  const conflicts = [];
  if (!newStage.value.startTime || !newStage.value.endTime) return conflicts;

  const newStart = new Date(newStage.value.startTime);
  const newEnd = new Date(newStage.value.endTime);

  validStages.value.forEach((stage, index) => {
    const stageStart = new Date(stage.startTime);
    const stageEnd = new Date(stage.endTime);

    // Check for overlaps
    if (
      (newStart >= stageStart && newStart < stageEnd) ||
      (newEnd > stageStart && newEnd <= stageEnd) ||
      (newStart <= stageStart && newEnd >= stageEnd)
    ) {
      conflicts.push(`與「${stage.name}」時間重疊`);
    }
  });

  return conflicts;
});

const canSaveStageTime = computed(() => {
  return (
    editingStage.value.startTime &&
    editingStage.value.endTime &&
    new Date(editingStage.value.startTime) <=
      new Date(editingStage.value.endTime)
  );
});

const selectTag = (sdg) => {
  if (!action.value.types.includes(sdg.value)) {
    action.value.types.push(sdg.value);
  }
  sdgSearch.value = "";
  showDropdown.value = false;
};

const removeTag = (tagValue) => {
  const index = action.value.types.indexOf(tagValue);
  if (index !== -1) {
    action.value.types.splice(index, 1);
  }
};

const filterSdgs = () => {
  // This is handled by computed
};

// Progress Stages Methods
const addStage = () => {
  if (!canAddStage.value) return;

  const newId = Date.now().toString();
  action.value.stages.push({
    id: newId,
    name: newStage.value.name.trim(),
    startTime: newStage.value.startTime,
    endTime: newStage.value.endTime,
  });

  // Reset new stage form
  newStage.value = {
    name: "",
    startTime: "",
    endTime: "",
  };
};

const removeStage = (index) => {
  action.value.stages.splice(index, 1);
  if (editingStageIndex.value === index) {
    editingStageIndex.value = -1;
  } else if (editingStageIndex.value > index) {
    editingStageIndex.value--;
  }
};

const editStageTime = (index) => {
  editingStageIndex.value = index;
  const stage = action.value.stages[index];
  editingStage.value = {
    startTime: stage.startTime || "",
    endTime: stage.endTime || "",
  };
};

const saveStageTime = (index) => {
  if (editingStage.value.startTime && editingStage.value.endTime) {
    if (
      new Date(editingStage.value.startTime) <=
      new Date(editingStage.value.endTime)
    ) {
      action.value.stages[index].startTime = editingStage.value.startTime;
      action.value.stages[index].endTime = editingStage.value.endTime;
      editingStageIndex.value = -1;
    } else {
      alert("結束時間必須晚於或等於開始時間");
    }
  } else {
    alert("請填寫完整的時間資訊");
  }
};

const cancelEditStageTime = () => {
  editingStageIndex.value = -1;
  editingStage.value = {
    startTime: "",
    endTime: "",
  };
};

const formatDateForDisplay = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("zh-TW");
};

// New helper methods for timeline and validation
const getActionDurationText = () => {
  if (!action.value.startTime || !action.value.endTime) return "";
  const start = new Date(action.value.startTime);
  const end = new Date(action.value.endTime);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} 天`;
};

const getDurationText = (startTime, endTime) => {
  if (!startTime || !endTime) return "";
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} 天`;
};

const getDefaultEndTime = () => {
  if (!action.value.startTime) return null;
  const start = new Date(action.value.startTime);
  start.setMonth(start.getMonth() + 3); // Default to 3 months later
  return start.toISOString().split("T")[0];
};

const isStageTimeValidForAction = (stage) => {
  if (!stage.startTime || !stage.endTime) return false;
  if (
    action.value.startTime &&
    new Date(stage.startTime) < new Date(action.value.startTime)
  )
    return false;
  if (
    action.value.endTime &&
    new Date(stage.endTime) > new Date(action.value.endTime)
  )
    return false;
  return true;
};

const getStageBarStyle = (stage, index) => {
  const totalDuration = getTotalTimelineDuration();
  const stageStart = new Date(stage.startTime);
  const stageEnd = new Date(stage.endTime);
  const timelineStartDate = new Date(timelineStart.value);

  const startOffset = Math.max(
    0,
    ((stageStart - timelineStartDate) / totalDuration) * 100
  );
  const duration = ((stageEnd - stageStart) / totalDuration) * 100;

  return {
    left: `${startOffset}%`,
    width: `${duration}%`,
    zIndex: 10 + index,
  };
};

const getStageBarColor = (index) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-red-500",
  ];
  return colors[index % colors.length];
};

const getOverlapStyle = (overlap) => {
  const totalDuration = getTotalTimelineDuration();
  const overlapStart = new Date(overlap.start);
  const overlapEnd = new Date(overlap.end);
  const timelineStartDate = new Date(timelineStart.value);

  const startOffset = Math.max(
    0,
    ((overlapStart - timelineStartDate) / totalDuration) * 100
  );
  const duration = ((overlapEnd - overlapStart) / totalDuration) * 100;

  return {
    left: `${startOffset}%`,
    width: `${duration}%`,
    zIndex: 100,
  };
};

const getTotalTimelineDuration = () => {
  const start = new Date(timelineStart.value);
  const end = new Date(timelineEnd.value);
  return end - start;
};

const getStageOriginalIndex = (stage) => {
  return action.value.stages.findIndex((s) => s.id === stage.id);
};

const getStageCardClass = (stage, index) => {
  let classes = [];

  // Validation-based styling
  if (!stage.startTime || !stage.endTime) {
    classes.push("border-orange-300 bg-orange-50");
  } else if (!isStageTimeValidForAction(stage)) {
    classes.push("border-red-300 bg-red-50");
  } else {
    classes.push("border-gray-200");
  }

  // Check for conflicts with other stages
  const hasConflict = validStages.value.some((otherStage, otherIndex) => {
    if (otherStage.id === stage.id) return false;
    const stageStart = new Date(stage.startTime);
    const stageEnd = new Date(stage.endTime);
    const otherStart = new Date(otherStage.startTime);
    const otherEnd = new Date(otherStage.endTime);

    return (
      (stageStart >= otherStart && stageStart < otherEnd) ||
      (stageEnd > otherStart && stageEnd <= otherEnd) ||
      (stageStart <= otherStart && stageEnd >= otherEnd)
    );
  });

  if (hasConflict) {
    classes.push("border-yellow-300 bg-yellow-50");
  }

  return classes.join(" ");
};

const getStageValidationMessage = (stage, index) => {
  if (!stage.startTime || !stage.endTime) return "";

  if (!isStageTimeValidForAction(stage)) {
    if (
      action.value.startTime &&
      new Date(stage.startTime) < new Date(action.value.startTime)
    ) {
      return "開始時間早於行動開始時間";
    }
    if (
      action.value.endTime &&
      new Date(stage.endTime) > new Date(action.value.endTime)
    ) {
      return "結束時間晚於行動結束時間";
    }
  }

  // Check for conflicts
  const conflicts = validStages.value.filter((otherStage) => {
    if (otherStage.id === stage.id) return false;
    const stageStart = new Date(stage.startTime);
    const stageEnd = new Date(stage.endTime);
    const otherStart = new Date(otherStage.startTime);
    const otherEnd = new Date(otherStage.endTime);

    return (
      (stageStart >= otherStart && stageStart < otherEnd) ||
      (stageEnd > otherStart && stageEnd <= otherEnd) ||
      (stageStart <= otherStart && stageEnd >= otherEnd)
    );
  });

  if (conflicts.length > 0) {
    return `與「${conflicts[0].name}」${
      conflicts.length > 1 ? "等階段" : ""
    }時間重疊`;
  }

  return "";
};

const initSortable = () => {
  if (sortableContainer.value) {
    sortableInstance = Sortable.create(sortableContainer.value, {
      handle: ".sortable-item",
      animation: 150,
      onEnd: (evt) => {
        const { oldIndex, newIndex } = evt;
        if (oldIndex !== newIndex) {
          // Move the stage in the array
          const movedStage = action.value.stages.splice(oldIndex, 1)[0];
          action.value.stages.splice(newIndex, 0, movedStage);

          // Reset time for all stages after reordering
          action.value.stages.forEach((stage) => {
            stage.startTime = "";
            stage.endTime = "";
          });

          // Cancel any ongoing editing
          editingStageIndex.value = -1;
        }
      },
    });
  }
};

const errors = ref({
  title: false,
  tags: false,
  content: false,
  startTime: false,
  endTime: false,
  timeRange: false,
});

const editor = useEditor({
  content: "<p>開始寫下你的故事...</p>",
  extensions: [
    StarterKit,
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
  ],
});

useClickOutside(dropdown, () => {
  showDropdown.value = false;
});

onMounted(() => {
  // Initialize sortable after the component is mounted
  setTimeout(() => {
    initSortable();
  }, 100);
});

onUnmounted(() => {
  if (editor.value) {
    editor.value.destroy();
  }
  if (sortableInstance) {
    sortableInstance.destroy();
  }
});

const saveAction = () => {
  // Reset errors
  errors.value = {
    title: false,
    tags: false,
    content: false,
    startTime: false,
    endTime: false,
    timeRange: false,
  };

  // 1. Set editor content
  if (editor.value) {
    action.value.content = editor.value.getHTML();
  }

  // 2. Validation
  let hasError = false;
  if (!action.value.startTime) {
    errors.value.startTime = true;
    hasError = true;
  }
  if (!action.value.endTime) {
    errors.value.endTime = true;
    hasError = true;
  }
  if (timeRangeError.value) {
    errors.value.timeRange = true;
    hasError = true;
  }
  if (!action.value.title.trim()) {
    errors.value.title = true;
    hasError = true;
  }
  if (action.value.types.length === 0) {
    errors.value.tags = true;
    hasError = true;
  }
  if (editor.value.isEmpty) {
    errors.value.content = true;
    hasError = true;
  }

  if (hasError) {
    return;
  }

  // 3. Convert dates to ISO format
  const startTimeTimestamp = Math.floor(
    new Date(action.value.startTime).getTime() / 1000
  );
  const endTimeTimestamp = Math.floor(
    new Date(action.value.endTime).getTime() / 1000
  );

  const actionData = {
    ...action.value,
    startTime: formatISO(startTimeTimestamp),
    endTime: formatISO(endTimeTimestamp),
  };

  // 4. "Save" data (log to console for now)
  console.log("New Action Data:", actionData);
  alert("故事已儲存 (請查看主控台)！");

  // 5. Navigate back
  // router.push("/action");
};
</script>

<style scoped>
.prose :deep(ul[data-type="taskList"]) {
  list-style: none;
  padding: 0;
}
.prose :deep(li[data-type="taskItem"]) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.prose :deep(li[data-type="taskItem"]) > label {
  flex: 0 0 auto;
  margin-right: 0.5rem;
}
.prose :deep(li[data-type="taskItem"]) > div {
  flex: 1 1 auto;
}
.prose :deep(li[data-type="taskItem"][data-checked="true"]) {
  text-decoration: line-through;
  color: #888;
}
.prose :deep(ul:not([data-type="taskList"])) {
  list-style-type: disc;
  padding-left: 2rem;
}
.prose :deep(ul:not([data-type="taskList"])) li {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}
</style>
