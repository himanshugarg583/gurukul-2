import React from 'react';
import teamImage from '../../assets/othres/teamImage.png'; // Replace with your image path

const StorySection = ({ openPopup }) => {
  return (
    <div className="bg-gradient-to-r from-[#5066a4] to-[#3AB7BF]
 text-white px-6 md:px-20 py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#FFA690]">
          Why Choose GurukulSarthi for School Management?
        </h1>
        <p className="text-xl mt-2 font-medium">Why is it the top choice in India?</p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text & Button */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold">Our Achievements</h3>
          <h2 className="text-3xl font-bold text-[#FFA690]">Many Success Stories</h2>
          <p className="text-sm leading-6 text-gray-200">
            GurukulSarthi school management software makes running a school easier by using the latest technology. It has many helpful features and is simple to use and affordable. With over 22 years of experience, our team has built a product that covers everything a school needs. More than 1600 clients around the world trust us. We believe in making school management simple and effective.
          </p>
          <button onClick={openPopup} className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold py-2 px-6 rounded-full shadow-md hover:scale-105 transition text-sm">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex gap-4 justify-center mb-6 md:mb-0">
            <img src={teamImage} alt="" className="w-full max-w-md md:max-w-lg lg:max-w-xl" />
        </div>
      </div>
    </div>
  );
};

export default StorySection;
