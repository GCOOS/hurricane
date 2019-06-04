<template>
  <div class="canvas">
    <b-container>
      <b-row>
        <b-col>
          <h2>Model (GFS/NAM) based animation</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div id="windy"></div>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col sm="12">
          <b-card no-body bg-variant="dark" text-variant="white" header="Storm related blogs">
            <b-list-group flush>
              <b-list-group-item
                href="http://jyotikastorms.blogspot.com/"
                target="_blank"
              >Tropical Storm Blog</b-list-group-item>
              <b-list-group-item
                href="http://www.esl.lsu.edu/hurricanes/"
                target="_blank"
              >LSU Atlantic Storm Basin</b-list-group-item>
              <b-list-group-item
                href="https://www.tropicaltidbits.com/"
                target="_blank"
              >Tropical Tidbits: Blog & More</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col>
          <h2>Model Examples</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-card
            title="SSMI/AMSRE Precipitable Water"
            img-src="http://tropic.ssec.wisc.edu/real-time/mimic-tpw/natl/anim/latest72hrs.gif"
            img-top
          >
            <a
              href="http://tropic.ssec.wisc.edu/real-time/mimic-tpw/natl/anim/latest72hrs.gif"
              target="_blank"
            >
              <i class="fas fa-search-plus"></i>
            </a>
          </b-card>
          <br>
        </b-col>

        <b-col md="4">
          <b-card title="Storm Surge & Wave" img-src="img/cera_storm_surge_1180x607.jpg" img-top>
            <a href="https://cera.coastalrisk.live/" target="_blank">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </b-card>
          <br>
        </b-col>

        <b-col md="4">
          <b-card
            title="Wind forecast"
            img-src="http://seawater.tamu.edu/tglo/wind_animation_wg.gif"
            img-top
          >
            <a href="http://seawater.tamu.edu/tglo/wind_animation_wg.gif" target="_blank">
              <i class="fas fa-search-plus"></i>
            </a>
          </b-card>
          <br>
        </b-col>
      </b-row>
    </b-container>
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
          /* Leaflet Gesture Control */
          rel: "stylesheet",
          href:
            "https://unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css"
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
          /* Leaflet Gesture Control */
          src:
            "https://unpkg.com/leaflet-gesture-handling@1.1.8/dist/leaflet-gesture-handling.min.js"
        },
        {
          /* Windy.com API */
          src: "https://api4.windy.com/assets/libBoot.js"
        }
      ]
    };
  },
  mounted() {
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
      var noaaHurricaneTrack = L.esri
        .dynamicMapLayer({
          url:
            "https://www.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer"
        })
        .addTo(map);
    });
  }
};
</script>

<style>
#windy {
  width: 100%;
  height: 500px;
}
.leaflet-pane {
  z-index: auto !important;
}
</style>