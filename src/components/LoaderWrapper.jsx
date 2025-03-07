import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const VintageLoadingScreen = ({ isLoading = true }) => {
  if (!isLoading) return null;

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center">
        {/* Main glowing text */}
        <div className="relative">
          {/* Glowing text */}
          <motion.div 
            className="f3 text-6xl md:text-8xl tracking-widest text-center"
            style={{ color: '#ffd700' }}
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 215, 0, 0.8)", 
                "0 0 20px rgba(255, 215, 0, 1)", 
                "0 0 40px rgba(255, 165, 0, 0.8)", 
                "0 0 20px rgba(255, 215, 0, 1)", 
                "0 0 10px rgba(255, 215, 0, 0.8)"
              ],
              opacity: [0.7, 1, 0.7], // Pulsing effect
              scale: [1, 1.08, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            FUGENIZ.11
          </motion.div>
          
          {/* Reflection effect */}
          <motion.div 
            className="f3 text-5xl tracking-widest text-center mt-2 opacity-30"
            style={{ 
              color: '#ffd700',
              transform: 'rotateX(180deg) scaleY(0.4)',
              filter: 'blur(2px)',
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              filter: [
                'blur(2px) brightness(0.6)',
                'blur(3px) brightness(0.8)',
                'blur(2px) brightness(0.6)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            FUGENIZ.11
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// LoaderWrapper component to handle automatic loading behavior
const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <VintageLoadingScreen isLoading={loading} /> : children;
};

export default LoaderWrapper;
