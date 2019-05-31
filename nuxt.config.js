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
        href: '/hurricane/favicon.ico'
      },
      {
        /* Google Font */
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      },
      {
        /* Adobe Proxima Nova */
        rel: "stylesheet",
        href: "https://use.typekit.net/pel5bpx.css"
      },
      {
        /* Font Awesome */
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
        integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
        crossorigin: "anonymous"
      },
      {
        /* Leaflet */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet@1.5.1/dist/leaflet.css",
        integrity: "sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",
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
      },
      {
        /* Leaflet Gesture Control */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css"
      },
      {
        /* Leaflet Time Dimesion */
        rel: "stylesheet",
        href: "https://cdn.rawgit.com/socib/Leaflet.TimeDimension/master/dist/leaflet.timedimension.control.min.css"
      }

    ],
    script: [{
        /* Leaflet */
        src: "https://unpkg.com/leaflet@1.5.1/dist/leaflet.js",
        integrity: "sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==",
        crossorigin: ""
      },
      {
        /* ESRI Leaflet */
        src: "https://unpkg.com/esri-leaflet@2.2.4/dist/esri-leaflet.js",
        integrity: "sha512-tyPum7h2h36X52O2gz+Pe8z/3l+Y9S1yEUscbVs5r5aEY5dFmP1WWRY/WLLElnFHa+k1JBQZSCDGwEAnm2IxAQ==",
        crossorigin: ""
      },
      {
        /* Leaflet Fullscreen */
        src: "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js"
      },
      {
        /* Leaflet Awesome Marker */
        src: "https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"
      },
      {
        /* Leaflet Omnivore */
        src: 'https://api.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'
      },
      {
        /* ISO 8601 Date and Time */
        src: "https://cdn.rawgit.com/nezasa/iso8601-js-period/master/iso8601.min.js"
      },
      {
        /* NonTiledLayer */
        src: "https://unpkg.com/leaflet.nontiledlayer@1.0.7/dist/NonTiledLayer.js"
      }, {
        /* Leaflet Time Dimesion */
        src: "https://cdn.rawgit.com/socib/Leaflet.TimeDimension/master/dist/leaflet.timedimension.min.js"
      }, {
        /* Leaflet Gesture Control */
        src: "https://unpkg.com/leaflet-gesture-handling@1.1.8/dist/leaflet-gesture-handling.min.js"
      },
      {
        /* Google Maps API */
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB1Qb_BhHlGWmRWf4PQrgTcG2xZai5ENP8&libraries=places"
      }, {
        /* Leaflet GoogleMutant */
        src: "https://unpkg.com/leaflet.gridlayer.googlemutant@latest/Leaflet.GoogleMutant.js"
      },
      {
        /* jQuery for antiweather and ajax */
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      },
      {
        /* moment js for antiweather */
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"
      }, {
        /* moment timezone for antiweather */
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.23/moment-timezone-with-data.min.js"
      },
      {
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
    color: '#00a2cc'
  },

  /*
   ** Global CSS
   */
  css: [{
      src: "~assets/css/webflow.css"
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
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/sentry",
    // cache with options
    [
      "@nuxtjs/component-cache",
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ],
    "bootstrap-vue/nuxt",
  ],
  /*
   ** Bootstrap-vue configuration
   */
  bootstrapVue: {
    bootstrapCSS: true, // or false for customized CSS
    bootstrapVueCSS: true
  },

  /*
   ** Axios module configuration
   */
  axios: {},
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
