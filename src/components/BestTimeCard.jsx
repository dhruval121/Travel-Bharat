import React from 'react';

const BestTimeCard = ({ season }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 overflow-hidden relative">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>

      {/* Icon */}
      <div className="text-5xl mb-4 transform group-hover:scale-120 transition-transform duration-300">
        {season.icon}
      </div>

      {/* Season name */}
      <h3 className="text-2xl font-bold text-secondary mb-2">{season.season}</h3>

      {/* Months */}
      <p className="text-primary font-semibold mb-3">{season.months}</p>

      {/* Temperature */}
      <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-accent rounded-full"></span>
        Temperature: {season.temperature}
      </p>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
        {season.description}
      </p>
    </div>
  );
};

export default BestTimeCard;
