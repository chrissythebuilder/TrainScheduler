// Initialize Firebase

  var config = {
    apiKey: "AIzaSyDOxge8KTAI-v9pVBO23QW2M0R2fACW64U",
    authDomain: "utcs-trainscheduler.firebaseapp.com",
    databaseURL: "https://utcs-trainscheduler.firebaseio.com",
    projectId: "utcs-trainscheduler",
    storageBucket: "utcs-trainscheduler.appspot.com",
    messagingSenderId: "489874359973"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// Global Variables called 

var name = "";
var destination = "";
var frequency = "";
var nextArrival = "hh:mm";
var minutesAway = "";
var convertedTime = moment(time);


// Database Ref

$("#submit").on("click", function () {
    event.preventDefault();
    
    name = $("#name").val().trim();
    destination = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();
    nextArrival = $("#time").val().trim();
    // moment JS
    // minutesAway = $("#frequency").val().trim();

    var newInfo = {
        newName: name,
        newDestination: destination,
        newFrequency: frequency,
        newArrival: nextArrival,
        // newMinutes: minutesAWay,
    };

    database.ref().push(newInfo);

    console.log(name);
    console.log(destination);
    console.log(frequency);
    console.log(nextArrival);
    // console.log(minutesAway);

    $("#name").val("");
    $("#destination").val("");
    $("#frequency").val("");
    $("#time").val("");
    // $("#time").val("");

});

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());

        var name = childSnapshot.val().newName;


        var nextRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(destination),
            $("<td>").text(frequency),
            $("<td>").text(nextArrival),
            // $("<td>").text(minutesAway),
        )

        $("#train-table > tbody").append(nextRow);


    })

    





