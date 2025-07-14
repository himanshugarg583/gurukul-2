import React from "react";

const ReviewCard = ({ logo, name, location, description }) => {
  return (
    <div className="relative bg-white/60 backdrop-blur-md border border-orange-200 rounded-2xl shadow-xl p-7 w-[300px] sm:w-[300px] flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 group overflow-hidden">
      {/* Decorative Quote Icon */}
      <div className="absolute -top-6 -left-6 text-[90px] text-orange-200 opacity-30 pointer-events-none select-none">
        &#10077;
      </div>
      {/* School Logo */}
      <div className="bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center mb-4 border-4 border-orange-100 group-hover:border-orange-400 transition-all duration-300">
        <img
          src={logo}
          alt="school logo"
          className="w-16 h-16 object-contain rounded-full"
        />
      </div>
      {/* Name & Location */}
      <h3 className="text-lg font-bold text-[#1B1B1F] text-center">{name}</h3>
      <h4 className="text-sm font-semibold text-orange-600 mb-2 text-center">{location}</h4>
      {/* Star Rating */}
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        ))}
      </div>
      {/* Description */}
      <p className="text-sm text-gray-700 mb-5 text-center leading-relaxed max-h-24 overflow-y-auto">
        {description}
      </p>
      {/* CTA Button */}
      <a
        href="#"
        className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md transition-all duration-200 flex items-center gap-2 group-hover:scale-105"
      >
        Read Case Studies
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10 bg-[radial-gradient(circle_at_20%_20%,#00A8AA_0%,transparent_60%)]"></div>
    </div>
  );
};

export default ReviewCard;
