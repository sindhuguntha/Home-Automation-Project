



var firebaseConfig = {
    apiKey: "AIzaSyC8bCeiPVWs1aqFDRJDknhTIbD-WurUdRg",
    authDomain: "home-automation-2-8c506.firebaseapp.com",
    databaseURL: "https://home-automation-2-8c506-default-rtdb.firebaseio.com",
    projectId: "home-automation-2-8c506",
    storageBucket: "home-automation-2-8c506.appspot.com",
    messagingSenderId: "795332082977",
    appId: "1:795332082977:web:414945122e763b93411260"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
$(document).ready(function () {


    var database = firebase.database();
    var ledStatus1;
    var ledStatus2, ledStatus3, ledStatus4;
    database.ref().on("value", function (snap) {
        ledStatus1 = snap.val().ledStatus1;
    });
    database.ref().on("value", function (snap) {
        ledStatus2 = snap.val().ledStatus2;
    });
    database.ref().on("value", function (snap) {
        ledStatus3 = snap.val().ledStatus3;
    });
    database.ref().on("value", function (snap) {
        ledStatus4 = snap.val().ledStatus4;
    });

    //console.log(ledStatus1);

    /*if(ledStatus1==1)
    {
        $(".head2").text("The light1 is ON");
    }
    else
    {
        $(".head2").text("The light is OFF");
    }*/

    $(".b1on").click(function () {
        var firebaseRef = firebase.database().ref().child("ledStatus1");
        if (ledStatus1 == 0) {
            firebaseRef.set(1);
            //ledStatus1 = 1;
            $(".bulb1").text("Bulb1 is ON");
            console.log("led1 is ON");

        }
        else {
            $(".bulb1").text("Bulb1 is already ON");
        }


    });
    $(".b1off").click(function () {
        var firebaseRef = firebase.database().ref().child("ledStatus1");
        if (ledStatus1 == 1) {
            firebaseRef.set(0);
            //ledStatus1 = 0;
            $(".bulb1").text("Bulb1 is OFF");
            console.log("led1 is OFF");

        }
        else {
            $(".bulb1").text("Bulb1 is already OFF");

        }



    });
    $(".b2on").click(function () {
        var firebaseRef = firebase.database().ref().child("ledStatus2");
        if (ledStatus2 == 0) {
            firebaseRef.set(1);
            //ledStatus1 = 1;
            $(".bulb2").text("Bulb2 is ON");
            console.log("led2 is ON");

        }
        else {
            $(".bulb2").text("Bulb1 is already ON");


        }


    });
    $(".b2off").click(function () {
        var firebaseRef = firebase.database().ref().child("ledStatus2");
        if (ledStatus2 == 1) {
            firebaseRef.set(0);
            ledStatus1 = 0;
            $(".bulb2").text("Bulb2 is OFF");
            console.log("led2 is OFF");


        }
        else {
            $(".bulb2").text("Bulb1 is already OFF");


        }


    });
    $(".b3on").click(function () {
        var firebaseRef = firebase.database().ref().child("ledStatus3");
        if (ledStatus3 == 0) {
            firebaseRef.set(1);
            ledStatus1 = 1;
            $(".bulb3").text("Bulb3 is ON");
            console.log("led3 is ON");

        }
        else {
            $(".bulb3").text("Bulb1 is already ON");

        }


    });
    $(".b3off").click(function () {
        var firebaseRef = firebase.database().ref().child("ledStatus3");
        if (ledStatus3 == 1) {
            firebaseRef.set(0);
            ledStatus1 = 0;
            $(".bulb3").text("Bulb3 is OFF");
            console.log("led3 is OFF");


        }
        else {
            $(".bulb3").text("Bulb1 is already OFF");

        }


    });
    $(".b4on").click(function () {
        var firebaseRef = firebase.database().ref().child("ledStatus4");
        if (ledStatus4 == 0) {
            firebaseRef.set(1);
            ledStatus1 = 1;
            $(".bulb4").text("Bulb4 is ON");
            console.log("led4 is ON");

        }
        else {
            $(".bulb4").text("Bulb1 is already ON");
        }


    });
    $(".b4off").click(function () {
        var firebaseRef = firebase.database().ref().child("ledStatus4");
        if (ledStatus4 == 1) {
            firebaseRef.set(0);
            ledStatus1 = 0;
            $(".bulb4").text("Bulb4 is OFF");
            console.log("led4 is OFF");


        }
        else {
            $(".bulb4").text("Bulb1 is already OFF");

        }

    });


});