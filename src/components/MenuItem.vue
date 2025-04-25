<script setup>
import { useModeStore } from '@/stores/modeStore';
import { storeToRefs } from 'pinia';

// pinia, destructuring & storeToRefs
const modeStore = useModeStore()
const { isDarkMode } = storeToRefs(modeStore)
    
defineProps({
  label: String,
  to: String
})

</script>
<template>
    <router-link 
            :to="to"
            :class="
                isDarkMode 
                ? 'text-sky-950 border-red-100 bg-red-100' 
                : 'text-red-100 border-sky-950 bg-sky-950'
            "
            class="
                hidden 
                min-[580px]:block
                border-2
                rounded 
                p-2 
                text-[16px] 
                font-bold 
                mr-4
                mb-4
                w-[120px]
                text-center
            "
        >
            {{ label }}
    </router-link>
</template>