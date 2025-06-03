<template>

  <div class="projects-container">
  <h1>Projects</h1>
  <p>Projects will be displayed here soon!</p>
      <section class="cards">
     
<p> Alle projecten: </p>
  <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
  </section>
</div>


</template>

<script setup lang="ts">
  import { projects } from '@/data/projects'; // Importeer de projects array
  import ProjectCard from '@/components/ProjectCardItem.vue'; // Importeer de ProjectCard component
</script>

<style scoped lang="scss">
@import '../styles/style.scss';

.projects-container {
    min-height: 100vh;
    background-color: $color-main;
      display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

<style lang="scss">
@import '../styles/style.scss';
.cards {
  a {
    p {
      color: white;
      margin-top: 1.5em;
    }
  }

  a {
    text-decoration: none;
  }

  .project_card {
    background-color: white;
    border-radius: 10px;
    margin-top: 1em;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 800px;

    p {
      margin-top: 1em;
    }

    ul {
      padding: 0;
      margin-top: 5px;
      list-style: none;

      li {
        p {
          color: black;

          &:nth-of-type(2) {
            color: red;
          }
        }
      }
    }

    img {
      margin: 10px;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }

    &:hover {
      transform: scale(1.1);
      border: 2px solid $color-interaction;
      cursor: pointer;
    }
  }

}

</style>
