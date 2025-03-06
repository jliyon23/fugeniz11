import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const VintageLoadingBar = ({ isLoading = true }) => {
  // If not loading, don't render the component
  if (!isLoading) return null;

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        backgroundImage: ""
      }}
    >
      <div className="w-64 flex flex-col items-center">
        {/* Vintage loading text */}
        <motion.div 
          className="text-gold subtitle-font italic text-3xl mb-6 tracking-widest"
          animate={{
            textShadow: [
              "0 0 5px rgba(218, 165, 32, 0.7)",
              "0 0 15px rgba(218, 165, 32, 0.9)",
              "0 0 5px rgba(218, 165, 32, 0.7)"
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          LOADING...
        </motion.div>
        
        {/* Loading bar container */}
        <div 
          className="w-full h-1 bg-gray-800 rounded-full overflow-hidden"
          style={{
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.8), inset 0 0 4px rgba(0, 0, 0, 0.8)",
            border: "1px solid #333"
          }}
        >
          {/* Animated loading bar */}
          <motion.div 
            className="h-full bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              boxShadow: "0 0 10px rgba(218, 165, 32, 0.7)"
            }}
          />
        </div>
        
        {/* Vintage decorative elements */}
        {/* <div className="flex justify-between w-full mt-2">
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        </div> */}
      </div>
    </motion.div>
  );
};

// LoaderWrapper component to handle automatic loading behavior
const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time (replace with your actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <VintageLoadingBar isLoading={loading} />
      {children}
    </>
  );
};

export default LoaderWrapper;