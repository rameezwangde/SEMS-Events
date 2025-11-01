import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Zap, MessageCircle, Instagram, Facebook, ZoomIn, ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState(50);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const navigate = useNavigate();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track loaded images
  const handleImageLoad = (imagePath: string) => {
    setLoadedImages(prev => new Set([...prev, imagePath]));
  };

  // Preload first few images
  useEffect(() => {
    eventImages.slice(0, 10).forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  // Load more images when user scrolls near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500) {
        setVisibleImages(prev => Math.min(prev + 20, eventImages.length));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for better lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src && !img.src) {
              img.src = img.dataset.src;
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Array of event images - displaying 25 for now (AVIF format for better performance)
  const eventImages = [
    '/images/DSC05323.avif',
    '/images/DSC05324.avif',
    '/images/DSC05330.avif',
    '/images/DSC05352.avif',
    '/images/DSC05378.avif',
    '/images/DSC05392.avif',
    '/images/DSC05405.avif',
    '/images/DSC05407.avif',
    '/images/DSC05408.avif',
    '/images/DSC05411.avif',
    '/images/DSC05412.avif',
    '/images/DSC05420.avif',
    '/images/DSC05431.avif',
    '/images/DSC05434.avif',
    '/images/DSC05436.avif',
    '/images/DSC05446.avif',
    '/images/DSC05449.avif',
    '/images/DSC05477.avif',
    '/images/DSC05478.avif',
    '/images/DSC05483.avif',
    '/images/DSC05496.avif',
    '/images/DSC05499.avif',
    '/images/DSC05537.avif',
    '/images/DSC05564.avif',
    '/images/DSC05577.avif',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Section */}
      <section className="relative pt-0 pb-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Navigation Section */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 lg:p-2 mb-8 sm:mb-12 mt-2 sm:mt-4 relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            {/* SEMS Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-1.5 sm:space-x-2 group mr-0 lg:mr-2 sm:mr-3"
              aria-label="SEMS Events - Go to homepage"
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black flex items-center justify-center font-bold text-sm sm:text-lg clip-hexagon group-hover:morph-shape transition-all duration-300">
                  S
                </div>
                <Zap className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-heading">
                <h1 className="text-base sm:text-lg font-bold text-white tracking-wide glitch-text" style={{ fontWeight: 900 }}>SEMS</h1>
                <p className="text-xs text-white/60 tracking-[0.3em] -mt-1 font-mono">EVENTS</p>
              </div>
            </Link>
            
            {/* Navigation Links - Visible on Mobile and Desktop */}
            <div className="flex flex-wrap items-center justify-center gap-1 lg:gap-0 lg:space-x-1">
              {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item) => (
                <Link
                  key={item}
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  className={`relative px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs lg:text-sm font-mono font-medium transition-all duration-300 rounded-full ${
                    item === 'PORTFOLIO'
                      ? 'bg-white text-black'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  {item === 'PORTFOLIO' && (
                    <motion.div
                      className="absolute inset-0 bg-white rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Social Media Icons - Visible on Mobile and Desktop */}
            <div className="flex items-center space-x-1.5 ml-0 lg:ml-2 sm:ml-3 pl-0 lg:pl-2 sm:pl-3 border-t lg:border-t-0 lg:border-l border-white/20 pt-2 lg:pt-0">
              <motion.a
                href="https://wa.me/971508194875"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://instagram.com/semsmanaging"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://facebook.com/semsmanaging"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Revolutionary Hero */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 clip-hexagon"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center perspective-3d">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div 
                className="w-8 sm:w-16 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 0.5, duration: 1 }}
              />
              <motion.span 
                className="font-mono-enhanced text-xs sm:text-sm tracking-[0.3em] text-gray-400 letter-spacing-animate"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                OUR PORTFOLIO
              </motion.span>
              <motion.div 
                className="w-8 sm:w-16 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
            
            <motion.h1 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display mb-4 sm:mb-6 lg:mb-8 leading-tight px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
            >
              <motion.span 
                className="block text-gray-200 fade-in-up"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 30px rgba(255,255,255,0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                SEMS
              </motion.span>
              <motion.span 
                className="block text-gray-300"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                PORTFOLIO
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 font-body tracking-wider px-3 sm:px-4 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              whileHover={{ 
                color: "#d1d5db",
                transition: { duration: 0.3 }
              }}
            >
              Showcasing our most successful events across Dubai and beyond. From Andrea Jeremiah's 
              first Dubai concert to corporate summits and cultural festivals - each event tells a story of excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
          >
            {eventImages.slice(0, visibleImages).map((image, index) => (
                <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                  duration: 0.4,
                  delay: index < 25 ? index * 0.03 : 0,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group cursor-pointer relative aspect-square overflow-hidden rounded-xl bg-gray-900 shadow-lg"
                  whileHover={{ 
                  y: -8,
                  transition: { 
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(image)}
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  perspective: 1000,
                }}
              >
                  {/* Loading Skeleton/Placeholder */}
                  {!loadedImages.has(image) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent animate-shimmer" />
                    </div>
                  )}
                  
                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-sm"></div>
                    <div className="absolute inset-[2px] rounded-xl bg-gray-900"></div>
                  </div>
                  
                  {/* Image with enhanced effects */}
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img
                      src={image}
                      alt={`SEMS Event ${index + 1}`}
                      className={`w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 ease-out ${
                        loadedImages.has(image) 
                          ? 'opacity-100 blur-0' 
                          : 'opacity-0 blur-md'
                      }`}
                      style={{ 
                        willChange: 'transform, opacity',
                        transform: 'translateZ(0)',
                        WebkitTransform: 'translateZ(0)',
                      }}
                      loading="lazy"
                      decoding="async"
                      fetchPriority={index < 10 ? "high" : "low"}
                      onLoad={() => handleImageLoad(image)}
                    />
                    
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                  {/* Interactive Overlay with Icon and Text */}
                  {loadedImages.has(image) && (
                    <motion.div 
                      className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none"
                      initial={false}
                    >
                      <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3"
                      >
                        <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                      </motion.div>
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-white text-sm font-medium tracking-wide drop-shadow-lg"
                      >
                        View Image
                      </motion.p>
                          </motion.div>
                  )}
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Loading Indicator */}
          {visibleImages < eventImages.length && (
            <div className="text-center mt-12">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block text-gray-400 text-sm font-mono"
              >
                Loading more images...
          </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 grid-dots"></div>
            </div>

            {/* Close Button */}
              <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-red-500/80 transition-all duration-300 rounded-full border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              >
                <X className="w-6 h-6" />
              </motion.button>

            {/* Image Info Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <p className="text-white text-xs sm:text-sm font-mono tracking-wider">
                SEMS EVENT GALLERY
              </p>
            </motion.div>

            {/* Image Container with Enhanced Animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="max-w-7xl max-h-[85vh] w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image with Glow Effect */}
              <div className="relative group">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                ></motion.div>
                <img
                  src={selectedImage}
                  alt="SEMS Event"
                  className="relative w-full h-full object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
                  style={{
                    maxHeight: '85vh',
                  }}
                />
              </div>

              {/* Download/Share Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  View Full Size
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action Section */}
      <section className="py-32 bg-gradient-to-br from-white to-gray-100 text-black relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="block text-black">READY TO CREATE</span>
              <span className="block text-outline-black">YOUR EVENT?</span>
            </h2>
            <p className="text-xl text-black/60 max-w-3xl mx-auto mb-12 font-light">
              Let SEMS transform your vision into an unforgettable experience. 
              From concept to execution, we bring your events to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                onClick={() => navigate('/contact')}
                className="bg-black text-white px-8 py-4 font-mono font-bold tracking-wider hover:bg-black/80 transition-colors rounded-2xl flex items-center space-x-3"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={() => navigate('/services')}
                className="border-2 border-black text-black px-8 py-4 font-mono font-bold tracking-wider hover:bg-black hover:text-white transition-colors rounded-2xl flex items-center space-x-3"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>OUR SERVICES</span>
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { number: '50+', label: 'EVENTS DELIVERED' },
                { number: '15+', label: 'EVENT CATEGORIES' },
                { number: '100%', label: 'CLIENT SATISFACTION' },
                { number: '24/7', label: 'SUPPORT' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-3xl lg:text-4xl font-bold mb-2 font-mono group-hover:text-outline-black transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-sm font-mono tracking-[0.3em] text-black/60 group-hover:text-black transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;