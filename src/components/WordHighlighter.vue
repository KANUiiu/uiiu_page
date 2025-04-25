<script setup>
defineProps({
  keyword: String,
});
</script>

<template>
  <span class="highlight"><slot /></span>
</template>

<style scoped>
.highlight {
  position: relative;
  font-weight: bold;
  z-index: 1;
  cursor: pointer;
}

/* 初始狀態只在底部出現細底線 */
.highlight::after {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px; /* 初始底線高度 */
  background-color: rgba(153, 187, 225, 0.5);
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* hover 時展開高亮區塊 */
.highlight:hover::after {
  top: 0;
  bottom: 0;
  height: auto; /* 展開整個文字區塊 */
  border-radius: 4px;
}
</style>


