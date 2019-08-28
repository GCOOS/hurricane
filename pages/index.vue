<template>
  <div class="canvas">
    <b-container fluid>
      <b-row>
        <b-col md="8" xs="12">
          <div id="hurricaneMap"></div>
          <no-ssr>
            <div id="customize-script-container" class="weather_div">
              <script
                type="text/javascript"
                src="https://darksky.net/widget/graph-bar/25.18879,-80.66849/us12/en.js?width=undefined&height=350&title=Full Forecast&textColor=333333&bgColor=FFFFFF&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=C7C7C7&currentDetailsOption=true"
              ></script>
            </div>
          </no-ssr>
        </b-col>
        <b-col md="4" xs="12">
          <div id="tweet_timeline">
            <a
              class="twitter-timeline"
              data-dnt="true"
              data-height="800"
              href="https://twitter.com/gisp_shin/lists/hurricane?ref_src=twsrc%5Etfw"
              data-chrome="noheader nofooter"
            >A Twitter List by gisp_shin</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <h2>Forecast</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-card
            sub-title="2-day Outlook"
            img-src="https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_2d0.png"
            img-top
          >
            <a
              href="https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_2d0.png"
              target="_blank"
            >
              <i class="fas fa-search-plus"></i>
            </a>
          </b-card>
          <br />
        </b-col>
        <b-col md="4">
          <b-card
            sub-title="5-day Outlook"
            img-src="https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_5d0.png"
            img-top
          >
            <a
              href="https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_5d0.png"
              target="_blank"
            >
              <i class="fas fa-search-plus"></i>
            </a>
          </b-card>
          <br />
        </b-col>
        <b-col md="4">
          <b-card
            img-src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/GEOCOLOR/1000x1000.jpg"
            img-top
          >
            <!--
          <b-card img-src="https://geo.gcoos.org/data/hurricane/most_likely_toa_34_sm2.png" img-top>
            <a
              href="https://geo.gcoos.org/data/hurricane/most_likely_toa_34_sm2.png"
              target="_blank"
            >
              <i class="fas fa-search-plus"></i>
            </a>
            -->
          </b-card>
          <br />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div>
            Icons made by
            <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >CC 3.0 BY</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <script src="js/hurricane_map.js"></script>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          /* Leaflet */
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet@1.4.0/dist/leaflet.css",
          integrity:
            "sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==",
          crossorigin: ""
        },
        {
          /* Leaflet Fullscreen Button */
          rel: "stylesheet",
          href:
            "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css"
        },
        {
          /* Leaflet Marker Cluster */
          rel: "stylesheet",
          href:
            "https://unpkg.com/leaflet.markercluster@1.4.0/dist/MarkerCluster.Default.css"
        },
        {
          /* Leaflet Awesome Marker */
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css"
        },
        {
          /* Leaflet Gesture Control */
          rel: "stylesheet",
          href:
            "https://unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css"
        },
        {
          /* Leaflet Time Dimesion */
          rel: "stylesheet",
          href:
            "https://cdn.rawgit.com/socib/Leaflet.TimeDimension/master/dist/leaflet.timedimension.control.min.css"
        }
      ],
      script: [
        {
          /* Leaflet */
          src: "https://unpkg.com/leaflet@1.4.0/dist/leaflet.js",
          integrity:
            "sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==",
          crossorigin: ""
        },
        {
          /* ESRI Leaflet */
          src: "https://unpkg.com/esri-leaflet@2.2.4/dist/esri-leaflet.js",
          integrity:
            "sha512-tyPum7h2h36X52O2gz+Pe8z/3l+Y9S1yEUscbVs5r5aEY5dFmP1WWRY/WLLElnFHa+k1JBQZSCDGwEAnm2IxAQ==",
          crossorigin: ""
        },
        {
          /* Leaflet Fullscreen */
          src:
            "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js"
        },
        {
          /* Leaflet Awesome Marker */
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"
        },
        {
          /* Leaflet Omnivore */
          src:
            "https://api.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js"
        },
        {
          /* ISO 8601 Date and Time */
          src:
            "https://cdn.rawgit.com/nezasa/iso8601-js-period/master/iso8601.min.js"
        },
        {
          /* Leaflet Time Dimesion */
          src:
            "https://cdn.rawgit.com/socib/Leaflet.TimeDimension/master/dist/leaflet.timedimension.min.js"
        },
        {
          /* Leaflet Gesture Control */
          src:
            "https://unpkg.com/leaflet-gesture-handling@1.1.8/dist/leaflet-gesture-handling.min.js"
        },
        {
          /* Google Maps API */
          src:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyB1Qb_BhHlGWmRWf4PQrgTcG2xZai5ENP8&libraries=places"
        },
        {
          /* Leaflet GoogleMutant */
          src:
            "https://unpkg.com/leaflet.gridlayer.googlemutant@latest/Leaflet.GoogleMutant.js"
        },
        {
          /* Windy.com API */
          src: "https://api4.windy.com/assets/libBoot.js"
        }
      ]
    };
  },
  mounted() {
    console.log(window.globalVar);
    !(function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? "http" : "https";
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "twitter-wjs");

    const options = {
      key: "OIx5V8xPEniclcCnCOMWJ0DwyJEoOxPM",
      verbose: true,
      lat: 25.0,
      lon: -85,
      zoom: 4,

      timestamp: Date.now() + 1 * 24 * 60 * 60 * 1000,

      hourFormat: "12h"
    };

    windyInit(options, windyAPI => {
      const { store, broadcast } = windyAPI;
      // All the params are stored in windyAPI.store
      const levels = store.getAllowed("availLevels");
      /*
      var i = 0;
      setInterval(() => {
        i = i === levels.length - 1 ? 0 : i + 1;
        // Changing Windy params at runtime
        store.set("level", levels[i]);
      }, 3600);
      // Observing change of .store value
      store.on("level", level => {
        console.log(`Level was changed: ${level}`);
      });
      */
      var activeHurricaneESRI = L.esri
        .dynamicMapLayer({
          url:
            "https://utility.arcgis.com/usrsvcs/servers/6c6699e853424b22a8618f00d8e0cf81/rest/services/LiveFeeds/Hurricane_Active/MapServer",
          f: "image/png"
        })
        .addTo(map);

      var noaaHurricaneTrack = L.esri.dynamicMapLayer({
        url:
          "https://www.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer"
      });

      var nrlVelocity = L.tileLayer
        .wms("http://gcoos-mdv.gcoos.org:8080/ncWMS/wms", {
          layers: "NRL_MEAN/sea_water_velocity",
          format: "image/png",
          transparent: true,
          attribution: "GCOOS-RA, NRL",
          elevation: "0",
          opacity: 0.7
        })
        .addTo(map);
    });
  }
};
</script>

<style>
#hurricaneMap {
  min-height: 500px;
  height: 40vh;
}
#customize-script-container {
  width: 100%;
  height: 100%;
}
#tweet_timeline {
  min-height: 500px;
  height: 60vh;
}
.leaflet-control-velocity.leaflet-control {
  color: white;
}

@media only screen and (max-width: 1200px) {
  #hurricaneMap {
    height: 45vh;
  }
  #tweet_timeline {
    height: 45vh;
  }
  .weather_div {
    display: inline-block;
  }
}

@media only screen and (max-width: 992px) {
  #hurricaneMap {
    height: 50vh;
  }
  #tweet_timeline {
    height: 50vh;
  }
}

@media only screen and (max-width: 576px) {
  .weather_div {
    display: none;
  }
  #tweet_timeline {
    display: none;
  }
  .awesome-marker-icon-red.awesome-marker.leaflet-zoom-animated.leaflet-interactive.leaflet-marker-draggable {
    display: none;
  }
}

@media only screen and (max-width: 420px) {
  #hurricaneMap {
    min-height: 250px;
    height: 70vh;
  }
}
</style>
