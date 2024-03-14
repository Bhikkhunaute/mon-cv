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
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'FormationTimeline',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        experiences: [
          { id: 1, title: "D.U.T Métier de l’internet et du Multimédia", date: "2014 - 2016", location: "IUT Béziers" },
          { id: 2, title: "Faculté des Sciences spécialité Mathématiques/Informatique", date: "2012 - 2014", location: "Facultés des sciences de Montpellier"},
          { id: 3, title: "Baccalauréat Scientifique, spécialité Physique-Chimie - Avec mention Assez Bien", date: "2012", location: "Lycée Jean Jaurès - Saint Clément de Rivières"},
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
    margin-bottom: 1rem;
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
  top: 100px;
  left: 5rem;
  height: calc(100% - 165px);
  width: 10px;
  background-color: #fff;
  }
  </style>
  