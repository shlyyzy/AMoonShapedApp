'use strict';

// show notification once alarm goes off
chrome.alarms.onAlarm.addListener(function(alarm){
  var opt = {
        type: 'basic',
        iconUrl: chrome.extension.getURL('/moon.png'),
        title: 'Go to sleep!',
        message: "Sleep is important! Go to sleep now."
  };
  chrome.notifications.create('reminder', opt);
});

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});
