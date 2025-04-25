<script setup>

import Menu from './Menu.vue';
// emit
// import { defineEmits, ref } from 'vue';
// const emit = defineEmits('change-mode')

// const mode = ref('DARK MODE')

// const handleChangeMode = (newMode) => {
//     mode.value = newMode
//     emit('change-mode', newMode)
// }


import { useModeStore } from '@/stores/modeStore';
import { storeToRefs } from 'pinia';

// pinia
// const modeStore = useModeStore()
// const darkMode = computed(() => modeStore.isDarkMode)

// pinia & destructuring
const modeStore = useModeStore()
const { isDarkMode } = storeToRefs(modeStore)

</script>
<template>
    <header class="flex justify-between ml-8 mr-8">
            <router-link
                :to="'/'"
                :class="
                    isDarkMode
                    ? 'text-sky-950 border-red-100 bg-red-100' 
                    : 'text-red-100 border-sky-950 bg-sky-950'
                "
                class="
                    logo
                    border
                    rounded
                    p-2
                    text-[16px]
                    font-bold
                    w-[120px]
                    text-center
                "
            >
                LOGO
            </router-link>
            <Menu />
    </header>
</template>