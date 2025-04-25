<script setup>
import { useModeStore } from '@/stores/modeStore';
import { storeToRefs } from 'pinia';
import WordHighlighter from '@/components/WordHighlighter.vue';

// pinia, destructuring & storeToRefs
const modeStore = useModeStore()
const { isDarkMode } = storeToRefs(modeStore)

import { useI18n } from 'vue-i18n';
import KeywordLogo from '@/components/KeywordLogo.vue';

const { t } = useI18n();

const skills = ['HTML', 'CSS', 'JavaScript', 'Tailwind'];
</script>

<template>
    <div 
        :class="
            isDarkMode 
            ? 'text-red-100' 
            : 'text-sky-950'
        "
        class="
            font-bold 
            flex 
            flex-col
        "
    >
        <WordHighlighter class="px-4 w-[400px]">
            <h1 class="text-[36px] custom:text-[50px]">{{ t("home.greeting") }}</h1>
        </WordHighlighter>
        <p class="text-[18px] custom:text-[24px] mt-2 ml-4">
            {{ t("home.title") }}
            <KeywordLogo class="align-[-3px]" keyword="Vue" />
        </p>
        <p class="text-[18px] custom:text-[24px] mt-2 ml-4 flex flex-wrap items-center">
            <span>{{ t("home.description_a") }}</span>
            <span
                v-for="(skill, index) in skills"
                :key="index"
                class="ml-2 flex"
            >
                <KeywordLogo class="align-text-bottom" :keyword="skill" />
                <span v-if="index !== skills.length - 1"></span>
            </span>
            </p>
        <p class="text-[18px] custom:text-[24px] mt-2 ml-4">
            {{ t("home.description_b") }}
            <KeywordLogo class="w-[50px] h-[36px] align-[-12px]" keyword="MySQL" />
        </p>
    </div>
</template>