module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: "GCOOS Hurricane Information Dashboard",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'GCOOS Hurricane Information Dashboard. Hurricane-related information for the Gulf of Mexico including meteorological & oceanographic conditions; preparation, evacuation & post-storm resources. It provides information of hurricane track, satellite images, preparation resources and state/county emergency operation centers and shelters'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },
      {
        /* Google Font */
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
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
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
        integrity: "sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP",
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
        /* Leaflet Awesome Marker */
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css"
      }, {
        /* Leaflet Time Dimesion */
        rel: "stylesheet",
        href: "https://cdn.rawgit.com/socib/Leaflet.TimeDimension/master/dist/leaflet.timedimension.control.min.css"
      }, {
        /* Leaflet Gesture Control */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css"
      }, {
        /* jQuery UI */
        rel: "stylesheet",
        href: "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
      }
    ],
    script: [{
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
      }, {
        /* Leaflet Awesome Marker */
        src: "https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"
      }, {
        /* Leaflet Omnivore */
        src: 'https://api.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'
      }, {
        /* ISO 8601 Date and Time */
        src: "https://cdn.rawgit.com/nezasa/iso8601-js-period/master/iso8601.min.js"
      }, {
        /* NonTiledLayer */
        src: "https://unpkg.com/leaflet.nontiledlayer@1.0.7/dist/NonTiledLayer.js"
      }, {
        /* Leaflet Time Dimesion */
        src: "https://cdn.rawgit.com/socib/Leaflet.TimeDimension/master/dist/leaflet.timedimension.min.js"
      }, {
        /* Leaflet Gesture Control */
        src: "https://unpkg.com/leaflet-gesture-handling"
      }, {
        /* High charts */
        src: "https://code.highcharts.com/highcharts.src.js"
      },
      {
        /* jQuery */
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
      }, {
        /* jQuery-UI */
        src: "https://code.jquery.com/ui/1.12.1/jquery-ui.js"
      }, {
        /* d3 */
        src: "https://d3js.org/d3.v5.min.js"
      }, {
        /* d3-fetch */
        src: "https://d3js.org/d3-fetch.v1.min.js"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [{
      src: '~assets/css/menu.css'
    },
    {
      src: '~assets/css/grid-only.css'
    },
    {
      src: '~assets/css/footer.css'
    },
    {
      src: '~assets/css/main.css'
    }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~plugins/ga.js',
    ssr: false
  }],

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
   ** Bootstrap-vue configuration
   */
  bootstrapVue: {
    bootstrapCSS: true, // or false for customized CSS
    bootstrapVueCSS: true
  },
  router: {
    base: '/hurricane/'
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
