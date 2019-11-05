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
$.support.cors = true;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        var corsServer = "https://cors-anywhere.herokuapp.com/"
        
        //criticks pick
        var baseURL = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?";
        var key = "f95MKrk0oNIBLGyk7LrHuq04HsBQN7dZ";
        var parameter = "order=by-opening-date";
        var url = baseURL + "api-key=" + key + "&" + parameter;

        // science stories
        // var baseURL = "https://api.nytimes.com/svc/topstories/v2/science.json?";
        // var url = baseURL + "api-key=" + key;

        console.log(url);

        $.ajaxPrefilter(function(options) {
            if (options.crossDomain && jQuery.support.cors){
                options.url = corsServer + options.url;
                console.log(options.url);
            }
        });

        $.ajax({
            url: url,
            type: 'GET',
            dataTyps:'json',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            crossDomain:true,
            success: function(result){
                console.log("Success");
                console.log(result);
                // var response = JSON.parse(result);
                var i;
                // Showing results for critics picks 
                for (i=0; i<5; i++){

                    var display_title = result.results[i].display_title;
                    var headline = result.results[i].headline;
                    var byline = result.results[i].byline;
                    var publication_date = result.results[i].publication_date;
                    var url = result.results[i].link.url;

                    $("#movie").append("<h5>" + display_title + "</h5>");
                    $("#movie").append("<p> Headline: " + headline + "</p>");
                    $("#movie").append("<p> Byline: " + byline + "</p>");
                    $("#movie").append("<p> Publication date: " + publication_date + "</p>");
                    $("#movie").append("<p> URL: <a href=" + url + ">" + url + "</a></p>");
                    $("#movie").append("<hr>");
                }


                // Showing results for top science stories
                // for (i=0; i<5; i++){

                //     $("#header").text("= Top Science Stories =");

                //     $("#movie").append("<h5>" + result.results[i].title+"</h5>");
                //     $("#movie").append("<p> Byline: " + result.results[i].byline+"</p>");
                //     $("#movie").append("<p> Published date: " + result.results[i].published_date+"</p>");
                //     $("#movie").append("<p> URL: <a href="+ result.results[i].url +">" + result.results[i].url+"</a></p>");
                //     $("#movie").append("<hr>");
                // }

            },
            error: function(xhr, status, error){
                console.log("Error");
                console.log(xhr.statusText);
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
            }


        });

        // $.get(baseURL + service + parameter, function(result){
        //     //do something when success
        //     var response = JSON.parse(result);
        //     var div = $("#airpot");
        //     div.append("<p>airport name=" + response.Name + "</p>");
        //     div.append("<p>airport city=" + response.City + "</p>");
        //     div.append("<p>airport state=" + response.State + "</p>");
        //     div.append("<p>airport status=" + response.Status + "</p>");
        // }, "json");


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