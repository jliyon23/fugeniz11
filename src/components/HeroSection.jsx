import React from 'react';
import img2 from '../images/4.png';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className="min-h-screen damask-pattern flex flex-col justify-center items-center p-8 z-10 relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent opacity-60 z-0"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-xl mx-auto text-center fade-in">
        <div className="mb-2 opacity-80 subtitle-font text-gray-900 font-bold">INTER COLLEGE TECH FEST</div>

        <h1 className="f1 text-[3.5rem] text-[#242424] md:text-8xl">
          FUGENIZ.II
        </h1>

        <div className="flex justify-center items-center mb-3">
          <div className="h-px w-12 bg-gold-gradient opacity-70"></div>
          <h2 className="subtitle-font text-[0.9rem] md:text-2xl px-6 text-gray-900 opacity-80 font-bold ">
            SINCE 2007
          </h2>
          <div className="h-px w-12 bg-gold-gradient opacity-70"></div>
        </div>

        <p className="f2 text-xl md:text-2xl mb-10 text-slate-900">
          "Future Generation of Engineers"
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
          <button className="bg-amber-900 text-white px-8 py-3 rounded text-lg font-bold hover:bg-amber-800 transition-all border-2 border-amber-900 shadow-[5px_5px_0px_0px_rgba(26,26,26,1)] f2">
            {"    BROCHURE    "}
          </button>
          <button className="bg-transparent border-2 border-amber-900 text-amber-900 px-8 py-3 rounded text-lg font-bold hover:bg-amber-900 hover:text-white transition-all shadow-[5px_5px_0px_0px_rgba(120,53,15,1)] f2">
            VIEW EVENTS
          </button>
        </div>
      </div>

      {/* Background Image Positioned at the Bottom with Rotation */}
      <img
        src={img2}
        alt=""
        className="absolute bottom-0 left-1/2 md:top-0 top-1/3 -translate-x-1/2 w-full max-w-2xl opacity-60 z-0 transform -rotate-90"
      />
      </div>
  );
};

export default HeroSection;
