<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col md="8">
          <div id="map" style="min-height:600px;"></div>
        </b-col>
        <b-col md="4">
          <div id="twitter_timeline" style="height:650px;">
            <a
              class="twitter-timeline"
              data-height="600"
              data-dnt="true"
              href="https://twitter.com/gisp_shin/lists/hurricane?ref_src=twsrc%5Etfw"
              data-chrome="noheader nofooter"
            >A Twitter List by gisp_shin</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col md="4">
          <b-card
            footer="2-day Outlook &nbsp;<a href='https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_2d0.png' target='_blank'><i class='fas fa-search-plus'></i></a>"
            img-src="https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_2d0.png"
            img-top
          ></b-card>
        </b-col>
        <b-col md="4">
          <b-card
            footer="5-day Outlook &nbsp;<a href='https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_5d0.png' target='_blank'><i class='fas fa-search-plus'></i></a>"
            img-src="https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_5d0.png"
            img-top
          ></b-card>
        </b-col>
        <b-col md="4">
          <b-card
            footer="Storm track &nbsp;<a href='https://www.nhc.noaa.gov/storm_graphics/AT14/AL142018_most_likely_toa_34_sm2.png' target='_blank'><i class='fas fa-search-plus'></i></a>"
            img-src="https://www.nhc.noaa.gov/storm_graphics/AT14/AL142018_most_likely_toa_34_sm2.png"
            img-top
          ></b-card>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col md="4">
          <b-card
            footer="SSMI/AMSRE Precipitable Water &nbsp;<a href='http://tropic.ssec.wisc.edu/real-time/mimic-tpw/natl/anim/latest72hrs.gif' target='_blank'><i class='fas fa-search-plus'></i></a>"
            img-src="http://tropic.ssec.wisc.edu/real-time/mimic-tpw/natl/anim/latest72hrs.gif"
          ></b-card>
          <br>
        </b-col>
        <b-col md="4">
          <b-card
            footer="Wind forecast &nbsp;<a href='http://seawater.tamu.edu/tglo/wind_animation_wg.gif' target='_blank'><i class='fas fa-search-plus'></i></a>"
            img-src="http://seawater.tamu.edu/tglo/wind_animation_wg.gif"
          ></b-card>
        </b-col>
        <b-col md="4">
          <b-card
            footer="Storm Surge & Wave &nbsp;<a href='https://cera.coastalrisk.live/' target='_blank'><i class='fas fa-external-link-alt'></i></a>"
            img-src="img/cera_storm_surge_1180x607.jpg"
          ></b-card>
        </b-col>
      </b-row>
      <br>
    </b-container>
    <script src="js/leaflet-velocity.js"></script>
    <script src="js/hurricane_map.js"></script>
  </div>
</template>

<script>
if (process.browser) {
  window.globalVar = "global variable loaded...";
}
export default {
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
  }
};
</script>
