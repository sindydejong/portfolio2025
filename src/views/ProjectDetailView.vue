<script setup lang="ts">
import { computed } from 'vue'
import DOMPurify from 'dompurify'

import { projects } from '@/data/projects' // Importeer de projects array
// import ProjectCard from '@/components/ProjectCardItem.vue'; // Importeer de ProjectCard component
import { defineProps } from 'vue'

const props = defineProps<{
  name: string
}>()

const project = projects.find((proj) => proj.name === props.name) || {
  title: 'Project Not Found',
  image: '',
  video: '',
  video2: '',
  category: '',
  hoofdzaak: '',
  vak: '',
  duur: '',
  datum: '',
  skills: [] as string[],
  opdracht: '',
  proces: '',
  proces_img1: '',
  proces_img1_beschrijving: '',
  proces_img2: '',
  proces_img2_beschrijving: '',
  proces_img3: '',
  proces_img3_beschrijving: '',
  proces_video: '',
  eindproduct: '',
  eindproduct_link: '',
  eindproduct_img: '',
}

console.log('Props:', props)
console.log('Gevonden project:', project)

const [titleMain, titleSub] = project.title.split(/:(.+)/).map((s) => s.trim())

const sanitizedOpdracht = computed(() => DOMPurify.sanitize(project.opdracht))
const sanitizedProces = computed(() => DOMPurify.sanitize(project.proces || ''))
const sanitizedEindproduct = computed(() => DOMPurify.sanitize(project.eindproduct))
</script>

<template>
  <main>
    <div class="project-header">
      <a class="link_terug" @click="$router.go(-1)"> Go back  </a>
      <h1>
        {{ titleMain }}<span v-if="titleSub">:</span>
        <br v-if="titleSub" />
        <span v-if="titleSub" class="subtitle">{{ titleSub }}</span>
      </h1>

      <section>
        <img :src="project.image" alt="Project Image" />
        <p class="hoofdzaak">{{ project.hoofdzaak }}</p>
      </section>

      <section class="project-info">
        <ul>
          <li>
            <h3>Vak:</h3>
            <p>{{ project.vak }}</p>
          </li>
          <li>
            <h3>Duur:</h3>
            <p>{{ project.duur }}</p>
          </li>
          <li>
            <h3>Datum:</h3>
            <p>{{ project.datum }}</p>
          </li>
        </ul>
      </section>
    </div>

    <div class="project-verslag-parent">
      <div class="project-verslag">
        <section>
          <h2>Skills</h2>
              <div class="skills">
      <span v-for="skill in project.skills" :key="skill">{{ skill }}</span>
    </div>
          <!-- <p>{{ project.skills.join(', ') }}</p> -->
        </section>

        <section>
          <h2>Opdracht</h2>

          <div v-html="sanitizedOpdracht"></div>
          <!-- <p> <div v-html="project.opdracht"> </div> </p> -->


        </section>

          <section v-if="project.proces || project.proces_img1 || project.proces_img2 || project.proces_img3">
          <h2>Proces</h2>

          <div v-html="sanitizedProces"></div>
          <!-- <p> <div v-html="project.opdracht"> </div> </p> -->

<div class="proces-images" v-if="project.proces_img1 || project.proces_img2 || project.proces_img3">
            <div v-if="project.proces_img1" class="proces-image">
              <img :src="project.proces_img1" alt="Proces Image 1" />
              <p>{{ project.proces_img1_beschrijving }}</p>
            </div>
            <div v-if="project.proces_img2" class="proces-image">
              <img :src="project.proces_img2" alt="Proces Image 2" />
              <p>{{ project.proces_img2_beschrijving }}</p>
            </div>
            <div v-if="project.proces_img3" class="proces-image">
              <img :src="project.proces_img3" alt="Proces Image 3" />
              <p>{{ project.proces_img3_beschrijving }}</p>
            </div>
          </div>

          <div class="video-container" v-if="project.proces_video">
            <iframe
              :src="project.proces_video"
              title="YouTube video player"
              data-cookieconsent="marketing"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
          </div>


        </section>

        <section class="eindproduct">
          <h2>Eindproduct</h2>

          <div v-html="sanitizedEindproduct"></div>

          <div class="video-container" v-if="project.video">
            <iframe
              :src="project.video"
              title="YouTube video player"
              data-cookieconsent="marketing"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
          </div>

          <div class="video-container" v-if="project.video2">
            <iframe
              :src="project.video2"
              title="YouTube video player"
              data-cookieconsent="marketing"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
          </div>

          <div class="eindproduct-img" v-if="project.eindproduct_img">
            <img :src="project.eindproduct_img" alt="Eindproduct Image" />
          </div>

          <a
            class="link_eindproduct"
            v-if="project.eindproduct_link"
            :href="project.eindproduct_link"
            target="_blank"
          >
            Naar online eindproduct
          </a>
        </section>
      </div>
    </div>

    <!-- <section class="cards">
     <p> Alle projecten: </p>
         <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
         </section> -->
  </main>
</template>

<style lang="scss" scoped>
@import '/src/styles/style.scss';

main {
  // grid-template-columns: none !important;
  // grid-template-rows: repeat(auto-fit, minmax(5em, 1fr)) !important; /* Pas de 5em aan naar de gewenste minimumhoogte */
  grid-template-columns: 1fr;
  width: 100vw;
  background-color: $color-main;
}

.project-header {
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

h1 {
  color: white;
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

h2 {
  color: $color-interaction;
  margin: 0em 0em 0.5em 0em;
}

ul {
  display: block;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    margin: 1em 0em 1em 0em;
  }
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin: 1.5em 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.proces-images {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 2em 0;

  .proces-image {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 400px;
      height: auto;
      border-radius: 10px;
      margin-bottom: 0.5em;
    }

    p {
      text-align: left;
    }
  }
}

.link_terug {
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 1002;
  padding: 10px;
  background-color: $color-interaction;
  margin: 0;
  display: block;
  text-decoration: none;
  width: max-content;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: $color-interaction;
    background-color: white;
  }
}

.eindproduct-img {
  display: flex;
  justify-content: center;
  margin: 1.5em 0;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
}

.link_eindproduct {
  padding: 10px;
  background-color: $color-interaction;
  color: black;;
  margin: 1em 0em;
  display: block;
  text-decoration: none;
  width: max-content;
  border-radius: 5px;


  &:hover {
    color: $color-interaction;
    background-color: $color-main;
  }
}

.hoofdzaak {
  margin-top: 1em;
  color: white;
}

.project-info {
  ul li {
    background-color: white;
    padding: 0.5em;
    border-radius: 10px;
    width: 250px;
    list-style: none;
    margin: 1em 0em 1em 0em;
  }
}

.project-verslag {
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: 1em 0em;

  section {
    background-color: white;
    border-radius: 10px;
    margin: 1em;
    padding: 1.5em;
  }
}

.project-verslag-parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: $color-main;
  color: black;
  // border-top: 5px solid white;
  border-bottom: 5px solid white;
}

@media screen and (min-width: 1000px) {
  h1 {
    // width: 90vw;
  }

  section {
    // width: 70vw;

    &:first-of-type {
      margin-top: 1em;
    }
  }

  ul {
    position: relative;
    top: auto;
    display: flex;
    gap: 3em;
    justify-content: flex-start;
  }

  img {
    height: 60vh;
  }

  .cards {
    margin-bottom: 0em;
  }
}
</style>
