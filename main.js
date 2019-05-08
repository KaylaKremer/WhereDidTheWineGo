require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/geometry/Extent",
    "esri/Basemap",
    "esri/layers/VectorTileLayer"
  ], function(Map, MapView, FeatureLayer, Extent, Basemap, VectorTileLayer) {
  
    var basemap = new Basemap({
        baseLayers: [
          new VectorTileLayer({
            portalItem: {
              id: "2d9c1700f6204ce39284e870eac99894" 
            }
          })
        ]
    });
    
    var minScale = 100000;
    var map = new Map({
      basemap: basemap,
      
    })
    var extent = new Extent ({
        xmin: -83.7,
        ymin: 36.4,
        xmax: -75.7,
        ymax: 39.6
    })
    var view = new MapView({
      container: "viewDiv",
      map: map,
      extent: extent
    });
    var nameClass = {
      labelPlacement: "above-right",
      labelExpressionInfo: {
        expression: "$feature.NAME"
      },
      minScale: minScale
    };
    nameClass.symbol = createTextSymbol("black");
    
    var amenitiesArcade = document.getElementById("amenities").text;
    var amenitiesClass = {
      labelExpressionInfo: {
        expression: amenitiesArcade
      },
      labelPlacement: "below-right",
      minScale: minScale
    };
    amenitiesClass.symbol = createTextSymbol("#3ba53f");
    var serviceUrl =
      "https://services5.arcgis.com/cMBqYE4wmbXNMvex/ArcGIS/rest/services/Virginia_Wineries/FeatureServer/1";
    var layer = new FeatureLayer({
      url: serviceUrl,
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-marker",
          color: [128, 0, 128, 0.6],
          size: 10,
          outline: {
            color: [0, 0, 0, 0.4],
            width: 0.5
          }
        }
      },
      labelingInfo: [
        nameClass,
        amenitiesClass
      ]
    });
    view.map.add(layer);
    function createTextSymbol(color) {
      return {
        type: "text", 
        font: {
          size: 12,
          weight: "bold"
        },
        color: "white",
        haloColor: color,
        haloSize: 1
      };
    }
    
    var barChartDefinition = {
      "type": "bar",
      "datasets": [
        {
          "url": "https://services5.arcgis.com/cMBqYE4wmbXNMvex/ArcGIS/rest/services/Virginia_Wineries/FeatureServer/1",
          "name": "Group Tour",
          "query": {
            "orderByFields": "GroupTour_COUNT DESC",
            "groupByFieldsForStatistics": "Region",
            "outStatistics": [{
              "statisticType": "count",
              "onStatisticField": "GroupTour",
              "outStatisticFieldName": "GroupTour_COUNT"
            }]
          },
          "join": "Region"
        },
        {
          "url": "https://services5.arcgis.com/cMBqYE4wmbXNMvex/ArcGIS/rest/services/Virginia_Wineries/FeatureServer/1",
          "name": "Tasting Room",
          "query": {
            "orderByFields": "TastingRoo_COUNT DESC",
            "groupByFieldsForStatistics": "Region",
            "outStatistics": [{
              "statisticType": "count",
              "onStatisticField": "TastingRoo",
              "outStatisticFieldName": "TastingRoo_COUNT"
            }]
          },
          "join": "Region"
        },
        {
          "url": "https://services5.arcgis.com/cMBqYE4wmbXNMvex/ArcGIS/rest/services/Virginia_Wineries/FeatureServer/1",
          "name": "Gift Shop",
          "query": {
            "orderByFields": "GiftShop_COUNT DESC",
            "groupByFieldsForStatistics": "Region",
            "outStatistics": [{
              "statisticType": "count",
              "onStatisticField": "GiftShop",
              "outStatisticFieldName": "GiftShop_COUNT"
            }]
          },
          "join": "Region"
        }
      ],
      "series": [
        {
          "category": {"field": "Region", "label": "VA Region"},
          "value": { "field": "GroupTour_COUNT", "label": "Group Tour"},
          "source": "Group Tour",
          "stack": true
        },
        {
          "category": {"field": "Region", "label": "VA Region"},
          "value": { "field": "TastingRoo_COUNT", "label": "Tasting Room"},
          "source": "Tasting Room",
          "stack": true
        },
        {
          "category": {"field": "Region", "label": "VA Region"},
          "value": { "field": "GiftShop_COUNT", "label": "Gift Shop"},
          "source": "Gift Shop",
          "stack": true
        }
      ]
    };
    
    var pieChartDefinition = {
      "type": "pie",
      "datasets": [
        {
          "url": "https://services5.arcgis.com/cMBqYE4wmbXNMvex/ArcGIS/rest/services/Virginia_Wineries/FeatureServer/1",
          "query": {
            "orderByFields": "Region_COUNT DESC",
            "groupByFieldsForStatistics": "Region",
            "outStatistics": [
              {
                "statisticType": "count",
                "onStatisticField": "Region",
                "outStatisticFieldName": "Region_COUNT"
              }
            ]
          }
        }
      ],
      "series": [
        {
          "category": {"field": "Region", "label": "Region"},
          "value": {
            "field": "Region_COUNT",
            "label": "Winery Count"
          }
        }
      ]
    };

    var barChart = new cedar.Chart(document.getElementById('bar-chart'), barChartDefinition);
    barChart.show();
    
    var pieChart = new cedar.Chart(document.getElementById('pie-chart'), pieChartDefinition);
    pieChart.show();
  
    view.watch('extent', function(newValue) {
      var newExtent = JSON.stringify(newValue);
      barChart.datasets()[0].query.geometry = newExtent;
      barChart.show();
      pieChart.datasets()[0].query.geometry = newExtent;
      pieChart.show();
    });

  });