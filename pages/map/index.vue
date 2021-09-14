<template>
  <div class="canvas">
    <b-container fluid>
      <b-row>
        <b-col>
          <div id="hurricaneLargeMap"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "map",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var endDate = new Date();
      endDate.setUTCMinutes(30, 0, 0);
      console.log(moment(endDate).format());

      var map = L.map("hurricaneLargeMap", {
        zoomControl: true,
        scrollWheelZoom: true,
        gestureHandling: true,
        zoom: 6,
        center: [25.7, -80.8],
        attributionControl: true, //should be true for goecoding
        timeDimension: true,
        timeDimensionOptions: {
            timeInterval: moment(endDate).subtract(1, "days").format('YYYY-MM-DD') +
                "/" +
                moment(endDate).format('YYYY-MM-DD'),
            period: "PT1H",
            currentTime: endDate,
        },
        timeDimensionControl: true,
        timeDimensionControlOptions: {
            autoPlay: true,
            playerOptions: {
                buffer: 10,
                transitionTime: 500,
                loop: true,
            },
        },
      });

      // ================================================================
      // Basemap Layers
      // ================================================================
      const googleRoads = L.gridLayer
          .googleMutant({
          type: "roadmap" // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
          });
      const googleHybrid = L.gridLayer
          .googleMutant({
          type: "hybrid"
          }).addTo(map);
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
      /* NWS Wathces Warnings */
      var warningAreas = L.esri.featureLayer({
          url:
            'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NWS_Watches_Warnings_v1/FeatureServer/6',
        }).addTo(map);
      warningAreas.bindPopup(function (layer) {
        var updateTime = moment(layer.feature.properties.Updated);
        var startTime = moment(layer.feature.properties.Start);
        // console.log("UpdateTime", updateTime._d);
        return L.Util.template(
          '<h4>{Event}: {Severity}</h4><hr>{Summary}<br><br><a href="{Link}" target="_blank">More info</a><br>Urgency: {Urgency}<br>Certainty: {Certainty}<br>Updated: ' + updateTime._d + '<br>Start: ' + startTime._d,
          layer.feature.properties
        )
      });
      
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

      // active hurricane information
      const forecastPosition = L.esri.featureLayer({
        url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Active_Hurricanes_v1/FeatureServer/0"
      });
      const observedPosition = L.esri.featureLayer({
        url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Active_Hurricanes_v1/FeatureServer/1"
      });
      const forecastTrack = L.esri.featureLayer({
        url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Active_Hurricanes_v1/FeatureServer/2"
      });
      const observedTrack = L.esri.featureLayer({
        url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Active_Hurricanes_v1/FeatureServer/3"
      });
      const forecastErrorCone = L.esri.featureLayer({
        url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Active_Hurricanes_v1/FeatureServer/4"
      });
      const watchesWarnings = L.esri.featureLayer({
        url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Active_Hurricanes_v1/FeatureServer/5"
      });

      var activeHurricane = L.featureGroup([forecastPosition, observedPosition, forecastTrack, observedTrack, forecastErrorCone, watchesWarnings]).addTo(map);     
      activeHurricane.bindPopup(function(layer){
        console.log("layer:", layer);
        try {
          if (layer.feature.properties.ADVDATE) {
            console.log("predicted layer")
            return '<h4>Forecast: '+layer.feature.properties.STORMNAME+'</h4>'
            +'<h5>'+layer.feature.properties.TCDVLP+'</h5>'
            +'Advisory #'+layer.feature.properties.ADVISNUM+"<br>"
            +'<hr>'
            +'<p>Advisory Information<br>'
            +layer.feature.properties.TAU+' hr Forecast<br>'
            +'Valid at: '+layer.feature.properties.FLDATELBL+'<br>'
            +'Latitude: '+layer.feature.properties.LAT+'<br>Longitude: '+layer.feature.properties.LON+"<br>"
            +'Maximum Wind: '+layer.feature.properties.MAXWIND+' knots ('+Math.round(layer.feature.properties.MAXWIND*1.151, 0)+' mph)<br>'
            +'Wind Gust: '+layer.feature.properties.GUST+' knots ('+Math.round(layer.feature.properties.GUST*1.151, 0)+' mph)</p>';
          } else {
            var mslp = ''
            if (layer.feature.properties.MSLP > 0) {
              mslp = 'Minimum Pressure: '+layer.feature.properties.MSLP+' mb<br>'
            }
          return '<h3>'+layer.feature.properties.STORMNAME+'</h3>'
          +'<h4>'+layer.feature.properties.STORMTYPE+'</h4>'
          +'Storm ID: '+layer.feature.properties.STORMID+'<br>'
          +'Intensity: '+layer.feature.properties.INTENSITY+' knots ('+Math.round(layer.feature.properties.INTENSITY*1.151, 0)+' mph)<br>'
          +'Latitude: '+layer.feature.properties.LAT+'<br>Longitude: '+layer.feature.properties.LON+"<br>"
          + mslp
          // +layer.feature.properties.MONTH+'/'+layer.feature.properties.DAY+'/'+layer.feature.properties.YEAR+' '
          // +layer.feature.properties.HHMM+'<br>'
          +moment(layer.feature.properties.DTG).format("YYYY-MM-DD HH:MM UTC");
          }
        }
        catch(err) {
          console.log("error:", err);
        }
      }).on("click", function(e){
          // console.log("e: ", e);
          // return '<h3>'+e.layer.feature.properties.STORMNAME+'</h3><h4>Type: '+e.layer.feature.properties.STORMTYPE+'</h4>';

      });



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
        },
        ignoreRenderer: true
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
        },
        ignoreRenderer: true
      })
      tideStation.bindPopup(function (layer) {
        return L.Util.template(
          '<h4>{name}</h4>' + '<hr><p>{daily}<br>{monthly}</p>',
          layer.feature.properties
        )
      });


      /* NWS Warning Report */
      var tornadoReport = L.esri.featureLayer({
        url:
          'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NOAA_storm_reports_v1/FeatureServer/1',
      }).addTo(map);
      tornadoReport.bindPopup(function (layer) {
        return L.Util.template(
          '<h4>{LOCATION}</h4><br>{COUNTY}, {STATE}<br>DATE (UTC): {UTC_DATETIME}<br>Scale: {F_SCALE}<br>{COMMENTS}',
          layer.feature.properties
        )
      })

      var hailStormReport = L.esri.featureLayer({
        url:
          'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NOAA_storm_reports_v1/FeatureServer/0',
      }).addTo(map);
      hailStormReport.bindPopup(function (layer) {
        return L.Util.template(
          '<b>{LOCATION}</b><br>{COUNTY}, {STATE}<br>DATE (UTC): {UTC_DATETIME}<br>Hail Size: {HAIL_SIZE}<br>{COMMENTS}',
          layer.feature.properties
        )
      })

      var windStormReport = L.esri.featureLayer({
        url:
          'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NOAA_storm_reports_v1/FeatureServer/2',
      }).addTo(map);
      windStormReport.bindPopup(function (layer) {
        return L.Util.template(
          '<b>{LOCATION}</b><br>{COUNTY}, {STATE}<br>DATE (UTC): {UTC_DATETIME}<br>Speed: {SPEED}<br>{COMMENTS}',
          layer.feature.properties
        )
      });


      var cat5stormSurge = L.esri.tiledMapLayer({
        url:
          "https://tiles.arcgis.com/tiles/C8EMgrsFcRFL6LrL/arcgis/rest/services/NHC_NationalMOM_Category5_CONUS/MapServer?f=html&cacheKey=b5783d377cac9cee"
      });

      var cat4stormSurge = L.esri.tiledMapLayer({
        url:
          "https://tiles.arcgis.com/tiles/C8EMgrsFcRFL6LrL/arcgis/rest/services/NHC_NationalMOM_Category4_CONUS/MapServer?f=html&cacheKey=996b51cf260d6d4a"
      });

      var cat3stormSurge = L.esri.tiledMapLayer({
        url:
          "https://tiles.arcgis.com/tiles/C8EMgrsFcRFL6LrL/arcgis/rest/services/NHC_NationalMOM_Category3_CONUS/MapServer?f=html&cacheKey=a5370e1ade681ba1"
      });

      var femaOffice = L.esri.featureLayer({
        url:
          "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/FEMA_Regional_Offices/FeatureServer/0"
      });
      femaOffice.bindPopup(function(layer) {
        return L.Util.template(
          "<p>{NAME}<br>{ST_ADDR}<br>{CITY_NAME}, {STATE_NAME} {ZIP}</p>",
          layer.feature.properties
        );
      });


      /* GCOOS Stations */
      var stationIcon = L.divIcon({
        className: "station-div-icon",
      });
      var gcoosAssets = L.esri.featureLayer({
        url: "https://services1.arcgis.com/qr14biwnHA6Vis6l/arcgis/rest/services/The_GCOOS_Region/FeatureServer/0",
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

      /* HF Radar 6km Hourly */
      var proxy = "/hurricane/js/proxy.php";
      var hf6kmWMS =
          "https://hfrnet-tds.ucsd.edu/thredds/wms/HFR/USEGC/6km/hourly/RTV/HFRADAR_US_East_and_Gulf_Coast_6km_Resolution_Hourly_RTV_best.ncd";
      var hfradar6kmLayer = L.tileLayer.wms(hf6kmWMS, {
          layers: "surface_sea_water_velocity",
          version: '1.3.0',
          format: 'image/png',
          transparent: true,
          styles: 'prettyvec/rainbow',
          markerscale: 15,
          markerspacing: 10,
          abovemaxcolor: "extend",
          belowmincolor: "extend",
      });
      // hfradar6kmLayer.options.crs = L.CRS.EPSG3857;
      var tdhfradar6kmLayer = L.timeDimension.layer.wms(hfradar6kmLayer, {
              proxy: proxy,
              cache: 25,
              cacheBackward: 25,
              cacheForward: 25,
              updateTimeDimension: true,
          })
          .addTo(map);

      // ================================================================
      /* grouping ancillayr data layers */
      // ================================================================
      var groupedOverlay = {
        'Active Hurricane <br><img style="height:400px;" src="https://geo.gcoos.org/data/images/hurricane_legend.png" />': activeHurricane,
        'Recent Hurricane': recentHurricaneESRI,
        'Historical Hurricane Track (H4:Red, H5:Black)': histHurricaneTrack,
        // 'Wind Speed/Direction at Buoys': windBuoysESRI,
        'Radar <br><img src="https://nowcoast.noaa.gov/images/legends/radar.png" alt="legend">': nexrad,
        'Web Camera': webcam,
        'Tide Station': tideStation,
        'Watches Warnings (inc. Tornado)': warningAreas,
        'Tornado Report <a href="https://www.spc.noaa.gov/climo/reports/" target="_blank">(NWS)</a>': tornadoReport,
        'Hail Storm Report <a href="https://www.spc.noaa.gov/climo/reports/" target="_blank">(NWS)</a>': hailStormReport,
        'Wind Storm Report <a href="https://www.spc.noaa.gov/climo/reports/" target="_blank">(NWS)</a>': windStormReport,
        'Buoys': gcoosAssets,
        "FEMA Regional Office": femaOffice,
        "Category5 Storm Surge Inudation Estimate": cat5stormSurge,
        "Category4 Storm Surge Inundation Estimate": cat4stormSurge,
        "Category3 Storm Surge Inundation Estimate": cat3stormSurge,
        'HF Radar (6km Hourly) <br><img src="https://hfrnet-tds.ucsd.edu/thredds/wms/HFR/USEGC/6km/hourly/RTV/HFRADAR_US_East_and_Gulf_Coast_6km_Resolution_Hourly_RTV_best.ncd?REQUEST=GetLegendGraphic&LAYER=surface_sea_water_velocity&PALETTE=rainbow&numcolorbands=10&colorscalerange=0,1.0">': tdhfradar6kmLayer
      };
      var controlLayers = L.control
        .layers(basemapLayers, groupedOverlay, {
          position: "topright",
          collapsed: true
        })
        .addTo(map);

      // Full screen control
      // map.addControl(new L.Control.Fullscreen());

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
              velocityScale: 0.2, // arbitrary default 0.005
            }).addTo(map);
            controlLayers.addOverlay(velocityLayer, "HYCOM Ocean Current");
          }
        );
        console.log("Hycom data imported");
      }
      addHycom();

      function reload_page() {
        window.location.reload(true);
      }
      console.log("Set refresh page interval: 1 hour")
      setInterval(function(){reload_page(); },60*60000);
    }
  }
};
</script>

<style>
.canvas {
  margin: 0;
  padding-top: 45px;
  min-height: 80vh;
}

.menubar {
  font-family: Roboto, sans-serif;
  font-size: 18px;
  display: inline-block;
  position: fixed;
  /*  margin-top: 106px; */
  top: 0px;
  margin: 0;
  padding: 0;
  height: auto;
  width: 100%;
  z-index: 1999;
}

@media only screen and (max-width: 1200px) {
  .menubar {
    top: 0px;
    font-size: 16px;
  }
  .menubar .dropdown-toggle::after {
    position: relative;
    margin-left: 15px;
    border-right-width: 8px;
    border-left-width: 8px;
    border-top-width: 4px;
  }
}
@media only screen and (max-width: 420px) {
  .menubar {
    top: 0px;
  }
}

#hurricaneLargeMap {
  min-height: 600px;
  height: 95vh;
}
#customize-script-container {
  width: 100%;
  height: 100%;
}
.tweet_timeline {
  min-height: 500px;
  height: 600px;
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
