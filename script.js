document.querySelector('#searchqueryform').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.querySelector('#searchquery').value;
    const selectedRadio = document.querySelector('input[name="searchengine"]:checked');
    if (!input) {
        document.getElementById('searchconfirmation').textContent = "Please enter a search query.";
        return;
    }
    if (!selectedRadio) {
        document.getElementById('searchconfirmation').textContent = "Select a valid search engine.";
        return;
    }
    const selectedOption = selectedRadio.value;
    let url = "";
    let engine = "";
    if (selectedOption === "bing") {
        engine = "Bing";
    } else if (selectedOption === "ddg") {
        engine = "DuckDuckGo";
    } else if (selectedOption === "google") {
        engine = "Google";
    } else {
        document.getElementById('searchconfirmation').textContent = "Select a valid search engine.";
        return;
    }
    if (selectedOption === "bing") {
        url = `https://bing.com/search?q=${encodeURIComponent(input)}`;
    } else if (selectedOption === "ddg") {
        url = `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;
    } else if (selectedOption === "google") {
        url = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
    }
    document.getElementById('searchconfirmation').textContent =
        `Searching for: ${input}, using ${engine}. The Internet is Waiting!`;
    // Redirect after a short delay
    setTimeout(() => {
        window.location.href = url;
    }, 2000);
});