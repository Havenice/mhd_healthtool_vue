// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'MHD HealthTool',
    themeColor: '#ff9800',
    msTileColor: '#ff9800',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js'
      // ...other Workbox options...
    }
  }
}
