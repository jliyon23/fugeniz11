import React, { useEffect } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FixedElements from './components/FixedElements';
import NavBar from './components/Navbar';

function App() {
  useEffect(() => {
    // Add depth to title after load
    const title = document.querySelector('h1');
    setTimeout(() => {
      if (title) {
        title.style.transition = "all 1s ease";
       
      }
    }, 1000);
    
    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="app">
      <FixedElements />
      
      <div className="content-container">
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  );
}

export default App;