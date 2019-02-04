<template>
  <div class="canvas">
    <b-container fluid>
      <div class="centered">
        <h2>Resources - Preparation, Post-Hurricane</h2>
      </div>
      <b-row>
        <b-col sm="12">
          <b-card
            no-body
            header="Videos"
            header-text-variant="white"
            header-tag="header"
            header-bg-variant="warning"
          >
            <b-tabs card>
              <b-tab title="Preparation" active>
                <b-row>
                  <b-col md="12" lg="12" xl="6">
                    <iframe
                      src="https://www.youtube.com/embed/L32y1QKz8XI"
                      style="height:315px; width:100%;"
                    ></iframe>
                    <iframe
                      src="https://www.youtube.com/embed/sW831S7BM9Y"
                      style="height:315px; width:100%;"
                    ></iframe>
                    <iframe
                      src="https://fave.api.cnn.io/v1/fav/?video=weather/2016/08/29/orig-weather-preparing-for-a-hurricane.cnn&customer=cnn&edition=domestic&env=prod"
                      style="height:315px; width:100%;"
                    ></iframe>
                  </b-col>
                  <b-col md="12" lg="12" xl="6">
                    <iframe
                      src="https://www.youtube.com/embed/OwSaHc0X2KA"
                      style="height:315px; width:100%;"
                    ></iframe>
                    <iframe
                      src="https://www.youtube.com/embed/STiMKEYZ3Q4"
                      style="height:315px; width:100%;"
                    ></iframe>
                    <iframe
                      src="https://www.youtube.com/embed/NhE_6hvZapY"
                      style="height:315px; width:100%;"
                    ></iframe>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="During">
                <b-row>
                  <b-col md="12" lg="12" xl="6">
                    <iframe
                      src="https://www.youtube.com/embed/2VOJdqT79JY"
                      style="height:315px; width:100%;"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                    ></iframe>
                  </b-col>
                  <b-col md="12" lg="12" xl="6">
                    <iframe
                      src="https://www.youtube.com/embed/maywde6eILE"
                      style="height:315px; width:100%;"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                    ></iframe>
                  </b-col>
                  <b-col md="12" lg="12" xl="6">
                    <iframe
                      src="https://www.youtube.com/embed/-Kou0HBpX4A"
                      style="height:315px; width:100%;"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                    ></iframe>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="After">
                <b-row>
                  <b-col>
                    <iframe
                      src="https://www.youtube.com/embed/hefpgoYAOno"
                      style="height:315px; width:100%;"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                    ></iframe>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </b-card>
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
