<template>

<div class="container"> 

<h1>About me </h1>

<div class="blocks">



<section> 
    <h2>As a designer </h2>
    <p>I am a passionate developer with a love for creating interactive and engaging web applications. My journey in tech started with a fascination for design, which has evolved into a found love  for webdesign combined with front-end development.</p>    
</section>

<section class="hobbies">
<h2> My Hobbies </h2>

</section>


<section class="funfact">
<h2> Fun fact </h2>
<p> I have my own beer company! </p>
<div>
<img src="/assets/images/bier_sindy.jpg" alt="Beer photo" />
<img src="/assets/images/bier_buiten.jpg" alt="Beer photo" />
</div>  
</section>

<section>
<h2> My favorite song </h2>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</section>

</div>
</div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
@import '../styles/style.scss';

.container {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 60px);
    border-bottom: 5px solid white;
    color: white;
    align-items: center;
      justify-content: center;
        width: 100vw;
        padding-bottom: 5em
}

h1 {
    color: white
}

.blocks {
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: 1em 0em;

  section {
    background-color: white;
    border-radius: 10px;
    margin: 1em;
    padding: 1.5em;
    color:black;
    h2 {
        color: $color-interaction;
        margin-bottom: 0.5em;
    }
  }
}

.funfact div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.funfact div img {
    width: 10em;
}

</style>
