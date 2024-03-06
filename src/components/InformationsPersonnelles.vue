<!-- InformationsPersonnelles.vue -->

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
    nom: String,
    num: Number
  }
}
</script>

<style scoped>
  /* Styles CSS spécifiques à la section des informations personnelles */
  .informations-personnelles {
color: blueviolet;  }
  </style>
