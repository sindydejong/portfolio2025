<template>
  <div class="header-elements">
    <h1> <router-link to="/">Sindy</router-link></h1>
    <input id="toggle" type="checkbox" ref="toggle" />
    <label for="toggle" class="hamburger">
      <div class="top-bun"></div>
      <div class="meat"></div>
      <div class="bottom-bun"></div>
    </label>
    <div class="nav">
      <div class="nav-wrapper">
        <nav>
          <router-link to="/" @click="closeNav">HOME</router-link><br />
          <router-link to="/projects" @click="closeNav">PROJECTS</router-link><br />
          <router-link to="/about" @click="closeNav">ABOUT</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const toggle = ref<HTMLInputElement | null>(null)
function closeNav() {
  if (toggle.value) toggle.value.checked = false
}
</script>

<style scoped lang="scss">
@import '../styles/style.scss';

.header-elements {
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

body {
  background: #336193;
  color: $color-interaction;
    font-family: "peckham-press", sans-serif;
  text-align: center;
  max-width: 100%;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
}

h1 {
    &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
}

h1 a{
  letter-spacing: 1px;
  word-spacing: 0.15em;
  font-size: 30px;
  color: $color-interaction;
  text-decoration: none;
}

#toggle {
  display: none;
}

.hamburger {
  position: absolute;
  top: 10px;
  right: 5%;
  width: 2em;
  height: 45px;
  z-index: 5;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
}

.hamburger div {
  position: relative;
  width: 3em;
  height: 7px;
  border-radius: 3px;
  background-color: #f8982b;
  margin-top: 8px;
  transition: all 0.3s ease-in-out;
}

.nav {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: $color-main;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transform: scale(0);
  transform-origin: top right;
  transition:
    transform 0.4s ease-in-out,
    opacity 0.4s ease-in-out;
  z-index: 4;
  pointer-events: none;
}

#toggle:checked + .hamburger + .nav {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}

.nav-wrapper {
  position: relative;
  overflow-y: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  text-align: center;
}

nav a {
  position: relative;
  text-decoration: none;
  color: $color-interaction;
  font-size: 4.5em;
  display: inline-block;
  margin-top: 1.25em;
  transition: color 0.2s ease-in-out;
  letter-spacing: 1px;
  &:first-of-type {
    margin-top: 0;
  }
}

nav a:before {
  content: '';
  height: 0;
  position: absolute;
  width: 0.25em;
  background-color: white;
  left: -0.5em;
  transition: all 0.2s ease-in-out;
}

nav a:hover {
  color: white;
}

nav a:hover:before {
  height: 100%;
}

/* Hamburger Animation */
#toggle:checked + .hamburger .top-bun {
  transform: rotate(-45deg);
  margin-top: 25px;
}

#toggle:checked + .hamburger .bottom-bun {
  opacity: 0;
  transform: rotate(45deg);
}

#toggle:checked + .hamburger .meat {
  transform: rotate(45deg);
  margin-top: -7px;
}

#toggle:checked + .hamburger + .nav {
  top: 0;
  transform: scale(1);
}
</style>
