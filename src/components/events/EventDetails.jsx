import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import eventsData from './events.json';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';

const EventDetailsPage = () => {
  const { category, eventId } = useParams();
  const [event, setEvent] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  useEffect(() => {
    if (eventsData[category]) {
      const foundEvent = eventsData[category].find((e) => e.id === parseInt(eventId));
      setEvent(foundEvent || null);
    }
  }, [category, eventId]);

  if (!event) {
    return <p className="text-center text-gray-400">Event not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-24">
      <Navbar />
      <motion.div
        className=" rounded-lg overflow-hidden shadow-lg "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className='text-4xl subtitle-font text-gold mb-12 text-center gold-underline'
          {...fadeInUp}
        >
          {event.name}
        </motion.h2>

        <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
          <div className='flex flex-col '>
            <Link to={`/events/${category}`} className=" text-amber-200 text-sm  hover:text-amber-600 transition mb-2 subtitle-font">
              {"<"} Back to Events
            </Link>
            <img src={event.image} alt={event.name} className="w-96  object-cover" />
          </div>

          <div className="p-6 subtitle-font max-w-md">

            <p className="text-gray-300 mb-4 text-sm">{event.description}</p>
            <p className="text-sm text-gray-400">📅 {event.date} | ⏰ {event.time}</p>
            <p className="text-sm text-gray-400">📍 {event.location}</p>

            <div className="mt-6 flex gap-4">
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-900 text-white px-6 py-2 rounded hover:bg-red-800 transition-all duration-300"
              >
                Register Now
              </a>


            </div>
          </div>
        </div>

        {/* <img src={event.image} alt={event.name} className="w-full  object-cover" />

        <div className="p-6">
          <h2 className="text-3xl subtitle-font text-amber-400 mb-4">{event.name}</h2>
          <p className="text-gray-300 mb-4">{event.description}</p>
          <p className="text-sm text-gray-400">📅 {event.date} | ⏰ {event.time}</p>
          <p className="text-sm text-gray-400">📍 {event.location}</p>

          <div className="mt-6 flex gap-4">
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition"
            >
              Register Now
            </a>

            <Link to={`/events/${category}`} className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition">
              Back to Events
            </Link>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default EventDetailsPage;
