(function () {
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
        loop: true,
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
    "Topographic": topo,
    "Ocean": esriOcean,
    "Imagery": esriImage,
    "Imagery(Firefly)": esriImageFirefly,
    "Light Gray": lightGray,
    "Dark Gray": darkGray
  };
  // ================================================================
  // Ancillary Data Layers - Top Corner Layers Group
  // ================================================================


  var noaaHurricaneTrack = L.esri.dynamicMapLayer({
    url: "https://www.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer"
  });

  var nexrad = L.tileLayer.wms(
    "https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
      layers: "nexrad-n0r-900913",
      format: "image/png",
      transparent: true,
      attribution: "Weather data © 2012 IEM Nexrad"
    }
  ).addTo(map);

  var nrlVelocity = L.tileLayer.wms("http://gcoos-mdv.gcoos.org:8080/ncWMS/wms", {
    layers: 'NRL_MEAN/sea_water_velocity',
    format: 'image/png',
    transparent: true,
    attribution: "GCOOS-RA, NRL",
    elevation: '0',
    opacity: 0.7
  });

  var nrl26cIsotherm = L.tileLayer.wms("http://gcoos-mdv.gcoos.org:8080/ncWMS/wms", {
    layers: 'NRL_MEAN/Isotherm',
    format: 'image/png',
    transparent: true,
    attribution: "GCOOS-RA, NRL",
    opacity: 0.7
  });

  var nrlcyclonPotential = L.tileLayer.wms("http://gcoos-mdv.gcoos.org:8080/ncWMS/wms", {
    layers: 'NRL_MEAN/TCHP',
    format: 'image/png',
    transparent: true,
    attribution: "GCOOS-RA, NRL",
    opacity: 0.7
  });

  var ssh = L.tileLayer.wms("http://gcoos-mdv.gcoos.org:8080/ncWMS/wms", {
    layers: 'EDDY_SSH/ssh',
    format: 'image/png',
    transparent: true,
    attribution: "GCOOS-RA, NRL",
    opacity: 0.7
  });

  var activeHurricaneESRI = L.esri
    .dynamicMapLayer({
      url: "https://utility.arcgis.com/usrsvcs/servers/6c6699e853424b22a8618f00d8e0cf81/rest/services/LiveFeeds/Hurricane_Active/MapServer",
      f: "image/png"
    })
    .addTo(map);

  // ================================================================
  /* grouping ancillayr data layers */
  // ================================================================
  var groupedOverlay = {
    //    "NOAA Hurricane Track<a href='https://www.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer' target='_blank'>**</a>": noaaHurricaneTrack,
    "Hurricane Track": activeHurricaneESRI,
    "Radar": nexrad,
    "NRL Mean Seawater Velocity<a href='http://gcoos-mdv.gcoos.org:8080/ncWMS/godiva2.html?layer=NRL_MEAN/sea_water_velocity&bbox=-98.0,18.0,-79.5145715943338,30.96001434326172' target='_blank'>**</a>": nrlVelocity,
    "NRL Depth 26C Isotherm<a href='http://gcoos-mdv.gcoos.org:8080/ncWMS/godiva2.html?layer=NRL_MEAN/Isotherm&bbox=-98.0,18.0,-79.5145715943338,30.96001434326172' target='_blank'>**</a>": nrl26cIsotherm,
    "NRL Mean Tropical Cyclone Heat Potential<a href='http://gcoos-mdv.gcoos.org:8080/ncWMS/godiva2.html?layer=NRL_MEAN/TCHP&bbox=-98.0,18.0,-79.5145715943338,30.96001434326172' target='_blank'>**</a>": nrlcyclonPotential,
    "Sea Surface Height<a href='http://gcoos-mdv.gcoos.org:8080/ncWMS/godiva2.html?layer=EDDY_SSH/ssh&bbox=-180.0,-66.0,180.0,66.0' target='_blank'>**</a>": ssh,
  };
  var controlLayers = L.control.layers(basemapLayers, groupedOverlay, {
      position: "bottomleft",
      collapsed: true
    })
    .addTo(map);

  // Full screen control
  map.addControl(new L.Control.Fullscreen());

  // Hycom Ocean Current
  function addHycom() {
    d3.json("https://geo.gcoos.org/data/hycom/hycom_surface_current.json").then(function (data) {
      var velocityLayer = L.velocityLayer({
        displayValues: true,
        displayOptions: {
          velocityType: 'water',
          displayPosition: 'bottomleft',
          displayEmptyString: 'No water data'
        },
        data: data,
        maxVelocity: 2.5,
        velocityScale: 0.1 // arbitrary default 0.005
      }).addTo(map);

      controlLayers.addOverlay(velocityLayer, 'HYCOM Ocean Current');
    });
  }
  //  addHycom();

  //=================================================================
  // Weather Info from Forecast.io
  //=================================================================
  var redMarker = L.AwesomeMarkers.icon({
    icon: 'cloud-sun-rain',
    iconColor: 'black',
    prefix: 'fa',
    markerColor: 'red'
  });
  var weatherMarker = L.marker([25.18879, -80.66849], {
    icon: redMarker,
    riseOnHover: true, // z-index offset 250
    zIndexOffset: 2000,
    draggable: true
  }).addTo(map);
  weatherMarker.bindPopup(L.popup({
    maxWidth: 250
  }).setContent("<b>Drag and Drop this marker to see weather information at the marker's point<br>Weather information will be updated hourly</b>"));
  // every time the marker is dragged, update the weather container
  weatherMarker.on('dragend', onDragEnd);
  // Set the initial marker coordinate on load.

  // ================================================================
  // Weather update
  // ================================================================
  function onDragEnd() {
    $("#customize-script-container").html('');
    var m = weatherMarker.getLatLng();
    console.log('Latitude: ' + m.lat.toFixed(4) + ' Longitude: ' + m.lng.toFixed(4));
    $("#customize-script-container").append('<script type="text/javascript" src="https://darksky.net/widget/graph-bar/' + m.lat.toFixed(4) + ',' + m.lng.toFixed(4) + '/us12/en.js?width=100%&height=400&title=FullForecast&textColor=333333&bgColor=ransparent&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=333333&currentDetailsOption=true"></script>');
  }

  // Set layers which redraw in a certain period
  setInterval(function () {
    onDragEnd();
    //    controlLayers.removeLayer(velocityLayer);
    //    addHycom();
  }, 360000);
})();
