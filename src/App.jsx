import SchoolCard from './components/card-type/SchoolCard'
import Footer from './components/footer/Footer'
import EBrochure from './components/forms-components/EBrochure'
import  HeroSection  from './components/HeroSection'
import FeatureSection from './components/main-sections/FeatureSection'
import GuideSection from './components/main-sections/GuideSection'
import InteractiveFeaturesShowcase from './components/main-sections/InteractiveFeaturesShowcase'
import MobileStorySection from './components/main-sections/MobileStorySection'
import RatingSection from './components/main-sections/RatingSection'
import ReviewCarousel from './components/main-sections/ReviewCarousel'
import StatisticsSection from './components/main-sections/StatisticsSection'
import StorySection from './components/main-sections/StorySection'
import WhatsappStorySection from './components/main-sections/WhatsappStorySection'
import Navbar from './components/navbar/Navbar'
import PopupModal from './components/main-sections/PopupModal';
import {Phone,MessageCircle} from 'lucide-react'
import React, { useState, useEffect } from 'react';

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener('copy', preventDefault);
    document.addEventListener('cut', preventDefault);
    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('dragstart', preventDefault);
    return () => {
      document.removeEventListener('copy', preventDefault);
      document.removeEventListener('cut', preventDefault);
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('dragstart', preventDefault);
    };
  }, []);
  return (
    <div className='font-bold text-5xl from-[#F5F5DC] to-[#00A8AA] rounded-3xl'>
      <PopupModal open={popupOpen} setOpen={setPopupOpen} />
       <a
              href="tel:+91 7742020402"
              aria-label="Call phone"
              className="z-100 fixed top-80 right-1 bg-[#00c851] w-12 h-12 rounded-md flex items-center justify-center shadow-lg hover:brightness-110 "
            >
              <Phone className="text-white text-xl transition z-50 animate-bounce delay-200" />
            </a>
      
            {/* Floating WhatsApp Icon */}
            <a
              href="https://wa.me/7742020402"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp chat"
              className="z-100 fixed top-100 right-1 bg-[#00c851] w-12 h-12 rounded-md flex items-center justify-center shadow-lg hover:brightness-110 "
            >
              <MessageCircle  className="text-white text-xl transition z-50 animate-bounce delay-100 " />
            </a>
      
      <Navbar/>
      <HeroSection openPopup={openPopup} />
      <SchoolCard/>
      {/* <StatisticsCard data="goivnda" description="hello"/> */}
      <StatisticsSection/>
      <StorySection openPopup={openPopup} />
      <FeatureSection/>
      <MobileStorySection/>
      <WhatsappStorySection/>
      <ReviewCarousel/>
      <GuideSection/>
      <RatingSection/>
      <EBrochure/>
      <InteractiveFeaturesShowcase/>
      <Footer/>
    </div>
  )
}

export default App