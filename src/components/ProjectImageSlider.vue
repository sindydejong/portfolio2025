<!-- filepath: /Users/sindy/Documents/portfolio_2025/src/components/ProjectImageSlider.vue -->
<template>
  <div class="slider">
    <button class="slider-arrow left" @click="prev" :disabled="current === 0">&lt;</button>
    <div class="slider-image">
      <img :src="images[current].src" :alt="images[current].beschrijving || 'Project afbeelding'" />
      <p v-if="images[current].beschrijving">{{ images[current].beschrijving }}</p>
    </div>
    <button class="slider-arrow right" @click="next" :disabled="current === images.length - 1">&#x3e;</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  images: { src: string; beschrijving?: string }[]
}>()

const current = ref(0)
function prev() {
  if (current.value > 0) current.value--
}
function next() {
  if (current.value < props.images.length - 1) current.value++
}
</script>

<style scoped>
.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin: 0.5em 0;
}
.slider-image {
  text-align: center;
  max-width: 100%;
}
.slider-image img {
  max-width: 100%;
  /* border-radius: 10px; */
}
.slider-arrow {
  color: #ffb405;
  border: none;
  width: 2.5em;
  height: 2.5em;
  background: transparent;
  font-size: 2em;
  cursor: pointer;
}
.slider-arrow:disabled {
  color: grey;
  cursor: default;
}

@media screen and (max-width: 600px) {
.slider {
  gap: 0;
}
.slider-arrow {
  font-size: 1.5em;
}
}
  
</style>