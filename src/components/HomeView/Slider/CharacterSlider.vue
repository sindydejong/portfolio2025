<template>
  <div class="character-slider">
    <div
      class="slider-inner"
      :style="sliderInnerStyle"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <CharacterCard
        v-for="(character, i) in characters"
        :key="character.title"
        :character="character"
        :active="i === currentIndex"
      />
    </div>

    <!-- Alleen tonen op mobiel -->
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
    projectName: 'springtracking',
    project: 'Springtracking: To the Stars and Beyond',
    buttonText: 'Meer design projecten'
  },
  {
    image: '/assets/Animatie_balans.gif',
    title: 'FRONT-ENDER',
    description: 'Ik breng graag ontwerpen tot leven met code, met focus op de gebruikservaring',
    skills: ['HTML', 'CSS', 'JS', 'VUE'],
    projectName: 'fileshare',
    project: 'Fileshare: Sharing is Caring (Intern bedrijfsproject)',
    buttonText: 'Meer front-end projecten'
  },
  {
    image: '/assets/Animatie_zwaaien_final.gif',
    title: 'MIJZELF',
    description: 'Ik heb het nog nooit gedaan, maar ik denk dat ik het wel kan leren!',
    skills: ['Muziek', 'Gamen', 'Bier'],
    projectUrl: 'https://youtu.be/djV11Xbc914?si=asxr5q7KEkFny7g5',
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
  currentIndex.value = (currentIndex.value - 1 + characters.length) % characters.length
}
function next() {
  currentIndex.value = (currentIndex.value + 1) % characters.length
}

// Swipe functionaliteit
let startX = 0
function onTouchStart(e: TouchEvent) {
  startX = e.touches[0].clientX
}
function onTouchEnd(e: TouchEvent) {
  const endX = e.changedTouches[0].clientX
  const threshold = 50
  if (endX - startX > threshold) {
    prev()
  } else if (startX - endX > threshold) {
    next()
  }
}

// Dynamische slider stijl
const sliderInnerStyle = computed(() => {
  if (!isMobile.value) return {}

  return {
    width: `${characters.length * 100}%`,
    transform: `translateX(-${currentIndex.value * (100 / characters.length)}%)`,
    transition: 'transform 0.4s ease'
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
}

.character-card {
  flex: 0 0 100%;
  max-width: 100%;
}

@media (max-width: 899px) {
  .arrow {
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
    background: transparent;
    color: $color-interaction;
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
    width: 100% !important;
  }

  .character-card {
    flex: 0 0 auto;
    min-width: 320px;
    max-width: 350px;
  }

  .arrow {
    display: none;
  }
}
</style>
