import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost />
    </div>
  );
}

export default App;
