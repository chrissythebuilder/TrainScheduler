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

var name;
var destination;
var frequency;
var arrival;

// Database Ref

$("#submit").on("click", function () {
    event.preventDefault();
    
    name = $("#name").val().trim();
    destination = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();
    arrival = $("#time").val().trim();

    var newInfo = {
        name: name,
        destination: destination,
        frequency: frequency,
        arrival: arrival,
    };

    database.ref().push(newInfo);

    console.log(name);
    console.log(destination);
    console.log(frequency);
    console.log(arrival);

    $("#name").val("");
    $("#destination").val("");
    $("#frequency").val("");
    $("#time").val("");

    // return false;
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    var newName = childSnapshot.val().name;
    var newDestination = childSnapshot.val().destination;
    var newFrequency = childSnapshot.val().frequency;
    var newTime = childSnapshot.val().arrival;

    console.log(newName);
    console.log(newDestination);
    console.log(newFrequency);
    console.log(newTime)

    var nextTime = newTime.split(":");
    console.log(nextTime);

    var trainTime = moment().hours(nextTime[0]).minutes(nextTime[1]);
    console.log(trainTime);

    var maxTime = moment.max(moment(), trainTime);
    console.log(maxTime);

    var minutes;
    var newArrival;
    var difference;
    var remainder;

    if (maxTime === trainTime) {
        minutes = trainTime.diff(moment(), "minutes");
        newArrival = trainTime.format("hh:mm A");
    } else {
        console.log(newFrequency);

        difference = moment().diff(trainTime, "minutes");
        console.log(difference);

        remainder = newFrequency % difference; 
        console.log(remainder);

        minutes = newFrequency - remainder;

        newArrival = moment().add(minutes, "m").format("hh:mm A");
    }

    console.log(minutes);
    console.log(newArrival);
    console.log(newFrequency);
    console.log(difference);
    console.log(remainder);
    console.log("Minutes: ", minutes);
    console.log("Arrival: ", newArrival)


    var nextRow = $("<tr>").append(
        $("<td>").text(newName),
        $("<td>").text(newDestination),
        $("<td>").text(newFrequency),
        $("<td>").text(newTime),
        $("<td>").text(minutes),
    )

    $("#train-table > tbody").append(nextRow);


    })

    





