import React, { useState } from 'react';
import { Users, Database, Headphones, Globe } from 'lucide-react';
import compatibleForAll from '../../assets/interactive-images/compatible_for_all.svg'
import dataStorage from '../../assets/interactive-images/data_storage.svg'
import corporativeService from '../../assets/interactive-images/corporative_service.svg'
import moreAccessible from '../../assets/interactive-images/more_accessible.svg'

const InteractiveFeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Works for Every School",
      description:
        "GurukulSarthi gives you all the tools you need, no matter what kind of school you have.",
      icon: <Users className="w-8 h-8 text-blue-600" />, // You can style these icons
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Illustration */}
         <div className=""><img src={compatibleForAll} alt="" /></div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Store Your Data Safely",
      description:
        "Choose how you want to keep your data: on your own server or in the cloud.",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className=""><img src={dataStorage} alt="" /></div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Helpful Support",
      description:
        "Our team is here to help you anytime you need it.",
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className=""><img src={corporativeService} alt="" /></div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Access from Anywhere",
      description:
        "Use GurukulSarthi online anytime, anywhere you need it.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className=""><img src={moreAccessible} alt="" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F5F5DC] to-[#00A8AA] min-h-screen">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left - Features */}
        <div className="space-y-5">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`p-5 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.03] border ${
                activeFeature === index
                  ? 'bg-[#8eb2e5] border-[#4570ac] shadow-md'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    activeFeature === index ? 'bg-orange-200' : 'bg-blue-100'
                  }`}
                >
                  {React.cloneElement(feature.icon, {
                    className: `w-8 h-8 ${
                      activeFeature === index ? 'text-orange-600' : 'text-blue-600'
                    }`,
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div className="relative w-full h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem]  rounded-2xl overflow-hidden">
          <div className="w-full h-full transition duration-500 ease-in-out p-4">
            {features[activeFeature].image}
          </div>
          {/* Decorative Circles */}
          
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeaturesShowcase;
