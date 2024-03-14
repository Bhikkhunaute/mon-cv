<template>
  <div class="informations-personnelles">
    <h2>Informations Personnelles</h2>
    <p>{{ nom }}</p>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  name: 'InformationsPersonnelles',
  props: {
    nom: {
      type: String,
      default: '',
    },
    num: {
      type: Number,
      default: 0,
    }
  }
}
</script>

<style scoped>
  /* Styles CSS spécifiques à la section des informations personnelles */
  .informations-personnelles {
color: blueviolet;  }
  </style>
