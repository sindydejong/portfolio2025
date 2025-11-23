<template>
  <div v-if="source">
    <ProjectImageSlider v-if="Array.isArray(source)" :images="sliderImages" />

    <div v-else class="single-image-container">
      <img :src="source" :alt="altText" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import ProjectImageSlider from '@/components/ProjectImageSlider.vue'; // Hergebruik je slider!

const props = defineProps<{
  source: string | string[] | undefined;
  altText?: string;
}>();

// Zet de data om naar het formaat dat de slider verwacht
const sliderImages = computed(() => {
  if (Array.isArray(props.source)) {
    return props.source.map(url => ({ src: url, beschrijving: '' }));
  }
  return [];
});
</script>

<style scoped>
.single-image-container {
  display: flex;
  justify-content: center;
  margin: 1.5em 0;
}
.single-image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>