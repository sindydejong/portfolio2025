<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

</script>

<template>
  <div class="shell">
    <div class="header">
      <HeaderComponent/>
    </div>
    <div class="main">
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
  
  
}

.main {
  grid-area: main;
  background-color: $color-background;
  
}

.footer {
  grid-area: footer;
  background-color: $color-main;
  color: white;
  height: auto;
  padding: 3em 5em 2em 5em;
  
}

</style>