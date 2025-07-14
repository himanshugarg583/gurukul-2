import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolImages } from "../../assets/schoolimg.js";
import ReviewCard from "../card-type/ReviewCard";

const reviews = [
  {
    logo: schoolImages[0],
    name: "Nirma Vidyavihar",
    location: "Ahmedabad",
    description:
      "Nirma Vidyavihar, one of the prestigious schools of Ahmedabad, was using offline software to manage activities, but...",
  },
  {
    logo: schoolImages[1],
    name: "L.P Savani Group Of Schools",
    location: "Surat",
    description:
      "L.P. Savani Group has a proud tradition of being a supportive and caring community delivering outstanding education...",
  },
  {
    logo: schoolImages[2],
    name: "Bright International School",
    location: "Gandhinagar",
    description:
      "Founded by the visionary Shri D.D. Trivedi in 1971, the school offers futuristic and superior education...",
  },
  {
    logo: schoolImages[5],
    name: "Sky International School",
    location: "Mumbai",
    description:
      "Sky International is committed to creating future leaders with strong academic and ethical foundations...",
  },
  {
    logo: schoolImages[4],
    name: "Gyanen Higher School",
    location: "Pune",
    description:
      "Gyanen Higher School brings cutting-edge educational tools to empower teachers and students...",
  },
  {
    logo: schoolImages[3],
    name: "Gyanen Higher School",
    location: "Pune",
    description:
      "Gyanen Higher School brings cutting-edge educational tools to empower teachers and students...",
  },
];

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const totalSlides = Math.ceil(reviews.length / cardsPerView);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 768 ? 3 : 1); // Responsive check
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [paused, totalSlides]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleCards = () => {
    const start = current * cardsPerView;
    return reviews.slice(start, start + cardsPerView);
  };

  return (
    <div className="bg-gradient-to-r from-[#F5F5DC] to-[#00A8AA]">
      <div class="text-center px-4 py-10">
        {/* Top Subheading */}
        <p className="text-lg font-medium text-gray-800">Read What Makes Us Special</p>

        {/* Main Heading */}
        <h2 class="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
          Why Pick <span className="text-orange-600">GurukulSarthi</span> School ERP?
        </h2>

        {/* Description Paragraph */}
        <p className="mt-4 max-w-4xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
          GurukulSarthi brings all the tools you need to run a school or college in one place. It helps you manage daily tasks and makes it easy for everyone to stay connected and work together. Our platform is simple to use and helps schools work better every day.
        </p>
      </div>

      <div
        className="flex flex-col items-center py-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="w-full max-w-6xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center gap-6 flex-wrap px-10"
            >
              {getVisibleCards().map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={prev}
            className="px-2 pb-2 text-orange-500 hover:text-orange-600 cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={next}
            className="px-2 pb-2 text-orange-500 hover:text-orange-600 cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
