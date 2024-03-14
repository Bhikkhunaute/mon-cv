<template>
  <div class="experience">
    <h2>{{ title }}</h2>
    <div class="timeline">
      <div 
        v-for="experience in experiences" 
        :key="experience.id" 
        class="event"
      >
        <div class="dot" />
        <h3>{{ experience.title }}</h3>
        <div class="info">
          <p>{{ experience.location }}</p>
          <p>{{ experience.date }}</p>
        </div>
        <div class="info">
          <p>{{ experience.description }}</p>
          <p>{{ experience.missions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceTimeline',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      experiences: [
        { id: 1, title: "Webmaster", date: "Mars 2021 - Mars 2025", location: "Ecole Nationale de la Magistrature", description: "loremp ipsum dolores", missions: "<ul><li>testtst</li></ul>lorem ipsum" },
        { id: 2, title: "Chef de projet Web", date: "Mars 2020 - Septembre 2020", location: "EnjoyMonCSE", description: "loremp ipsum dolores", missions: "lorem ipsum" },
        { id: 3, title: "Freelance - Webdesign/Developpeur", date: "2016 - Décembre 2019", location: "Victor Prudhon", description: "loremp ipsum dolores", missions: "lorem ipsum" },
        { id: 4, title: "Webmaster", date: "Mars 2018 - Mars 2019", location: "Médiathèque Marie Rouanet", description: "loremp ipsum dolores", missions: "lorem ipsum" },
        { id: 5, title: "Developpeur Web", date: "Avril 2016 - Décembre 2016", location: "LIRMM Montpellier", description: "loremp ipsum dolores", missions: "lorem ipsum" },
      ]
    };
  }
};
</script>
<style scoped>
h3 {
  margin: 0;
}
.experience {
  position: relative;
  color: white;
  margin-left: 5rem;
}

.timeline {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 8rem;
}
.info {
  display: flex;
  justify-content: space-evenly;
  gap: 5rem;
}
.event {
  position: relative;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  align-items: flex-start;
}

.dot {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: -5.7rem; /* ajustez la position de la boule par rapport à la ligne */
  top: 50%;
  transform: translate(-50%, -50%);
}

.timeline::before {
  content: "";
position: absolute;
top: 120px;
left: 5rem;
height: calc(100% - 255px);
width: 10px;
background-color: #fff;
}
</style>
