<script setup>
import { useModeStore } from '@/stores/modeStore';
import { storeToRefs } from 'pinia';

const modeStore = useModeStore()
const { isDarkMode } = storeToRefs(modeStore)

import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'en', label: 'English' },
  { code: 'nan-TW', label: 'Tâi-gí' },
  { code: 'zh', label: '中文' }
]

const switchLanguage = (lang) => {
  locale.value = lang
}
</script>

<template>
  <div 
    class="flex ml-4 space-x-1 rounded border"
    :class="isDarkMode ? 'border-red-100' : 'border-sky-950'"
  >
        <button
            v-for="lang in languages"
            :key="lang.code"
            :class="[
                'px-1 py-2 w-[60px] rounded font-bold',
                lang.code === locale 
                ? (isDarkMode 
                  ? 'text-sky-950 bg-red-100' 
                  : 'text-red-100 bg-sky-950')
                : (isDarkMode
                  ? 'text-red-100 bg-sky-950' 
                  : 'text-sky-950 bg-red-100')
            ]"
            @click="switchLanguage(lang.code)"
        >
            {{ lang.label }}
        </button>
  </div>
</template>

<style scoped>
button {
  transition: all 0.2s ease;
}
</style>
