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
        href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css",
        integrity: "sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN",
        crossorigin: "anonymous"
      },
      {
        /* Leaflet */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
        integrity: "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",
        crossorigin: ""
      },
      {
        /* Leaflet Fullscreen */
        rel: "stylesheet",
        href: "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css"
      },
      {
        /* Leaflet Extra Marker */
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/leaflet-extra-markers@1.2.1/dist/css/leaflet.extra-markers.min.css"
      },
      {
        /* Leaflet Gesture Control */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet-gesture-handling@1.2.1/dist/leaflet-gesture-handling.min.css"
      },
      {
        /* Leaflet TimeDimension */
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/leaflet-timedimension@1.1.1/dist/leaflet.timedimension.control.min.css"
      },
      {
        /* jQuery UI */
        rel: "stylesheet",
        href: "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
      },
    ],
    script: [
      {
        /* jQuery for ajax */
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      },
      {
        /* jQuery-UI */
        src: "https://code.jquery.com/ui/1.12.1/jquery-ui.js"
      },
      {
        /* d3 */
        src: "https://d3js.org/d3.v5.min.js"
      },
      {
        /* Leaflet */
        src: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
        integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",
        crossorigin:""
      },
      {
        /* ESRI-Leaflet */
        src: "https://unpkg.com/esri-leaflet@2.5.1/dist/esri-leaflet.js",
        integrity: "sha512-q7X96AASUF0hol5Ih7AeZpRF6smJS55lcvy+GLWzJfZN+31/BQ8cgNx2FGF+IQSA4z2jHwB20vml+drmooqzzQ==",
        crossorigin: ""
      },
      {
        /* Leaflet Fullscreen button */
        src: "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js"
      },
      {
        /* Leaflet Extra Marker */
        src: "https://cdn.jsdelivr.net/npm/leaflet-extra-markers@1.2.1/dist/js/leaflet.extra-markers.min.js"
      },
      {
        /* Leaflet Gesture Control */
        src: "https://unpkg.com/leaflet-gesture-handling@1.2.1/dist/leaflet-gesture-handling.min.js"
      },
      {
        /* Google Maps API */
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB1Qb_BhHlGWmRWf4PQrgTcG2xZai5ENP8&libraries=places"
      },
      {
        /* Leaflet GoogleMutant */
        src: "https://unpkg.com/leaflet.gridlayer.googlemutant@latest/Leaflet.GoogleMutant.js"
      },
      /* Leaflet Time Dimension */
      { src: "https://cdn.jsdelivr.net/npm/leaflet.nontiledlayer@1.0.7/dist/NonTiledLayer.js"},
      { src: "https://cdn.jsdelivr.net/npm/iso8601-js-period@0.2.1/iso8601.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/leaflet-timedimension@1.1.1/dist/leaflet.timedimension.min.js"},
      { 
        src: "https://unpkg.com/esri-leaflet-renderers@2.1.2"
      },
      {
        /* moment.js */
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"
      },
      {
        /* moment timezone */
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.23/moment-timezone-with-data.min.js"
      },
      { src: "/hurricane/js/leaflet-velocity.js" }, 
      { src: "/hurricane/js/leaflet.timedimension.circlelabelmarker.js"},
      { src: "/hurricane/js/leaflet.timedimension.layer.wms.timeseries.js"},
      { 
        /* twitter: must be the last*/
        src: 'https://platform.twitter.com/widgets.js', 
        async: true, 
        defer: true 
      },
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
    "bootstrap-vue/nuxt",
  ],
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
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    },
    babel: {
      compact: true
    }
  }
}
