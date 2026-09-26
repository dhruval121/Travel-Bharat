import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      {centered && (
        <div className="flex justify-center mt-4">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
