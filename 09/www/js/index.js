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
function onImageCaptureSuccess(mediaFiles){
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // alert(path);
        
        $("#photo").attr("src", path);
    }
}

function onVideoCaptureSuccess(mediaFiles){
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // alert(path);
        
        $("#video").attr("src", path);
    }
}

function onCaptureError(error){
    alert('Error code: ' + error.code + '\n Error message:' + error.message);
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
        // === audio ===
        // navigator.device.capture.captureAudio(onCaptureSuccess, onCaptureError, {limit:1});
        // === image ===
        //TODO: 1. when user clickes the camera button, trigger the capture image function
        //TODO: 2. When camera capture success, put the file paht into the img src and then make it visible
        // navigator.device.capture.captureImage(onImageCaptureSuccess, onCaptureError, {limit:1});
        // === video ===
        //TODO: 1. when user clickes the video button, trigger the capture image function
        //TODO: 2. When video capture success, put the file paht into the video src and then make it visible
        // navigator.device.capture.captureVideo(onVideoCaptureSuccess, onCaptureError, {limit:1});
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