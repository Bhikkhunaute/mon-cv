<template>
  <div class="row">
    <div class="col-12">
      <h1>Portfolio</h1>
    </div>
    <div class="col-10 offset-1">
      <Portfolio 
        :title="'Sites'" 
        :sites-data="sites1" 
      />
      <Portfolio 
        :title="'Design'" 
        :sites-data="sites2" 
      />
      <Portfolio 
        :title="'Dev'" 
        :sites-data="sites3" 
      />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Portfolio from '@/components/PortSites.vue'

export default {
  name: 'AboutView',
  components: {
    Portfolio
  },
  data() {
    return {
      sites1: [
        { id: 1, name: "Intranet ENM", src: "logo.png" },
        { id: 2, name: "Site internet ENM", src: "logo.png" },
        { id: 3, name: "Site Ecoor", src: "logo.png" },
        { id: 4, name: "Site X", src: "logo.png" },
        { id: 5, name: "Site X", src: "logo.png" },
      ],
      sites2: [
        { id: 1, name: "Logo V", src: "logo.png" },
        { id: 2, name: "Webdesign", src: "logo.png" },
        { id: 3, name: "Dessinateur", src: "logo.png" },
      ],
      sites3: [
        { id: 1, name: "Logo V", src: "logo.png" },
        { id: 2, name: "Webdesign", src: "logo.png" },
        { id: 3, name: "Dessinateur", src: "logo.png" },
      ]
    };
  }
}
</script>
<style>
  h1 {
    font-size: 3rem;
    color: white;
  }
  h2 {
    text-align: left;
    color: white;
  }
</style>
