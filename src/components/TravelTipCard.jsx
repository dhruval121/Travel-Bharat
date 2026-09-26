import React from 'react';

const TravelTipCard = ({ tip }) => {
  return (
    <div className="group flex items-center gap-4 p-5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg hover:shadow-lg hover:from-primary/20 hover:to-accent/20 transition-all duration-300 border border-primary/20 hover:border-primary/50">
      <div className="text-3xl flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300">
        {tip.icon}
      </div>
      <span className="text-secondary font-semibold group-hover:text-primary transition-colors">
        {tip.name}
      </span>
    </div>
  );
};

export default TravelTipCard;
