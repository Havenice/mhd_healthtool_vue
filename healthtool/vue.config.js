const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  // ...other vue-cli plugin options...
  publicPath: '/healthtool',
  outputDir: path.join(__dirname, 'dist/healthtool'),
  pwa: {
    name: 'MHD HealthTool',
    themeColor: '#ff9800',
    msTileColor: '#ff9800',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  },
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production', // Disable during development
        jpegtran: {
          quality: '85-90'
        }
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist/'),
        outputDir: path.join(__dirname, 'dist/healthtool'),
        indexPath: path.join(__dirname, 'dist', '/healthtool/index.html'),
        // IMPORTANT HERE
        routes: ['/', '/en', '/zh', '/en/pasi-check', '/zh/pasi-check', '/en/intestinal-age-check', '/zh/intestinal-age-check',
          '/zh/bmi-check', '/en/bmi-check'
        ],

        // IMPORTANT HERE
        postProcess (renderedRoute) {
          renderedRoute.route = renderedRoute.originalRoute
          renderedRoute.html = renderedRoute.html.split(/>[\s]+</gim).join('><')
          if (renderedRoute.route.endsWith('.html')) {
            renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
          }
          return renderedRoute
        }
      })
    ]
  }
}
