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
    apiKey: "AIzaSyDpA4VGCi32dQnoLYp_sTTTi1sFheVfjcQ",
    authDomain: "lecture18-3df2f.firebaseapp.com",
    databaseURL: "https://lecture18-3df2f.firebaseio.com",
    projectId: "lecture18-3df2f",
    storageBucket: "lecture18-3df2f.appspot.com",
    messagingSenderId: "69962701374",
    appId: "1:69962701374:web:86840043f9765d1aca8f6f"
  };


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
        firebase.initializeApp(firebaseConfig);

        var db = firebase.firestore();


        
        // ===== Add an new user to the collection =====
        // db.collection("users").add({
        //     firstname: "Neha",
        //     lastname: "Nayak",
        //     email: "nmnayak@iu.edu"
        // })
        // .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });

        // ===== Read data from the collection =====
        // db.collection("users").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         console.log(`${doc.id} => ${doc.data()}`);

        //         $("#user").append("<p>" + doc.data().firstname +"</p>");
        //         $("#user").append("<p>" + doc.data().lastname +"</p>");
        //         $("#user").append("<p>" + doc.data().email +"</p>");
        //         $("#user").append("<hr>");
        //     });
        // });    

        // ===== Simple query =====
        // var users = db.collection("users");
        // var user = users.where("email", "==", "cfchung@iu.edu").get()
        // .then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         // console.log(doc.id, " => ", doc.data());

        //         $("#user").append("<p>" + doc.data().firstname +"</p>");
        //         $("#user").append("<p>" + doc.data().lastname +"</p>");
        //         $("#user").append("<p>" + doc.data().email +"</p>");
        //         $("#user").append("<hr>");
        //     });
        // })
        // .catch(function(error) {
        //     console.log("Error getting documents: ", error);
        // });


        // ===== Compound query =====
        // var users = db.collection("users");
        // var user = users.where("firstname", "==", "Christina").where("lastname", "==", "Chung").get()
        // .then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         // console.log(doc.id, " => ", doc.data());

        //         $("#user").append("<p>" + doc.data().firstname +"</p>");
        //         $("#user").append("<p>" + doc.data().lastname +"</p>");
        //         $("#user").append("<p>" + doc.data().email +"</p>");
        //         $("#user").append("<hr>");
        //     });
        // })
        // .catch(function(error) {
        //     console.log("Error getting documents: ", error);
        // });

        // ===== OrderBy =====
        // var users = db.collection("users");
        // // var user = users.orderBy("lastname", "desc").get()
        // var user = users.orderBy("lastname").get()
        // .then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         // console.log(doc.id, " => ", doc.data());

        //         $("#user").append("<p>" + doc.data().firstname +"</p>");
        //         $("#user").append("<p>" + doc.data().lastname +"</p>");
        //         $("#user").append("<p>" + doc.data().email +"</p>");
        //         $("#user").append("<hr>");
        //     });
        // })
        // .catch(function(error) {
        //     console.log("Error getting documents: ", error);
        // });

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