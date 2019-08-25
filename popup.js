'use strict';
//get user's preferred sleep time by input (in min)
// chrome doesn't allow in-text javascript documentation.

function sleepTimer(){
  var timer = prompt("Time in minutes until bedtime (default is 30 minutes):", [30]);

  timer *= 60000;
  var date = Date.now();

  var sleepTime = date + timer; // milliseconds from epoch
  return sleepTime;
  // var newDate = new Date(sleepTime);
  // return newDate;
}

// displaying notification
function showNotification(){
  chrome.notifications.create('reminder', {
        type: 'basic',
        iconUrl: 'moon.png',
        title: 'Go to sleep!',
        message: "Sleep is important! Go to sleep now."
     });
}

// normal JS way
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('timerButton').addEventListener('click', function() {
//       window.alert(sleepTimer().getUTCHours());
//     }
//   );
// });

// this is the jquery way of writing this:
// button onclick for timerButton (set up an alarm with the time (ms after epoch))
$(document).ready(function() {
  $('#timerButton').click(function() {
    var time = sleepTimer();
    console.log(time);
    chrome.alarms.create('sleepAlarm', {when: time});
  });
});

// cancel alarm button
$(document).ready(function() {
  $('#cancelButton').click(function() {
    console.log("canceled!");
    chrome.alarms.clear('sleepAlarm');
  });
});

// get time
$(document).ready(function() {
  $('#getTimer').click(function() {
    chrome.alarms.getAll(function(alarms) {
      console.log(alarms);
      console.log(alarms[0]);
    });
  });
});

// show notification once alarm goes off
chrome.alarms.onAlarm.addListener(function(alarm){
  showNotification();
});
