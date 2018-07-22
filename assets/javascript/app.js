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
var nextArrival = "";
var frequency = "";
// var minutesAway = "";

// Database Ref

$("#submit").on("click", function () {
    event.preventDefault();
    
    name = $("#name").val().trim();
    destination = $("#destination").val().trim();
    nextArrival = $("#time").val().trim();
    frequency = $("#frequency").val().trim();
    // minutesAway = moment

    console.log(name);
    console.log(destination);
    console.log(nextArrival);
    console.log(frequency);
    // console.log(minutesAway);

    var newInfo = {
        newName: name,
        newDestination: destination,
        newArrival: nextArrival,
        newFrequency: frequency,
        // newMinutes: minutesAWay;
    }

    database.ref().push(newInfo);


    // var addList = $("<td>" + name + "</td> <td>" + destination + "</td> <td>" + frequency + "</td> <td>" + nextArrival + "</td>");

    // var section = $("<tr>")
    // section.append(addList);

    // var a = $("#others").html(addList);
    // a.append(addList);

    
});





