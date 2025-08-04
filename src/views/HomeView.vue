<template>
  <main>
    <section class="hero">
      <HeroComponent/>
    </section>

    <section class="characters">
      <CharacterComponent/>
    </section>
  </main>
</template>

<script setup lang="ts">
import HeroComponent from '../components/HomeView/HeroComponent.vue'
import CharacterComponent from '../components/HomeView/CharacterComponent.vue'

</script>

<style lang="scss" >
@import '../styles/style.scss';

.hero {
  height: calc(100svh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
}

.characters {
  // min-height: calc(100vh - 60px);
    min-height: 100lvh;
    background-color: $color-main;
    padding: 2em 5em 2em 5em;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
}


@media (max-width: 600px) {
  .hero, .characters {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box; 

  }

  .hero {
    min-height: calc(100svh - 48px); 
  }

  .characters {
    min-height: 100lvh; 
    padding: 2em 1em; 
  }
}

</style>
