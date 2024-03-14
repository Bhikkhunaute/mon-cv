<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="competences">
      <div 
        v-for="(tech, index) in technologies" 
        :key="index" 
        class="tech"
      >
        <span>{{ tech.name }}</span>
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
          { name: 'Autonome' },
          { name: 'Travail en équipe' },
          { name: 'Bonne humeur' },
        ];
      }
    }
  };
  </script>
  <style>
.competences {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 3rem;
}
  </style>
  