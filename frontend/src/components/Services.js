import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Flame, 
  Heart, 
  Scissors, 
  Users, 
  Sun, 
  Shield,
  Clock,
  IndianRupee,
  Star,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { servicesData } from '../mock';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const getIcon = (iconName) => {
    const icons = {
      home: Home,
      'book-open': BookOpen,
      flame: Flame,
      heart: Heart,
      scissors: Scissors,
      users: Users,
      sun: Sun,
      shield: Shield
    };
    const IconComponent = icons[iconName] || BookOpen;
    return <IconComponent size={32} />;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <Flame className="text-orange-500" size={20} />
            <span className="text-orange-700 font-medium">Sacred Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pooja & Ritual Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Authentic Vedic ceremonies performed with traditional rituals, proper mantras, 
            and complete devotion for your spiritual well-being and divine blessings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {servicesData.map((service) => (
            <Card 
              key={service.id} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 ${
                selectedService?.id === service.id 
                  ? 'border-orange-400 shadow-lg bg-orange-50/50' 
                  : 'border-orange-100 hover:border-orange-300'
              }`}
              onClick={() => setSelectedService(service)}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                  selectedService?.id === service.id 
                    ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-white' 
                    : 'bg-orange-100 text-orange-600 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-500 group-hover:text-white'
                }`}>
                  {getIcon(service.icon)}
                </div>
                <CardTitle className="text-lg font-semibold text-center text-gray-900 group-hover:text-orange-700 transition-colors">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 text-sm font-semibold text-orange-600">
                    {/* <IndianRupee size={14} />
                    <span>{service.price}</span> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Service Details */}
        {selectedService && (
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white">
                    {getIcon(selectedService.icon)}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedService.name}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {selectedService.description}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                    <Badge variant="outline" className="border-orange-200 text-orange-700">
                      <Clock size={14} className="mr-1" />
                      {selectedService.duration}
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      <IndianRupee size={14} className="mr-1" />
                      {selectedService.price}
                    </Badge>
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      <Star size={14} className="mr-1" />
                      Authentic Rituals
                    </Badge>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button 
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Now
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-orange-100 to-amber-100 border-orange-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Ceremony?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every family has unique spiritual needs. I offer personalized consultations 
                to create the perfect ceremony for your special occasions and spiritual requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 font-semibold"
                >
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('tel:+919876543210', '_self')}
                  className="border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 font-semibold"
                >
                  Call for Guidance
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;