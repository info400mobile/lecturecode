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
 
function onOffline(){
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    

    alert("Offline!!!! Connection type:" + states[networkState]);
}

function onOnline(){

    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    

    alert("Online!!!! Connection type:" + states[networkState]);

}


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        // TODO: 1. When the device turns offline, display the network alert and status
        // Hint: Edit function OnOffline(). Instead of showing alert(),
        // Display the "network-alert" div and networkStarte in the "network-status" div
        // Hint2: 
        // Use text() function to insert text: e.g., $("#<id>").text("");
        // Use css() function to show an element e.g., $("#<id>").css(”display”, “block”);
        document.addEventListener("offline", onOffline, false);

        // TODO: 2. When the device turns online, show the network status and hide the network alert
        // Hint: Edit function onOnline(). Instead of showing alert(),
        // Hide the "network-alert" div and show the networkStarte in the "network-status" div
        // Hint2:
        // Use text() function to insert text: e.g., $("#<id>").text("");
        // Use css() function to hide an element e.g., $("#<id>").css(”display”, none);
        document.addEventListener("online", onOnline, false);

        
        // TODO: 3. Show the device information on the page. Put them into specific elements
        // Hint: Instead of showing alert (), insert the status into the element their belong
        // Hint2: Use text() function to insert text: e.g., $("#<id>"").text(""); 
        var deviceInfo = "device model = " + device.model + "\n" + 
                         "device platform = " + device.platform + "\n" + 
                         "device uuid = " + device.uuid + "\n" + 
                         "device version = " + device.version + "\n" + 
                         "device manufacturer = " + device.manufacturer + "\n" + 
                         "device isVirtual = " + device.isVirtual + "\n" + 
                         "device serial = " + device.serial + "\n."
        alert(deviceInfo);

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();