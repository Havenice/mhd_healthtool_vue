// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/healthtool/'
    : '/',
  pwa: {
    name: 'MHD HealthTool',
    themeColor: '#ff9800',
    msTileColor: '#ff9800',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
}
