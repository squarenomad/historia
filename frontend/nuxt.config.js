module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MIMINANI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  * Change the default directory
  */
  srcDir: 'client/',
  /*
  * Add global CSS files
  */
  css: [
    'bootstrap-css-only/css/bootstrap.min.css',
    'font-awesome/css/font-awesome.min.css',
    'npm-font-open-sans/open-sans.css',
    '~assets/css/main.css'
  ]
}