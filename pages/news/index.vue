<template>
  <div class="canvas">
    <b-container>
      <b-row>
        <b-col xs="12">
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
// if (process.browser) {
//   window.globalVar = "global variable loaded...";
// }
export default {
  layout: "mobile",
  head: {
    script: [
      { hid: 'twitter', type: 'text/javascript', src: '//platform.twitter.com/widgets.js', async: true, defer: true }
    ]
  },
  mounted() {
    // console.log(window.globalVar);
    // !(function(d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0],
    //     p = /^http:/.test(d.location) ? "http" : "https";
    //   if (!d.getElementById(id)) {
    //     js = d.createElement(s);
    //     js.id = id;
    //     js.src = p + "://platform.twitter.com/widgets.js";
    //     fjs.parentNode.insertBefore(js, fjs);
    //   }
    // })(document, "script", "twitter-wjs");
  }
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
