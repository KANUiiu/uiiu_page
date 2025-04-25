import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useModeStore = defineStore('mode', () => {
  const mode = ref('mode.light');

//   const changeMode = () => {
//     if (mode.value === 'DARK MODE') {
//       mode.value = 'LIGHT MODE';
//     } else {
//       mode.value = 'DARK MODE';
//     }
//   }

  const changeMode = () => {
    mode.value = mode.value === 'mode.light' ? 'mode.dark' : 'mode.light';
  }

//   const isDarkMode = computed(() => {
//     return mode.value === 'DARK MODE';
//   })

  const isDarkMode = computed(() => mode.value === 'mode.light')

  return { mode, changeMode, isDarkMode }
})
