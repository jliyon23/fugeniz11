import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FixedElements from './components/FixedElements';
import NavBar from './components/Navbar';
import EventsCategory from './components/EventsCategory';
import EventsList from './components/EventsList';
import EventListPage from './components/events/EventsListPage';
import EventDetailsPage from './components/events/EventDetails';
import EventPage from './components/events/EventPage';

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
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //   anchor.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     const href = this.getAttribute('href');
    //     if (href) {
    //       document.querySelector(href).scrollIntoView({
    //         behavior: 'smooth'
    //       });
    //     }
    //   });
    // });
  }, []);

  return (
    <Router>
      <div className="app">
        <FixedElements />
        
        <div className="content-container">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutSection />
                
              </>
            } />
            <Route path='/events' element={<EventPage />} />
            <Route path="/events/:category" element={<EventListPage />} />
            <Route path="/events/:category/:eventId" element={<EventDetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;