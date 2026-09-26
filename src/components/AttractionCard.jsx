import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AttractionCard = ({ attraction }) => {
  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
      {/* Image container */}
      <div className="relative overflow-hidden h-64 bg-gray-200">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
            {attraction.name}
          </h3>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
            {attraction.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {attraction.description}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Learn More <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default AttractionCard;
