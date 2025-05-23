<template>

      <h2>Choose your character</h2>

      <CharacterSlider/>

</template>


<script setup lang="ts">
import CharacterSlider from './Slider/CharacterSlider.vue';
</script>

<style lang="scss">
@import 'src/styles/style.scss';



.characters {
  min-height: calc(100vh - 70px);
  background-color: #bcbcbc;
  h2 {
    padding-top: 100px;
  }
}
</style>