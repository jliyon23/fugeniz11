import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FixedElements from './components/FixedElements';
import EventListPage from './components/events/EventsListPage';
import EventDetailsPage from './components/events/EventDetails';
import EventPage from './components/events/EventPage';
import ScrollToTop from './ScrollToTop';

function App() {
  useEffect(() => {
    // Add depth to title after load
    const title = document.querySelector('h1');
    setTimeout(() => {
      if (title) {
        title.style.transition = "all 1s ease";
      }
    }, 1000);
  }, []);

  return (
    <>
      <ScrollToTop />
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
    </>
  );
}

export default App;