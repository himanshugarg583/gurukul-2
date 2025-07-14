import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSectionUIL from "./hero-sections/HeroSectionUIL";


import Banner1 from "../assets/banner-images/260893-P54ET5-195.png";
import Banner2 from "../assets/banner-images/29988.png";
import Banner3 from "../assets/banner-images/3936.png";
import Banner4 from "../assets/banner-images/Scool-ERP-Banner.webp";
import Banner5 from "../assets/banner-images/singal student.png";
import Banner6 from "../assets/banner-images/C4.png";

const carouselData = [
  {
    slogan: "Learning Comes First",
    title: "Easy and Safe School Management",
    description: "From admissions to accounts, we help you finish your work faster.",
    image: Banner1,
  },
  {
    slogan: "All-in-One School App",
    title: "Make Your School Simple",
    description: "Let our ERP handle daily tasks and help you get more done.",
    image: Banner2,
  },
  {
    slogan: "School Made Simple",
    title: "Manage Everything in One Place",
    description: "Take care of your whole school from a single dashboard.",
    image: Banner3,
  },
  {
    slogan: "Award-Winning Technology",
    title: "Trusted by Many Schools",
    description: "Known for new ideas and great results in education tech.",
    image: Banner4,
  },
  {
    slogan: "Student Success",
    title: "Helping Every Student Grow",
    description: "See how our platform helps students and teachers do better.",
    image: Banner5,
  },
  {
    slogan: "Smart Learning with AI",
    title: "Education for Tomorrow",
    description: "Try the next level of smart school management with us.",
    image: Banner6,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselData.length);
    }, 4000); // Change slide every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full min-h-[90vh] bg-gradient-to-r from-[#F5F5DC] to-[#00A8AA] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <HeroSectionUIL {...carouselData[current]} />
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
     {/* Left Vertical Indicators */}
<div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-2 z-10">
  {carouselData.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`w-2 h-2 rounded-full transition-all duration-300 ${
        index === current
          ? "bg-orange-500 h-4 w-2 rounded-md"
          : "bg-orange-200"
      }`}
    />
  ))}
</div>

    </div>
  );
};

export default HeroSection;

