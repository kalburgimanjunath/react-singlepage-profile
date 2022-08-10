import React from 'react';
import './style.css';
import Images from './Images';
import About from './About';
import Contact from './Contact';
export default function App() {
  return (
    <div className="app" style={{ display: 'flex' }}>
      <Images />
      <div className="rightpart">
        <About />
        <Contact />
      </div>
    </div>
  );
}
