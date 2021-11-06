chrome.browserAction.onClicked.addListener(function (tab) {
  console.log(`Injecting script into tab: ${tab.id}`);
  chrome.tabs.executeScript(tab.id, {
    allFrames: true,
    file: "/content.js",
    runAt: "document_start",
  });
});
