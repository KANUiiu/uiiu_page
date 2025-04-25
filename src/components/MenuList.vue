    <script setup>
    import { computed, defineProps } from 'vue';
    import { useMenuListStore } from '@/stores/menuListStore';
    import { useI18n } from 'vue-i18n';
    const menuListStore = useMenuListStore()
    const { showMenuList } = menuListStore
    import { useModeStore } from '@/stores/modeStore';
    import { storeToRefs } from 'pinia';
    
    const modeStore = useModeStore()
    const { isDarkMode } = storeToRefs(modeStore)

    const props = defineProps({
    label: String,
    to: String
    })

    const { t } = useI18n()

    const translatedLabel = computed(() => t(props.label))
    </script>
    <template>
        <div class="flex flex-col border rounded mt-20 w-[120px]"
            :class="
                isDarkMode 
                ? 'text-sky-950 border-red-100 bg-red-100' 
                : 'text-red-100 border-sky-950 bg-sky-950'
            "
        >
            <router-link 
                :to="to"
                class="
                px-1
                py-2 
                font-bold 
                text-center           
                "
                @click="showMenuList"
            >
                {{ translatedLabel }}
            </router-link> 
    </div>
    </template>
