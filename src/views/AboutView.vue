<template>

<div class="container"> 

<h1>Over mij </h1>

<div class="blocks">


<section>
    <h2> Mijn visie </h2>
    <p>Ik ben een creatieve front-end developer met een liefde voor design dat werkt voor iedereen. Ik geloof in het bouwen van duidelijke, goed functionerende webervaringen die niet alleen prettig zijn om te gebruiken, maar ook goed doen. Voor mij gaat design niet alleen over hoe iets eruit ziet, maar ook over hoe het inclusief is. Ik geef veel om het creëren van ethische en inclusieve digitale ruimtes waar mensen zich welkom en vertegenwoordigd voelen. Ik combineer graag solide UX en schone code met een speelse touch, want het web kan (en moet) ook een beetje leuk zijn.</p>
</section>


<section class="hobbies">
<h2> Mijn Hobby's </h2>
<ul> 
<li>Gitaar spelen🎸</li>
<li>Concerten bezoeken🎤</li>
<li>Gamen🎮</li>
<li>Bier drinken🍺</li>
</ul>

</section>


<section class="funfact">
<h2> Fun fact </h2>
<p> Ik heb mijn eigen bier bedrijf! <a href="https://www.outsideroriginals.nl" target="_blank" rel="noopener">Bekijk de website</a> </p>
<div>
<img src="/assets/images/bier_sindy.jpg" alt="Beer photo" />
<img src="/assets/images/bier_buiten.jpg" alt="Beer photo" />
</div>  
</section>

<section>
<h2> My favoriete liedje </h2>
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
