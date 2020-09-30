module.exports = {
  publicPath: '/yamabico/',
  assetsDir: 'assets',
  devServer: {
    proxy: {
      '/yamabico/api': {
        target: 'http://localhost:3030'
      }
    }
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  }
}
