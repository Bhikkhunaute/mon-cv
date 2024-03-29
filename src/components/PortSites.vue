<template>
  <div class="row">
    <h2 class="mb-4 mt-4">
      {{ title }}
    </h2>
    <div
      v-for="site in sites" 
      :key="site.id"
      class="col-12 col-md-4 col-xl-3"
    >
      <div class="hovereffect">
        <img 
          class="img-fluid" 
          :src="require(`../assets/${site.src}`)"
          alt=""
        >
        <div class="overlay">
          <h2>{{ site.name }}</h2>
          <a 
            class="info"
            href="#"
          >link here</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortSites',
  props: {
    title: {
      type: String,
      default: '',
    },
    sitesData: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    sites() {
      return this.sitesData.map(site => ({
        ...site,
        src: `${site.src}`
      }));
    }
  }
}

  
</script>

<style scoped>
</style>
