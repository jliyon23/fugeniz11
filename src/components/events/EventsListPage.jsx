import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import eventsData from './events.json';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';

const EventListPage = () => {
  const { category } = useParams(); // Get category from URL
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (eventsData[category]) {
      setEvents(eventsData[category]);
    } else {
      setEvents([]);
    }
  }, [category]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-4 py-28">
      <Navbar />
      <motion.h2
        className="text-4xl subtitle-font text-gold mb-12 text-center gold-underline"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {category.toUpperCase()} EVENTS
      </motion.h2>

      <Link to={`/events`} className=" text-amber-200 text-sm  hover:text-amber-600 transition mb-10 subtitle-font">
        {"<"} Back to categories
      </Link>

      {events.length === 0 ? (
        <p className="text-center text-gray-400">No events found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {events.map((event) => {
            const imageAvailable = event.image && event.image.trim() !== '';

            return (
              <motion.div
                key={event.id}
                className="relative overflow-hidden shadow-lg rounded-md border border-amber-400/50 p-1"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to={`/events/${category}/${event.id}`}>
                  {imageAvailable ? (
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full  h-full object-cover hover:scale-110 duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-400 text-lg hover:scale-110 duration-300">
                      {event.name}
                    </div>
                  )}

                  <div className='absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6'>
                    <p className='text-zinc-300 text-center subtitle-font'>{event.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EventListPage;