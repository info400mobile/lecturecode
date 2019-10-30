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
};

function initApp() {
  firebase.auth().onAuthStateChanged(function(user) {
    $('#quickstart-verify-email').disabled = true;
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      $('#quickstart-sign-in-status').text('Signed in');
      $('#quickstart-sign-in').text('Sign out');
      $('#quickstart-sign-in').prop('disabled', false);
      $('#quickstart-account-details').text(JSON.stringify(user, null, '  '));
      if (!emailVerified) {
        $('#quickstart-verify-email').disabled = false;
      }
    } else {
      $('#quickstart-sign-in-status').text('Signed out');
      $('#quickstart-sign-in').text('Sign in');
      $('#quickstart-account-details').text('null');
    }
    $('#quickstart-sign-in').disabled = false;
  });
  $('#quickstart-sign-in').click(toggleSignIn);
  $('#quickstart-sign-up').click(handleSignUp);
  $('#quickstart-verify-email').click(sendEmailVerification);
  $('#quickstart-password-reset').click(sendPasswordReset);
}

function handleSignUp() {
    console.log("handleSignUp")
    var email = $('#email').val();
    var password = $('#password').val();
    console.log(email);
    console.log(password);
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
    } else {
        alert(errorMessage);
    }
    console.log(error);
    });
}

function sendEmailVerification() {
  firebase.auth().currentUser.sendEmailVerification().then(function() {
    alert('Email Verification Sent!');
  });
}

function sendPasswordReset() {
  var email = $('#email').val();
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    alert('Password Reset Email Sent!');
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
  });
}

function toggleSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    var email = $('#email').val();
    var password = $('#password').val();
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      $('#quickstart-sign-in').disabled = false;
    });
  }
  $('#quickstart-sign-in').disabled = true;
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
        firebase.initializeApp(firebaseConfig);
        initApp();
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
