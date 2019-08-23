'use strict';
//get user's preferred sleep time by input (in min)
// chrome doesn't allow in-text javascript documentation.

function sleepTimer(){
  var timer = prompt("Time in minutes until bedtime (default is 30 minutes):", [30]);

  timer *= 60000;
  var date = Date.now();

  var sleepTime = date + timer; // milliseconds from epoch
  var newDate = new Date(sleepTime);
  return newDate;
}
// normal JS way
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('timerButton').addEventListener('click', function() {
//       window.alert(sleepTimer().getUTCHours());
//     }
//   );
// });

// this is the jquery way of writing this:
$(document).ready(function() {
  $('#timerButton').click(function(){
    console.log(sleepTimer().getDate());
  });
});
