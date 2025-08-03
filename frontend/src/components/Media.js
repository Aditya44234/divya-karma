import { Calendar, Eye, Image as ImageIcon, Play } from 'lucide-react';
import { useState } from 'react';
import { mediaData } from '../mock';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Media = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedMedia(photo);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="media" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <ImageIcon className="text-orange-500" size={20} />
            <span className="text-orange-700 font-medium">Sacred Moments</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Media Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the divine moments and sacred ceremonies captured through photos and videos, 
            showcasing the spiritual atmosphere and devotion of our rituals.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-orange-100">
            <div className="flex space-x-2">
              <Button
                variant={activeTab === 'photos' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('photos')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  activeTab === 'photos'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <ImageIcon size={18} className="mr-2" />
                Photos ({mediaData.photos.length})
              </Button>
              <Button
                variant={activeTab === 'videos' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('videos')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  activeTab === 'videos'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <Play size={18} className="mr-2" />
                Videos ({mediaData.videos.length})
              </Button>
            </div>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mediaData.photos.map((photo) => (
              <Card 
                key={photo.id} 
                className="group cursor-pointer overflow-hidden border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => handlePhotoClick(photo)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-orange-700 mb-2">
                        {photo.ceremony}
                      </Badge>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={16} className="text-orange-600" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-700 line-clamp-2">{photo.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaData.videos.map((video) => (
              <Card 
                key={video.id} 
                className="group cursor-pointer overflow-hidden border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative overflow-hidden">
                  <video
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300">
                      <Play size={24} className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-orange-500 text-white text-xs">
                      {video.ceremony}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar size={14} />
                    <span>{video.ceremony}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-100 to-amber-100 border-orange-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to Capture Your Sacred Moments?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every ceremony is unique and special. We can help you preserve these divine moments 
                through professional photography and videography services.
              </p>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 font-semibold"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discuss Photography Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedMedia.url}
                alt={selectedMedia.caption}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white"
                onClick={closeModal}
              >
                <X size={20} />
              </Button>
            </div>
            <div className="p-6">
              <Badge className="bg-orange-100 text-orange-700 mb-3">
                {selectedMedia.ceremony}
              </Badge>
              <p className="text-gray-700 leading-relaxed">{selectedMedia.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeVideoModal}>
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <div className="aspect-video w-full">
                {selectedVideo.videoUrl.includes('youtube.com') ? (
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    controls
                    autoPlay
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white z-10"
                onClick={closeVideoModal}
              >
                <X size={20} />
              </Button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-orange-500 text-white">
                  {selectedVideo.ceremony}
                </Badge>
                <span className="text-sm text-gray-500">{selectedVideo.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-700 leading-relaxed">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Media;