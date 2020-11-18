<template>
  <div class="canvas">
    <b-container fluid>
      <b-row>
        <b-col md="8" xs="12">
          <div id="hurricaneMap"></div>
          <client-only>
            <div id="customize-script-container" class="weather_div">
              <script
                type="text/javascript"
                src="https://darksky.net/widget/graph-bar/25.18879,-80.66849/us12/en.js?width=undefined&height=350&title=Full Forecast&textColor=333333&bgColor=FFFFFF&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=C7C7C7&currentDetailsOption=true"
              ></script>
            </div>
          </client-only>
        </b-col>
        <b-col md="4" xs="12">
          <div id="tweet_timeline">
            <a
              class="twitter-timeline"
              data-dnt="true"
              data-height="800"
              href="https://twitter.com/gisp_shin/lists/hurricane?ref_src=twsrc%5Etfw"
              data-chrome="noheader nofooter"
              >A Twitter List by gisp_shin</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
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
            <a href="https://www.flaticon.com/" title="Flaticon"
              >www.flaticon.com</a
            >
            is licensed by
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              >CC 3.0 BY</a
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  mounted() {
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
    this.initMap();
  },
  methods: {
    initMap() {
      var endDate = new Date();
      endDate.setUTCMinutes(0, 0, 0);

      var map = L.map("hurricaneMap", {
        zoomControl: true,
        scrollWheelZoom: false,
        gestureHandling: false,
        zoom: 4,
        center: [25.7, -80.8],
        timeDimension: true,
        timeDimensionControl: false,
        timeDimensionOptions: {
          timeInterval: "PT4H/" + endDate.toISOString(),
          period: "PT4M",
          currentTime: endDate
        },
        timeDimensionControlOptions: {
          autoPlay: false,
          playerOptions: {
            buffer: 10,
            transitionTime: 250,
            loop: true
          }
        },
        attributionControl: true //should be true for goecoding
      });

      // ================================================================
      // Basemap Layers
      // ================================================================
      var topo = L.esri.basemapLayer("Topographic");
      var nationalgeographic = L.esri.basemapLayer("NationalGeographic");
      var darkGray = L.esri.basemapLayer("DarkGray");
      var lightGray = L.esri.basemapLayer("Gray");
      var esriOcean = L.layerGroup([
        L.esri.basemapLayer("Oceans"),
        L.esri.basemapLayer("OceansLabels")
      ]);
      var esriImage = L.layerGroup([
        L.esri.basemapLayer("Imagery"),
        L.esri.basemapLayer("ImageryLabels")
      ]).addTo(map);
      var esriImageFirefly = L.layerGroup([
        L.esri.basemapLayer("ImageryFirefly"),
        L.esri.basemapLayer("ImageryLabels")
      ]);

      // ================================================================
      /* grouping basemap layers */
      // ================================================================
      var basemapLayers = {
        Topographic: topo,
        Ocean: esriOcean,
        Imagery: esriImage,
        "Imagery(Firefly)": esriImageFirefly,
        "Light Gray": lightGray,
        "Dark Gray": darkGray
      };
      // ================================================================
      // Ancillary Data Layers - Top Corner Layers Group
      // ================================================================

      var nexrad = L.tileLayer
        .wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
          layers: "nexrad-n0r-900913",
          format: "image/png",
          transparent: true,
          attribution: "Weather data © 2012 IEM Nexrad"
        })
        .addTo(map);

      var activeHurricaneESRI = L.esri
        .dynamicMapLayer({
          url:
            "https://utility.arcgis.com/usrsvcs/servers/6c6699e853424b22a8618f00d8e0cf81/rest/services/LiveFeeds/Hurricane_Active/MapServer",
          f: "image/png",
          transparent: true,
          opacity: 0.7
        })
        .addTo(map);

      var recentHurricaneESRI = L.esri.dynamicMapLayer({
        url:
          "https://utility.arcgis.com/usrsvcs/servers/c10892ebdbf8428e939f601c2acae7e4/rest/services/LiveFeeds/Hurricane_Recent/MapServer",
        f: "image/png"
      });

      var histHurricaneTrack = L.esri.featureLayer({
        url:
          "https://services1.arcgis.com/VAI453sU9tG9rSmh/arcgis/rest/services/Historic_Major_Hurricane_Tracks/FeatureServer/0",
        where: "wmo_wind > 95",
        style: function(feature) {
          var c,
            w,
            o = 0.75;

          if (feature.properties.wmo_wind >= 137) {
            c = "#FF0000";
            w = 5;
          }
          if (
            feature.properties.wmo_wind < 136 &&
            feature.properties.wmo_wind >= 112
          ) {
            c = "#FFEB00";
            w = 3;
          }
          return {
            color: c,
            opacity: o,
            weight: w
          };
        }
      });
      histHurricaneTrack.bindPopup(function(layer) {
        return L.Util.template(
          "<b>Historic Major Hurricane Tracks</b><hr><b>{Name}</b><br>{ISO_time}<br>Wind Speed: {wmo_wind} kt",
          layer.feature.properties
        );
      });

      // ================================================================
      /* grouping ancillayr data layers */
      // ================================================================
      var groupedOverlay = {
        "Current Hurricane": activeHurricaneESRI,
        "Recent Hurricane": recentHurricaneESRI,
        "Historic Hurricane Track: H4(Yellow), H5(Red)": histHurricaneTrack,
        Radar: nexrad
      };
      var controlLayers = L.control
        .layers(basemapLayers, groupedOverlay, {
          position: "bottomleft",
          collapsed: true
        })
        .addTo(map);

      // Full screen control
      map.addControl(new L.Control.Fullscreen());

      // Hycom Ocean Current
      function addHycom() {
        d3.json(
          "https://geo.gcoos.org/data/hycom/hycom_surface_current.json"
        ).then(function(data) {
          var velocityLayer = L.velocityLayer({
            displayValues: true,
            displayOptions: {
              velocityType: "water",
              displayPosition: "bottomleft",
              displayEmptyString: "No water data"
            },
            data: data,
            maxVelocity: 2.5,
            velocityScale: 0.1 // arbitrary default 0.005
          }).addTo(map);

          controlLayers.addOverlay(velocityLayer, "HYCOM Ocean Current");
        });
      }
      //  addHycom();

      //=================================================================
      // Weather Info from Forecast.io
      //=================================================================
      var redMarker = L.ExtraMarkers.icon({
        icon: "fa-search-location",
        prefix: "fas",
        markerColor: "red"
      });
      var weatherMarker = L.marker([25.18879, -80.66849], {
        icon: redMarker,
        riseOnHover: true, // z-index offset 250
        zIndexOffset: 2000,
        draggable: true
      }).addTo(map);
      weatherMarker.bindPopup(
        L.popup({
          maxWidth: 250
        }).setContent(
          "<b>Drag and Drop this marker to see weather information at the marker's point<br>Weather information will be updated hourly</b>"
        )
      );
      // every time the marker is dragged, update the weather container
      weatherMarker.on("dragend", onDragEnd);
      // Set the initial marker coordinate on load.

      // ================================================================
      // Weather update
      // ================================================================
      function onDragEnd() {
        $("#customize-script-container").html("");
        var m = weatherMarker.getLatLng();
        console.log(
          "Latitude: " + m.lat.toFixed(4) + " Longitude: " + m.lng.toFixed(4)
        );
        $("#customize-script-container").append(
          "<script src='https://darksky.net/widget/graph-bar/" +
            m.lat.toFixed(4) +
            "," +
            m.lng.toFixed(4) +
            "/us12/en.js?width=100%&height=400&title=FullForecast&textColor=333333&bgColor=ransparent&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=333333&currentDetailsOption=true' />"
        );
      }

      // Set layers which redraw in a certain period
      setInterval(function() {
        onDragEnd();
        //    controlLayers.removeLayer(velocityLayer);
        //    addHycom();
      }, 360000);
    }
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
