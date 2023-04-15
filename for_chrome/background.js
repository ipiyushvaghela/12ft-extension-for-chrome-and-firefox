chrome.browserAction.onClicked.addListener(function(tab) {
  const newUrl = `https://12ft.io/${tab.url}`;
  chrome.tabs.update(tab.id, { url: newUrl });

  // Search for the new URL in the page
  chrome.tabs.executeScript(tab.id, {
    code: `console.log(document.querySelector('a[href="${newUrl}"]'));`
  });
});