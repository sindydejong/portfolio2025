<template>
  <div class="character-slider">
    <div
      class="slider-inner"
      :style="sliderStyle"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <CharacterCard
        v-for="(character, i) in characters"
        :key="character.title"
        :character="character"
        :active="i === currentIndex"
      />
    </div>
    <!-- Show arrows only on mobile -->
    <button v-if="isMobile" class="arrow left" @click="prev">&#60;</button>
    <button v-if="isMobile" class="arrow right" @click="next">&#62;</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CharacterCard from './CharacterCard.vue'

const characters = [
  {
    image: '/assets/Animatie_penflip2_sneller.gif',
    title: 'DESIGNER',
    description: 'Als designer val ik graag op door functionele en leuke ontwerpen te maken',
    skills: ['AI', 'PS', 'XD', 'Figma'],
    project: 'NEO: Genderneutral clothing brand',
    buttonText: 'Meer design projecten'
  },
  {
    image: '/assets/Animatie_balans.gif',
    title: 'FRONT-ENDER',
    description: 'Ik breng graag ontwerpen tot leven met code, met focus op de gebruikservaring',
    skills: ['HTML', 'CSS', 'JS', 'VUE'],
    project: 'Red Hot Chili Peppers: Screenreader friendly website',
    buttonText: 'Meer front-end projecten'
  },
  {
    image: '/assets/Animatie_zwaaien_final.gif',
    title: 'MIJZELF',
    description: 'Ik hou ervan om te blijven leren en nieuwe dingen te verkennen',
    skills: ['Muziek', 'Gamen', 'Bier'],
    project: 'Aha - Take On Me  ... eigenlijk alles uit de jaren 80!',
    buttonText: 'Meer over mij'
  }
]

const currentIndex = ref(0)
const isMobile = ref(window.innerWidth < 900)

function handleResize() {
  isMobile.value = window.innerWidth < 900
}
onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

function prev() {
  currentIndex.value = (currentIndex.value + characters.length - 1) % characters.length
}
function next() {
  currentIndex.value = (currentIndex.value + 1) % characters.length
}

// Touch events for swipe
let startX = 0
function onTouchStart(e: TouchEvent) {
  startX = e.touches[0].clientX
}
function onTouchMove(e: TouchEvent) {
  // Prevent scrolling while swiping
  e.preventDefault()
}
function onTouchEnd(e: TouchEvent) {
  const endX = e.changedTouches[0].clientX
  if (endX - startX > 50) prev()
  else if (startX - endX > 50) next()
}

const sliderStyle = computed(() => {
  if (!isMobile.value) return {}
  return {
    transform: `translateX(-${currentIndex.value * 100}%)`,
    transition: 'transform 0.4s'
  }
})
</script>

<style scoped lang="scss">
@import '../../../styles/style.scss';
.character-slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
}
.slider-inner {
  display: flex;
  width: 100%;
}
@media (max-width: 899px) {
  .slider-inner {
    width: 100%;
    transition: transform 0.4s;
  }
  .character-card {
    min-width: 100%;
    max-width: 100%;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #2a4cff;
    color: #fff;
    border: none;
    font-size: 2rem;
    padding: 0.5em 0.8em;
    border-radius: 50%;
    z-index: 2;
    cursor: pointer;
  }
  .arrow.left {
    left: 10px;
  }
  .arrow.right {
    right: 10px;
  }
}
@media (min-width: 900px) {
  .slider-inner {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    transform: none !important;
  }
  .character-card {
    min-width: 320px;
    max-width: 350px;
  }
  .arrow {
    display: none;
  }
}
</style>
