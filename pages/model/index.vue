<template>
  <div class="canvas">
    <b-container>
      <b-row>
        <b-col>
          <h2>Model Examples</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-card
            title="SSMI/AMSRE Precipitable Water"
            img-src="http://tropic.ssec.wisc.edu/real-time/mtpw2/webAnims/tpw_nrl_colors/natl/mimictpw_natl_latest.gif"
            img-top
            
          >
            <a
              href="http://tropic.ssec.wisc.edu/real-time/atlantic/movies/g8irn/g8irn_loop.html"
              target="_blank"
            >
              <i class="fas fa-external-link-alt"></i>
            </a>
          </b-card>
          <br />
        </b-col>
        <b-col md="6">
          <b-card
            title="Storm Surge & Wave"
            img-src="img/cera_storm_surge_1180x607.jpg"
            img-top
          >
            <a href="https://cera.coastalrisk.live/" target="_blank">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </b-card>
          <br />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <b-card
            no-body
            bg-variant="dark"
            text-variant="white"
            header="Blogs (including Forecast)"
          >
            <b-list-group flush>
              <b-list-group-item
                href="http://jyotikastorms.blogspot.com/"
                target="_blank"
                >Tropical Storm Blog</b-list-group-item
              >
              <b-list-group-item
                href="http://www.esl.lsu.edu/hurricanes/"
                target="_blank"
                >LSU Atlantic Storm Basin</b-list-group-item
              >
              <b-list-group-item
                href="https://www.tropicaltidbits.com/"
                target="_blank"
                >Tropical Tidbits: Blog & More</b-list-group-item
              >
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col>
          <div>
            <h2>Saffir-Simpson scale</h2>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div>
            <img src="~assets/images/resource/Saffir-Simpson-Scale.png">
            <p>Image courtesy of National Meteorological Service of Belize</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
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
