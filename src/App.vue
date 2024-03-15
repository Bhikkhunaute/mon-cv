<template>
  <div class="container-fluid">
    <div class="app">
      <div class="row">
        <nav class="col-xs-12">
          <router-link to="/">
            Home
          </router-link>
          <router-link to="/about">
            Portfolio
          </router-link>
        </nav>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #FFFFFF;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.container-fluid {
  padding: 0px !important;
}
</style>
