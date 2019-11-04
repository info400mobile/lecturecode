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

// $(document).ready(function(){
//     var baseURL = "https://soa.smext.faa.gov/asws/";
//         var service = "api/airport/status/";
//         var parameter = "IND"

//         $.get(baseURL + service + parameter, function(result){
//             //do something when success
//             var response = JSON.parse(result);
//             var div = $("#airpot");
//             div.append("<p>airport name=" + response.Name + "</p>");
//             div.append("<p>airport city=" + response.City + "</p>");
//             div.append("<p>airport state=" + response.State + "</p>");
//             div.append("<p>airport status=" + response.Status + "</p>");
//         }, "json");
// });

function alertDismissed() {
    // do something
}

function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}

function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    

        //=== Dialog ===
        //alert
        // navigator.notification.alert("This is the alert message", alertDismissed, "This is an alert", "Got it");
        //confirmation
        // navigator.notification.confirm("Confirmation message", onConfirm, "Confirmation box", ["Confirm","Remind me later","Cancel"]);
        //prompt
        // navigator.notification.prompt("Input something", onPrompt, "prompt box", ["Ok","Remind me later","Cancel"], "something");
        //beep
        // navigator.notification.beep(2);

        //=== local notification ===
        // cordova.plugins.notification.local.schedule({
            // title: 'Local notification at a time',
            // text: 'Firing notification at every minute',
            // trigger: { in: 1, unit: 'minute' }
            // trigger: { every: 'minute', count: 1  }
            // trigger: { at: new Date(2019, 10, 4, 13, 48) }
        // });     

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);
    }
};




app.initialize();