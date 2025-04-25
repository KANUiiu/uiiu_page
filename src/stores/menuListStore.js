import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuListStore = defineStore('menuList', () => {
    const isMenuListOpen = ref(false);

    const menuItems = ref([
        { label: 'menu.home', to: '/' },
        { label: 'menu.about', to: '/about' },
        { label: 'menu.projects', to: '/projects' },
    ])

    const showMenuList = () => {
        isMenuListOpen.value = !isMenuListOpen.value
    }
  
    return { showMenuList, isMenuListOpen, menuItems }
})