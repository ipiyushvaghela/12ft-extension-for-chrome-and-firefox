browser.browserAction.onClicked.addListener(async (tab) => {
  const newUrl = `https://12ft.io/${tab.url}`;
  await browser.tabs.update(tab.id, { url: newUrl });

  // Search for the new URL in the page
  const [tabResult] = await browser.tabs.query({ active: true, currentWindow: true });
  await browser.tabs.executeScript(tabResult.id, {
    code: `console.log(document.querySelector('a[href="${newUrl}"]'));`
  });
});
