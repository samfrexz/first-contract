const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "os": require.resolve('os-browserify'),
        "https": false,
        "http": false,
        "crypto": false,
        "assert": false,
        "stream": false,
        "url": false,
        "buffer": require.resolve('buffer')
      } 
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"]
      })
    ]
  }
})
