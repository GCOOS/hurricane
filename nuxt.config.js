module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "GCOOS Hurricane Information Dashboard",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'GCOOS Hurricane Information Dashboard. It provides information of hurricane track, satellite images, preparation resources and state/county emergency operation centers and shelters' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        /* Google Font */
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      },
      {
        /* Material Design Icon */
        rel: "stylesheet",
        href: "https://cdn.materialdesignicons.com/1.3.41/css/materialdesignicons.min.css"
      },
      {
        /* Google Material Icons */
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        /* Font Awesome */
        rel: 'stylesheet',
        href: "https://use.fontawesome.com/releases/v5.1.1/css/all.css",
        integrity: "sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ",
        crossorigin: "anonymous"
      },
      {
        /* Leaflet */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet@1.3.4/dist/leaflet.css",
        integrity: "sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==",
        crossorigin: ""
      },
      {
        /* Leaflet Fullscreen Button */
        rel: "stylesheet",
        href: "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css"
      },
      {
        /* Leaflet Marker Cluster */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet.markercluster@1.4.0/dist/MarkerCluster.Default.css"
      },
      {
        /* Leaflet Marker Cluster 2 */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet.markercluster@1.4.0/dist/MarkerCluster.css"
      }
    ],
    script: [
      {
        /* Leaflet */
        src: "https://unpkg.com/leaflet@1.3.4/dist/leaflet.js",
        integrity: "sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==",
        crossorigin: ""
      },
      {
        /* ESRI Leaflet */
        src: "https://unpkg.com/esri-leaflet@2.2.3/dist/esri-leaflet.js",
        integrity: "sha512-YZ6b5bXRVwipfqul5krehD9qlbJzc6KOGXYsDjU9HHXW2gK57xmWl2gU6nAegiErAqFXhygKIsWPKbjLPXVb2g==",
        crossorigin: ""
      },
      {
        /* Leaflet Fullscreen */
        src: "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js"
      },
      {
        /* Leaflet Omnivore */
        src: '//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.3.1/leaflet-omnivore.min.js'
      },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
