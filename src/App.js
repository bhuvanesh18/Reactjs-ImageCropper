import React from 'react';
import ImageCropper from './components/ImageCropper';
import imageSource from './profile.png';

function App() {
  return (
    <div>
      <ImageCropper imageSource={imageSource} />
    </div>
  );
}

export default App;
