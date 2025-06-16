<template>

<div class="container"> 

<h1>About me </h1>

<div class="blocks">



<section> 
    <h2> My vision </h2>
    <p>I'm a creative front-end developer with a love for design that works for everyone. I believe in building clear, well-functioning web experiences that not only feel good to use, but also do good. To me, design isn't just about how something looks, but how it includes. I care deeply about creating ethical and inclusive digital spaces where people feel welcome and represented. I like combining solid UX and clean code with a playful touch, because the web can (and should) be a little fun too.</p>    
</section>

<section class="hobbies">
<h2> My Hobbies </h2>
<ul> 
<li>Playing guitar🎸</li>
<li>Concerts🎤</li>
<li>Gaming🎮</li>
<li>Drinking beers🍺</li>
</ul>

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
      p {
        margin-bottom: 1em;
      }
  }
}

.funfact div {
  display: flex;
  gap: 1em;
  width: 100%;
}

.funfact div img {
  flex: 1; // zorgt dat beide afbeeldingen gelijk verdelen
  height: auto;
  width: 50%;
  object-fit: cover; // zorgt dat ze netjes bijgesneden worden zonder vervorming
  border-radius: 8px; // optioneel voor mooie afgeronde hoeken
}

</style>
