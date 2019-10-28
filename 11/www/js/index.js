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


function cameraSuccess(imageURI) {
 $("#photo").attr("src", imageURI);
 $("#photo").css("display", "block");
}


function cameraError(message) {
    alert("Unable to obtain picture:" + message);
}

function writeFile(fileEntry, dataObj) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            // alert("Successful file write...");
            readFile(fileEntry);
        };

        fileWriter.onerror = function (e) {
            alert("Failed file write: " + e.toString());
        };

        // If data object is not passed in,
        // create a new Blob instead.
        if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: 'text/plain' });
        }

        fileWriter.write(dataObj);
    });
}

function readFile(fileEntry) {

    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {
            $("#file-content").text(fileEntry.fullPath + ": " + this.result);
        };

        reader.readAsText(file);

    }, onErrorReadFile);
}

function onErrorLoadFs(error){
    alert(error);
}

function onErrorCreateFile(error){
    alert(error);
}

function onErrorReadFile(error){
    alert(error);
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

        var cameraOptions = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: false, 
            targetWidth: 640, 
            targetHeight: 640,
        }
        $("#camera").click(function(){ 
             navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
        });

        /*window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {
            var fileName = "time.txt";
            var dir = fs.root;

            // alert(fileName);

            // alert('file system open: ' + fs.name);
            dir.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {
                readFile(fileEntry);
                writeFile(fileEntry, null, false);
                // readFile(fileEntry);
            }, onErrorCreateFile);
        }, onErrorLoadFs);*/

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