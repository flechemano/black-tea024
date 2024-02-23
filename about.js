const express = require('express');
const path = require('path');
const app = express();
const port = 3008;

// Middleware to set response headers for JSON format
app.use(express.json());

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define routes
app.get('/', (req, res) => {
    // List of images
    const images = [
        { name: 'image1.jpg', url: '/images/image1.jpg' }
        // Second image removed
    ];

    // Generate HTML to display the images
    const imageList = images.map(image => `<img src="${image.url}" alt="${image.name}" />`).join('<br>');

    // HTML for the "Next Page" button
    const nextPageButton = '<a href="/about"><button>Next Page</button></a>';

    // Send the HTML response with the images and the "Next Page" button
    res.send(`<h1>Welcome to the Black Tea App</h1>${imageList}${nextPageButton}`);
});

// Route for the about page
app.get('/about', (req, res) => {
    // Send the 'about.html' file
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

