'use strict';

(function () {
    chrome.browserAction.onClicked.addListener(function (tab) {
        chrome.tabs.executeScript(tab.id, {
            code: "window.stop();",
            runAt: "document_start"
        });
        chrome.tabs.executeScript(tab.id, {code: '(function(d){if(self!=top)return false; d.write(\'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Multiple Windows</title></head><body><div id="app" class="app"></div></body></html>\')})(document)'});
        chrome.storage.local.get(['windows', 'canvas'], function (result) {
            var last = {};
            if(result.windows != undefined)
                last.windows = result.windows;
            else
                last.windows = [];
            if(result.canvas != undefined)
                last.canvas = result.canvas;
            else
                last.canvas = {};
            last.windows.map(function(window){
                window.url = tab.url;
            });
            chrome.tabs.executeScript(tab.id, {code: 'var windowsStoreFromStorage = '+JSON.stringify(last.windows)+', canvasStoreFromStorage = '+JSON.stringify(last.canvas)+', mainURL="' + tab.url + '";' });
            chrome.tabs.executeScript(tab.id, {file: 'assets/bundle.js'});
        });


    });
})();

