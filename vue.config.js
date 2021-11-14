module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/variables.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pharmacist_game/'
    : '/',
}
