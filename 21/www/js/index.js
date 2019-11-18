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

var vlSpec = {
$schema: 'https://vega.github.io/schema/vega-lite/v4.json',
data: {
  values: [
    {a: 'group1', b: 2},
    {a: 'group1', b: 7},
    {a: 'group1', b: 4},
    {a: 'group2', b: 1},
    {a: 'group2', b: 2},
    {a: 'group2', b: 6},
    {a: 'group3', b: 8},
    {a: 'group3', b: 4},
    {a: 'group3', b: 7},
    {a: 'group4', b: 3},
    {a: 'group4', b: 9},
    {a: 'group4', b: 7},
    {a: 'group5', b: 2},
    {a: 'group5', b: 7},
    {a: 'group5', b: 8}
  ]
},
mark: 'bar',
encoding: {
    x: {field: 'a', type: 'nominal'},
    y: {
    aggregate: 'average',
    field: 'b',
    type: 'quantitative',
    axis: {
      title: 'average of b'
    }
    }
}
};

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