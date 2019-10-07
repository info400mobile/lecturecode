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
    alert(imageURI);

    window.resolveLocalFileSystemURL(imageURI, function(fileEntry) {
        fileEntry.file(function(file) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
                var blob = new Blob([new Uint8Array(this.result)], { type: 'image/jpeg' });

                window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {
                    var dir = fs.root;
                    var fileName = "img.jpeg"
                    
                    dir.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {

                        writeFile(fileEntry, blob, false);

                    }, onErrorCreateFile);

                }, onErrorLoadFs);
            };
            reader.readAsArrayBuffer(file);
        }, onErrorReadFile);
    }, onErrorResolveFs);
}


function cameraError(message) {
    alert("Unable to obtain picture:" + message);
}

function writeFile(fileEntry, dataObj, isAppend) {
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            if (dataObj.type == "image/jpeg") {
                readBinaryFile(fileEntry);
            }
            else {
                readFile(fileEntry);
            }
        };

        fileWriter.onerror = function (e) {
            alert("Failed file write: " + e.toString());
        };
        
        if (!dataObj) {
            var currentTime = new Date(Date.now()).toString();
            dataObj = new Blob([currentTime + "\n"], { type: 'text/plain' });
        }

        if (isAppend) {
            try {
                fileWriter.seek(fileWriter.length);
            }
            catch (e) {
                console.log("file doesn't exist!");
            }
        }
        fileWriter.write(dataObj);
    });
}

function readFile(fileEntry) {

    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {
            $("#current-time").html(this.result);
        };

        reader.readAsText(file);

    }, onErrorReadFile);
}

function readBinaryFile(fileEntry) {

    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {

            var blob = new Blob([new Uint8Array(this.result)], { type: "image/jpeg" });
            $("#photo").attr("src", fileEntry.toURL());
            $("#photo").css("display", "block");
        };

        reader.readAsArrayBuffer(file);

    }, onErrorReadFile);
}

function onErrorReadFile(error){
    alert(error);
}

function onErrorResolveFs(error){
    alert(error);
}


function onErrorLoadFs(error){
    alert(error);
}

function onErrorCreateFile(error){
    alert(error);
}

function onErrorGetDir(error){
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
        // alert("onDeviceReady");

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