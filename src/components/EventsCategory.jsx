import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventsCategory = () => {
  const categories = [
    {
      id: 'tech',
      title: "Tech Royale",
      description: "Where innovation meets elegance. Experience cutting-edge technology competitions in a setting worthy of Q Branch.",
      icon: "🎮"
    },
    {
      id: 'gaming',
      title: "Gaming Grand Prix",
      description: "High-stakes gaming tournaments where champions are crowned and legends are born.",
      icon: "🎲"
    },
    {
      id: 'hackathon',
      title: "Cipher Challenge",
      description: "Crack codes, solve mysteries, and prove your worth in our elite hackathon series.",
      icon: "🔐"
    },
    {
      id: 'workshop',
      title: "Agent Training",
      description: "Master the latest technologies in our exclusive workshop series.",
      icon: "🎯"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h2 
        className="title-font text-4xl text-gold mb-12 text-center gold-underline"
        {...fadeInUp}
      >
        Event Categories
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            {...fadeInUp}
            className="bg-black/50 border-1 border-yellow-500/30 p-6 rounded-md hover:border-gold transition-all duration-300"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="subtitle-font text-2xl text-gold mb-3">{category.title}</h3>
            <p className="body-font text-gray-300 mb-4">{category.description}</p>
            <Link 
              to={`/events/${category.id}`}
              className="inline-block bg-red-900 text-white px-6 py-2  hover:bg-red-800 transition-all duration-300"
            >
              View Events
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsCategory; 