require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/geometry/Extent",
    "esri/Basemap",
    "esri/layers/VectorTileLayer",
    'esri/geometry/Point'
  ], function(Map, MapView, FeatureLayer, Extent, Basemap, VectorTileLayer, Point) {
  
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
      
    });
    var extent = new Extent ({
        xmin: -83.7,
        ymin: 36.4,
        xmax: -75.7,
        ymax: 39.6
    });
    var wineIcon = {
      type: 'picture-marker',
      url:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzY3IiBoZWlnaHQ9IjM2NyIgdmlld0JveD0iMCAwIDM2NyAzNjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+PHBhdGggZD0iTTI2MS4zOSAxNjguNzY4QzI4MC44MjkgMTQ4LjU4NiAyOTAuMDE3IDEyNC43MSAyODcuMjU3IDEwMS41MzlDMjg1Ljk5NCA5MC45MzUgMjc5LjUwMiA2Ny4zMjIgMjcxLjQ2NyA0NC4xMTZDMjY3LjQzNSAzMi40NyAyNjMuNTQzIDIyLjUxMiAyNjAuMjEzIDE1LjMyM0MyNTQuOTc0IDQuMDEgMjUxLjQ4OCAwIDI0Ni44OTkgMEgxMTkuMjg3QzExNC42OTYgMCAxMTEuMjEzIDQuMDEgMTA1Ljk3MyAxNS4zMjNDMTAyLjY0MyAyMi41MTMgOTguNzUxIDMyLjQ2OSA5NC43MTkgNDQuMTE2Qzg2LjY4NSA2Ny4zMjIgODAuMTkyIDkwLjkzNCA3OC45MyAxMDEuNTM5QzczLjE0NSAxNTAuMTEzIDEyMC4wNDMgMTk0LjYwMyAxNjcuMTg5IDIwMy44MjhDMTY3Ljc5OCAyMTIuMjI4IDE2OC4zNDkgMjM1Ljc2NyAxNjguMDMgMjYzLjgxNkMxNjcuNTE2IDMwOC45NTUgMTY1LjI0NiAzMjUuMzU3IDE2NC4wMDkgMzI3Ljg5QzE2Mi4xNiAzMzEuMTQ2IDE1MS4xNTEgMzM1LjU2MiAxMzQuMzg1IDMzNy4zMjlMMTMzLjkxOCAzMzcuMzc4QzEyNC45NTUgMzM4LjMyMSAxMDguMjcxIDM0MC4wODEgMTA4LjI3MSAzNTMuMzg4QzEwOC4yNzEgMzU5LjcyOCAxMTEuMjU4IDM2Mi43OSAxMTMuNzYzIDM2NC4yNDNDMTE2LjcwMSAzNjUuOTQ2IDEyMC4yMTggMzY2LjE4MSAxMjMuNTgyIDM2Ni4xODFDMTI0LjQ1NCAzNjYuMTgxIDEyNS4zNjMgMzY2LjE2NSAxMjYuMzAxIDM2Ni4xNDhDMTI3LjIzMyAzNjYuMTMgMTI4LjE5NSAzNjYuMTEzIDEyOS4xNzkgMzY2LjExM0gyMzcuMDFDMjM3Ljk5MyAzNjYuMTEzIDIzOC45NTUgMzY2LjEzMSAyMzkuODg3IDM2Ni4xNDhDMjQwLjgyNSAzNjYuMTY2IDI0MS43MzUgMzY2LjE4MSAyNDIuNjA3IDM2Ni4xODFDMjQ2LjM5NCAzNjYuMTgxIDI1Ny45MiAzNjYuMTgxIDI1Ny45MiAzNTMuMzg4QzI1Ny45MiAzNDAuMDgxIDI0MS4yMzQgMzM4LjMyMiAyMzIuMjcyIDMzNy4zNzhMMjMxLjgwMyAzMzcuMzI5QzIxNS4wMzcgMzM1LjU1OSAyMDQuMDI5IDMzMS4xNDUgMjAyLjIwNiAzMjcuOTM2QzIwMC45MzcgMzI1LjMyMyAxOTguNzU0IDMwOC44OTEgMTk4LjYwNCAyNjMuODc5QzE5OC41MDkgMjM0Ljk3MSAxOTkuMzQgMjExLjU0NyAyMDAuMTA1IDIwMy40NzVDMjIyLjI3MSAxOTguNjM5IDI0NC45MzcgMTg1Ljg0OCAyNjEuMzkgMTY4Ljc2OFpNMTg3LjYwMSAyNjIuNzY0QzE4Ny43MDIgMzAzLjg5OSAxODkuMzg2IDMyNy42MzcgMTkyLjYxMyAzMzMuMzIxQzE5OC4zNTYgMzQzLjQ0MiAyMTguOTA5IDM0Ny4wMyAyMzAuNjQ2IDM0OC4yNjhMMjMxLjExOCAzNDguMzE3QzIzNS44NDcgMzQ4LjgxNyAyNDYuOTIgMzQ5Ljk4MyAyNDYuOTIgMzUzLjM4OUMyNDYuOTIgMzU0LjE3MiAyNDYuODMgMzU0LjYgMjQ2Ljc3NCAzNTQuNzkzQzI0Ni4zOTkgMzU0Ljk0NSAyNDUuMzcyIDM1NS4xODIgMjQyLjYwNyAzNTUuMTgyQzI0MS44IDM1NS4xODIgMjQwLjk1OSAzNTUuMTY2IDI0MC4wOSAzNTUuMTQ5QzIzOS4wOTQgMzU1LjEzMSAyMzguMDY0IDM1NS4xMTIgMjM3LjAxIDM1NS4xMTJIMTgzLjQ3NEgxMjkuMTc5QzEyOC4xMjUgMzU1LjExMiAxMjcuMDk1IDM1NS4xMzIgMTI2LjA5OCAzNTUuMTQ5QzEyNS4yMyAzNTUuMTY3IDEyNC4zODkgMzU1LjE4MiAxMjMuNTgyIDM1NS4xODJDMTIwLjgxOSAzNTUuMTgyIDExOS43OTIgMzU0Ljk0NiAxMTkuNDE3IDM1NC43OTNDMTE5LjM1OSAzNTQuNiAxMTkuMjcxIDM1NC4xNzIgMTE5LjI3MSAzNTMuMzg3QzExOS4yNzEgMzQ5Ljk4MSAxMzAuMzQzIDM0OC44MTUgMTM1LjA3MiAzNDguMzE3TDEzNS41NDEgMzQ4LjI2OEMxNDcuMjc5IDM0Ny4wMyAxNjcuODMgMzQzLjQ0MiAxNzMuNTc2IDMzMy4zMTlDMTc0Ljc2OSAzMzEuMjE3IDE3OC4zOTkgMzI0LjgyMSAxNzkuMDQ2IDI2Mi41MzFDMTc5LjE5OCAyNDcuNzk0IDE3OS4xMjIgMjMyLjI2NCAxNzguODM3IDIxOS45MjVDMTc4LjM2NSAxOTkuNTI5IDE3Ny42NjUgMTk4LjA4MyAxNzcuMDQ4IDE5Ni44MDhDMTc2LjIyMyAxOTUuMTA3IDE3NC42NDIgMTkzLjkyNSAxNzIuODE5IDE5My42NDZDMTUxLjU3OSAxOTAuMzg4IDEyOS4yNTIgMTc4LjQ5MSAxMTMuMDk0IDE2MS44MjFDOTUuNzE0IDE0My44ODggODcuNDYgMTIyLjk0MiA4OS44NTQgMTAyLjg0QzkyLjI5NiA4Mi4zMzEgMTEzLjUyOSAxOS43NTggMTIwLjgxOCAxMUgyNDUuMzc1QzI1Mi42NjQgMTkuNzU5IDI3My44OTYgODIuMzMzIDI3Ni4zMzkgMTAyLjg0QzI4MS40MDYgMTQ1LjM5MSAyMzcuMzA4IDE4NS43MzQgMTk0LjQ5MiAxOTMuMzc5QzE5Mi42NTggMTkzLjcwNyAxOTEuMTM2IDE5NC44OTkgMTkwLjMxMyAxOTYuNjQ3QzE4Ny40ODggMjAyLjY1NyAxODcuNTk1IDI2MC4zMTIgMTg3LjYwMSAyNjIuNzY0WiIgZmlsbD0iIzgwMDA4MCIvPjxwYXRoIGQ9Ik0yNDQuODc2IDE1Mi4zODdDMjUyLjI2MyAxNDMuNDAxIDI1OC4xNTQgMTM1LjQ0OSAyNTkuMTk3IDEyNC44ODFDMjU5LjI4MyAxMjQuMDA3IDI1OS40MjYgMTIwLjg4MSAyNTYuNTQgMTIwLjg4MUMyMjAgMTIwLjg4MSAxNDYuMTAyIDEyMC44OTUgMTA5LjU2MSAxMjAuODk1QzEwNi40MDIgMTIwLjg5NSAxMDYuODk2IDEyMy45NTEgMTA2Ljk4NyAxMjQuODgxQzEwOC4wNDMgMTM1LjcyMSAxMTQuMTAxIDE0My45MjkgMTIxLjc1MiAxNTMuMTIyQzEzNC41NjQgMTY4LjUxNSAxNTEuMzgyIDE3OC41MiAxNzAuMDkyIDE3OS44ODdDMTczLjI2MyAxODAuMTE5IDE3OC40ODggMTgwLjI2MiAxODMuNzI3IDE4MC4yNjJDMTg4LjcxNSAxODAuMjYyIDE5My4yNTYgMTgwLjEyOSAxOTUuODczIDE3OS45MDZDMjE0Ljk4NCAxNzguMjc2IDIzMi4wNTEgMTY3Ljk4OCAyNDQuODc2IDE1Mi4zODdaIiBmaWxsPSIjODAwMDgwIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iY2xpcDAiPjxyZWN0IHdpZHRoPSIzNjYuMTgyIiBoZWlnaHQ9IjM2Ni4xODIiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+',
      width: 30,
      height: 30
    };
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
    nameClass.symbol = createTextSymbol('#4a0073', '#df78ef');
    
    var amenitiesArcade = document.getElementById("amenities").text;
    var amenitiesClass = {
      labelExpressionInfo: {
        expression: amenitiesArcade
      },
      labelPlacement: "below-right",
      minScale: minScale
    };
    amenitiesClass.symbol = createTextSymbol('#263238','#bdbdbd');
    var serviceUrl =
      "https://services5.arcgis.com/cMBqYE4wmbXNMvex/ArcGIS/rest/services/Virginia_Wineries/FeatureServer/1";
      // var geom2 = Point({ 
      //   // Our current location
      //   // latitude: 38.890974799999995,
      //   // longitude: -77.08625049999999,
      //   x: 38.890974799999995,
      //   y: -77.08625049999999
      // }); 
    var layer = new FeatureLayer({
      url: serviceUrl,
      renderer: {
        type: "simple",
        symbol: wineIcon
      },
      labelingInfo: [
        nameClass,
        amenitiesClass
      ],
      popupTemplate: {
        title: "{Name}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "Name"
              },
              {
                fieldName: "Address",
                label: "Address"
              },
              {
                fieldName: "City"
              },
              {
                fieldName: "State"
              },
              {
                fieldName: "Phone"
              },
              {
                fieldName: "Website"
              }
            ]
          }
        ]

        // expressionInfos: [{
        // name: "vineyard-amenities",
        // title: "# of amenities provided by vineyard",
        // expression: "Distance($feature, geom2, 'miles')"
        // }],
        // content: "You are {expression/vineyard-amenities} miles away"
        // + " from {NAME}."
      }
    });
    view.map.add(layer);
    function createTextSymbol(fontColor, haloColor) {
      return {
        type: 'text',
        font: {
          size: 14,
          weight: 'bold'
        },
        color: fontColor,
        haloColor: haloColor,
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