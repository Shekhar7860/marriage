import React from 'react';
import './App.css';
import Home from './components/Home'
import Invitation from './components/Invitation';
import Wedding from './components/Wedding';
import Stories from './components/Stories';
import Slider from './components/Slider';
import Thanks from './components/Thanks';
function App() {
  return (
    <>
     <Home/>
     <Invitation/>
     <Wedding/>
     <Stories/>
     <Slider/>
     <Thanks/>
     </>
  );
}

export default App;
