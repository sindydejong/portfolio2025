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
}

.header {
  grid-area: header;
  background-color: #333;
  color: white;
  height: 70px;
  padding: 1rem;
  top: 0;
  position: sticky;

}

.main {
  grid-area: main;
  background-color: #f4f4f4;
  padding: 1rem;
}

.footer {
  grid-area: footer;
  background-color: #333;
  color: white;
  padding: 1rem;
  height: auto;
  
}

</style>