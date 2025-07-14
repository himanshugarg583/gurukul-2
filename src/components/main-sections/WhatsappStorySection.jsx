import React from 'react';
import whatsappAnimation from '../../assets/othres/whatsappAnim.svg';

const WhatsappStorySection = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-gradient-to-r from-[#F5F5DC] to-[#00A8AA]">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-blue-900">Integration</h2>
        <p className="text-3xl md:text-4xl font-bold text-orange-600 mt-2 leading-snug">
          Have Seamless Communication Through All New Age <br className="hidden md:block" />
          WhatsApp Messenger
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-sm">
        {/* Animation Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={whatsappAnimation} alt="whatsapp-animation" className="w-4/5 max-w-xs md:max-w-md" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-justify flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">WhatsApp For Education</h2>
          <p className="text-gray-700 mb-4">
            Are you looking out to bring the benefits of the latest technology for your school's growth and want to leverage its benefit to student's Education? Let the power of social media applications contribute to your success journey. We, the GurukulSarthi, the leading school management system provider, introducing the new venture of WhatsApp for Education.
          </p>
          <p className="text-gray-700 mb-6">
            The intervention of technology in the education industry is a must-to-have thing. Accomplish a 360 degrees makeover for your educational institute by joining hands with Apps of the new generation. Let the digitalization make you fit for a digital era by transforming your existing chalk and talk school management system. Establish the new round of communication with the parents by integrating the social media Apps like WhatsApp messenger for school!
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition-all">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsappStorySection;
