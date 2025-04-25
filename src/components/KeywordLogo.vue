<!-- KeywordLogo.vue -->
<script setup>
const props = defineProps({
  keyword: String
});

defineOptions({ inheritAttrs: false })

function getIconUrl(name) {
  if (name === 'Vue') {
    return 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg';
  }

  const map = {
    HTML: 'html5',
    CSS: 'css3',
    JavaScript: 'javascript',
    Tailwind: 'tailwindcss',
    MySQL: 'mysql'
  };

  const colorMap = {
    HTML: 'E34F26',
    CSS: '1572B6',
    JavaScript: 'F7DF1E',
    Tailwind: '06B6D4',
    MySQL: '4479A1'
  };

  const key = map[name];
  const color = colorMap[name] || '000000';

  return key ? `https://cdn.simpleicons.org/${key}/${color}` : null;
}

const iconUrl = getIconUrl(props.keyword);
</script>

<template>
    <span class="with-logo" v-if="iconUrl">
      <img :src="iconUrl" :alt="keyword" class="logo" :class="{ 'scale-150': keyword === 'MySQL' }" />
    </span>
  </template>
    
  
  <style scoped>
    .logo {
    width: 24px;
    height: 20px;
    display: inline-flex;
    margin-right: 6px;
    }
.with-logo {
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
}
  </style>
  