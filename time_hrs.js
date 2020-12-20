let date = new Date();
let hours = date.getHours();
defaultFilters="*://*.facebook.com/*";
if(hours >= 10 && hours < 18) { 
       console.log('Time to block websites');
       chrome.webRequest.onBeforeRequest.addListener(
        function (details) { return { cancel: true } },
        { urls: defaultFilters },
        ["blocking"]
    )
    }
        else {    
            console.log('Time to unblock websites');
            }
