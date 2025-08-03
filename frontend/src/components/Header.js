import { Mail, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'media', label: 'Media' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ॐ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-orange-800">Mohan Joshi</h1>
              <p className="text-sm text-orange-600">Divya Karm</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone size={16} className="text-orange-500" />
                <span>+91 8555808775</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={16} className="text-orange-500" />
                <span><a href="mailto:mj981816@gmail.com">mj981816@gmail.com</a></span>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex border-orange-200 text-orange-700 hover:bg-orange-50"
            >
              Book Consultation
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-orange-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 text-gray-700 hover:text-orange-600 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-orange-100">
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-orange-500" />
                    <span>+91 8555808775</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-orange-500" />
                    <span><a href="mailto:mj981816@gmail.com">mj981816@gmail.com</a></span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="mt-3 w-full border-orange-200 text-orange-700 hover:bg-orange-50"
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;