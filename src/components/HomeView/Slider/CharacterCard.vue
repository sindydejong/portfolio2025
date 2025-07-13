<template>
  <div class="character-card" :class="{ active }">
    <h3>{{ character.title }}</h3>
    <div class="character-img">
     <img v-if="character.image" :src="character.image" alt="Character Image" />
    </div>
      <div class="character-description">
    <p>"{{ character.description }}"</p>
  </div>
    <div class="skills">
      <span v-for="skill in character.skills" :key="skill">{{ skill }}</span>
    </div>
    <div class="project">
      <strong v-if="character.title === 'THE PERSON'">Favoriete liedje</strong>
       <strong v-if="character.title === 'THE DESIGNER'">Favoriete ontwerp project</strong>
        <strong v-if="character.title === 'THE FRONT-ENDER'">Favoriete front-end project</strong>
      <div class="project-box">{{ character.project }}</div>
    </div>
<button class="card-btn" @click="goToProjects">{{ character.buttonText }}</button>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'

const props = defineProps<{
  character: any,
  active?: boolean
}>()

const router = useRouter()

function goToProjects() {
  const text = props.character.buttonText.toLowerCase()

  if (text.includes('design')) {
    router.push({ name: 'projects', query: { category: 'Design' } })
  } else if (text.includes('front-end')) {
    router.push({ name: 'projects', query: { category: 'Front-End' } })
  } else if (text.includes('about me')) {
    router.push({ name: 'about' })
  } else {
    router.push({ name: 'projects', query: { category: 'All' } })
  }
}
</script>

<style scoped lang="scss">
@import '../../../styles/style.scss';
.character-card {
  background: #f7f6f6;
  border-radius: 28px;
  padding: 1.5rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 350px;

  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s;
}
.character-img {
  width: auto;
  height: 200px;
  // background: #ccc;
  border-radius: 16px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.character-description{
  font-size: 1rem;
  text-align: center;
  margin: 0.5rem 0;
  line-height: 1.4;
}

h3 {
  color: #2a4cff;
  font-family: "peckham-press", sans-serif;
  margin: 0.5rem 0;
  font-size: 1.3rem;
  text-align: center;
}
.skills {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  span {
    background: #2a4cff;
    color: #fff;
    border-radius: 8px;
    padding: 0.3em 0.8em;
    font-size: 1rem;
  }
}
.project {
  width: 100%;
  margin: 1rem 0;
  strong {
    display: block;
    margin-bottom: 0.3em;
    font-weight: 700;
    color: #222;
    font-size: 1.1rem;
    text-align: left;
  }
  .project-box {
    background: #e0e0e0;
    border-radius: 8px;
    padding: 1em;
    font-size: 1rem;
    color: #222;
    text-align: left;
  }
}
.card-btn {
  margin-top: 1.5rem;
  background: #f8982b;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 0.7em 1.5em;
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.07);
  transition: background 0.2s;
  &:hover { background: #ffb24d; }
}
</style>