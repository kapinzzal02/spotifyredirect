chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.startsWith("https://open.spotify.com")) {
      const path = changeInfo.url.split("https://open.spotify.com/")[1].split("?")[0];
      const spotifyUri = `spotify:${path.replace(/\//g, ":")}`;
  
      chrome.tabs.create({ url: spotifyUri, active: true });
  
      setTimeout(() => {
        chrome.tabs.remove(tabId);
      }, 1000);
    }
  });