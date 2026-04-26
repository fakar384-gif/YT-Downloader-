// Selecting DOM Elements
const fetchBtn = document.getElementById('fetchBtn');
const videoUrlInput = document.getElementById('videoUrl');
const loader = document.getElementById('loader');
const resultSection = document.getElementById('result');

// Elements to update with API data
const thumbnail = document.getElementById('thumbnail');
const videoTitle = document.getElementById('videoTitle');

// Event Listener for the Fetch Button
fetchBtn.addEventListener('click', () => {
    const url = videoUrlInput.value.trim();

    // Check if the input is empty
    if(url === "") {
        alert("Please enter a valid YouTube URL first.");
        return;
    }

    // 1. Hide the result section and show the loader
    resultSection.classList.add('hidden');
    loader.classList.remove('hidden');

    /* ========================================================================
     API INTEGRATION HAPPENS HERE
     This setTimeout is just simulating the time an API takes to fetch data.
     In real life, you will replace the setTimeout with a fetch() call 
     to a YouTube Download API (like from RapidAPI).
     ========================================================================
    */
    
    setTimeout(() => {
        // Simulating the data received from an API
        const apiResponse = {
            title: "Sample YouTube Video Title (API Generated)",
            thumbUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Dummy image
        };

        // 2. Hide loader
        loader.classList.add('hidden');

        // 3. Update the UI with fetched data
        videoTitle.innerText = apiResponse.title;
        thumbnail.src = apiResponse.thumbUrl;

        // 4. Show the result section with download buttons
        resultSection.classList.remove('hidden');

    }, 2000); // 2000ms = 2 seconds loading simulation
});

