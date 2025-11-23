<template>
  <div class="hero-wrapper">
  <div class="hero-text">
    <!-- <h2>Portfolio</h2> -->
    <h2>UX/UI Designer & Front-ender</h2>
    <h1>Sindy de Jong</h1>
  </div>

  <div class="hero-gif">
    <img src="/assets/Animatie_zwaaien_final.gif" alt="Animated showcase" />
  </div>

  <!-- <GameButton @click="scrollToNextSection" /> -->

  <button class="start-button" @click="scrollToNextSection">Laten we kennismaken!</button>
  </div>
</template>

<script setup lang="ts">
// import GameButton from '../GameButton.vue'

function scrollToNextSection() {
  const nextSection = document.querySelector('.characters')
  if (nextSection) {
    const y = nextSection.getBoundingClientRect().top + window.pageYOffset - 0
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/style.scss';

.hero-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-text {
  text-align: center;
  h1 {
    font-size: 70px;
    margin-top: 10px;
    color: white;
    h2 {
      font-size: 20px;
      font-family: 'montserrat', sans-serif;
      font-style: normal;
      font-weight: 200;
      color: red !important;
    }
  }
}

.hero-gif img {
  width: 500px;
  align-self: center;
  margin-top: -20px;
}

.start-button {
  background-color: white;
  color: $color-main;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  display: block;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  animation: floatY 2s ease-in-out infinite;

  &:hover {
    background-color: $color-main;
    color: white;
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
}

@keyframes floatY {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-16px);
  }
  100% {
    transform: translateY(0);
  }
}


@media (max-width: 600px) {
  
  .hero-wrapper{
    width: 100vw;
  }
  .hero-text h1 {
    font-size: 48px; // Lettertype kleiner voor mobiel
  }

  .hero-text h2 {
    font-size: 16px;
  }

 .hero-gif img {
    width: 100%;      // De afbeelding wordt 80% van de schermbreedte
  }

  .start-button {
    font-size: 18px;
    padding: 12px 24px;
    margin-top: 1em;
  }
}

</style>
