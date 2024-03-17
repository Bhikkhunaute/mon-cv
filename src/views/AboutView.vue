<template>
  <div class="row">
    <div class="col-12">
      <h1>Portfolio</h1>
    </div>
    <div class="col-12 col-md-10 offset-1">
      <PortfolioSites title="Sites" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import PortfolioSites from '@/components/PortSites.vue'

export default {
  name: 'AboutView',
  components: {
    PortfolioSites
  }
}
</script>
<style>
</style>
