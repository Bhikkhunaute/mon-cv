const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      css: {
        
      }
    }
  }
});

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mon-cv/' // Remplacez 'mon-cv' par le nom de votre référentiel GitHub
    : '/'
}