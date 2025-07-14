import React from 'react';
import {
  Star,
  StarHalf,
} from 'lucide-react';

const RatingCard = ({ name, reviews, rating, logo, logoLetter }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 w-full">
      {/* Logo Circle or Image */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100">
        {logo ? (
          <img src={logo} alt={name} className="w-8 h-8 object-contain" />
        ) : (
          <span className="text-xl font-semibold text-blue-900">{logoLetter}</span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <p className="font-semibold text-gray-800 text-xl">{name}</p>
        <p className="text-sm text-gray-600">{reviews} Reviews</p>
        <div className="flex items-center space-x-1 mt-1">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} size={16} className="text-orange-500 fill-orange-500" />
          ))}
          {hasHalfStar && (
            <StarHalf size={16} className="text-orange-500 fill-orange-500" />
          )}
          {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <Star key={i} size={16} className="text-orange-500" />
          ))}
          <span className="text-sm text-gray-600 ml-1">/{rating.toFixed(1)} Rating</span>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
