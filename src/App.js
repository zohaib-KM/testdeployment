import React from 'react';
import './App.css';

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
      </div>
    </div>
  );
}

export default App;
