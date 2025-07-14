import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "../../assets/logos/schoolLogo.png";

const socialIcons = [
  { Icon: Facebook, label: "Facebook", url: "#" },
  { Icon: Instagram, label: "Instagram", url: "https://www.instagram.com/gurukul_sarthi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { Icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/reconcile-technology/posts/?feedView=all" },
  { Icon: Youtube, label: "YouTube", url: "#" },
];

const footerLinks = [
  {
    title: "About",
    links: [
      "About GurukulSarthi",
      "Why GurukulSarthi?",
      "Benefits",
      "Our Approach",
      "History",
    ],
  },
  {
    title: "Product & Services",
    links: [
      "Features",
      "School Software",
      "College Software",
      "Integration",
      "Services",
      "Mobile App",
    ],
  },
  {
    title: "Resources",
    links: ["Brochures", "Presentation", "Case Study", "Refund Policy", "Blog"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5066a4] to-[#3AB7BF] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-8 px-4">
        {/* About Section */}
        <div className="flex-1 text-sm">
          <div className="flex justify-start md:justify-center pl-6">
            <img src={logo} alt="logo" className="w-20 h-20 object-contain scale-200" />
          </div>
          <p className="font-normal">
            GurukulSarthi is a leading ERP solution for educational institutions
            worldwide, offering SMS, online payment, vehicle tracking, online
            exams, mobile apps, biometric integration, and more.
          </p>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            {socialIcons.map(({ Icon, label, url }, idx) => (
              <a
                key={idx}
                href={url}
                target={url !== '#' ? "_blank" : undefined}
                rel={url !== '#' ? "noopener noreferrer" : undefined}
                aria-label={label}
              >
                <Icon className="text-white hover:text-gray-200 cursor-pointer" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex flex-1 flex-col md:flex-row md:justify-between gap-8 text-sm">
          {footerLinks.map((section, index) => (
            <div key={index} className="flex-1">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2 font-normal">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="flex-1 text-sm">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="font-normal">
            <p>
              C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, jaipur,
              Rajsthan, INDIA
            </p>
            <p className="mt-2">+91-7742020402</p>
            <p className="mt-2">info@gurukulsarthi.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div>
        <div className="border-1 m-2"></div>
        {/* Copyright */}
        <div className="text-center font-normal text-sm">
          <p>© GurukulSarthi 2025. All rights reserved.</p>
          <p className="mt-1 hover:underline cursor-pointer">
            Terms Of Use | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
