<script setup>
import { useModeStore } from '@/stores/modeStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const modeStore = useModeStore()
const { mode, isDarkMode } = storeToRefs(modeStore)
const { changeMode } = modeStore

const {t} = useI18n()

const translatedMode = computed(() => t(mode.value))
</script>
<template>
    <p 
            :class="
                isDarkMode 
                ? 'text-sky-950 border-red-100 bg-red-100' 
                : 'text-red-100 border-sky-950 bg-sky-950'
            "
            class="
                border 
                border-black 
                rounded 
                p-2 
                text-[16px] 
                font-bold
                cursor-pointer
                text-center
            "
            @click="changeMode"
        >
            {{ translatedMode }}
        </p>
</template>