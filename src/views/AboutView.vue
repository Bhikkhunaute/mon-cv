<template>
  <div class="about">
    <h1>This is an about page</h1>
    <InformationsPersonnelles nom="Victor" num="0329293"/>
    <InformationsPersonnelles nom="Victor" num="0329293"/>
  </div>
</template>
<script>
// @ is an alias to /src
import InformationsPersonnelles from '@/components/InformationsPersonnelles.vue'

export default {
  name: 'HomeView',
  components: {
    InformationsPersonnelles
  }
}
</script>
<style>
.about{
  display: flex;
  justify-content: space-evenly;
}
</style>
