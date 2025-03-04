import React from 'react';
import OrnateDevider from './OrnateDevider';
import FeatureCard from './FeatureCard';

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

  return (
    <div className="about-section max-w-4xl mx-auto px-8 md:px-4">
      <h2 className="title-font text-4xl text-gold mb-12 text-center gold-underline">About FUGENIZ.11</h2>
      
      <div className="body-font text-lg text-gray-300 space-y-6">
        <p>
          Welcome to the world of high stakes and exquisite danger. FUGENIZ.11 represents the newest chapter in the legendary Casino Royale saga, where fortune favors the bold and secrets lie beneath every card dealt.
        </p>
        
        <p>
          Step into the shoes of Agent 007 as you navigate the treacherous waters of international espionage, where a game of Baccarat is never just a game—it's a battle of wits, nerve, and calculated risk.
        </p>
        
        <OrnateDevider />
        
        <h3 className="subtitle-font text-2xl text-gold mb-6">The Legend Continues</h3>
        
        <p>
          FUGENIZ.11 builds upon the storied legacy of Ian Fleming's masterpiece. Here, the stakes are higher than ever before. International criminals, rogue agents, and mysterious figures of influence gather around tables of green felt, where millions change hands with the turn of a card.
        </p>
        
        <p>
          Behind the glamour and sophistication lies a dangerous world of deception. Trust no one. Observe everything. Your mission begins the moment you place your first bet.
        </p>
        
        <OrnateDevider />
        
        <h3 className="subtitle-font text-2xl text-gold mb-6">Features</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
        
        <OrnateDevider />
        <h3 className="subtitle-font text-2xl text-gold mb-6">Theme</h3>

        <div className="">
          <p className="italic text-gold text-xl">"Green Technology Sustaining Innovation:
          Highlight Sustainable and Eco-friendly Technology"</p>
          <p className='mt-3'>Sustainable and eco-friendly technology plays a pivotal role in enhancing the significance of Fugeniz X Tech Fest. It not only aligns with the fest's core values of innovation and progress but also underscores the importance of responsible technological advancement. By showcasing cutting-edge green tech solutions, the fest empowers attendees to appreciate the potential of environmentally friendly innovations. These technologies offer solutions to pressing global challenges, from renewable energy to waste reduction, fostering a sense of responsibility towards our planet. In essence, they transform the tech fest into a catalyst for both learning and action, emphasizing the crucial role sustainability plays in our future.</p>
          
        </div>
        

        <OrnateDevider />

        <div className="text-center">
          <p className="italic text-gold text-xl">"In this game, we play until the stakes can go no higher."</p>
          <p className="text-sm text-gray-400 mt-2">— James Bond, Agent 007</p>
        </div>
        
        <div className="mt-12 text-center">
          <button className="body-font bg-red-900 border-2 border-red-900 text-white hover:bg-red-800 px-8 py-3 text-xl transition-all duration-500 mx-auto">
            BEGIN YOUR MISSION
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
