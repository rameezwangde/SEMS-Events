import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ArrowRight, Users, Award, Calendar, Zap, Eye, Target, MapPin, Play, MessageCircle, Instagram, Facebook } from 'lucide-react';
import LiveCountdown from '../components/LiveCountdown';

// Ultra-optimized lazy loading image component
const LazyImage = ({ src, alt, className, priority, onLoad }: any) => (
  <img 
    src={src} 
    alt={alt} 
    className={className}
    loading={priority ? 'eager' : 'lazy'}
    decoding="async"
    onLoad={onLoad}
    style={{ 
      willChange: 'auto',
      backfaceVisibility: 'hidden',
      transform: 'translateZ(0)',
      imageRendering: 'optimizeSpeed'
    }}
  />
);

// Lazy loading wrapper component
const LazySection = ({ children, className = "", delay = 0 }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="h-96 bg-gray-900/20 animate-pulse rounded-lg" />}
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const reviews = [
    {
      name: 'ALEXANDRA CHEN',
      role: 'CEO, TECH INNOVATIONS',
      rating: 5,
      text: 'SEMS transformed our product launch into an unforgettable experience. The attention to detail was extraordinary.',
      image: 'https://images.pexels.com/photos/3760137/pexels-photo-3760137.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'MARCUS RODRIGUEZ',
      role: 'WEDDING CLIENT',
      rating: 5,
      text: 'Our wedding was pure magic. Every moment was perfectly orchestrated. SEMS exceeded every expectation.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'SOPHIA WILLIAMS',
      role: 'CORPORATE DIRECTOR',
      rating: 5,
      text: 'The most professional event team we\'ve worked with. Flawless execution from concept to completion.',
      image: 'https://images.pexels.com/photos/3760736/pexels-photo-3760736.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];


  return (
    <div 
      className="min-h-screen bg-black text-white" 
      ref={containerRef}
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      {/* Hero Section - Crafting Unforgettable Moments */}
      <section className="relative pt-0 pb-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Navigation Section */}
          <motion.div
            className="flex items-center justify-center space-x-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 mb-8 sm:mb-12 mt-2 sm:mt-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            {/* SEMS Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 sm:space-x-3 group mr-4"
              aria-label="SEMS Events - Go to homepage"
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black flex items-center justify-center font-bold text-sm sm:text-lg clip-hexagon group-hover:morph-shape transition-all duration-300">
                  S
                </div>
                <Zap className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-mono">
                <h1 className="text-lg sm:text-xl font-bold text-white tracking-wider glitch-text">SEMS</h1>
                <p className="text-xs text-white/60 tracking-[0.3em] -mt-1">EVENTS</p>
              </div>
            </Link>
            
            {/* Navigation Links */}
            {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item, index) => (
              <Link
                key={item}
                to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                className={`relative px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-mono font-medium transition-all duration-300 rounded-full ${
                  item === 'HOME'
                    ? 'bg-white text-black'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{item}</span>
                {item === 'HOME' && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/20">
              <motion.a
                href="https://wa.me/971508194875"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://instagram.com/semsmanaging"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://facebook.com/semsmanaging"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-4 h-4 text-white" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
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
                WELCOME TO SEMS
              </motion.span>
              <motion.div 
                className="w-8 sm:w-16 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
            
            <motion.h2 
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
                CRAFTING UNFORGETTABLE
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
                MOMENTS, GLOBALLY
              </motion.span>
            </motion.h2>
            
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
              Welcome to Shuaib Events Management L.L.C, your premier partner in turning ordinary moments into extraordinary memories. Based in the vibrant city of Dubai, we are a dynamic and innovative event management company that takes pride in offering a diverse range of services across 15 different event categories.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8 lg:mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" />
                </motion.div>
                <span className="font-mono-enhanced text-sm sm:text-base text-gray-400">15+ Event Categories</span>
              </motion.div>
              <motion.div 
                className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full pulse-glow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2, duration: 0.4 }}
              />
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" />
                </motion.div>
                <span className="font-mono-enhanced text-sm sm:text-base text-gray-400">Dubai • UAE</span>
              </motion.div>
            </motion.div>
            
            <motion.button
              className="bg-gray-800 text-gray-200 px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 font-heading text-sm sm:text-base lg:text-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 group mx-auto cursor-pointer relative z-10 overflow-hidden border border-gray-600 w-full max-w-xs sm:max-w-none"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              style={{ pointerEvents: 'auto' }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                GET STARTED
              </motion.span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
          
          {/* Services Grid Section */}
          <motion.div
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Event Management */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/services'}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono tracking-wider">EVENT MANAGEMENT</h3>
                  <p className="text-white/70 text-sm leading-relaxed">From concept to execution, we create tailored experiences that align with your brand identity and goals.</p>
                </div>
              </motion.div>

              {/* Digital Marketing */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/services'}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono tracking-wider">DIGITAL MARKETING</h3>
                  <p className="text-white/70 text-sm leading-relaxed">Enhance your brand visibility with social media management, SEO, and strategic digital campaigns.</p>
                </div>
              </motion.div>

              {/* Branding & Design */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/services'}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono tracking-wider">BRANDING & DESIGN</h3>
                  <p className="text-white/70 text-sm leading-relaxed">Create cohesive and visually appealing brands that communicate your unique identity effectively.</p>
                </div>
              </motion.div>

              {/* Content Creation */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/services'}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono tracking-wider">CONTENT CREATION</h3>
                  <p className="text-white/70 text-sm leading-relaxed">Produce compelling written, visual, and multimedia content that resonates with your audience.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Google Reviews */}
      <LazySection className="py-20 bg-black text-white relative">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
              <div className="w-8 sm:w-16 h-1 bg-white"></div>
              <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/60">GOOGLE REVIEWS</span>
              <div className="w-8 sm:w-16 h-1 bg-white"></div>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="block text-white">CLIENT</span>
              <span className="block text-outline">TESTIMONIALS</span>
            </h2>
            
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current" />
              ))}
              <span className="text-2xl sm:text-3xl font-bold ml-3 sm:ml-4">4.9</span>
            </div>
            <p className="text-base sm:text-xl text-white/60 font-mono">BASED ON 300+ GOOGLE REVIEWS</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:border-white/30">
                  <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white/90 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-light">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="relative">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover clip-hexagon"
                      />
                      <div className="absolute inset-0 border-2 border-white/30 clip-hexagon"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white font-mono tracking-wider text-sm sm:text-base">{review.name}</h4>
                      <p className="text-xs sm:text-sm text-white/60 font-mono">{review.role}</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Interactive Process Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-8"
              initial={{ 
                opacity: 0, 
                y: -30, 
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              transition={{ 
                delay: 0.1, 
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="w-16 h-1 bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
              <motion.span 
                className="font-mono text-sm tracking-[0.3em] text-white/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                OUR PROCESS
              </motion.span>
              <motion.div 
                className="w-16 h-1 bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
            </motion.div>
            
            
            <motion.h2 
              className="text-5xl lg:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span 
                className="block text-white"
                initial={{ 
                  opacity: 0, 
                  y: -50, 
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1
                }}
                transition={{ 
                  delay: 0.5, 
                  duration: 1.2, 
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                HOW WE
              </motion.span>
              <motion.span 
                className="block text-outline glitch-text"
                initial={{ 
                  opacity: 0, 
                  y: -60, 
                  scale: 0.7
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1
                }}
                transition={{ 
                  delay: 0.7, 
                  duration: 1.4, 
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                CREATE MAGIC
              </motion.span>
            </motion.h2>
            
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            {/* Simplified Dots on Timeline */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full top-0"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full bottom-0"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            
            {/* Progress Indicator */}
            <motion.div 
              className="flex justify-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((stepIndex) => (
                  <motion.button
                    key={stepIndex}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStep === stepIndex 
                        ? 'bg-white scale-125' 
                        : activeStep !== null && stepIndex < activeStep
                        ? 'bg-white/60 scale-110'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveStep(stepIndex)}
                  />
                ))}
              </div>
            </motion.div>

            <div className="space-y-20">
              {[
                {
                  step: '01',
                  title: 'EVENT PLANNING',
                  description: 'Meticulous event planning and coordination',
                  icon: '📋',
                  color: 'from-pink-500 to-purple-500',
                  position: 'left'
                },
                {
                  step: '02',
                  title: 'LOGISTICS MANAGEMENT',
                  description: 'Logistics management for seamless execution',
                  icon: '🚚',
                  color: 'from-yellow-500 to-orange-500',
                  position: 'right'
                },
                {
                  step: '03',
                  title: 'ON-SITE COORDINATION',
                  description: 'On-site coordination for a flawless experience',
                  icon: '🤝',
                  color: 'from-blue-500 to-cyan-500',
                  position: 'left'
                },
                {
                  step: '04',
                  title: 'ENTERTAINMENT & CONTENT',
                  description: 'Entertainment and content creation tailored to your audience',
                  icon: '🎬',
                  color: 'from-green-500 to-emerald-500',
                  position: 'right'
                },
                {
                  step: '05',
                  title: 'CATERING SERVICES',
                  description: 'Exquisite catering services with attention to detail',
                  icon: '🍽️',
                  color: 'from-purple-500 to-indigo-500',
                  position: 'left'
                },
                {
                  step: '06',
                  title: 'DECORATION & DESIGN',
                  description: 'Innovative decoration and design concepts',
                  icon: '✨',
                  color: 'from-red-500 to-pink-500',
                  position: 'right'
                },
                {
                  step: '07',
                  title: 'AUDIO-VISUAL SERVICES',
                  description: 'Cutting-edge audio-visual services',
                  icon: '🔊',
                  color: 'from-teal-500 to-blue-500',
                  position: 'left'
                },
                {
                  step: '08',
                  title: 'PROMOTION & MARKETING',
                  description: 'Strategic promotion and marketing initiatives',
                  icon: '📈',
                  color: 'from-orange-500 to-red-500',
                  position: 'right'
                },
                {
                  step: '09',
                  title: 'POST-EVENT EVALUATION',
                  description: 'Post-event evaluation for continuous improvement',
                  icon: '📊',
                  color: 'from-gray-500 to-slate-500',
                  position: 'left'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${step.position === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} group cursor-pointer`}
                  initial={{ opacity: 0, x: step.position === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                  style={{
                    willChange: 'auto',
                    transform: 'translateZ(0)'
                  }}
                >
                  {/* Content Section */}
                  <div className={`w-full lg:w-5/12 ${step.position === 'left' ? 'text-center lg:text-right pr-0 lg:pr-12' : 'text-center lg:text-left pl-0 lg:pl-12'} mb-8 lg:mb-0`}>
                    <motion.div 
                      className={`space-y-6 transition-all duration-300 ${
                        activeStep === index ? 'bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20' : ''
                      }`}
                      whileHover={{ 
                        x: step.position === 'left' ? -20 : 20,
                        transition: { 
                          duration: 0.4,
                          ease: "easeOut",
                          type: "tween"
                        }
                      }}
                      animate={activeStep === index ? {
                        scale: 1.02,
                        backgroundColor: "rgba(255,255,255,0.05)",
                        transition: { duration: 0.3 }
                      } : {}}
                      style={{ 
                        willChange: 'transform',
                        transform: 'translateZ(0)'
                      }}
                    >
                      {/* Icon with animated background */}
                      <motion.div 
                        className="relative inline-block mb-6"
                        whileHover={{ 
                          scale: 1.1, 
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-xl`}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.3, 0.2]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        />
                        <div className="relative text-6xl z-10">{step.icon}</div>
                      </motion.div>
                      
                      <motion.h3
                        className="text-3xl lg:text-4xl font-bold font-mono tracking-wider mb-4"
                        whileHover={{
                          scale: 1.05,
                          color: "#fff",
                          x: step.position === 'left' ? -15 : 15,
                          transition: { 
                            duration: 0.3,
                            ease: "easeOut",
                            type: "tween"
                          }
                        }}
                        style={{ 
                          willChange: 'transform, color',
                          transform: 'translateZ(0)'
                        }}
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        className="text-white/80 leading-relaxed font-light text-lg"
                        whileHover={{
                          color: "#fff",
                          x: step.position === 'left' ? -25 : 25,
                          transition: { 
                            duration: 0.4,
                            ease: "easeOut",
                            type: "tween"
                          }
                        }}
                        style={{ 
                          willChange: 'transform, color',
                          transform: 'translateZ(0)'
                        }}
                      >
                        {step.description}
                      </motion.p>
                      
                      {/* Interactive hover effect */}
                      <motion.div
                        className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ 
                          opacity: 1, 
                          y: 0,
                          x: step.position === 'left' ? -10 : 10,
                          transition: { 
                            duration: 0.3,
                            ease: "easeOut"
                          }
                        }}
                        style={{ 
                          willChange: 'transform, opacity',
                          transform: 'translateZ(0)'
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <span className="text-sm font-mono tracking-wider text-white/60">
                            LEARN MORE
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Center Hexagonal Node */}
                  <div className="w-full lg:w-2/12 flex justify-center relative mb-8 lg:mb-0">
                    <motion.div 
                      className="relative group cursor-pointer"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={activeStep === index ? {
                        scale: 1.15,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.6 }
                      } : {}}
                    >
                          {/* Ultra-optimized background ring */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-30 rounded-full blur-md`}
                        animate={{ 
                              scale: [1, 1.05, 1],
                              opacity: [0.3, 0.35, 0.3]
                        }}
                        transition={{ 
                              duration: 6,
                          repeat: Infinity, 
                              ease: "easeInOut",
                              type: "tween",
                              repeatType: "reverse"
                            }}
                            style={{ 
                              willChange: 'auto',
                              transform: 'translateZ(0)'
                            }}
                          />
                      
                      {/* Ultra-optimized main hexagon */}
                      <motion.div 
                        className="relative w-20 h-20 bg-white text-black flex items-center justify-center font-bold text-xl clip-hexagon shadow-2xl"
                        whileHover={{ 
                          rotate: 90,
                          scale: 1.03,
                          transition: { 
                            duration: 0.8,
                            ease: "easeInOut",
                            type: "tween"
                          }
                        }}
                        style={{ 
                          willChange: 'auto',
                          transform: 'translateZ(0)'
                        }}
                      >
                        {step.step}
                      </motion.div>
                      
                      {/* Hover effect overlay */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 clip-hexagon opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                    
                        {/* Connection lines to next step */}
                        {index < 8 && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-white/40 to-white/20"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ delay: index * 0.02 + 0.1, duration: 0.3, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                          />
                        )}
                  </div>
                  
                  <div className="w-full lg:w-5/12 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary CTA Section */}
      <section className="py-20 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 sm:mb-8">
              <Target className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="block text-black">READY TO</span>
              <span className="block text-outline-black">CREATE MAGIC?</span>
            </h2>
            
            <p className="text-base sm:text-xl text-black/70 mb-8 sm:mb-12 max-w-2xl mx-auto font-light">
              Let's transform your vision into an extraordinary experience that will be remembered forever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-black text-white px-6 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-lg hover:bg-black/80 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 group"
              >
                <span>START YOUR PROJECT</span>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-black text-black px-6 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <span>VIEW OUR WORK</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;