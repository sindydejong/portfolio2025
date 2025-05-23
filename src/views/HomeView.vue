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

</style>
