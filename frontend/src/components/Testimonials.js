import React, { useState, useEffect } from 'react';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { testimonialsData } from '../mock';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <Quote className="text-orange-500" size={20} />
            <span className="text-orange-700 font-medium">Devotee Experiences</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Families Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The blessings and satisfaction of devotees are the true measure of our spiritual service. 
            Here are heartfelt testimonials from families we've had the honor to serve.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Quote size={40} className="text-white" />
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-6 italic">
                  "{testimonialsData[activeTestimonial].text}"
                </blockquote>
                
                <div className="flex justify-center mb-4">
                  {renderStars(testimonialsData[activeTestimonial].rating)}
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonialsData[activeTestimonial].name}
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mt-2">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{testimonialsData[activeTestimonial].location}</span>
                    </div>
                    <Badge variant="outline" className="border-orange-200 text-orange-700">
                      {testimonialsData[activeTestimonial].ceremony}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-orange-500 w-8'
                    : 'bg-orange-200 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`group hover:shadow-lg transition-all duration-300 border-orange-100 hover:border-orange-300 ${
                index === activeTestimonial ? 'ring-2 ring-orange-200 bg-orange-50/50' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <MapPin size={12} />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 leading-relaxed mb-3 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <Badge variant="outline" className="border-orange-200 text-orange-700 text-xs">
                      <Calendar size={10} className="mr-1" />
                      {testimonial.ceremony}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Families</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">5.0</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-orange-100 to-amber-100 border-orange-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Create Your Sacred Memory?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Join hundreds of satisfied families who have experienced the divine blessings 
                and spiritual peace through authentic Vedic ceremonies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Your Ceremony
                </button>
                <button 
                  onClick={() => window.open('tel:+919876543210', '_self')}
                  className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call for Guidance
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;