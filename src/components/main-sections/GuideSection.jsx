import React from 'react';
import guideAnimation from '../../assets/othres/whatsappAnim.svg';

const GuideSection = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#F5F5DC] to-[#00A8AA]">
      {/* Subtitle */}
      <div className="text-center mb-2 text-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Get Free Guide</h2>
      </div>
      {/* Main Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-2xl font-extrabold text-orange-600 leading-tight">
          Want the Best School Management Software?
        </h1>
      </div>
      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-base md:text-lg">
        {/* Animation Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={guideAnimation} alt="guide-animation" className="w-4/5 max-w-xs md:max-w-md" />
        </div>
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left text-sm flex flex-col items-center md:items-start">
          <p className="text-gray-800 mb-4">
            Want to use the latest technology to help your school grow? Let WhatsApp and other apps make learning and communication easier. GurukulSarthi brings WhatsApp for Education to your school.
          </p>
          <p className="text-gray-800 mb-4">
            There are many school management software options out there. It’s important to know what makes each one special and what features your school really needs.
          </p>
          <p className="text-gray-800 mb-8">
            Here’s a quick guide to the must-have features in school management software and why it’s worth it.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-all text-lg">
            Download eBook
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;
