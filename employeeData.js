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

  // dump the database data to the 'current employees' table


  
})