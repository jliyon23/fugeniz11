import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-black bg-opacity-40 p-6 border border-gold border-opacity-20">
      <h4 className="text-lg text-gold mb-3">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;