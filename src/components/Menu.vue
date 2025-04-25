<script setup>
// import { useModeStore } from '@/stores/modeStore';
// import { storeToRefs } from 'pinia';
import ModeChanger from './ModeChanger.vue';
import MenuIcon from './MenuIcon.vue';
import LangSwithcer from './LangSwithcer.vue';


// emit
// const initMode = ref('DARK MODE')
// const emit = defineEmits('change-mode', initMode.value)
// const changeMode = () => {
//     if (initMode.value === 'DARK MODE') {
//         initMode.value = 'LIGHT MODE'
//     } else {
//         initMode.value = 'DARK MODE'
//     }
//     emit('change-mode', initMode.value)
// }

// pinia, traditional way
// const modeStore = useModeStore()
// const changeMode = modeStore.changeMode
// const initMode = computed(() => modeStore.mode)
// const darkMode = computed(() => modeStore.isDarkMode)

// pinia, destructuring & storeToRefs
// const modeStore = useModeStore()
// const { mode, isDarkMode } = storeToRefs(modeStore)
// const { changeMode } = modeStore

// const menuItems = [
//     {label: 'HOME', to: '/'},
//     {label: 'ABOUT', to: '/about'},
//     {label: 'PROJECTS', to: '/projects'},
// ]
</script>

<template>
    <menu class="flex">

        <!-- Hard-code way for menu items -->
        <!-- <p 
            :class="
                isDarkMode 
                ? 'text-black border-white bg-white' 
                : 'text-red-100 border-sky-950 bg-sky-950'
            "
            class="
                home 
                border-2
                rounded 
                p-2 
                text-[16px] 
                font-bold 
                mr-4
            "
        >
            HOME
        </p>
        <p 
            :class="
                isDarkMode ? 'text-white' : 'text-black'
            "
            class="
                about 
                border 
                border-black 
                rounded 
                p-2 
                text-[16px] 
                font-bold 
                mr-4
            "
        >
            ABOUT
        </p>
        <p 
            :class="
                isDarkMode ? 'text-white' : 'text-black'
            "
            class="
                log-in 
                border 
                border-black 
                rounded 
                p-2 
                text-[16px] 
                font-bold
                mr-4
            "
        >
            LOG IN
        </p> -->

        <ModeChanger class="hidden min-[580px]:block" />

        <LangSwithcer class="hidden min-[580px]:block" />
        
        <!-- 右側 menu 圖示（小螢幕顯示）-->
        <MenuIcon />
        <!-- <p 
            :class="
                isDarkMode ? 'text-white' : 'text-black'
            "
            class="
                log-in 
                border 
                border-black 
                rounded 
                p-2 
                text-[16px] 
                font-bold
            "
            @click="changeMode"
        >
            {{ mode }}
        </p> -->
    </menu>
    
</template> 