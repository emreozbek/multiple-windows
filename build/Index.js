'use strict';

(function(){
    chrome.browserAction.onClicked.addListener(function(tab){
        chrome.tabs.executeScript(tab.id, {code:'(function(d){if(self!=top)return false;d.write(\'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Multiple Windows</title><script> window.mainURL = window.location.href;</script></head><body><div id="app" class="app"></div><script src="' + chrome.extension.getURL('bundle.js') + '"></script></body></html>\')})(document)'});
    });
})();