<script setup>
import { useModeStore } from '@/stores/modeStore';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import WordHighlighter from '@/components/WordHighlighter.vue';

// pinia, destructuring & storeToRefs
const modeStore = useModeStore()
const { isDarkMode } = storeToRefs(modeStore)

const {t} = useI18n()

</script>

<template>
        <div class="flex flex-col"
             :class="
                isDarkMode 
                ? 'text-red-100' 
                : 'text-sky-950'
             "
        >
            <h1 class="text-[60px] font-bold">{{ t('about.greeting') }}</h1>
            <h3 class="text-[30px] font-bold mb-2">{{ t('about.title') }}</h3>
            <div class="text-[20px] space-y-4">
                <p>
                    {{ t('about.description[0]') }}
                    <WordHighlighter>{{ t('about.keywords[0]') }}</WordHighlighter>
                    {{ t('about.description[1]') }}
                    <WordHighlighter>{{ t('about.keywords[1]') }}</WordHighlighter>
                    {{ t('about.description[2]') }}
                    <WordHighlighter>{{ t('about.keywords[2]') }}</WordHighlighter>
                    {{ t('about.description[3]') }}
                    <WordHighlighter>{{ t('about.keywords[3]') }}</WordHighlighter>
                    {{ t('about.description[4]') }}
                    <WordHighlighter>{{ t('about.keywords[4]') }}</WordHighlighter>
                    {{ t('about.description[5]') }}
                </p>
                <p>
                    {{ t('about.description_b[0]') }}
                    <WordHighlighter>{{ t('about.keywords_b[0]') }}</WordHighlighter>
                    {{ t('about.description_b[1]') }}
                </p>
                <p>
                    {{ t('about.description_c[0]') }}
                    <WordHighlighter>{{ t('about.keywords_c[0]') }}</WordHighlighter>
                    {{ t('about.description_c[1]') }}
                    <WordHighlighter>{{ t('about.keywords_c[1]') }}</WordHighlighter>
                    {{ t('about.description_c[2]') }}
                    <WordHighlighter>{{ t('about.keywords_c[2]') }}</WordHighlighter>
                    {{ t('about.description_c[3]') }}
                    <WordHighlighter>{{ t('about.keywords_c[3]') }}</WordHighlighter>
                    {{ t('about.description_c[4]') }}
                    <WordHighlighter>{{ t('about.keywords_c[4]') }}</WordHighlighter>
                    {{ t('about.description_c[5]') }}
                </p>
            </div>
        </div>
</template>

