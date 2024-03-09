<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Développeur front-end, 30 ans, Permis B</h3>
    <p>Actuellement en poste en tant Webmaster au sein de l'Ecole nationale de la magistrature.</p>
    <p>Passioné par la culture du web, le développement et le design, j'ai su lier technique, graphisme et optimisation.</p>
    <p>Je suis optimiste, aimant apprendre tous les jours afin de me perfectionner et donner le meilleur de moi-même. </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  flex: 1;
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
