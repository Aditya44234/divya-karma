import { Award, BookOpen, Heart, Star } from 'lucide-react';
import { aboutData, priestData } from '../mock';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <BookOpen className="text-orange-500" size={20} />
            <span className="text-orange-700 font-medium">About Pandit Ji</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spiritual Journey & Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to preserving ancient Vedic traditions and bringing divine blessings 
            to every ceremony with authentic rituals and heartfelt devotion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-6">
            {/* Profile Image */}
            <Card className="overflow-hidden border-orange-200 shadow-xl">
              <div className="relative">
                <img
                  src="/images/pandit.jpg"
                  alt="Pandit Mohan Joshi"
                  className="w-full h-96  w-50 object-contain bg-orange-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-900">{priestData.name}</h3>
                    <p className="text-orange-600 font-medium">{priestData.title}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-yellow-500" />
                        <span>{priestData.experience}</span>
                      </div>
                      <div>📍 {priestData.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-700">500+</div>
                  <div className="text-sm text-gray-600">Ceremonies</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-700">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-700">5★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Biography and Details */}
          <div className="space-y-8">
            {/* Biography */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Spiritual Journey</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {aboutData.biography}
              </p>
            </div>

            {/* Philosophy */}
            <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">My Philosophy</h4>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{aboutData.philosophy}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="text-orange-500 mr-2" size={24} />
                Education & Training
              </h4>
              <div className="space-y-3">
                {aboutData.education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{edu}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Specializations */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="text-orange-500 mr-2" size={24} />
                Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutData.specializations.map((spec, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Values and Commitment */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">Authentic Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Following ancient Vedic scriptures and maintaining the purity of traditional rituals 
                passed down through generations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">Devotion & Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Every ceremony is performed with complete dedication, ensuring spiritual 
                satisfaction and divine blessings for all participants.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">Excellence & Trust</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships with families through trustworthy service 
                and commitment to spiritual excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;