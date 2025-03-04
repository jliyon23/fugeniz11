import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventsList = ({ categoryId }) => {
  const events = {
    tech: [
      {
        id: 'tech-1',
        title: "Quantum Computing Challenge",
        date: "2024-04-15",
        time: "10:00 AM",
        location: "Q Branch Lab",
        description: "Design and implement quantum algorithms in this cutting-edge competition.",
        prize: "$10,000"
      },
      {
        id: 'tech-2',
        title: "AI Poker Face",
        date: "2024-04-16",
        time: "2:00 PM",
        location: "Main Arena",
        description: "Develop AI that can out-bluff human players in a poker tournament.",
        prize: "$5,000"
      }
    ],
    gaming: [
      {
        id: 'gaming-1',
        title: "Baccarat Masters",
        date: "2024-04-17",
        time: "7:00 PM",
        location: "Casino Royale",
        description: "Professional Baccarat tournament with high stakes.",
        prize: "$15,000"
      }
    ],
    // Add more categories as needed
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const categoryEvents = events[categoryId] || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h2 
        className="title-font text-4xl text-gold mb-12 text-center gold-underline"
        {...fadeInUp}
      >
        {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Events
      </motion.h2>
      
      <div className="space-y-6">
        {categoryEvents.map((event) => (
          <motion.div
            key={event.id}
            {...fadeInUp}
            className="bg-black/50 border-2 border-gold/30 p-6 rounded-lg hover:border-gold transition-all duration-300"
          >
            <h3 className="subtitle-font text-2xl text-gold mb-3">{event.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-gray-400">Date</p>
                <p className="text-white">{event.date}</p>
              </div>
              <div>
                <p className="text-gray-400">Time</p>
                <p className="text-white">{event.time}</p>
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-white">{event.location}</p>
              </div>
              <div>
                <p className="text-gray-400">Prize Pool</p>
                <p className="text-white">{event.prize}</p>
              </div>
            </div>
            <p className="body-font text-gray-300 mb-4">{event.description}</p>
            <Link 
              to={`/events/${categoryId}/${event.id}`}
              className="inline-block bg-red-900 text-white px-6 py-2 rounded hover:bg-red-800 transition-all duration-300"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsList; 