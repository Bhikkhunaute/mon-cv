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
      name: 'SavoirEtre',
      props: {
        title: {
          type: String,
          default: ''
        }
      },
      computed: {
        technologies() {
          return [
            { name: 'Autonomie' },
            { name: 'Travail en équipe' },
            { name: 'Bonne humeur' },
            { name: 'Optimiste' },
            { name: 'Dynamique' },
          ];
        }
      }
    };
</script>
<style>

</style>
    