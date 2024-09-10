// Function to create and append a paragraph element to the document body
function createElement(data) {
    const paragraph = document.createElement('p');  // Create a new paragraph element
    paragraph.textContent = data;                   // Set the content of the paragraph to the data
    document.body.appendChild(paragraph);           // Append the paragraph to the body
}

// Function to query Wikipedia for the Stack Overflow article
function queryWikipedia(callback) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Define the URL for the Wikipedia API query
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    // Set up the XMLHttpRequest to GET data from the URL
    xhr.open('GET', url, true);

    // Set the callback for when the request completes
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            const response = JSON.parse(xhr.responseText);  // Parse the JSON response

            // Extract the page content from the response
            const pages = response.query.pages;
            const page = Object.values(pages)[0];  // Wikipedia pages are keyed by page ID
            const extract = page.extract;  // The article's content is in the `extract` field

            // Call the provided callback with the extracted content
            callback(extract);
        } else {
            console.error("Error fetching the Wikipedia article.");
        }
    };

    // Handle network errors
    xhr.onerror = function() {
        console.error("Network error occurred.");
    };

    // Send the request
    xhr.send();
}

// Example usage: Fetch data from Wikipedia and append it to the document body
queryWikipedia(createElement);
