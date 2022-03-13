import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import NewsMenu from './components/NewsMenu';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <Header />
      <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <NewsMenu setProgress={setProgress} />
      {/* <News /> */}
    </div>
  );
}

export default App;
