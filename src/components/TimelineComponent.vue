<template>
  <section class="timeline-wrapper">
    <div class="timeline">
      <div
        v-for="(item, index) in timelineItems"
        :key="item.title"
        class="container"
        :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
      >
        <div class="content">
          <h3>{{ item.period }}</h3>
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    period: '2023 - Heden',
    title: 'Huidige Functie - Bedrijfsnaam',
    description: 'Beschrijving van je verantwoordelijkheden en prestaties in deze rol.',
  },
  {
    period: '2021 - 2023',
    title: 'Vorige Functie - Ander Bedrijf',
    description: 'Beschrijving van je vorige baan.',
  },
  {
    period: '2019 - 2021',
    title: 'HBO-ICT Opleiding - Hogeschool',
    description: 'Specialisatie in Interactive Media & Design.',
  },
  {
    period: '2018',
    title: 'Stage - Stagebedrijf',
    description: 'Mijn eerste praktijkervaring.',
  }
];
</script>

<style scoped lang="scss">
.timeline-wrapper {
  background: #474e5d;
  padding: 4rem 1rem;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  /* Verticale lijn */
  ::v-deep(&::after) {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
  }
}

.container {
  padding: 10px 40px;
  position: relative;
  width: 50%;
}

/* Cirkel in het midden */
::v-deep(.container::after) {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 4px solid #FF9F55;
  border-radius: 50%;
  z-index: 1;
}

/* Lijnen en posities */
.left {
  left: 0;
}
.right {
  left: 50%;
}

/* Pijlen */
::v-deep(.left::before) {
  content: '';
  position: absolute;
  top: 22px;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #FF9F55;
}
::v-deep(.right::before) {
  content: '';
  position: absolute;
  top: 22px;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent #FF9F55 transparent transparent;
}

.content {
  background: #FF9F55;
  padding: 20px 30px;
  border-radius: 6px;
  position: relative;
  z-index: 2;
}

/* ✅ Responsive fix */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0 !important;
  }

  ::v-deep(.timeline::after) {
    left: 31px;
    transform: none;
  }

  ::v-deep(.container::before) {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent #FF9F55 transparent transparent;
  }

  ::v-deep(.container::after) {
    left: 15px;
    transform: none;
  }

  .right {
    left: 0 !important;
  }
}
</style>
