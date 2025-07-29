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



.characters {
  // min-height: calc(100vh - 60px);
    min-height: 100vh;
    background-color: $color-main;
    padding: 2em 5em 2em 5em;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>
