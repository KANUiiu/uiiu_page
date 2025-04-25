<script setup>
import { computed, ref } from 'vue'
import { useModeStore } from '@/stores/modeStore';
import { storeToRefs } from 'pinia';
import WordHighlighter from '@/components/WordHighlighter.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { useI18n } from 'vue-i18n';
import projectAImg from '@/assets/projects/project_a_img.png'
import projectBImg from '@/assets/projects/project_b_img.png'
import projectCImg from '@/assets/projects/project_c_img.jpg'

// pinia, destructuring & storeToRefs
const modeStore = useModeStore()
const { isDarkMode } = storeToRefs(modeStore)

const projectsContent = ref(
    { title: 'projects.title', description: 'projects.description' }
)

const { t } = useI18n()

const translateProjectsTitle = computed(() => t(projectsContent.value.title))
const translateProjectsDescription = computed(() => t(projectsContent.value.description))

const projects = ref([
        { 
            label: 'project_a.label', 
            description: 'project_a.description', 
            to: 'https://kanuiiu.github.io/ten-thirty.html',
            img: projectAImg
        },
        { 
            label: 'project_b.label', 
            description: 'project_b.description', 
            to: 'https://kanuiiu.github.io/nearestTRA.html',
            img: projectBImg
        },
        { 
            label: 'project_c.label', 
            description: 'project_c.description', 
            to: 'https://kanuiiu.github.io/weather-today/',
            img: projectCImg
        },
    ])
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
        <WordHighlighter class="px-4 w-[380px]">
            <h1 class="text-[60px]">{{translateProjectsTitle}}</h1>
        </WordHighlighter>        
        <!-- Project Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-8 pb-4">
            <ProjectCard 
                v-for="(project, index) in projects" 
                :key="index" 
                :label="project.label"
                :description="project.description"
                :to="project.to"
                :img="project.img"
            >abc</ProjectCard>
        </div>
        <p class="text-[16px] custom:text-[20px] ml-4">{{ translateProjectsDescription }}</p>
    </div>
</template>