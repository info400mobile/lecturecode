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
var firebaseConfig = {
  apiKey: "AIzaSyBkXm3hMlkBHwR9ZhPVdT3nBSDxh_XKq40",
  authDomain: "lecture17-79f69.firebaseapp.com",
  databaseURL: "https://lecture17-79f69.firebaseio.com",
  projectId: "lecture17-79f69",
  storageBucket: "lecture17-79f69.appspot.com",
  messagingSenderId: "57268603969",
  appId: "1:57268603969:web:4c11c1e73d4c2cbd4f8ac0"
};

var provider; 


function signIn(){
  firebase.auth().signInWithRedirect(provider).then(function() {
    console.log("signInWithRedirect");
    return firebase.auth().getRedirectResult();
  }).then(function(result) {
    // This gives you a Google Access Token.
    // You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    $('#quickstart-account-details').text(JSON.stringify(user, null, '  '));
    console.log("afterSigninL" + user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

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
        provider = new firebase.auth.GoogleAuthProvider();
        firebase.initializeApp(firebaseConfig);
        firebase.auth().useDeviceLanguage();
        $('#google-sign-in').click(signIn);

        firebase.auth().getRedirectResult().then(function(result) {
          console.log("getRedirectResult");
          if (result.credential) {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;
              
              console.log(user);
              // ...
            }
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          });
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