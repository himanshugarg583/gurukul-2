import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Star, User, ChevronLeft, ChevronRight, Phone, MessageCircle, ArrowUp,  BookOpen,
  Users,
  GraduationCap,
  Calendar,
  Award,
  Globe,
  } from 'lucide-react';
  import images from '../../assets/banner-images/aboutus.png';
  import images2 from '../../assets/interactive-images/compatible_for_all.svg';
  import images3 from '../../assets/interactive-images/more_accessible.svg';
// import {

// } from 'lucide-react';

const WhyUsSection = () => {
  return (
    <div className="relative bg-[#fff5f1] font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* Left Image */}
        <div className="flex-shrink-0 max-w-[480px] w-full">
          <img
            // src="https://storage.googleapis.com/a1aa/image/b5e7bf7f-1ec7-49c8-4d86-1e22856c8221.jpg"
            src={images}
            alt="Illustration of people with laptop and gears and magnifying glass on abstract background in soft peach color"
            className="w-full h-auto"
            width="480"
            height="360"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-xl text-[#1a2e4b]">
          <h2 className="text-2xl font-extrabold mb-4">Why Us?</h2>
          <p className="mb-6 text-lg leading-relaxed font-normal">
            A perfect school management software has speed, security, accuracy, and a wide range of functions and modules.
            More than 1300+ schools around the country rely on our comprehensive product and exceptional service. We have
            a global client base of happy customers.
          </p>
          <p className="mb-6 text-lg leading-relaxed font-normal">
            Our school management software uses cloud computing to store data that can be accessed at any time. Also,
            data backup is automated, so data recovery is not an issue.
          </p>
          <p className="text-lg leading-relaxed font-normal">
            Save and keep data on decentralized databases does not guarantee data security or recovery. Our school ERP
            system uses the cloud to store data, saving time and providing advantages like dependability, portability,
            backup, and high speed.
          </p>
        </div>
      </div>

      {/* Floating Phone Icon */}
      <a
        href="tel:+91 7073873731"
        aria-label="Call phone"
        className="fixed top-80 right-1 bg-[#00c851] w-12 h-12 rounded-md flex items-center justify-center shadow-lg hover:brightness-110 "
      >
        <Phone className="text-white text-xl transition z-50 animate-bounce delay-200" />
      </a>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/7073873731"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp chat"
        className="fixed top-100 right-1 bg-[#00c851] w-12 h-12 rounded-md flex items-center justify-center shadow-lg hover:brightness-110 "
      >
        <MessageCircle className="text-white text-xl transition z-50 animate-bounce delay-100 " />
      </a>

      {/* Scroll to Top Button */}
      <button
        aria-label="Scroll to top"
        className="fixed bottom-6 right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-[#ff6a00] to-[#ee0979] flex items-center justify-center shadow-lg hover:brightness-110 transition z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="text-white text-lg" />
      </button>
    </div>
  );
};



const OurJourneySection = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-20 font-['Inter']">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="max-w-2xl text-[#1a2e4b]">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">About GurukulSarthi</h3>
          <h2 className="text-3xl font-extrabold mb-4 text-[#1a2e4b]">Our Journey</h2>
          <p className="text-lg leading-relaxed font-normal text-[#1a2e4b]">
            GurukulSarthi started in 2020 to help schools and colleges manage everything easily in one place. Our software is cloud-based, so you can use it anytime and anywhere. GurukulSarthi connects with tools like Office 365 and Google G-Suite, making your work even easier. We help schools, teachers, students, and parents stay connected and work together smoothly.
            <br /><br />
            Today, more than 1800 schools and colleges trust GurukulSarthi to handle admissions, classes, fees, exams, transport, and more. Our software is used in 23+ states and 8+ countries. We make school management simple, fast, and secure for everyone.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 max-w-md w-full">
          <img
            src={images2}
            alt="Timeline illustration with people, laptop, icons"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  return (
    <section className="bg-[#fceee7] py-12 px-6 lg:px-20 font-['Inter']">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex-shrink-0 max-w-md w-full">
          <img
            src={images3}
            alt="People with laptop and telescope, mission illustration"
            className="w-full h-auto"
          />
        </div>
        {/* Right Content */}
        <div className="max-w-xl text-[#1a2e4b]">
          <h2 className="text-3xl font-extrabold mb-2 text-[#1a2e4b]">Mission</h2>
          <p className="text-lg leading-relaxed font-normal">
            Our Mission is to deliver cost-effective and reasonable ERP solutions for educational institutions worldwide. With maximum attention, we aim to provide an outstanding ERP system to educational institutions for enhancing and streamlining their day-to-day tasks.
          </p>
        </div>
      </div>
    </section>
  );
};

// export default OurJourneySection;

const SubscribeSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError('Name is required');
      return;
    }
    setError('');
    // Handle subscribe logic here
    alert('Subscribed!');
  };

  return (
    <section className="bg-gradient-to-r from-[#ffe5d0] to-[#ffe9c7] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-black">
          Subscribe Us And Get The Latest Updates And News
        </h2>
        <form
          className="flex flex-col md:flex-row items-center gap-4 justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full md:w-1/4">
            <input
              type="text"
              placeholder="Your name *"
              className="rounded-full px-6 py-3 text-lg border-none focus:ring-2 bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && (
              <span className="text-red-500 text-sm mt-1 ml-2">{error}</span>
            )}
          </div>
          <input
            type="email"
            placeholder="Your Email ID *"
            className="rounded-full px-6 py-3 text-lg border-none focus:ring-2  w-full bg-white md:w-1/4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center w-full md:w-1/4 bg-white rounded-full px-2 py-1 focus:ring-2 focus:ring-orange-300">
                        <span className="mr-1 pb-2 pl-2 text-xl">🇮🇳</span>
            <input
              type="tel"
              placeholder="Mobile Number *"
              className="flex-1 rounded-full px-4 py-3 text-lg border-none  outline-none"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold px-10 py-3 rounded-full shadow-lg text-lg transition pointer-curser "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  const testimonials = [
    {
      name: "manoj kumar",
      position: "Principal",
      school: "Blue Havens School",
      quote: "GurukulSarthi has transformed our school management completely. The software is intuitive and has streamlined all our administrative.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg" // Indian male
    },
    {
      name: "girraj sharma",
      position: "Director",
      school: "Sky International Academy",
      quote: "The comprehensive features and excellent support team make GurukulSarthi the perfect choice for modern educational institutions.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/76.jpg" // Indian male
    },
    {
      name: "Priya Sharma",
      position: "Administrator",
      school: "Gyanen Higher School",
      quote: "We've seen a 40% improvement in our operational efficiency since implementing GurukulSarthi. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg" // Indian female
    },
    {
      name: "Rahul singhi",
      position: "CEO",
      school: "Bories International",
      quote: "The mobile app integration and real-time updates have revolutionized how we communicate with parents and students.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/77.jpg" // Indian male
    },
    {
      name: "Nitesh kumar",
      position: "Vice Principal",
      school: "Thries Indiana",
      quote: "The user-friendly interface and comprehensive reporting features have made our daily operations much more efficient.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/78.jpg" // Indian male
    },
    {
      name: "Davesh Kumar",
      position: "Head of IT",
      school: "GND International",
      quote: "Excellent technical support and regular updates keep our school management system running smoothly.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/79.jpg" // Indian male
    }
  ];

  useEffect(() => {
    // Responsive cards per view
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else {
        setCardsPerView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * cardsPerView;
    return testimonials.slice(startIndex, startIndex + cardsPerView);
  };

  return (

    // <div className="font-bold text-5xl from-[#F5F5DC] to-[#00A8AA] rounded-3xl">
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <Navbar />  
       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">About GurukulSarthi</h2>
              <h3 className="text-3xl font-bold text-blue-800 mb-6">Our Journey</h3>
            </div>

            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p>
                GurukulSarthi started in 2002 to help schools and colleges manage everything easily in one place. Our software is cloud-based, so you can use it anytime and anywhere. GurukulSarthi connects with tools like Office 365 and Google G-Suite, making your work even easier. We help schools, teachers, students, and parents stay connected and work together smoothly.
                <br /><br />
                Today, more than 1800 schools and colleges trust GurukulSarthi to handle admissions, classes, fees, exams, transport, and more. Our software is used in 23+ states and 8+ countries. We make school management simple, fast, and secure for everyone.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1800+</div>
                <div className="text-sm text-gray-600">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">23+</div>
                <div className="text-sm text-gray-600">States</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-orange-200 rounded-full opacity-60"></div>
              <div className="absolute top-12 right-8 w-12 h-12 bg-pink-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-yellow-200 rounded-full opacity-60"></div>

              {/* Main Illustration Elements */}
              <div className="relative z-10 space-y-6">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-16 w-16 text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col items-center">
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-xs text-gray-600">Students</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col items-center">
                    <Calendar className="h-8 w-8 text-green-600 mb-2" />
                    <span className="text-xs text-gray-600">Schedule</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col items-center">
                    <Award className="h-8 w-8 text-purple-600 mb-2" />
                    <span className="text-xs text-gray-600">Grades</span>
                  </div>
                </div>

                <div className="flex justify-around items-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-orange-300 rounded-full opacity-30"></div>
              <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-pink-400 rounded-full opacity-70"></div>
              <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-blue-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-20">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Student Management',
                desc: 'Comprehensive student information system with attendance tracking',
                bg: 'bg-blue-100',
              },
              {
                icon: <Calendar className="h-8 w-8 text-green-600" />,
                title: 'Timetable Management',
                desc: 'Automated scheduling and timetable generation for all classes',
                bg: 'bg-green-100',
              },
              {
                icon: <Award className="h-8 w-8 text-purple-600" />,
                title: 'Academic Management',
                desc: 'Grade management, assessments, and academic reporting',
                bg: 'bg-purple-100',
              },
              {
                icon: <Globe className="h-8 w-8 text-orange-600" />,
                title: 'Global Access',
                desc: 'Cloud-based platform accessible from anywhere, anytime',
                bg: 'bg-orange-100',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    

      {/* Why Us Section */}
      <WhyUsSection />
      <OurJourneySection/>
      <MissionSection/>
      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-600">What Our Clients Say</h2>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-orange-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-orange-600" />
            </button>

            {/* Cards Container */}
            <div className={`grid gap-6 mx-0 md:mx-12 ${cardsPerView === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {getCurrentTestimonials().map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                  {/* Rating */}
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 italic text-center text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Client Info with Image */}
                  <div className="text-center border-t pt-4">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-200 shadow-md">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-orange-100 flex items-center justify-center" style={{display: 'none'}}>
                          <User className="w-8 h-8 text-orange-400" />
                        </div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-orange-600 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-medium mb-1">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-orange-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
<SubscribeSection />
      <Footer />
      
    </div>
  );
};

export default AboutUs; 