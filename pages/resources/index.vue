<template>
  <div class="canvas">
    <b-container>
      <div class="centered">
        <h2>Resources - Preparation, Post-Hurricane</h2>
      </div>
      <b-row>
        <b-col sm="12">
          <b-card
            no-body
            header="Information"
            header-text-variant="white"
            header-tag="header"
            header-bg-variant="info"
          >
            <b-tabs card>
              <b-tab title="Preparation" active>
                <h4>National Hurricane Center &ndash; Hurricane Preparedness &ndash; Be Ready</h4>
                <ul>
                  <li>
                    <a href="http://www.nhc.noaa.gov" target="_blank">Home Page NHC</a>
                  </li>
                  <li>
                    <a
                      href="http://www.nhc.noaa.gov/prepare/ready.php"
                      target="_blank"
                    >Main NHC preparedness page</a>
                  </li>
                  <li>
                    <a
                      href="http://www.spc.noaa.gov/new/images/Outlook-category-descriptions.png"
                      target="_blank"
                    >Understanding thunderstorm category</a>
                  </li>
                </ul>
                <p>
                  <b>Links from the NHC Main Page:</b>
                </p>
                <ul>
                  <li>
                    <a
                      href="http://www.nws.noaa.gov/om/hurricane/index.shtml"
                      target="_blank"
                    >Hurricane Safety Tips and Resources</a>
                  </li>
                  <li>
                    <a
                      href="http://www.weather.gov/wrn/hurricane-preparedness"
                      target="_blank"
                    >Hurricane Preparedness Week Information</a>
                  </li>
                </ul>
                <p>
                  <b>Action items</b>
                </p>
                <p>
                  <a href="http://www.nws.noaa.gov/om/hurricane/plan.shtml " target="_blank">
                    What to do
                    <strong>before</strong> the tropical storm or hurricane
                  </a>
                </p>
                <p>
                  <a href="http://www.nws.noaa.gov/om/hurricane/action.shtml" target="_blank">
                    <strong>Actions</strong> to take when a hurricane or tropical storm threatens
                  </a>
                </p>
                <p>
                  <a href="http://www.nws.noaa.gov/om/hurricane/after.shtml " target="_blank">
                    What to do/ safety precautions
                    <strong>after</strong> a hurricane hits
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.ready.gov/hurricanes"
                    target="_blank"
                  >FEMA page on hurricane preparedness (prior, during, post storm)&nbsp;</a>
                </p>
                <p>
                  <a
                    href="https://www.ncdc.noaa.gov/billions/overview"
                    target="_blank"
                  >Billion-Dollar Weather and Climate Disasters: Overview</a>
                </p>
              </b-tab>
              <b-tab title="Road Info">
                <br>
                <p>
                  <strong>FLORIDA</strong>
                </p>
                <ul>
                  <li>
                    <a
                      href="http://fl511.com"
                      target="_blank"
                    >Real time road information for Florida (FL511)</a>
                  </li>
                  <li>
                    <a
                      href="http://www.flhsmv.gov/fhp/traffic/live_traffic_feed.html"
                      target="_blank"
                    >Live traffic crash and road condition report</a>
                  </li>
                  <li>
                    <a
                      href="http://www3.dot.state.fl.us/trafficinformation/"
                      target="_blank"
                    >Traffic information activate only during emergencies</a>
                  </li>
                </ul>
                <p>
                  <strong>TEXAS</strong>
                </p>
                <ul>
                  <li>
                    <a
                      href="https://drivetexas.org/#/7/30.484/-96.303?future=false"
                      target="_blank"
                    >Texas Highway Conditions</a>
                  </li>
                  <li>
                    <a href="https://map.texasflood.org/" target="_blank">Texas Flood Information</a>
                  </li>
                </ul>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </b-tab>
              <b-tab title="Post-Hurricane">
                <br>
                <p>
                  <strong>FLORIDA</strong>
                </p>
                <ul>
                  <li>
                    <a
                      href="https://urldefense.proofpoint.com/v2/url?u=https-3A__groundwaterwatch.usgs.gov_StateMap.asp-3Fsa-3DFL-26sc-3D12&amp;d=DwMFAg&amp;c=ODFT-G5SujMiGrKuoJJjVg&amp;r=-4bJ9yKBE-2sjMEJS-NhVMRU4m-Y5TuRZG9QNMVkOw0&amp;m=lbxzJxrFbeDbRdI4t4cn1GapwXfy_N4GiPTehmTVtfU&amp;s=xkLg5DuDMOi7rXlpOKOQ40J93nXS5I4Fz3hmqfws07s&amp;e="
                      target="_blank"
                    >Active Water Level Network</a>
                  </li>
                  <li>
                    <a
                      href="http://floridadisaster.maps.arcgis.com/apps/webappviewer/index.html?id=8ec6b9becd4a447b992c44d5638ef38b"
                      target="_blank"
                    >Power outage county</a>
                  </li>
                </ul>
                <p>
                  <strong>TEXAS</strong>
                </p>
                <ul>
                  <li>
                    <a
                      href="http://texasseagrant.org/programs/post-hurricane-harvey-recovery-resources/"
                      target="_blank"
                    >Post-Hurricane Harvey Recovery Resources (Texas SeaGrant)</a>
                  </li>
                  <li>
                    <a
                      href="https://map.texasflood.org/#/map/@33.79741,-99.99756,6z"
                      target="_blank"
                    >Texas Flood Info</a>
                  </li>
                </ul>
              </b-tab>
            </b-tabs>
          </b-card>
          <br>
        </b-col>
      </b-row>
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


<style scoped>
.centered {
  text-align: center;
}
.fade:not(.show) {
  opacity: 100 !important;
}
</style>
