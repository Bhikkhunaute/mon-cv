<template>
  <div class="row">
    <h2>{{ title }}</h2>
    <div
      v-for="site in sites" 
      :key="site.id"
      class="col-12 col-md-4 col-xl-3"
    >
      <div class="hovereffect">
        <img 
          class="img-responsive" 
          :src="site.src"
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
      default: 'Sites',
    }
  },
  data() {
      return {
        sites: [
          { id: 1, name: "Intranet ENM", src: "@/assets/logo.png" },
          { id: 1, name: "Intranet ENM", src: "/assets/logo.png" },
          { id: 1, name: "Intranet ENM", src: "../assets/victor.jpg" },
          { id: 1, name: "Intranet ENM", src: "../assets/logo.png" },
          { id: 1, name: "Intranet ENM", src: "../assets/logo.png" },
        ]
      };
    }
}
</script>

<style scoped>
</style>
