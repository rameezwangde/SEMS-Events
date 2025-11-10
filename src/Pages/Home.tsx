import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Users, Calendar, Zap, Eye, Target, MapPin, Play, MessageCircle, Instagram, Facebook } from 'lucide-react';

// Lazy loading wrapper component
const LazySection = ({ children, className = "" }: any) => {
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Set volume to 50%
      // Optimize video quality settings
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.setAttribute('webkit-playsinline', '');
      // Ensure high quality playback
      if ('playbackQuality' in videoRef.current) {
        (videoRef.current as any).playbackQuality = 'high';
      }
    }
  }, []);


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
      <section className="relative pt-0 pb-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Navigation Section */}
          <motion.div
            className="bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl lg:rounded-full shadow-2xl mb-8 sm:mb-12 mt-2 sm:mt-4 relative overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            {/* Mobile Layout - Clean Horizontal Design */}
            <div className="lg:hidden">
              {/* Top Section: Logo + Social Icons */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10">
                {/* Logo */}
                <Link 
                  to="/" 
                  className="flex items-center space-x-2.5 sm:space-x-3 group flex-shrink-0"
                  aria-label="SEMS Events - Go to homepage"
                >
                  <div className="relative">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-white to-white/90 text-black flex items-center justify-center font-bold text-xl sm:text-2xl clip-hexagon group-hover:morph-shape transition-all duration-300 shadow-lg">
                      S
                    </div>
                    <Zap className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                  </div>
                  <div className="font-heading">
                    <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide glitch-text drop-shadow-lg" style={{ fontWeight: 900 }}>SEMS</h1>
                    <p className="text-xs sm:text-sm text-white/70 tracking-[0.35em] -mt-1 font-mono">EVENTS</p>
                  </div>
                </Link>
                
                {/* Social Media Icons */}
                <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
                  <motion.a
                    href="https://wa.me/971508194875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/semsmanaging"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-pink-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com/semsmanaging"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.a>
                </div>
              </div>
              
              {/* Navigation Links - Clean Horizontal Style */}
              <div className="px-4 sm:px-6 py-3 sm:py-4">
                <nav className="flex items-center justify-between gap-2 sm:gap-4">
                  {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item) => (
                    <Link
                      key={item}
                      to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                      className={`inline-block flex-shrink-0 text-xs sm:text-sm font-mono font-bold transition-all duration-300 px-2 sm:px-3 ${
                        item === 'HOME'
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <span className="relative inline-block whitespace-nowrap pb-1.5 sm:pb-2">
                        {item}
                        {item === 'HOME' && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white rounded-full"
                            layoutId="activeTabMobile"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            style={{
                              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)'
                            }}
                          />
                        )}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Desktop Layout - Unchanged */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-1 lg:p-2 w-full">
              {/* SEMS Logo */}
              <Link 
                to="/" 
                className="flex items-center space-x-2 group mr-2"
                aria-label="SEMS Events - Go to homepage"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold text-lg clip-hexagon group-hover:morph-shape transition-all duration-300">
                    S
                  </div>
                  <Zap className="absolute -top-1 -right-1 w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-heading">
                  <h1 className="text-lg font-bold text-white tracking-wide glitch-text" style={{ fontWeight: 900 }}>SEMS</h1>
                  <p className="text-xs text-white/60 tracking-[0.3em] -mt-1 font-mono">EVENTS</p>
                </div>
              </Link>
              
              {/* Navigation Links */}
              {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item) => (
                <Link
                  key={item}
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-mono font-medium transition-all duration-300 rounded-full ${
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
              <div className="flex items-center space-x-1.5 ml-2 pl-2 border-l border-white/20">
                <motion.a
                  href="https://wa.me/971508194875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="WhatsApp"
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
                  aria-label="Instagram"
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
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16 perspective-3d"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8"
              initial={{ 
                opacity: 0, 
                scale: 0.5,
                rotateX: -30
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateX: 0
              }}
              transition={{ 
                delay: 0.2, 
                duration: 1,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className="w-8 sm:w-16 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "4rem", opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
              />
              <motion.span 
                className="font-mono-enhanced text-xs sm:text-sm tracking-[0.3em] text-gray-400"
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.7, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120
                }}
              >
                WELCOME TO SEMS
              </motion.span>
              <motion.div 
                className="w-8 sm:w-16 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "4rem", opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading mb-4 sm:mb-6 lg:mb-8 leading-[1.1] px-2"
              style={{ fontWeight: 800 }}
            >
              <motion.span 
                className="block text-white"
                initial={{ 
                  opacity: 0, 
                  y: -100, 
                  scale: 0.5,
                  rotateX: -90
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0
                }}
                transition={{ 
                  delay: 0.8, 
                  duration: 1.2, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  textShadow: "0 0 40px rgba(255,255,255,0.4)",
                  transition: { duration: 0.3 }
                }}
                style={{ letterSpacing: '-0.03em' }}
              >
                CRAFTING UNFORGETTABLE
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                initial={{ 
                  opacity: 0, 
                  y: -120, 
                  scale: 0.3,
                  rotateX: -90,
                  rotateY: 45
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0
                }}
                transition={{ 
                  delay: 1.1, 
                  duration: 1.4, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.08,
                  rotateY: 3,
                  transition: { duration: 0.4 }
                }}
                style={{ letterSpacing: '-0.03em' }}
              >
                MOMENTS, GLOBALLY
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 font-body tracking-wider px-3 sm:px-4 max-w-4xl mx-auto leading-relaxed"
              initial={{ 
                opacity: 0, 
                y: 80,
                scale: 0.9,
                rotateX: 20
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                rotateX: 0
              }}
              transition={{ 
                delay: 1.4, 
                duration: 1.2,
                type: "spring",
                stiffness: 90
              }}
              whileHover={{ 
                color: "#f3f4f6",
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              Welcome to Shuaib Events Management L.L.C, your premier partner in turning ordinary moments into extraordinary memories. Based in the vibrant city of Dubai, we are a dynamic and innovative event management company that takes pride in offering a diverse range of services across 15 different event categories.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8 lg:mb-12 px-4"
              initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              transition={{ 
                delay: 1.7, 
                duration: 1,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ 
                  opacity: 0, 
                  x: -80,
                  rotateY: -45
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  rotateY: 0
                }}
                transition={{ 
                  delay: 1.9, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  scale: 1.1,
                  x: 5,
                  transition: { duration: 0.2 } 
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" />
                </motion.div>
                <span className="font-mono-enhanced text-sm sm:text-base text-gray-400">15+ Event Categories</span>
              </motion.div>
              <motion.div 
                className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full pulse-glow"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 2.1, 
                  duration: 0.6,
                  type: "spring"
                }}
              />
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ 
                  opacity: 0, 
                  x: 80,
                  rotateY: 45
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  rotateY: 0
                }}
                transition={{ 
                  delay: 2.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  scale: 1.1,
                  x: -5,
                  transition: { duration: 0.2 } 
                }}
              >
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" />
                </motion.div>
                <span className="font-mono-enhanced text-sm sm:text-base text-gray-400">Dubai • UAE</span>
              </motion.div>
            </motion.div>
            
            <motion.button
              className="bg-gray-800 text-gray-200 px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 font-heading text-sm sm:text-base lg:text-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 group mx-auto cursor-pointer relative z-10 overflow-hidden border border-gray-600 w-full max-w-xs sm:max-w-none"
              initial={{ 
                opacity: 0, 
                y: 80, 
                scale: 0.6,
                rotateX: -45
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: 0
              }}
              transition={{ 
                delay: 2.3, 
                duration: 1, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08,
                y: -5,
                boxShadow: "0 25px 50px rgba(255,255,255,0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ 
                scale: 0.95,
                y: 0
              }}
              onClick={() => navigate('/contact')}
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

          {/* Enhanced Video Showcase Section */}
          <motion.div
            className="mt-12 sm:mt-16 lg:mt-20 max-w-6xl mx-auto relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1 }}
          >
            {/* Floating Background Elements */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Section Header */}
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Play className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-sm font-mono tracking-wider text-gray-300">WATCH OUR STORY</span>
              </motion.div>
              
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
                style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                EXPERIENCE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">MAGIC</span>
              </motion.h3>
              
              <motion.p
                className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.8 }}
              >
                Witness how we transform visions into unforgettable experiences across Dubai and beyond
              </motion.p>
            </motion.div>

            {/* Video Container with Stats */}
            <div className="relative">
              {/* Stats Around Video */}
              <motion.div
                className="absolute -left-4 top-1/4 bg-gradient-to-br from-white to-gray-300 text-black p-4 rounded-2xl shadow-2xl z-10 hidden lg:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.6, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-3xl font-bold font-mono"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    50+
                  </motion.div>
                  <div className="text-xs font-mono tracking-wider">EVENTS</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 top-1/3 bg-gradient-to-br from-white to-gray-300 text-black p-4 rounded-2xl shadow-2xl z-10 hidden lg:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.8, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-3xl font-bold font-mono"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    100%
                  </motion.div>
                  <div className="text-xs font-mono tracking-wider">SATISFACTION</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-1/4 bg-gradient-to-br from-white to-gray-300 text-black p-4 rounded-2xl shadow-2xl z-10 hidden lg:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-3xl font-bold font-mono"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    15+
                  </motion.div>
                  <div className="text-xs font-mono tracking-wider">CATEGORIES</div>
                </div>
              </motion.div>

              {/* Main Video Container */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.2, duration: 0.8 }}
              >
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Inner Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none z-10"></div>

                {/* Video */}
                <video
                  ref={videoRef}
                  className="w-full h-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px] object-contain relative z-0"
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  style={{
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)',
                    imageRendering: 'high-quality',
                  }}
                >
                  <source src="/promo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Enhanced Decorative corners */}
                <motion.div
                  className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-t-4 border-l-4 border-white/40 pointer-events-none"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-t-4 border-r-4 border-white/40 pointer-events-none"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-b-4 border-l-4 border-white/40 pointer-events-none"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-b-4 border-r-4 border-white/40 pointer-events-none"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Bottom Stats Bar - Mobile Visible */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8 lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-white font-mono">50+</div>
                <div className="text-xs text-gray-400 font-mono tracking-wider">EVENTS</div>
              </motion.div>
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-gray-400 font-mono tracking-wider">SATISFACTION</div>
              </motion.div>
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-white font-mono">15+</div>
                <div className="text-xs text-gray-400 font-mono tracking-wider">CATEGORIES</div>
              </motion.div>
            </motion.div>

            {/* Call-to-Action Caption */}
            <motion.div
              className="text-center mt-8 sm:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2, duration: 0.8 }}
            >
              <motion.p
                className="text-gray-400 text-sm sm:text-base mb-6 font-body"
                whileHover={{ scale: 1.05 }}
              >
                Ready to create your own unforgettable moment?
              </motion.p>
              <motion.button
                className="relative inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-mono font-bold text-sm hover:bg-gray-200 transition-all min-h-[44px] touch-manipulation cursor-pointer"
                style={{ 
                  zIndex: 100,
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation',
                  pointerEvents: 'auto'
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio')}
              >
                <span>VIEW OUR PORTFOLIO</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
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
                onClick={() => navigate('/services')}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono tracking-wider">EVENT MANAGEMENT</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-body">From concept to execution, we create tailored experiences that align with your brand identity and goals.</p>
                </div>
              </motion.div>

              {/* Digital Marketing */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/services')}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono tracking-wider">DIGITAL MARKETING</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-body">Enhance your brand visibility with social media management, SEO, and strategic digital campaigns.</p>
                </div>
              </motion.div>

              {/* Branding & Design */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/services')}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono tracking-wider">BRANDING & DESIGN</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-body">Create cohesive and visually appealing brands that communicate your unique identity effectively.</p>
                </div>
              </motion.div>

              {/* Content Creation */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/services')}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono tracking-wider">CONTENT CREATION</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-body">Produce compelling written, visual, and multimedia content that resonates with your audience.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
                        className="text-white/80 leading-relaxed font-light text-lg font-body"
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
            
            <p className="text-base sm:text-xl text-black/70 mb-8 sm:mb-12 max-w-2xl mx-auto font-light font-body">
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