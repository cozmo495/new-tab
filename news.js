const RSS_URL = `https://rss.app/feeds/tfOkvAac0JjQGZZL.xml`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))
  try {
    fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => console.log(data))
  } catch(error => console.error('Error fetching RSS feed:', error))   ;
    catch(error => {
        document.getElementById("newserror").textContent = "Error fetching news feed. Please try again later, and report this to the Okindu or Cozmo";
    });
