import React, { useEffect, useState } from 'react';
// import schoolImg from '../../assets/schools-images/anen_higher_school.svg';
import schoolImg from '../../assets/cert-images/C8.png';
import { Mail, User, School } from 'lucide-react';
import { Phone } from 'lucide-react';

const PopupModal = ({ open, setOpen }) => {
  // Handler for WhatsApp submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const school = e.target[3].value;
    const message = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASchool: ${school}`;
    window.open(`https://wa.me/917742020402?text=${message}`, '_blank');
  };
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 top-[75px] flex items-center justify-center pointer-events-none">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-[95vw] max-w-4xl min-h-[400px] max-h-[820px] relative animate-fadeIn pointer-events-auto">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-orange-500 text-2xl font-bold focus:outline-none cursor-pointer"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 bg-orange-50 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
          <img src={schoolImg} alt="School" className="w-4/5 max-w-xs md:max-w-md" />
        </div>
        {/* Right: Content + Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-3 text-orange-600">Contact Us</h2>
          <p className="mb-5 text-gray-700 text-base">Want to know more about our school management solutions? Fill out the form and our team will contact you soon.</p>
          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <div className="relative ">
              <User className="absolute left-3 top-7 text-orange-400 " size={20} />
              <input type="text" placeholder="Your Name" className="pl-9 pr-2 py-1 w-full border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition text-sm h-8" />
            </div>
            <div className="relative ">
              <Mail className="absolute left-3 top-7 text-orange-400" size={18} />
              <input type="email" placeholder="Your Email" className="pl-9 pr-2 py-1 w-full border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition text-sm h-8" />
            </div>
            <div className="relative ">
              <Phone className="absolute left-3 top-7 text-orange-400" size={18} />
              <input type="tel" placeholder="Your Phone" className="pl-9 pr-2 py-1 w-full border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition text-sm h-8" />
            </div>
            {/* <div className="">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" size={20} />
              <input type="email" placeholder="Your Email" className="pl-10 pr-3 py-2 w-full border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition" />
            </div> */}
            <div className="relative">
              <School className="absolute left-3 top-7  text-orange-400" size={18} />
              <input type="text" placeholder="School Name" className="pl-9 pr-2 py-1 w-full border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition text-sm h-8" />
            </div>
            <button type="submit" className="mt-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg px-6 py-2 font-bold text-base shadow hover:scale-105 hover:from-orange-500 hover:to-orange-700 transition-all cursor-pointer">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupModal; 