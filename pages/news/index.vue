<template>
  <div class="canvas">
    <b-container>
      <b-row>
        <b-col>
          <div id="tweet_timeline">
            <a
              class="twitter-timeline"
              data-dnt="true"
              data-height="800"
              href="https://twitter.com/gisp_shin/lists/hurricane?ref_src=twsrc%5Etfw"
              data-chrome="noheader nofooter"
              >Hurricane</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "mobile"
};
</script>

<style scoped>
#tweet_timeline {
  min-height: 500px;
}
@media screen and (max-width: 760px) {
  .canvas {
    padding-bottom: 54px;
  }
  .footer {
    display: none;
  }
  #tweet_timeline {
    display: block !important;
  }
}
</style>
