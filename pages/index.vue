<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col md="8">
          <div id="map" style="min-height:600px;"></div>
          <div id="customize-script-container">
            <script
              type="text/javascript"
              src="https://darksky.net/widget/graph-bar/27.0000,-90.00000/us12/en.js?width=undefined&title=Full Forecast&textColor=333333&bgColor=FFFFFF&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=C7C7C7&currentDetailsOption=true"
            ></script>
          </div>
        </b-col>
        <b-col md="4">
          <div id="twitter_timeline" style="height:650px;">
            <a
              class="twitter-timeline"
              data-height="800"
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
        </b-col>
        <b-col md="4">
          <b-card
            img-src="https://www.nhc.noaa.gov/storm_graphics/AT14/AL142018_most_likely_toa_34_sm2.png"
            img-top
          >
            <a
              href="https://www.nhc.noaa.gov/storm_graphics/AT14/AL142018_most_likely_toa_34_sm2.png"
              target="_blank"
            >
              <i class="fas fa-search-plus"></i>
            </a>
          </b-card>
        </b-col>
      </b-row>
      <br>
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
        </b-col>
        <b-col md="4">
          <b-card title="Storm Surge & Wave" img-src="img/cera_storm_surge_1180x607.jpg" img-top>
            <a href="https://cera.coastalrisk.live/" target="_blank">
              <i class="fas fa-search-plus"></i>
            </a>
          </b-card>
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

<style>
#customize-script-container {
  margin-top: -40px;
  width: 100%;
  height: 320px;
}
.leaflet-control-velocity.leaflet-control {
  color: white;
}
</style>
