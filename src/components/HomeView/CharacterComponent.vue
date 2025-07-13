<template>

      <h2> Mijn verschillende kanten</h2>

      <CharacterSlider/>

</template>


<script setup lang="ts">
import CharacterSlider from './Slider/CharacterSlider.vue';
</script>

<style lang="scss" scoped>
@import '/src/styles/style.scss';


h2 {
  color: $color-interaction;
font-family: "peckham-press", sans-serif;
text-align: center;
margin-bottom: 10px;
font-size: 35px;

}

</style>