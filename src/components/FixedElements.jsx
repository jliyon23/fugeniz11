import React, { useEffect } from 'react';
import pokerImg from '../images/png/poker.png';

const FixedElements = () => {
  useEffect(() => {
    // Create floating card suits
    const suitContainer = document.getElementById('floating-suits');
    const suits = ['♠', '♥', '♦', '♣'];
    const numSuits = 20; // Number of card suits to create
    
    if (suitContainer) {
      for (let i = 0; i < numSuits; i++) {
        const suitElement = document.createElement('div');
        const randomSuit = suits[Math.floor(Math.random() * suits.length)];
        const randomSize = Math.floor(Math.random() * 40) + 30; // Random size between 30-70px
        
        // Random position within the viewport
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        // Random movement distances
        const xDistance = Math.random() * 15 + 5; // 5-20% of screen
        const yDistance = Math.random() * 15 + 5; // 5-20% of screen
        
        // Random animation duration
        const duration = Math.floor(Math.random() * 40) + 20; // 20-60 seconds
        
        suitElement.textContent = randomSuit;
        suitElement.classList.add('card-suit');
        suitElement.style.fontSize = `${randomSize}px`;
        suitElement.style.top = `${yPos}%`;
        suitElement.style.left = `${xPos}%`;
        suitElement.style.opacity = `${Math.random() * 0.1 + 0.05}`; // Between 0.05 and 0.15
        
        // Set custom properties for the moveAround animation
        suitElement.style.setProperty('--initialTop', `${yPos}%`);
        suitElement.style.setProperty('--initialLeft', `${xPos}%`);
        suitElement.style.setProperty('--xDistance', `${xDistance}%`);
        suitElement.style.setProperty('--yDistance', `${yDistance}%`);
        
        // Set animation duration and delay
        suitElement.style.animationDuration = `${duration}s`;
        suitElement.style.animationDelay = `${Math.random() * 10}s`;
        
        suitContainer.appendChild(suitElement);
      }
    }
  }, []);

  return (
    <>
      {/* Fixed background */}
      <div className="fixed inset-0 retro-gradient opacity-95 z-0"></div>
      
      {/* Fixed decorative borders */}
      {/* <div className="fixed inset-x-0 top-0 h-6 bg-gold-gradient opacity-20 z-50"></div>
      <div className="fixed inset-x-0 bottom-0 h-6 bg-gold-gradient opacity-20 z-50"></div>
      <div className="fixed inset-y-0 left-0 w-6 bg-gold-gradient opacity-20 z-50"></div>
      <div className="fixed inset-y-0 right-0 w-6 bg-gold-gradient opacity-20 z-50"></div> */}
      
      {/* Fixed corner decorations */}
      <div className="fixed top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-gold opacity-70 z-50"></div>
      <div className="fixed bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-gold opacity-70 z-50"></div>
      
      {/* Fixed roulette wheels */}
      <div className="roulette-wheel spin-slow top-16 right-16 opacity-60 hidden  md:block z-40">
        <img src={pokerImg}  alt="" />
      </div>
      <div className="roulette-wheel spin-slow bottom-16 left-16 opacity-60 hidden md:block z-40">
      <img src={pokerImg}  alt="" />
      </div>
      
      {/* Floating card suit icons */}
      <div id="floating-suits" className="fixed inset-0 overflow-hidden pointer-events-none z-30"></div>
    </>
  );
};

export default FixedElements;