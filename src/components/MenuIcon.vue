<script setup>
import { useModeStore } from '@/stores/modeStore';
import { useMenuListStore } from '@/stores/menuListStore';
import { storeToRefs } from 'pinia';

// pinia, destructuring & storeToRefs
const modeStore = useModeStore()
const { isDarkMode } = storeToRefs(modeStore)

const menuListStore = useMenuListStore()
const { showMenuList } = menuListStore

</script>
<template>
    <p
                :to="'/'"
                :class="
                    isDarkMode
                    ? 'text-sky-950 border-red-100 bg-red-100' 
                    : 'text-red-100 border-sky-950 bg-sky-950'
                "
                class="
                    block 
                    min-[580px]:hidden
                    rounded
                    pt-2
                    pb-2
                    px-4
                    text-[20px]
                    font-bold
                "
                @click="showMenuList"
            >
                ☰
    </p>
</template>