<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  label: String,
  description: String,
  to: String,
  img: String,
})

const { t } = useI18n()
const translatedLabel = computed(() => t(props.label))
const translatedDescription = computed(() => t(props.description))

</script>
<template>
    <div class="border border-current rounded-lg p-4 shadow-lg shadow hover:shadow-red-100 transition duration-300">
        <h2 class="text-xl mb-2">{{ translatedLabel }}</h2>
        <a :href="props.to" target="_blank" rel="noopener noreferrer">
          <img :src="props.img" :to="props.to" alt="project icon" class="w-full h-[280px] mb-2 border-2 border-sky-950 rounded hover:border-red-200" />
        </a>
        <p class="text-base font-normal">{{ translatedDescription }}</p>
    </div>
</template>
