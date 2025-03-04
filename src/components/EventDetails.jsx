import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { categoryId, eventId } = useParams();
  
  // This would typically come from an API or database
  const eventDetails = {
    'tech-1': {
      title: "Quantum Computing Challenge",
      date: "2024-04-15",
      time: "10:00 AM",
      location: "Q Branch Lab",
      description: "Design and implement quantum algorithms in this cutting-edge competition.",
      prize: "$10,000",
      rules: [
        "Teams must consist of 2-4 members",
        "Participants must be 18 or older",
        "All code must be original work",
        "Final submission must include documentation"
      ],
      schedule: [
        "10:00 AM - Registration and Setup",
        "11:00 AM - Challenge Briefing",
        "12:00 PM - Competition Begins",
        "6:00 PM - Submission Deadline",
        "7:00 PM - Presentations and Judging"
      ]
    },
    // Add more events as needed
  };

  const event = eventDetails[eventId];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  if (!event) {
    return <div className="text-center text-white">Event not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div {...fadeInUp}>
        <h2 className="title-font text-4xl text-gold mb-8 text-center gold-underline">
          {event.title}
        </h2>
        
        <div className="bg-black/50 border-2 border-gold/30 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="subtitle-font text-2xl text-gold mb-4">Event Details</h3>
              <div className="space-y-3">
                <p><span className="text-gray-400">Date:</span> {event.date}</p>
                <p><span className="text-gray-400">Time:</span> {event.time}</p>
                <p><span className="text-gray-400">Location:</span> {event.location}</p>
                <p><span className="text-gray-400">Prize Pool:</span> {event.prize}</p>
              </div>
            </div>
            
            <div>
              <h3 className="subtitle-font text-2xl text-gold mb-4">Description</h3>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="subtitle-font text-2xl text-gold mb-4">Rules</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="subtitle-font text-2xl text-gold mb-4">Schedule</h3>
              <ul className="space-y-2 text-gray-300">
                {event.schedule.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-red-900 text-white px-8 py-3 rounded hover:bg-red-800 transition-all duration-300">
              Register Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetails; 