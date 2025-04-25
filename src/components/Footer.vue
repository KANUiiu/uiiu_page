<script setup>
  import { useModeStore } from '@/stores/modeStore';
  import { storeToRefs } from 'pinia';
  const modeStore = useModeStore()
  const { isDarkMode } = storeToRefs(modeStore)
</script>
<template>
    <footer 
      :class="isDarkMode ? 'text-red-100' : 'text-sky-950'"
      class="py-4 border-t border-current text-center text-sm flex flex-col items-center space-y-2"
    >
      <!-- Social Icons -->
      <div class="flex space-x-6">
        <!-- GitHub -->
        <a 
          href="https://github.com/KANUiiu" 
          target="_blank" 
          aria-label="GitHub"
          class="transition transform hover:scale-110 hover:opacity-80"
        >
          <img 
            :src="`https://cdn.simpleicons.org/github/${isDarkMode ? 'fca5a5' : '082f49'}`"
            class="w-8 h-8"
          />
        </a>
  
        <!-- Codewars -->
        <a 
          href="https://www.codewars.com/users/KANUiiu" 
          target="_blank" 
          aria-label="Codewars"
          class="transition transform hover:scale-110 hover:opacity-80"
        >
          <img 
            :src="`https://cdn.simpleicons.org/codewars/${isDarkMode ? 'fca5a5' : '082f49'}`"
            class="w-8 h-8"
          />
        </a>
      </div>
  
      <!-- Wikimedia Contributor Badge -->
      <a 
        href="https://meta.wikimedia.org/wiki/User:Iyumu" 
        target="_blank" 
        aria-label="Wikimedia Meta"
        class="flex items-center space-x-2 border px-3 py-1 rounded-full hover:scale-105 hover:shadow-md transition"
      >
        <img 
          :src="`https://cdn.simpleicons.org/wikimediafoundation/${isDarkMode ? 'fca5a5' : '082f49'}`"
          class="w-6 h-6"
        />
        <span 
          :class="isDarkMode ? 'text-red-100' : 'text-sky-950'"
          class="text-sm font-medium"
        >
          Wikimedia Contributor
        </span>
      </a>
  
      <!-- Copyright -->
      <div>&copy; {{ new Date().getFullYear() }} Uiiu. This work is licensed under 
        <a 
          href="https://creativecommons.org/licenses/by/4.0/" 
          target="_blank" 
          class="underline hover:text-blue-500 transition"
        >
          Creative Commons Attribution (CC BY) 4.0 License
        </a>.
      </div>
  
      <!-- Optional disclaimer -->
      <div class="text-xs text-center opacity-60">
        Logos are trademarks of their respective owners. This site is not affiliated with or endorsed by the Wikimedia Foundation.
      </div>
    </footer>
  </template>
  