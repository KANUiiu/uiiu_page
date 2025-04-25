<script setup>
import { useModeStore } from '@/stores/modeStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from './components/Header.vue';
import MenuList from './components/MenuList.vue';
import MenuItem from './components/MenuItem.vue';
import Footer from '@/components/Footer.vue';
import ModeChanger from '@/components/ModeChanger.vue';
import LangSwithcer from './components/LangSwithcer.vue';

import { useMenuListStore } from '@/stores/menuListStore';

const menuListStore = useMenuListStore()
const { menuItems, isMenuListOpen } = storeToRefs(menuListStore)
const { showMenuList } = menuListStore
//emit
// import { ref } from 'vue';
// const mode = ref('DARK MODE')

// const doChangeMode = (newMode) => {
//     mode.value = newMode
// }

// pinia
// const modeStore = useModeStore()
// const darkMode = computed(() => modeStore.isDarkMode)

// pinia & destructuring
const modeStore = useModeStore()
const { isDarkMode } = storeToRefs(modeStore)

const {t} = useI18n()

const translatedMenuItems = computed(() =>
  menuItems.value.map(item => ({
    ...item,
    label: t(item.label),
  }))
)
</script>

<template>
    <div 
        :class="
            isDarkMode ? 'bg-sky-950' : 'bg-red-100'
        " 
        class="
            min-h-screen pt-8
        "
    >
        <Header />
        <div class="flex-1">
            <div class="grid grid-flow-col grid-cols-14 grid-rows-3 gap-2">
                <div class="row-span-3 col-span-2 mt-10 ml-8">
                    <menuItem 
                    v-for="(item, index) in translatedMenuItems" 
                    :key="index" 
                    :label="item.label"
                    :to="item.to" />
                </div>
                <div class="col-span-12 mt-4 w-full flex justify-left pr-8">
                    <div class="w-full max-w-[900px]">
                        <router-view />
                    </div>
                </div>   
            </div>
            <Footer />
        </div>
    </div>
    <div 
        v-if="isMenuListOpen"
        class="
            fixed
            inset-0 
            bg-black 
            bg-opacity-70 
            z-50 
            flex
            flex-col
            space-y-8
            place-items-center
        "
    >
        <MenuList
            v-for="(item, index) in menuItems" 
            :key="index" 
            :label="item.label"
            :to="item.to"
        />
        <ModeChanger class="w-[120px]" @click="showMenuList" />

        <LangSwithcer @click="showMenuList" />
    </div>
</template>
