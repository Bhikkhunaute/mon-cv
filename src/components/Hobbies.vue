<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="skills">
      <div 
        class="icons"
      >
        <div 
          v-for="(tech, index) in technologies" 
          :key="index" 
          class="tech"
        >
          <font-awesome-icon :icon="tech.icon" />
          <span>{{ tech.name }}</span>
        </div>
      </div>    
    </div>
  </div>
</template>
  <script>
import { faBicycle, faGamepad, faChess, faRocket, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

  export default {
    name: 'HobbiesSection',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      technologies() {
        return [
          { name: 'Vélo', icon: faBicycle},
          { name: 'Jeux vidéo', icon: faGamepad},
          { name: 'Jeux de sociétés', icon: faChess},
          { name: 'Astronomie', icon: faRocket},
          { name: 'Nouvelles technologies', icon: faLaptopCode},
          // Ajoutez ici d'autres technologies avec leurs icônes
        ];
      }
    }
  };
  </script>
  <style>
  .icons {
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
      flex-wrap: wrap;
  }
  .tech {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(33.33% - 20px);
  }
  .tech > svg {
    width: 3rem;
    height: auto;
  }
  </style>
  