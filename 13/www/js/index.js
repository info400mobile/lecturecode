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

        // $.ajax({
        //     url: "https://api.twitter.com/1.1/search/tweets.json", 
        //     types: "GET",
        //     data: {"q":"iu","lang":"en"}
        //     dataType: "json"
        //     success: function(result){
        //         //do something when success
        //     },
        //     error: function(xhr, status, error){
        //         //do something when error
        //     }
        // });
        var baseURL = "https://soa.smext.faa.gov/asws/";
        var service = "api/airport/status/";
        var parameter = "IND"

        $.get(baseURL + service + parameter, function(result){
            //do something when success
            var response = JSON.parse(result);
            var div = $("#airpot");
            div.append("<p>airport name=" + response.Name + "</p>");
            div.append("<p>airport city=" + response.City + "</p>");
            div.append("<p>airport state=" + response.State + "</p>");
            div.append("<p>airport status=" + response.Status + "</p>");
        }, "json");


        // $.ajax({
        //     url: "https://api.twitter.com/1.1/statuses/update.json", 
        //     types: "POST",
        //     data: {"status":"I am a tweet"}
        //     success: function(result){
        //         //do something when success
        //     },
        //     error: function(xhr, status, error){
        //         //do something when error
        //     }
        // });

        // $.post("https://api.twitter.com/1.1/statuses/update.json",{"status":"I am a tweet"}, function(result){
        //     //do something when success
        // });


        // $.post( "example.php", function() {
        //   alert( "success" );
        // })
        //   .done(function() {
        //     alert( "second success" );
        //   })
        //   .fail(function() {
        //     alert( "error" );
        //   })
        //   .always(function() {
        //     alert( "finished" );
        //   });

        //   var pastry_text = "{“name”: “Belgian Waffles”, “price”:5.95}";
        //   var pastry_obj = JSON.parse(pastry_text);
        //   var pastry_name = pastry_obj.name;
        //   var pastry_price = pastry_obj.price;

        //   var pastries_text = '{"food":[{"name": "Belgian Waffles"},{"name": "Strawberry Belgian Waffles"},{"name": "Berry-Berry Belgian Waffles"}]}';
        //   var pastries_obj = JSON.parse(pastries_text);
        //   var pastry_name = "";

        //   pastries_obj["food"].forEach(function(){
        //     pastry_name = this.name;
        //   });


        //   var pastry_obj = {“name”: “Belgian Waffles”, “price”:5.95};
        //   var pastry_str = JSON.strinfy(pastry_obj);

        //   var pastries_obj = {"food":[{"name": "Belgian Waffles"},{"name": "Strawberry Belgian Waffles"},{"name": "Berry-Berry Belgian Waffles"}]};
        //   var pastries_str = JSON.stringfy(pastries_obj);


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