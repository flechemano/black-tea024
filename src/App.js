import React from 'react';

function App() {
  const images = [
    { name: 'image1.jpg', url: '/images/image1.jpg' },
    // Add more images here
  ];

  const imageList = images.map(image => (
    <img key={image.name} src={image.url} alt={image.name} />
  ));

  return (
    <div>
      <h1>Welcome to the Black Tea App,...</h1>
      {imageList}
    </div>
  );
}

export default App;

