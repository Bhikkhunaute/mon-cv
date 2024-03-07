<template>
  <div class="home">
    <img src="../assets/victor.jpg" class="img-rounded"/>
    <HelloWorld msg="Victor Prudhon"/>
  </div>
</template>
<style>
.home {
  display: flex;
  justify-content: space-evenly;
}
.img-rounded {
  object-fit: cover;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: #01C38D solid;
  flex-grow: 1;
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
