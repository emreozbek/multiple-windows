'use strict';

(function () {
    chrome.browserAction.onClicked.addListener(function (tab) {
        chrome.storage.local.get(["windows", 'canvas'], function (result) {
            var last = {};
            if (result.windows == undefined)
                last.windows = '[]';
            else
                last.windows = JSON.stringify(result.windows);
            if (result.canvas == undefined)
                last.canvas = '{}';
            else
                last.canvas = JSON.stringify(result.canvas);
            chrome.tabs.executeScript(tab.id, {code: '(function(d){if(self!=top)return false; d.write(\'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Multiple Windows</title><script> var mainURL = window.location.href, myWindows = ' + last.windows + ', myCanvas = ' + last.canvas + '; </script></head><body><div id="app" class="app"></div><script src="' + chrome.extension.getURL('bundle.js') + '"></script></body></html>\')})(document)'});
        });
    });
})();

