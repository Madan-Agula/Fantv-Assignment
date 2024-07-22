import React from 'react';
import Home from '../src/LandingPage/Home';
import './App.css';
import SecondScreen from './second-screen/SecondScreen';
import ThirdScreen from './third-screen/ThirdScreen';
import Globe from '../src/second-screen/Globe'
function App() {
  return (
    <div className="App">
      <Home />
      <SecondScreen />
      <ThirdScreen />
    </div>
  );
}

export default App;
