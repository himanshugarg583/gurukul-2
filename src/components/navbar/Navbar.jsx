import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../../assets/logos/schoolLogo.png'
import mobileLogo from '../../assets/logos/logos.png'
import { Link } from 'react-router-dom';
// Add imports for dropdown images
import barcodeImg from '../../assets/features-images/ic_barcode.svg';
import biometricImg from '../../assets/features-images/ic_biometric.svg';
import eExamImg from '../../assets/features-images/ic_e_exam.svg';
import paymentImg from '../../assets/features-images/ic_payment.svg';
import tallyImg from '../../assets/features-images/ic_tally_integration.svg';
import vehicleImg from '../../assets/features-images/ic_vehicle_tracking.svg';
import downloadImg from '../../assets/navbar/download.png';
import client1 from '../../assets/navbar/clients/client 1.png';
import client2 from '../../assets/navbar/clients/client 2.png';
import client3 from '../../assets/navbar/clients/client 3.png';
import clientLogo3 from '../../assets/navbar/clients/logo-3removebg-preview.png';

// import client1 from '../../assets/navbar/clients/client 1.png';
// import client2 from '../../assets/navbar/clients/client 2.png';
// import client3 from '../../assets/navbar/clients/client 3.png';
// import clientLogo3 from '../../assets/navbar/clients/logo-3removebg-preview.png';

const dropdownImages = [
  barcodeImg, // About
  biometricImg, // Product & Services
  eExamImg, // Features
  paymentImg, // Clients
  tallyImg, // Resources
  // vehicleImg, // Become A Partner (if needed)
];


const clientImages = [client1, client2, client3, clientLogo3];
// const clientImages = [client1, client2, client3, clientLogo3];

