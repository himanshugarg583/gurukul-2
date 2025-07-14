import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Building2,
  Users,
  BookOpen,
  Calendar,
  ChevronRight
} from 'lucide-react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: ''
  });

  const handleInputChange = () => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      department: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 123-4568"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      primary: "info@gurukulsarthi.com",
      secondary: "support@gurukulsarthi.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      primary: "1234 Education Lane",
      secondary: "jaipur City, Rj 302033"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      primary: "Mon - Fri: 10:00 AM - 6:00 PM",
      secondary: "Sat: 9:00 AM - 2:00 PM"
    }
  ];

  const departments = [
    { icon: <Users className="w-5 h-5" />, name: "Administration", email: "admin@gurukulsarthi.com" },
    { icon: <BookOpen className="w-5 h-5" />, name: "Academics", email: "academics@gurukulsarthi.com" },
    { icon: <Calendar className="w-5 h-5" />, name: "Admissions", email: "admissions@gurukulsarthi.com" },
    { icon: <Building2 className="w-5 h-5" />, name: "IT Support", email: "support@gurukulsarthi.com" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar/>
      {/* Hero Section */}
       {/* <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> */}
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">EduManage</h1>
                <p className="text-sm text-slate-600">School Management System</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#" className="text-blue-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're here to help you with all your educational management needs. 
            Reach out to us for support, inquiries, or to schedule a demo.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{info.title}</h3>
              </div>
              <p className="text-slate-700 font-medium">{info.primary}</p>
              <p className="text-slate-600 text-sm mt-1">{info.secondary}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Send us a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-slate-700 mb-2">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a department</option>
                      <option value="administration">Administration</option>
                      <option value="academics">Academics</option>
                      <option value="admissions">Admissions</option>
                      <option value="support">IT Support</option>
                      <option value="billing">Billing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter the subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors group">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Schedule a Demo</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors group">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Support Center</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors group">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Documentation</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors group">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Training Resources</span>
                </a>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Department Contacts</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      {dept.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900">{dept.name}</p>
                      <p className="text-sm text-slate-600 truncate">{dept.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Contact</h3>
              <p className="text-sm text-red-700 mb-3">
                For urgent technical issues or emergencies outside business hours.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-red-800">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+1 (555) 911-HELP</span>
                </div>
                <div className="flex items-center space-x-2 text-red-800">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">emergency@gurukulsarthi.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    {/* </div> */}

    </div>
  );
};

export default ContactUs;