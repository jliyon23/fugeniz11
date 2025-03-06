import React from 'react';
import { motion } from 'framer-motion';
import OrnateDevider from './OrnateDevider';
import FeatureCard from './FeatureCard';
import EventsCategory from './EventsCategory';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const features = [
    {
      title: "Classic Baccarat",
      description: "Experience the timeless elegance of Baccarat, played according to the traditional rules that have captivated high rollers for centuries."
    },
    {
      title: "Immersive Missions",
      description: "Navigate through a web of intrigue as you complete covert operations disguised as a high-stakes gambler with access to the most exclusive tables."
    },
    {
      title: "Cutting-Edge Intelligence",
      description: "Utilize Q Branch's latest technological marvels to gain the upper hand against opponents who will stop at nothing to see you fail."
    },
    {
      title: "Global Destinations",
      description: "From Monte Carlo to Macau, travel to the world's most luxurious casino destinations, each hiding secrets beneath their opulent facades."
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="about-section max-w-4xl mx-auto px-8 md:px-4">
      <motion.h2 
      id='about'
        className="title-font text-4xl text-gold mb-12 text-center gold-underline"
        {...fadeInUp}

      >
        FUGENIZ.11
      </motion.h2>
      
      <div  className="body-font text-lg text-gray-300 space-y-6 text-center">
        <motion.p {...fadeInUp}>
        Fugeniz.11 is an electrifying tech-centric college fest that celebrates innovation and imagination. It offers hackathons, coding marathons, and workshops, fostering a culture of innovation. Participants are encouraged to push the boundaries of what's possible and bridge the gap between theory and practice through hands-on experiences. Gamers can enjoy thrilling tournaments in the gaming arena, catering to casual gamers and esports enthusiasts alike. FugenizX invites everyone to be part of the technological revolution, daring to dream, innovate, and transcend boundaries, shaping the future today.
        </motion.p>
        
        
        
      
        
        
        
        <OrnateDevider />
        <motion.h2 
        className="title-font text-4xl text-gold mb-12 text-center "
        {...fadeInUp}
        id='theme'
      >
        THEME
      </motion.h2>

        <div  className="">
          <p  className="italic text-gold text-xl text-center">"Green Technology Sustaining Innovation:
          Highlight Sustainable and Eco-friendly Technology"</p>
          <p className='mt-3 text-center'>Sustainable and eco-friendly technology plays a pivotal role in enhancing the significance of Fugeniz X Tech Fest. It not only aligns with the fest's core values of innovation and progress but also underscores the importance of responsible technological advancement. By showcasing cutting-edge green tech solutions, the fest empowers attendees to appreciate the potential of environmentally friendly innovations. These technologies offer solutions to pressing global challenges, from renewable energy to waste reduction, fostering a sense of responsibility towards our planet. In essence, they transform the tech fest into a catalyst for both learning and action, emphasizing the crucial role sustainability plays in our future.</p>
          
        </div>
        

        <OrnateDevider />

        <EventsCategory />

        {/* <motion.div 
          className="text-center"
          {...fadeInUp}
        >
          <p className="italic text-gold text-xl">"In this game, we play until the stakes can go no higher."</p>
          <p className="text-sm text-gray-400 mt-2">— James Bond, Agent 007</p>
        </motion.div> */}
        
        <motion.div 
          className="mt-1 text-center"
          {...fadeInUp}
        >
          <Link to={'/events'} className="body-font bg-red-900 border-2 border-red-900 text-white hover:bg-red-800 px-8 py-3 text-xl transition-all duration-500 mx-auto">
              VIEW MORE EVENTS
          </Link>
        </motion.div>

        <OrnateDevider />

        {/* <motion.h3 
          className="subtitle-font text-2xl text-gold mb-6"
          {...fadeInUp}
        >
          The Legend Continues
        </motion.h3>
        
        <p>
          FUGENIZ.11 builds upon the storied legacy of Ian Fleming's masterpiece. Here, the stakes are higher than ever before. International criminals, rogue agents, and mysterious figures of influence gather around tables of green felt, where millions change hands with the turn of a card.
        </p>
        
        <p>
          Behind the glamour and sophistication lies a dangerous world of deception. Trust no one. Observe everything. Your mission begins the moment you place your first bet.
        </p> */}
        
       
        
        <motion.h3 
          className="subtitle-font text-4xl text-gold mb-6 text-center"
          {...fadeInUp}
        >
          Sponsors
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          id='sponsors'
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <FeatureCard 
                title={feature.title} 
                description={feature.description} 
              />
            </motion.div>
          ))}
        </motion.div>

        <OrnateDevider />

        <ContactForm />

      </div>
    </div>
  );
};

export default AboutSection;
