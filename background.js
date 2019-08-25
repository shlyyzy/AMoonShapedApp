'use strict';
var dbName = 'sleepTimeInfo';

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// displaying notification
function showNotification(){
  var opt = {
        type: 'basic',
        iconUrl: 'moon.png',
        title: 'Go to sleep!',
        message: "Sleep is important! Go to sleep now.",
  };
  chrome.notifications.create('reminder', opt);
}

// show notification once alarm goes off
chrome.alarms.onAlarm.addListener(function(alarm){
  showNotification();
  alert("go to sleep!!");
});
