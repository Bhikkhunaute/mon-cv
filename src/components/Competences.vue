<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="skills">
      <div 
        v-for="(tech, index) in technologies" 
        :key="index" 
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
          { name: 'Webdesign' },
          { name: 'Accessibilité (Norme AAA)' },
          { name: 'Photoshop' },
          { name: 'Environnement VScode'},
          { name: 'SEO' },
          { name: 'Optimisation des performances web' },
          { name: 'Méthodologie Agile' },
        ];
      }
    }
  };
  </script>
  <style>

  </style>
  