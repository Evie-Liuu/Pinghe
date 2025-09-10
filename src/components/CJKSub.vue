<template>
  <div class="cjk-sub" :class="align">
    <div class="cjk-text" ref="zhRef"><slot name="zh" /></div>
    <div class="en-text" ref="enRef" :style="enStyle">
      <slot name="en" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from "vue";

const props = defineProps({
  align: { type: String, default: "center" }, // left | center | right
});

const zhRef = ref(null);
const enRef = ref(null);
const zhWidth = ref(0);
const enWidth = ref(0);

const enStyle = computed(() => {
  if (zhWidth.value > 0 && enWidth.value > 0 && enWidth.value > zhWidth.value) {
    const scale = zhWidth.value / enWidth.value;
    return {
      transform: `scaleX(${scale})`,
      width: zhWidth.value + "px",
      transformOrigin:
        props.align === "left"
          ? "left"
          : props.align === "right"
          ? "right"
          : "center",
    };
  }
  return {};
});

onMounted(async () => {
  await nextTick();
  if (zhRef.value) {
    zhWidth.value = zhRef.value.offsetWidth;
  }
  if (enRef.value) {
    enWidth.value = enRef.value.offsetWidth;
  }
});
</script>

<style scoped>
.cjk-sub {
  display: inline-flex;
  flex-direction: column;
  line-height: 1.2;
}

.cjk-sub.center {
  align-items: center;
  text-align: center;
}
.cjk-sub.left {
  align-items: flex-start;
  text-align: left;
}
.cjk-sub.right {
  align-items: flex-end;
  text-align: right;
}

.cjk-text {
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
}

.en-text {
  font-size: 0.85rem;
  color: #666;
  white-space: nowrap;
  /* overflow: hidden; */ /* We use scaling now */
}
</style>
