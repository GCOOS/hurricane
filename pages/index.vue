<template>
  <div class="canvas">
    <b-container fluid>
      <b-row>
        <b-col md="8" xs="12">
          <div id="hurricaneMap"></div>
        </b-col>
        <b-col md="4" xs="12">
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
  head() {
        return {
            script: [{
                src: "/hurricane/js/leaflet-velocity.js",
            }, ],
        };
    },
  mounted() {
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
    this.initMap();
  },
  methods: {
    initMap() {
      var map = L.map("hurricaneMap", {
        zoomControl: true,
        scrollWheelZoom: false,
        gestureHandling: true,
        zoom: 5,
        center: [25.7, -80.8],
        attributionControl: true //should be true for goecoding
      });

      // ================================================================
      // Basemap Layers
      // ================================================================
      const googleRoads = L.gridLayer
          .googleMutant({
          type: "roadmap" // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
          }).addTo(map);
      const googleHybrid = L.gridLayer
          .googleMutant({
          type: "hybrid"
          });
      const esriImage = L.layerGroup([
          L.esri.basemapLayer("Imagery"),
          L.esri.basemapLayer("ImageryLabels"),
      ]);
      const basemapLayers = {
          "Google Road": googleRoads,
          "Google Hybrid": googleHybrid
      };

      // ================================================================
      // Ancillary Data Layers - Top Corner Layers Group
      // ================================================================
      var activeHurricane = L.esri.dynamicMapLayer({
        url: "https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
        opacity: 0.9
      }).addTo(map);

      var windBuoysESRI = L.esri.featureLayer({
          url:
            'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/NOAA_METAR_current_wind_speed_direction_v1/FeatureServer/1'
        })

      // Weather Radar
      var nexrad = L.tileLayer.wms(
        'https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi',
        {
          layers: 'nexrad-n0r-900913',
          format: 'image/png',
          transparent: true,
          attribution: 'Weather data © 2012 IEM Nexrad'
        }
      ).addTo(map)

      var recentHurricaneESRI = L.esri.featureLayer({
        url:
          "https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Recent_Hurricanes_v1/FeatureServer/1",
        style: function(feature){
          // console.log(feature);
          var c, w, o = 0.75;
          if (feature.properties.STORMTYPE == "Hurricane5"){
            c = "#000000";
            w = 10
          }
          if (feature.properties.STORMTYPE == "Hurricane4"){
            c = "rgb(230,0,0)";
            w = 8
          }
          if (feature.properties.STORMTYPE == "Hurricane3"){
            c = "rgb(255,170,0)";
            w = 7
          }
          if (feature.properties.STORMTYPE == "Hurricane2"){
            c = "rgb(255,255,0)";
            w = 6
          }
          if (feature.properties.STORMTYPE == "Hurricane1"){
            c = "rgb(85,255,0)";
            w = 5
          }
          if (feature.properties.STORMTYPE == "Tropical Storm"){
            c = "rgb(0, 197,255)";
            w = 4
          }
          if (feature.properties.STORMTYPE == "Tropical Depression"){
            c = "rgb(255,115,223)";
            w = 3
          }
          return {
            color: c,
            opacity: o,
            weight: w
          };
        }
      });
      recentHurricaneESRI.bindPopup(function(layer) {
        return L.Util.template(
          "<b>Name: {STORMNAME}</b><br>Category: {STORMTYPE}",
          layer.feature.properties
        );
      });

      var histHurricaneTrack = L.esri.featureLayer({
        url:
          "https://services1.arcgis.com/VAI453sU9tG9rSmh/arcgis/rest/services/Historic_Major_Hurricane_Tracks/FeatureServer/0",
        where: "wmo_wind > 95",
        style: function(feature) {
          var c, w, o = 0.75;
          if (feature.properties.wmo_wind >= 137) {
            c = "rgb(0,0,0)";
            w = 5;
          }
          if (
            feature.properties.wmo_wind < 136 &&
            feature.properties.wmo_wind >= 112
          ) {
            c = "rgb(230,0,0)";
            w = 4;
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
          "<b>Historic Hurricane Tracks</b><br>Category 5: Black<br>Category 4: Red<hr><b>{Name}</b><br>{ISO_time}<br>Wind Speed: {wmo_wind} kt",
          layer.feature.properties
        );
      });

      // WebCam Layers in the Gulf Coast
      var webcam = L.esri.featureLayer({
        url:
          'https://services1.arcgis.com/qr14biwnHA6Vis6l/arcgis/rest/services/Gulf_Coast_WebCam_Location/FeatureServer/0',
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
            icon: L.divIcon({
              className: 'custom-div-icon',
              html:
                '<div style="background-color:#4838cc;" class="marker-pin"></div><i class="fas fa-video awesome"></i>',
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })
          })
        }
      })
      webcam.bindPopup(function (layer) {
        return L.Util.template(
          '<h3>{name}</h3>' +
            '<a href="{url}" target="_blank">Open WebCam Site</a>',
          layer.feature.properties
        )
      })

      // Tide Stations in the Gulf Coast
      var tideStation = L.esri.featureLayer({
        url:
          'https://services1.arcgis.com/qr14biwnHA6Vis6l/arcgis/rest/services/COOPS_Tide_Stations_WM/FeatureServer/0',
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
            icon: L.divIcon({
              className: 'custom-div-icon',
              html:
                '<div style="background-color:#006fba;" class="marker-pin"></div><i class="fas fa-water awesome"></i>',
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })
          })
        }
      })
      tideStation.bindPopup(function (layer) {
        return L.Util.template(
          '<h4>{name}</h4>' + '<hr><p>{daily}<br>{monthly}</p>',
          layer.feature.properties
        )
      })

      var warningAreas = L.esri.dynamicMapLayer({
          url:
            'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer',
          f: 'image/png'
        }).addTo(map);
      warningAreas.bindPopup(function (error, featureCollection) {
        if (error || featureCollection.features.length === 0) {
          return false
        } else {
          return L.Util.template(
            '<p>{prod_type}<br><a href="{url}" target="_blank">More info</a><br>Issuance: {issuance}<br>Expiration: {expiration}',
            featureCollection.features[0].properties
          )
        }
      });

      var precipOutlook = L.esri.dynamicMapLayer({
          url:
            'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_qpf6hrs_offsets/MapServer',
          f: 'image/png',
          opacity: 0.7,
          layers: [3]
        });

      var floodInfo = L.esri.dynamicMapLayer({
        url:
          'https://utility.arcgis.com/usrsvcs/servers/7790d9d371364f36b38365522bc03751/rest/services/Live_Stream_Gauges/MapServer',
        f: 'image/png'
      })
      floodInfo.bindPopup(function (error, featureCollection) {
        if (error || featureCollection.features.length === 0) {
          return false
        } else {
          return L.Util.template(
            'Live Stream Gauges: {Name}<hr>Station ID: {StationID}<br><a href="{StationURL}" target="_blank">Station Info.<a/><br><a href="{FlowURL}" target="_blank">Flow Info</a>',
            featureCollection.features[0].properties
          )
        }
      })

      var stationIcon = L.divIcon({
        className: "station-div-icon",
      });
      var gcoosAssets = L.esri.featureLayer({
        url: "https://gis.gcoos.org/arcgis/rest/services/Stations/The_GCOOS_Region/FeatureServer/0",
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
            icon: stationIcon,
            riseOnHover: true,
          });
        },
      });
      gcoosAssets.bindPopup(function (layer) {
        // console.log(layer);
        var url = layer.feature.properties.urn.substring(4,)
        return L.Util.template(
          "<h3>{station}</h3><h4>{organization}</h4>" +
          "<table>" +
          "<tr><td>URN: </td><td>{urn}</td></tr>" +
          "<tr><td>Description: </td><td>{description}</td></tr>" +
          "<tr><td>Link: <a href='https://data.gcoos.org/monitoring.php?station=" + url + "' target='_blank'>Open</a></td></tr>" + 
          "</table>",
          layer.feature.properties
        );
      });

      // ================================================================
      /* grouping ancillayr data layers */
      // ================================================================
      var groupedOverlay = {
        'Active Hurricane': activeHurricane,
        "Recent Hurricane": recentHurricaneESRI,
        "Historical Hurricane Track (>4)": histHurricaneTrack,
        // "Wind Speed/Direction at Buoys": windBuoysESRI,
        'Radar <img style="display:none;" src="https://nowcoast.noaa.gov/images/legends/radar.png" alt="legend">': nexrad,
        'Web Camera': webcam,
        'Tide Station': tideStation,
        'Watches Warnings (inc. Tornado)': warningAreas,
        '6-hr Precipitation Outlook': precipOutlook,
        'Flood Info (Live Stream Gauges)': floodInfo,
        "Buoys": gcoosAssets,
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
        d3.json("https://geo.gcoos.org/data/hycom/hycom_surface_current.json").then(
          function (data) {
            var velocityLayer = L.velocityLayer({
              displayValues: true,
              displayOptions: {
                velocityType: "water",
                displayPosition: "bottomleft",
                displayEmptyString: "No water data",
              },
              data: data,
              maxVelocity: 2.5,
              velocityScale: 0.3, // arbitrary default 0.005
            }).addTo(map);
            controlLayers.addOverlay(velocityLayer, "HYCOM Ocean Current");
          }
        );
        console.log("Hycom data imported");
      }
      addHycom();

    }
  }
};
</script>

