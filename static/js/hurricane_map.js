(function () {
  var map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: false,
    zoom: 5,
    center: [25.7, -80.8],
    attributionControl: true //should be true for goecoding
  });
  // disable smartphone zoom when scrolloing down
  map.scrollWheelZoom.disable();
  // ================================================================
  // Basemap Layers
  // ================================================================
  let topo = L.esri.basemapLayer("Topographic");
  let nationalgeographic = L.esri.basemapLayer("NationalGeographic");
  let darkGray = L.esri.basemapLayer("DarkGray");
  let lightGray = L.esri.basemapLayer("Gray");
  let esriOcean = L.layerGroup([
    L.esri.basemapLayer("Oceans"),
    L.esri.basemapLayer("OceansLabels")
  ]);
  let esriImage = L.layerGroup([
    L.esri.basemapLayer("Imagery"),
    L.esri.basemapLayer("ImageryLabels")
  ]).addTo(map);
  let esriImageFirefly = L.layerGroup([
    L.esri.basemapLayer("ImageryFirefly"),
    L.esri.basemapLayer("ImageryLabels")
  ]);

  // ================================================================
  /* grouping basemap layers */
  // ================================================================
  const basemapLayers = {
    "Topographic": topo,
    "National Geographic": nationalgeographic,
    "Ocean": esriOcean,
    "Imagery": esriImage,
    "Imagery(Firefly)": esriImageFirefly,
    "Light Gray": lightGray,
    "Dark Gray": darkGray
  };
  // ================================================================
  // Ancillary Data Layers - Top Corner Layers Group
  // ================================================================

  var windESRI = L.esri.dynamicMapLayer({
    url: "https://utility.arcgis.com/usrsvcs/servers/f986fb492f2347d8b077df0236229db0/rest/services/LiveFeeds/NOAA_METAR_current_wind_speed_direction/MapServer",
    opacity: 0.8,
    f: "image/png"
  });

  var activeHurricaneESRI = L.esri.dynamicMapLayer({
    url: "https://utility.arcgis.com/usrsvcs/servers/6c6699e853424b22a8618f00d8e0cf81/rest/services/LiveFeeds/Hurricane_Active/MapServer",
    f: "image/png"
  }).addTo(map);

  var recentHurricaneESRI = L.esri.dynamicMapLayer({
    url: "https://utility.arcgis.com/usrsvcs/servers/c10892ebdbf8428e939f601c2acae7e4/rest/services/LiveFeeds/Hurricane_Recent/MapServer",
    f: "image/png"
  });

  /*
    var hurricaneNOAA = L.esri.dynamicMapLayer({
      url: "https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
      opacity: 0.9,
      f: "image"
    }).addTo(map);
  */
  /*
    var webcam = L.esri.dynamicMapLayer({
      url: "https://gcoos3.tamu.edu/arcgis/rest/services/Stations/Gulf_WebCam/MapServer",
      opacity: 0.8
    }).addTo(map);
    webcam.bindPopup(function (error, featureCollection) {
      if (error || featureCollection.features.length === 0) {
        return false;
      } else {
        //console.log(featureCollection);
        return L.Util.template(
          '<a href="{link}" target="_blank">Open WebCam</a>',
          featureCollection.features[0].properties
        );
      }
    }).addTo(map);
  */
  /*
    var hfr6km = L.tileLayer.wms("http://hfrnet-tds.ucsd.edu/thredds/wms", {
        layers: 'surface_sea_water_velocity&PALETTE=rainbow',
            format: 'image/png',
            transparent: true
    });
  */
  var nexrad = L.tileLayer.wms(
    "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
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

  var nrlWaterTemp = L.tileLayer.wms("http://gcoos-mdv.gcoos.org:8080/ncWMS/wms", {
    layers: 'NRL_MEAN/water_temp',
    format: 'image/png',
    transparent: true,
    attribution: "GCOOS-RA, NRL",
    opacity: 0.7
  });

  var nrlSurfEl = L.tileLayer.wms("http://gcoos-mdv.gcoos.org:8080/ncWMS/wms", {
    layers: 'NRL_MEAN/surf_el_detlcl',
    format: 'image/png',
    transparent: true,
    attribution: "GCOOS-RA, NRL",
    opacity: 0.7
  });

  var currentsNOAA = L.esri.dynamicMapLayer({
    url: "https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/guidance_model_ocean_grtofs_offsets/MapServer",
    f: "image"
  });

  var nauticalChart = L.esri.dynamicMapLayer({
    url: "https://seamlessrnc.nauticalcharts.noaa.gov/arcgis/rest/services/RNC/NOAA_RNC/MapServer/",
    opacity: 0.7,
    f: "image"
  });

  // var hycom = L.tileLayer.wms("http://ecowatch.ncddc.noaa.gov/thredds/wms", {
  //   layers: 'sea_water_velocity',
  //    format: 'image/png',
  //    transparent: true,
  //    elevation: '0'
  //  });

  var ssh = L.tileLayer.wms("http://gcoos-mdv.gcoos.org:8080/ncWMS/wms", {
    layers: 'EDDY_SSH/ssh',
    format: 'image/png',
    transparent: true,
    attribution: "GCOOS-RA, NRL",
    opacity: 0.7
  });

  var gebcoGrid = L.tileLayer.wms("http://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv", {
    layers: 'GEBCO_LATEST',
    format: 'image/png',
    transparent: 'true'
  });

  // ================================================================
  /* grouping ancillayr data layers */
  // ================================================================
  const groupedOverlay = {
    "Nautical Chart": nauticalChart,
    //    "WebCam": webcam,
    //    "Hurricane Track": hurricaneNOAA,
    "Active Hurricane": activeHurricaneESRI,
    "Recent Hurricanes": recentHurricaneESRI,
    "Wind Speed": windESRI,
    "Radar": nexrad,
    "NRL Mean Seawater Velocity": nrlVelocity,
    "NRL Mean Seawater Temperature": nrlWaterTemp,
    "NRL Mean Seasurface Elevation": nrlSurfEl,
    "NOAA Ocean Current Model": currentsNOAA,
    //    "HF Radar 6km": hfr6km,
    //    "HYCOM Region 1": hycom,
    "Sea Surface Height": ssh
  };
  var controlLayers = L.control.layers(basemapLayers, groupedOverlay, {
      position: "bottomleft",
      collapsed: true
    })
    .addTo(map);

  // Full screen control
  map.addControl(new L.Control.Fullscreen());

  // Hycom Ocean Current
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

})();
