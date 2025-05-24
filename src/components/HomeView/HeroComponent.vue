<template> 

<div class="hero-text">
    <h2>Portfolio</h2>
        <h1>Sindy de Jong</h1>
        <h2>UX/UI Designer & Front-ender</h2>
    </div>

    <div class="hero-gif">
            <img src="/assets/Animatie_zwaaien_final.gif" alt="Animated showcase" />
    </div>

    <GameButton @click="scrollToNextSection" />
    
    <!-- <button class="start-button" @click="scrollToNextSection" >Start</button> -->
    </template>


<script setup lang="ts">
import GameButton from '../GameButton.vue'

function scrollToNextSection() {
  const nextSection = document.querySelector('.characters')
  if (nextSection) {
    const y = nextSection.getBoundingClientRect().top + window.pageYOffset - 70
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<style lang="scss" >
@import 'src/styles/style.scss';

.hero {
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-text {
  text-align: center;
  padding-top: 0px;
  h1 {
    font-size: 45px;
    margin-top: 10px;
    color: $color-interaction;
    h2 {
      font-size: 20px;
      font-family: 'montserrat', sans-serif;
      font-style: normal;
      font-weight: 200;
    }
  }
}

.hero-gif img{

    width: 500px;
    align-self: center;
}

.start-button {
    background-color: $color-interaction;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: -20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    &:hover {
        background-color: $color-main;
        transition: all .3s ease-in-out;
        transform: scale(1.2);
    }
}

</style>
