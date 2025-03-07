import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import workshopImg from '../../images/events/categories/workshops.jpg';
import competitionsImg from '../../images/events/categories/competitions.jpg';
import discussionsImg from '../../images/events/categories/discussions.jpg';
import esportsImg from '../../images/events/categories/esports.png';
import funzoneImg from '../../images/events/categories/funzone.jpg';
import hackathonImg from '../../images/events/categories/Hackathon.jpg';
import culturalImg from '../../images/events/categories/cultural.jpg';
import Navbar from '../Navbar';

const events = [
    {
        id: "cultural",
        title: 'Cultural',
        description: 'Experience the vibrant cultures from around the world.',
        image: esportsImg,
      },
      {
        id: "hackathon",
        title: 'Hackathon',
        description: 'Build innovative solutions and compete with the best.',
        image: esportsImg,
      },
      {
        id: "funzone",
        title: 'Funzone',
        description: 'Enjoy live performances from top artists.',
        image: esportsImg,
      },
      {
        id: "discussions",
        title: 'Discussions',
        description: 'Engage in thought-provoking discussions with experts.',
        image: esportsImg,
      },
      {
        id: "workshops",
        title: 'Workshops',
        description: 'Learn new skills through hands-on workshops.',
        image: esportsImg,
      },
      {
        id: "esports",
        title: 'Esports',
        description: 'Compete in thrilling esports tournaments.',
        image: esportsImg,
      },
      {
        id: "competitions",
        title: 'Competitions',
        description: 'Participate in exciting competitions and win prizes.',
        image: esportsImg,
      },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const EventPage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 md:px-4 py-28'>
        <Navbar />
      <motion.h2
        className='text-4xl subtitle-font text-gold mb-6 text-center gold-underline'
        {...fadeInUp}
      >
        EVENTS
      </motion.h2>

      <Link to={`/`} className=" text-amber-200 text-sm  hover:text-amber-600 transition mb-18 subtitle-font">
              {"<"} Back to home
            </Link>

      <div className='grid grid-cols-1 sm:grid-cols-2  gap-6 space-y-8'>
          {events.map((event) => (
            <Link
            to={`/events/${event.id}`}
              key={event.id}
              className='relative   overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-sm border-amber-400/50 border-[0.1px] p-1'
              whileHover={{ scale: 1.05 }} // Hover effect
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className='w-full h-60 object-cover hover:scale-110 duration-300'
              />

<div className='absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6'>
                <p className='text-slate-200 font-bold subtitle-font text-center f1'>{event.description}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default EventPage;