const express = require('express');
const path = require('path');
const app = express();
const port = 3760;

// Middleware to set response headers for JSON format
app.use(express.json());

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define routes
app.get('/', (req, res) => {
    // List of images
    const images = [
        { name: 'image1.jpg', url: '/images/image1.jpg' },
        // Add more images here
    ];

    // Generate HTML to display the images
    const imageList = images.map(image => `<img src="${image.url}" alt="${image.name}" />`).join('<br>');

    // Send the HTML response
    res.send(`<h1>Welcome to the Black Tea App...</h1>${imageList}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

