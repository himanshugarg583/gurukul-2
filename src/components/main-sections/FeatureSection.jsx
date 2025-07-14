import React from "react";
import { featuresImages } from "../../assets/featuresImages.js"; // adjust path as needed
import FeatureCard from "../card-type/FeatureCard.jsx";

const featureTitles = [
  "Barcode",
  "Biometric",
  "E-Exam",
  "Online Payment",
  "Tally Integration",
  "Vehicle Tracking",
  "Virtual Class",
  "Whatsapp",
];

const FeatureSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#F5F5DC] to-[#00A8AA]">
      <div className="">
        <div className="max-w-4xl mx-auto text-center px-4 py-12">
          {/* Subtitle */}
          <p className=" font-medium text-lg md:text-xl mb-2">What We Offer</p>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 mb-6">
            All-in-One School Management Software
          </h2>

          {/* Paragraph */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            GurukulSarthi is a school management software made just for you. It helps with everything from admissions to attendance and staff management. You get all the features you need, like biometrics, SMS, online portals, e-exams, and a mobile app. Let us help your school run smoothly and focus more on teaching.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center px-4 py-10">
        {featureTitles.map((title, index) => (
          <FeatureCard
            key={index}
            image={featuresImages[index]}
            title={title}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
