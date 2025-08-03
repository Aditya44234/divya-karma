import React, { useState, useEffect } from 'react';
import { Star, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { priestData } from '../mock';

const Hero = () => {
  const [currentShlokaIndex, setCurrentShlokaIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const shlokas = [
    {
      sanskrit: "ॐ नमो भगवते वासुदेवाय",
      translation: "Om Namo Bhagavate Vasudevaya",
      meaning: "Salutations to Lord Vasudeva (Krishna)"
    },
    {
      sanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः",
      translation: "Sarve Bhavantu Sukhinah Sarve Santu Niramayah",
      meaning: "May all beings be happy, may all beings be healthy"
    },
    {
      sanskrit: "वसुधैव कुटुम्बकम्",
      translation: "Vasudhaiva Kutumbakam",
      meaning: "The world is one family"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentShlokaIndex((prev) => (prev + 1) % shlokas.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-300/30 to-amber-300/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-lg animate-bounce"></div>
        
        {/* Floating Om symbols */}
        <div className="absolute top-1/4 right-1/4 text-6xl text-orange-200/40 animate-spin-slow">ॐ</div>
        <div className="absolute bottom-1/4 left-1/5 text-4xl text-amber-200/40 animate-float">🪔</div>
        <div className="absolute top-3/4 right-1/5 text-5xl text-yellow-200/40 animate-float-delayed">🌸</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main content */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-orange-200/50">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Available for Consultations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-orange-900 mb-4 tracking-tight">
              {priestData.name}
            </h1>
            <p className="text-2xl md:text-3xl text-orange-700 mb-6 font-medium">
              {priestData.title}
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {priestData.description}
            </p>
          </div>

          {/* Rotating Shloka */}
          <Card className="max-w-4xl mx-auto mb-8 bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-800 mb-3 transition-all duration-500">
                  {shlokas[currentShlokaIndex].sanskrit}
                </div>
                <div className="text-lg md:text-xl italic text-orange-600 mb-2">
                  {shlokas[currentShlokaIndex].translation}
                </div>
                <div className="text-gray-600">
                  {shlokas[currentShlokaIndex].meaning}
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {shlokas.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentShlokaIndex ? 'bg-orange-500' : 'bg-orange-200'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-orange-200/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-orange-700">
                  <Clock size={20} />
                  <span className="font-semibold">{priestData.experience}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Experience</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-orange-200/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-orange-700">
                  <Star size={20} />
                  <span className="font-semibold">500+ Ceremonies</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Completed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-orange-200/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-orange-700">
                  <MapPin size={20} />
                  <span className="font-semibold">{priestData.location}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Based in</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
              onClick={() => scrollToSection('services')}
            >
              View Services
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-orange-700 hover:bg-orange-50 px-6 py-3"
              onClick={() => window.open('tel:+919876543210', '_self')}
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-orange-400 rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;