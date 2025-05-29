<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

</script>

<template>
    <div class="grain-bg"></div>
  <div class="shell">
    <div class="header">
      <HeaderComponent/>
    </div>
    <div class="main ">
      <RouterView />
      </div>
      <div class="footer">
        <FooterComponent/>
      </div>
    </div>

</template>

<style  lang="scss">
  @import 'styles/style.scss';

  body{
    margin: 0;
    cursor: url("cursor.png"), auto;
  }
  
.shell {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header"
    "main"
    "footer";
  min-height: 100vh;
  margin: 0;
    background-color: $color-background;
    
}

.header {
  grid-area: header;
  background-color: rgba(white, 0.0);
  height: 60px;
  top: 0;
  position: sticky;
  z-index: 1000;
  display: flex;
  align-items: bottom;
  z-index: 2;
  
  
}

.main {
  grid-area: main;
  background-color: none;
    z-index: 1;
  
}


.grain-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, $color-main 5%,#f8982b 40%,#fdb25c 50%, #f8982b 60%, $color-main 95%),
    url('/assets/grainy.jpeg');
  // background-blend-mode:overlay;
  background-size: cover, cover;
  background-repeat: no-repeat, repeat;
  opacity: 1;
}

.footer {
  grid-area: footer;
  background-color: none;
  color: white;
  height: auto;
  padding: 3em 5em 2em 5em;
  z-index: 1;
  
}

</style>