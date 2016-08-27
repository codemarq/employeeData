$(document).ready(function () {

    // initialize firebase
    var config = {
        apiKey: "AIzaSyBX7Df5RpD1rNm5LgKFfj5zqRLIy7qYkgY",
        authDomain: "codemarq-7df00.firebaseapp.com",
        databaseURL: "https://codemarq-7df00.firebaseio.com",
        storageBucket: "codemarq-7df00.appspot.com",
      };
      firebase.initializeApp(config);

    var database = firebase.database();

  // calculate months worked
  function monthsWorked () {
    // var currentDate = firebase.database.ServerValue.TIMESTAMP;
    // console.log(currentDate);
    // return currentDate - startDate;
  };


  // calculate total billed
  function totalBilled () {
    billed = monthsWorked * monthlyRate;
    return billed;
  }


  // submit button click function
  $('#submit').on('click', function (event) {
    // prevent page refresh on enter
    event.preventDefault();

    // target the inputs and dump to databse
    name = $('#name').val().trim();
    role = $('#role').val().trim();
    startDate = $('#date').val().trim();
    monthlyRate = $('#rate').val().trim();

    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate,
    });

  });

  //Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function(childSnapshot) {

  // Log everything that's coming out of childSnapshot
  console.log(childSnapshot.val());
  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().role);
  console.log(childSnapshot.val().startDate);
  console.log(childSnapshot.val().monthlyRate);

  // Change the HTML to reflect
  $("#name").html(childSnapshot.val().name);
  $("#role").html(childSnapshot.val().role);
  $("#date").html(childSnapshot.val().startDate);
  $("#rate").html(childSnapshot.val().monthlyRate);


// Handle the errors
}, function(errorObject) {

  console.log("Errors handled: " + errorObject.code);
});
  // dump the database data to the 'current employees' table


  
})