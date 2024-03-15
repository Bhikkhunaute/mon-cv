<template>
  <div class="skills">
    <h2>{{ title }}</h2>
    <div 
      v-for="aboutme in about"
      :key="aboutme.id"
      class="row"
    >
      <div class="col-md-4">
        <p><strong>{{ aboutme.title }}</strong></p>
      </div>
      <div class="col-md-7 alleft">
        <p>{{ aboutme.txt }}</p>
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
        data() {
            return {
                about: [
                    { id: 1, title:'Lieu :', txt: 'Bordeaux' },
                    { id: 2, title:'Mail :', txt: 'prudhon.victor.pro@gmail.com' },
                    { id: 2, title:'Tel :', txt: '0600000000' },
                ]
            };
        }
    };
</script>
<style>
    .aboutme {
        display: flex;
        flex-direction: row;
    }
</style>