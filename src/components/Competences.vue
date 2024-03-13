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
          <span>{{ tech.name }}</span>
        </div>
      </div>    
    </div>
  </div>
</template>
  <script>  
  export default {
    name: 'CompetencesSection',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      technologies() {
        return [
          { name: 'Responsive design' },
          { name: 'Webdigner' },
          { name: 'Accessibilité (Norme AAA)' },
          { name: 'Photoshop' },
          { name: 'Mac'},
          { name: 'SEO' },
          { name: 'Animation' },
          { name: 'Optimisation des performances' },
          { name: 'Méthodologie Agile' },
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
  