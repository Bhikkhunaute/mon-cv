<template>
  <div class="home">
    <div class="img-rounded"></div>
    <HelloWorld msg="Victor Prudhon"/>
  </div>
</template>
<style>
.home {
  display: flex;
  justify-content: space-between;
}
.img-rounded {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: url('/src/assets/victor.jpg');
  background-size: cover;
  background-position: center;
  border: #01C38D solid;
  margin-left: 15% !important;
  margin-right: 15% !important;
  margin: auto;
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
