import React from 'react';
import './App.css';
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const BEFORE_IMAGE = 'https://via.placeholder.com/800x400.png?text=Before';
const AFTER_IMAGE = 'https://via.placeholder.com/800x400.png?text=After';

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="https://d2zgwwgmzrzanm.cloudfront.net/Whitehouse-carpet-and-wall-change.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>Welcome to My React App</h1>
        <p>Scroll down to see the before and after effect</p>
      </div>
      <div className="slider-section">
        <BeforeAfterSlider
          before={BEFORE_IMAGE}
          after={AFTER_IMAGE}
          width={800}
          height={400}
        />
      </div>
    </div>
  );
}

export default App;
