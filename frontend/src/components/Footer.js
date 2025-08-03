import React from 'react';
import { Phone, Mail, MapPin, Heart, Facebook, Instagram, Youtube } from 'lucide-react';
import { priestData, contactData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Media Gallery', id: 'media' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  const popularServices = [
    'Griha Pravesh',
    'Wedding Ceremony',
    'Satyanarayan Katha',
    'Havan/Yagya',
    'Navgraha Shanti',
    'Mundan Ceremony'
  ];

  return (
    <footer className="bg-gradient-to-b from-orange-900 to-amber-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ॐ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{priestData.name}</h3>
                <p className="text-orange-200">{priestData.title}</p>
              </div>
            </div>
            
            <p className="text-orange-100 leading-relaxed text-sm">
              Dedicated to preserving ancient Vedic traditions and bringing divine blessings 
              to every ceremony with authentic rituals and heartfelt devotion.
            </p>
            
            <div className="flex items-center space-x-2 text-orange-200">
              <Heart size={16} />
              <span className="text-sm">Serving with devotion since 1999</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-orange-200 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Popular Services</h4>
            <ul className="space-y-2">
              {popularServices.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-orange-200 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
            <div className="space-y-3">
              
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-orange-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-orange-200 text-sm">{contactData.phone}</p>
                  <p className="text-orange-300 text-xs">Available 6 AM - 10 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-orange-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-orange-200 text-sm break-all">{contactData.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-orange-200 text-sm">{priestData.location}</p>
                  <p className="text-orange-300 text-xs">Hyderabad & surrounding areas</p>
                </div>
              </div>
              
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-medium text-white mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <button 
                  onClick={() => window.open('https://facebook.com', '_blank')}
                  className="w-8 h-8 bg-orange-700 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Facebook size={16} />
                </button>
                <button 
                  onClick={() => window.open('https://instagram.com', '_blank')}
                  className="w-8 h-8 bg-orange-700 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Instagram size={16} />
                </button>
                <button 
                  onClick={() => window.open('https://youtube.com', '_blank')}
                  className="w-8 h-8 bg-orange-700 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Youtube size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Quote */}
        <div className="mt-12 pt-8 border-t border-orange-700">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-orange-200 font-medium italic mb-2">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
            </p>
            <p className="text-orange-300 text-sm">
              May all beings be happy, may all beings be healthy
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-950 border-t border-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-orange-300">
            <div>
              <p>&copy; {currentYear} {priestData.name} - {priestData.title}. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-1 mt-2 md:mt-0">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>for spiritual service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;