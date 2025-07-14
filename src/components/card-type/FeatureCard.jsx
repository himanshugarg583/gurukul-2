import React from "react";

const FeatureCard = ({ image, title }) => {
  return (
    <div className="w-[220px] h-[150px] bg-gradient-to-r from-[#FFE5DC] to-[#FFF7E6] rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-sm">
      <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center mb-3">
        <img src={image} alt={title} className="w-18 h-18 object-contain" />
      </div>
      <p className="text-sm font-medium text-[#1B1B1F]">{title}</p>
    </div>
  );
};

export default FeatureCard;
