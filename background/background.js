chrome.runtime.onInstalled.addListener( function(details) {
  switch(details.reason) {
    case "install":
      chrome.tabs.create({url: "pages/welcome.html?action=install"});
      break;
    case "update":
      chrome.tabs.create({url: "pages/welcome.html?action=update"});
      break;
  }
});