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
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}