const menuItems = [
  {
    label: "About",
    dropdown: [
      "About GurukulSarthi",
      "Why GurukulSarthi ?",
      "About Company",
      "CEO Message",
      "Benefits to you",
      // "Awards and Recognition",
      // "Our Approach",
      // "History"
    ],
  },
  {
    label: "Product & Services",
    dropdown: [
      "School Software",
      "School ERP",
      "Campus ERP",
      "College Software",
      "University Software",
      "Modules",
      // "Integrations",
      // "Mobile App",
      // "Admission CRM",
      // "WhatsApp for Education",
      // "LMS",
      // "Service Support",
      // "Website Designing"
    ],
  },
  {
    label: "Features",
    dropdown: [
      "Core Modules",
      "Resource Management",
      "Integrations",
      "Mobile App",
      "Security Features",
      "Analytics Dashboard"
    ],
  },
  {
    label: "Clients",
    dropdown: [
      "Segment",
      "Our Customers",
      "Testimonial",
      "Case Studies",
      "Success Stories"

    ],
  },
  {
    label: "Resources",
    dropdown: [
      "Brochures",
      "Presentation",
      "Case Study",
      "Blog",
      "Podcasts",
      "Webinars",
      // "Documentation"
    ],
  },
  // {
  //   label: "Become A Partner",
  //   dropdown: [
  //     "Partnership Program",
  //     "Affiliate Program",
  //     "Reseller Program",
  //     "Benefits",
  //          "Reseller Program",
  //     "Benefits"
  //   ],
  // },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    function handleClickOutside(event) {
      // If any dropdown is open and click is outside all dropdowns, close it
      if (
        activeDropdown !== null &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown].contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // const handleDropdownClick = (idx) => {
  //   setActiveDropdown(activeDropdown === idx ? null : idx);
  // };

  return (
    <nav className="bg-gradient-to-r from-[#F5F5DC] via-[#7CD9A1] to-[#47C970] sticky top-0 z-50 shadow-sm border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          
          <Link to="/">
          <div className="flex items-center justify-start w-full">
            <div className="pl-0 lg:pl-0">
              {/* Mobile Logo */}
              <img src={mobileLogo} alt="logo" className="w-12 h-10 scale-150 block lg:hidden" />
              {/* Desktop Logo */}
              <img src={logo} alt="logo" className="w-22 h-12 scale-175 hidden lg:block" />
            </div>
          </div>
          </Link>


          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">
            {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className="group relative list-none"
                  ref={el => (dropdownRefs.current[idx] = el)}
                >
                  <div
                    className="flex items-center space-x-1 hover:text-orange-600 transition-colors duration-200 cursor-pointer py-2"
                    onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <ChevronDown size={16} className={`text-gray-400 group-hover:text-orange-600 transition-transform duration-200 ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                  </div>
                  {activeDropdown === idx && (
                    <div className="fixed top-[75px] left-1/2 transform -translate-x-1/2 w-[90vw] max-w-5xl bg-white rounded-2xl shadow-2xl border-2 border-orange-200 py-1 px-2 z-50 flex gap-8 pb-3">
                      {/* Left: Image */}
                      <div className="flex flex-col items-center w-1/4 min-w-[200px] justify-center">
                        <img
                          src={downloadImg}
                          alt="Dropdown Visual"
                          className="rounded-lg mb-4 w-full object-contain max-h-40"
                        />
                      </div>
                      {/* Middle: Links */}
                      <div className="flex-1 flex flex-col gap-2 border-r border-gray-200 pr-5 justify-center">
                        <h3 className="text-lg font-bold text-orange-600 mb-2">{item.label}</h3>
                        <div className="flex flex-col gap-1">
                          {item.label === "About" && (
                            <Link
                              to="/about"
                              className="block text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150 font-semibold"
                            >
                              About Us
                            </Link>
                          )}
                          {item.dropdown.map((subItem, i) => (
                            <a
                              key={i}
                              href="#"
                              className="block text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                      {/* Right: Client Logos */}
                      <div className="flex flex-col w-1/4 min-w-[200px] pl-1 ">
                        <h3 className="text-lg font-bold text-orange-600 mb-2">Our Clients</h3>
                        <div className="flex flex-wrap gap-2 justify-center items-center">
                          {clientImages.map((img, i) => (
                            <img key={i} src={img} alt={`client-logo-${i}`} className="w-20 h-18 object-contain rounded bg-gray-50 p-1" />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
            ))}
          </ul>

          {/* CTA Buttons */}


          <div className="hidden lg:flex items-center space-x-3">
             <a
                       href="https://wa.me/7073873731"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="WhatsApp chat"
                      // className="fixed top-100 right-1 bg-[#00c851] w-12 h-12 rounded-md flex items-center justify-center shadow-lg hover:brightness-110 "
                     >
            <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              <span>✨</span>
              
              <span>Lets Talk US</span>
              <ChevronDown size={14} />
            </button>
                    
                    </a>
            
            



            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              <Link to="/contact" className="block w-full h-full">Contact Us</Link>

            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-orange-100 py-4">
            <ul className="space-y-2">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-2 px-3 hover:bg-orange-50 rounded-lg text-sm font-medium text-gray-700 hover:text-orange-600">
                      <span>{item.label}</span>
                      <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="flex">
                      {/* Left: Image */}
                      <div className="w-1/3 flex items-center justify-center p-2 border-r border-gray-100">
                        <img src={dropdownImages[idx]} alt="dropdown visual" className="w-16 h-16 object-contain" />
                      </div>
                      {/* Right: Content */}
                      <ul className="w-2/3 ml-2 mt-2 space-y-1">
                        {item.label === "About" && (
                          <li>
                            <Link 
                              to="/about" 
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                            >
                              About Us
                            </Link>
                          </li>
                        )}
                        {item.dropdown.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <a 
                              href="#" 
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-4 space-y-2 px-3">
              <a
                href="https://wa.me/7073873731"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp chat"
                className="w-full flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full text-sm font-medium"
              >
                <span>✨</span>
                <span>Lets Talk US</span>
              </a>
              <a
                href="/contact"
                className="w-full block bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-full text-sm font-medium text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;