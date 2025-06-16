<template>
  <div class="projects-container">
    <h1>Projects</h1>

    <!-- FILTER KNOPPEN -->
    <div class="filters">
      <button :class="{ active: selectedCategory === 'All' }" @click="selectedCategory = 'All'">All</button>
      <button :class="{ active: selectedCategory === 'Front-End' }" @click="selectedCategory = 'Front-End'">Front-End</button>
      <button :class="{ active: selectedCategory === 'Design' }" @click="selectedCategory = 'Design'">Design</button>
    </div>

    <section class="cards">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.name"
        :project="project"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCardItem.vue'
import { useRoute } from 'vue-router'



// Gekozen categorie, standaard 'All'
const route = useRoute()
const selectedCategory = ref<'All' | 'Front-End' | 'Design'>('All')

// Zet de categorie op basis van de query bij eerste render
onMounted(() => {
  const queryCategory = route.query.category as string
  if (queryCategory === 'Front-End' || queryCategory === 'Design') {
    selectedCategory.value = queryCategory
  }
})

// Filter logica
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  if (selectedCategory.value === 'Front-End') {
    return projects.filter(project =>
      project.category === 'FRONT-END' || project.category === 'JAVASCRIPT'
    )
  }
  if (selectedCategory.value === 'Design') {
    return projects.filter(project => project.category === 'DESIGN')
  }
  return []
})
</script>


<style scoped lang="scss">
@import '../styles/style.scss';

.projects-container {
  min-height: calc(100vh - 60px);
  background-color: $color-main;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  padding-bottom: 10em;
  border-bottom: 5px solid white;
}

h1 {
  color: white;
}

p {
  color: white;
  margin-top: 1em;
}


.filters {
  margin: 1em 0;
  display: flex;
  gap: 1em;

  button {
    padding: 0.5em 1em;
    border: none;
    background-color: $color-interaction;
    color: white;
    cursor: pointer;
    border-radius: 0.5em;
    transition: 0.2s ease;

    &.active {
      background-color: lighten($color-interaction, 10%);
      box-shadow: 0 0 0 2px white;
    }

    &:hover {
      background-color: lighten($color-interaction, 5%);
    }
  }
}
</style>
