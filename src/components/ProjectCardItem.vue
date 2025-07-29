<!-- ProjectCard.vue -->

<template>
 <RouterLink :to="{ name: 'ProjectDetail', params: { name: project.name } }">
      <article class="project_card">
        <img :src="project.image" alt="Project Image">
        <ul>
          <li>
            <p>{{ project.title }}</p>
          </li>
          <li>
            <p>{{ project.category.join(', ') }}</p>
          </li>
          <li>
         <div class="skills">
      <span v-for="skill in project.skills" :key="skill">{{ skill }}</span>
    </div>
          </li>
        </ul>
      </article>
 </RouterLink>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import type { Project } from '@/data/projects'; // Importeer Project interface

  defineProps<{
    project: Project;
  }>();


</script>
  
<style scoped lang="scss">
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

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;

  span {
    display: inline-block;
    background: #2a4cff;
    color: #fff;
    border-radius: 8px;
    padding: 0.3em 0.8em;
    font-size: 1rem;
    width: fit-content;
    max-width: 100%;
    word-break: break-word; // voor uitzonderlijk lange woorden zonder spatie
  }
}


  .project_card {
    background-color: white;
    border-radius: 10px;
    margin-top: 1em;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 700px;

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
      transform: scale(1.05);
      border: 2px solid $color-interaction;
      cursor: pointer;
    }
  }

}

</style> 