<style>
#hurricaneMap {
  min-height: 500px;
  height: 800px;
}
#customize-script-container {
  width: 100%;
  height: 100%;
}
.tweet_timeline {
  min-height: 500px;
  height: 800px;
}
.leaflet-control-velocity.leaflet-control {
  color: white;
}

/* fontawesome icon for leaflet */
.marker-pin {
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: #c30b82;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -15px 0 0 -15px;
}

.marker-pin::after {
  content: '';
  width: 24px;
  height: 24px;
  margin: 3px 0 0 3px;
  background: #fff;
  position: absolute;
  border-radius: 50%;
}

.custom-div-icon i {
  position: absolute;
  width: 22px;
  font-size: 22px;
  left: 0;
  right: 0;
  margin: 10px auto;
  text-align: center;
}

.custom-div-icon i.awesome {
  margin: 12px auto;
  font-size: 17px;
}

.station-div-icon {
  width: 10px !important;
  height: 10px !important;
  background: yellowgreen;
  border: 1px solid rgba(240, 240, 240, 0.5);
  color: blue;
  font-weight: bold;
  text-align: center;
  border-radius: 50%;
  line-height: 50px;
  opacity: 0.7;
}

.leaflet-control-velocity {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 0 5px;
    margin: 0 !important;
    color: #333;
    font: 11px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;
}

.velocity-overlay {
    position: absolute;
    z-index: 1;
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
