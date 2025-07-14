import React from 'react';
// import playstore from '../../assets/othres/playstore.png'; // Update with actual path
// import appstore from '../../assets/othres/appstore.png'; // Update with actual path
import phoneImage from '../../assets/othres/phoneImage.png'; // First phone image

const MobileStorySection = () => {
  return (
    <div className="bg-gradient-to-r from-[#5066a4] to-[#3AB7BF] text-white py-16 px-6 md:px-20">
      {/* Product Tag Line */}
      <div className="text-center mb-8">
        <p className="text-lg font-semibold">Our Product</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFA690]">
          Apps for School, Parents, and Management
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-3xl font-bold text-[#FFA690]">
            The Best School ERP and Mobile App for Today’s Schools
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Our easy-to-use online school ERP helps you work faster, save money, and connect your data from anywhere. Try our school app to make school management simple and modern. With our Management App, you can run your whole school from your phone, making everything easier for everyone.
          </p>
          {/* Store Buttons */}
          <div className="flex gap-4">
            {/* <img src={playstore} alt="Google Play" className="h-12 cursor-pointer" />
            <img src={appstore} alt="App Store" className="h-12 cursor-pointer" /> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center gap-4">
          <img src={phoneImage} alt="App Preview 1" className="h-[320px] md:h-[360px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default MobileStorySection;
