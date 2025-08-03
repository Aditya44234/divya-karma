import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, User, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { toast } from '../hooks/use-toast';
import { contactData, servicesData, bookingSlots } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData(prev => ({ ...prev, date }));
    
    const slots = bookingSlots.find(slot => slot.date === date)?.slots || [];
    setAvailableSlots(slots);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name, phone number, and select a service.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Booking Request Sent!",
      description: "Thank you for your interest. Pandit ji will contact you within 24 hours to confirm the details.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
    setSelectedDate('');
    setAvailableSlots([]);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <Phone className="text-orange-500" size={20} />
            <span className="text-orange-700 font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact & Booking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring divine blessings to your special occasion? Reach out to discuss 
            your ceremony requirements and schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">{contactData.phone}</p>
                    <p className="text-sm text-gray-500">Available for calls & WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">{contactData.email}</p>
                    <p className="text-sm text-gray-500">For detailed discussions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">{contactData.address}</p>
                    <p className="text-sm text-gray-500">Hyderabad & surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Availability</h4>
                    <p className="text-gray-700">{contactData.availability}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {contactData.languages.map((lang, index) => (
                        <Badge key={index} variant="outline" className="border-orange-200 text-orange-700 text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 h-auto flex-col space-y-2"
                onClick={() => window.open('https://wa.me/918555808775', '_blank')}
              >
                <MessageCircle size={24} />
                <span className="text-sm font-medium">WhatsApp</span>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 p-6 h-auto flex-col space-y-2"
                onClick={() => window.open('tel:+918555808775', '_self')}
              >
                <Phone size={24} />
                <span className="text-sm font-medium">Call Direct</span>
              </Button>
            </div>

            {/* Map Placeholder */}
            <Card className="border-orange-200 shadow-lg">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-r from-orange-100 to-amber-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={40} className="text-orange-500 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Service Location</p>
                    <p className="text-sm text-gray-600">Hyderabad & Surrounding Areas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Calendar className="mr-2 text-orange-500" size={24} />
                  Book a Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="border-orange-200 focus:border-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="border-orange-200 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-orange-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white"
                      required
                    >
                      <option value="">Select a service</option>
                      {servicesData.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name} - {service.price}
                        </option>
                      ))}
                      <option value="custom">Custom Ceremony</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <select
                        name="date"
                        value={selectedDate}
                        onChange={(e) => handleDateChange(e.target.value)}
                        className="w-full p-3 border border-orange-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white"
                      >
                        <option value="">Select date</option>
                        {bookingSlots.map((slot) => (
                          <option key={slot.date} value={slot.date}>
                            {new Date(slot.date).toLocaleDateString('en-IN', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-orange-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white"
                        disabled={!selectedDate}
                      >
                        <option value="">Select time</option>
                        {availableSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please share any specific requirements, location details, or questions..."
                      className="border-orange-200 focus:border-orange-500 min-h-[100px]"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="mr-2" size={20} />
                    Send Booking Request
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    * Pandit ji will call you within 24 hours to confirm details and discuss the ceremony requirements.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;