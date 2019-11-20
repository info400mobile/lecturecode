/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* Example for text label*/
// var vlSpec = {
//         $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
//         data:{
//             // url: "data/data.json"
//             url: "data/data.csv"
//         },
//         encoding:{
//             x: {field: 'a', type: 'nominal'},
//             y: {
//                 aggregate: 'average',
//                 field: 'b',
//                 type: 'quantitative',
//                 axis: {
//                   title: 'average of b'
//                 }
//             }
//         },
//         layer: [{
//             mark: "bar"
//           },{
//             mark: {
//               type: "text",
//               align: "left",
//               baseline: "middle",
//               dx: 3
//             },
//             encoding: {        
//                 text: {
//                     field: "b",
//                     aggregate: 'average',
//                     type: "quantitative",
//                     format: ".2"
//                 },
//             }
//         }]
//     };

/* Examples for threshold*/

// var vlSpec = {
//         "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
//         "description": "The PM2.5 value of Beijing observed 15 days, highlighting the days when PM2.5 level is hazardous to human health. Data source https://chartaccent.github.io/chartaccent.html",
//         "layer": [{
//           "data": {
//             "values": [
//               {"Day": 1, "Value": 54.8},
//               {"Day": 2, "Value": 112.1},
//               {"Day": 3, "Value": 63.6},
//               {"Day": 4, "Value": 37.6},
//               {"Day": 5, "Value": 79.7},
//               {"Day": 6, "Value": 137.9},
//               {"Day": 7, "Value": 120.1},
//               {"Day": 8, "Value": 103.3},
//               {"Day": 9, "Value": 394.8},
//               {"Day": 10, "Value": 199.5},
//               {"Day": 11, "Value": 72.3},
//               {"Day": 12, "Value": 51.1},
//               {"Day": 13, "Value": 112.0},
//               {"Day": 14, "Value": 174.5},
//               {"Day": 15, "Value": 130.5}
//             ]
//           },
//           "layer": [{
//             "mark": "bar",
//             "encoding": {
//               "x": {"field": "Day", "type": "ordinal", "axis": {"labelAngle": 0}},
//               "y": {"field": "Value", "type": "quantitative"}
//             }
//           }, {
//             "mark": "bar",
//             "transform": [
//               {"filter": "datum.Value >= 300"},
//               {"calculate": "300", "as": "baseline"}
//             ],
//             "encoding": {
//               "x": {"field": "Day", "type": "ordinal"},
//               "y": {"field": "baseline", "type": "quantitative"},
//               "y2": {"field": "Value"},
//               "color": {"value": "#e45755"}
//             }
//           }
//         ]}, {
//           "data": {
//              "values": [
//               {"ThresholdValue": 300, "Threshold": "hazardous"}
//             ]
//           },
//           "layer": [{
//             "mark": "rule",
//             "encoding": {
//               "y": {"field": "ThresholdValue", "type": "quantitative"}
//             }
//           }, {
//             "mark": {
//               "type": "text",
//               "align": "right",
//               "baseline": "bottom",
//               "dx": -2,
//               "dy": -2
//             },
//             "encoding": {
//               "x": {
//                 "value": "width"
//               },
//               "y": {
//                 "field": "ThresholdValue",
//                 "type": "quantitative",
//                 "axis": {"title": "PM2.5 Value"}
//               },
//               "text": {"field": "Threshold", "type": "ordinal"}
//             }
//           }]
//         }
//         ]
//     };

/* Examples for highlight and selection*/

// var vlSpec = {
//   "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
//   "description": "A bar chart with highlighting on hover and selecting on click. (Inspired by Tableau's interaction style.)",
//   "data": {
//     "values": [
//       {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
//       {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
//       {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
//     ]
//   },
//   "selection": {
//     "highlight": {"type": "single", "empty": "none", "on": "mouseover"},
//     "select": {"type": "multi"}
//   },
//   "mark": {
//     "type": "bar",
//     "fill": "#4C78A8",
//     "stroke": "black",
//     "cursor": "pointer"
//   },
//   "encoding": {
//     "x": {"field": "a", "type": "ordinal"},
//     "y": {"field": "b", "type": "quantitative"},
//     "fillOpacity": {
//       "condition": {"selection": "select", "value": 1},
//       "value": 0.3
//     },
//     "strokeWidth": {
//       "condition": [
//         {
//           "test": {
//             "and": [
//               {"selection": "select"},
//               "length(data(\"select_store\"))"
//             ]
//           },
//           "value": 2
//         },
//         {"selection": "highlight", "value": 1}
//       ],
//       "value": 0
//     }
//   },
//   "config": {
//     "scale": {
//       "bandPaddingInner": 0.2
//     }
//   }

// };

// Embed the visualization in the container with id `vis`


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    
        vegaEmbed('#vis', vlSpec);
          
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);
    }
};


app.initialize();