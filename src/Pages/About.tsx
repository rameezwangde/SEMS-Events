import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Award, Heart, Target, CheckCircle, Zap, Eye, Lightbulb, ArrowRight, ExternalLink, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Lightbulb,
      title: 'CREATIVITY',
      description: 'Innovative design concepts and creative solutions that make every event unique and memorable.'
    },
    {
      icon: Target,
      title: 'PRECISION',
      description: 'Meticulous event planning and coordination ensuring flawless execution from concept to completion.'
    },
    {
      icon: Users,
      title: 'COLLABORATION',
      description: 'Working closely with clients as partners to bring their vision to life with tailored experiences.'
    },
    {
      icon: Award,
      title: 'EXCELLENCE',
      description: 'Commitment to delivering exceptional quality across all 15 event categories we serve.'
    }
  ];

  const expertise = [
    {
      title: 'CORPORATE EVENTS',
      description: 'Elevate your business gatherings to new heights with our expertly curated corporate event services.',
      icon: '🏢',
      route: '/services'
    },
    {
      title: 'SOCIAL EVENTS',
      description: 'Craft unforgettable social events that celebrate life\'s moments with style and flair.',
      icon: '🎉',
      route: '/services'
    },
    {
      title: 'CULTURAL EVENTS',
      description: 'Celebrate diversity and creativity through a tapestry of vibrant cultural events.',
      icon: '🎭',
      route: '/services'
    },
    {
      title: 'SPORTS EVENTS',
      description: 'Where the thrill of the game meets unforgettable experiences and heart-pounding excitement.',
      icon: '⚽',
      route: '/services'
    },
    {
      title: 'ENTERTAINMENT EVENTS',
      description: 'Where the stage is set for unforgettable moments, laughter, and pure joy.',
      icon: '🎪',
      route: '/services'
    },
    {
      title: 'OTHER SERVICES',
      description: 'Comprehensive event solutions tailored to your unique needs and requirements.',
      icon: '🌟',
      route: '/services'
    }
  ];

  const achievements = [
    { number: '15+', label: 'EVENT CATEGORIES' },
    { number: '100%', label: 'CLIENT SATISFACTION' },
    { number: 'GLOBAL', label: 'REACH' },
    { number: '24/7', label: 'SUPPORT' }
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
                    href="https://www.facebook.com/sems.live"
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
                        item === 'ABOUT'
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <span className="relative inline-block whitespace-nowrap pb-1.5 sm:pb-2">
                        {item}
                        {item === 'ABOUT' && (
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
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-1 w-full">
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
                    item === 'ABOUT'
                      ? 'bg-white text-black'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  {item === 'ABOUT' && (
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
                  href="https://www.facebook.com/sems.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-4 h-4 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Revolutionary Hero Section */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 clip-hexagon"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6 sm:space-y-8 perspective-3d"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div 
                className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
                initial={{ 
                  opacity: 0, 
                  y: -50, 
                  scale: 0.8,
                  rotateX: -30
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0
                }}
                transition={{ 
                  delay: 0.2, 
                  duration: 1,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="w-1 sm:w-2 h-12 sm:h-16 bg-white"></div>
                <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/60">ABOUT SEMS</span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-none">
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
                      delay: 0.4, 
                      duration: 1.2, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    CRAFTING
                  </motion.span>
                  <motion.span 
                    className="block text-outline glitch-text"
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
                      delay: 0.6, 
                      duration: 1.4, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 80
                    }}
                    whileHover={{ 
                      y: -15,
                      scale: 1.08,
                      rotateY: 5,
                      transition: { duration: 0.4 }
                    }}
                  >
                    UNFORGETTABLE
                  </motion.span>
                  <motion.span 
                    className="block text-white"
                    initial={{ 
                      opacity: 0, 
                      y: -140, 
                      scale: 0.4,
                      rotateX: -90,
                      rotateY: -45
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      rotateX: 0,
                      rotateY: 0
                    }}
                    transition={{ 
                      delay: 0.8, 
                      duration: 1.6, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 60
                    }}
                    whileHover={{ 
                      y: -12,
                      scale: 1.06,
                      rotateY: -3,
                      transition: { duration: 0.3 }
                    }}
                  >
                    MOMENTS, GLOBALLY
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-base sm:text-xl text-white/80 max-w-2xl leading-relaxed font-light font-body"
                  initial={{ 
                    opacity: 0, 
                    y: -50, 
                    scale: 0.9,
                    rotateX: -30
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    rotateX: 0
                  }}
                  transition={{ 
                    delay: 1.0, 
                    duration: 1.2,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    color: "#fff",
                    transition: { duration: 0.3 }
                  }}
                >
                  Welcome to Shuaib Events Management L.L.C, your premier partner in turning ordinary moments into extraordinary memories. Based in the vibrant city of Dubai, we are a dynamic and innovative event management company that takes pride in offering a diverse range of services across 15 different event categories.
                </motion.p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                {[
                  '15+ DIFFERENT EVENT CATEGORIES',
                  'COMPREHENSIVE EVENT SOLUTIONS',
                  'GLOBAL REACH FROM DUBAI'
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <span className="text-sm sm:text-lg font-mono tracking-wider">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Logo Container with Enhanced Animations */}
                <motion.div
                  className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12 lg:p-16 overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  initial={{ rotateX: -15, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  {/* Animated Background Elements */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 border-2 border-white/20 clip-hexagon"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-24 h-24 border-2 border-white/10 clip-triangle"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* SEMS Logo */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-8xl lg:text-9xl font-bold mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.8, 
                        duration: 1.5, 
                        type: "spring", 
                        stiffness: 100 
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <span className="text-outline glitch-text">SEMS</span>
                    </motion.div>
                    
                    <motion.p
                      className="text-xl text-white/80 font-mono tracking-wider"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      EVENTS MANAGEMENT
                    </motion.p>
                    
                    <motion.p
                      className="text-sm text-white/60 font-mono mt-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                    >
                      Dubai, UAE
                    </motion.p>
                  </div>
                </motion.div>
                
                {/* Floating Stats with Enhanced Animation */}
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-white text-black p-6 rounded-2xl shadow-2xl"
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-8 h-8 mx-auto mb-2" />
                    </motion.div>
                    <p className="font-bold text-2xl">15+</p>
                    <p className="text-sm font-mono">CATEGORIES</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Revolutionary Layout */}
      <section className="py-32 bg-white text-black relative">
        <div className="absolute inset-0 grid-dots opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <Eye className="w-8 h-8" />
                <h2 className="text-4xl lg:text-6xl font-bold">
                  <span className="text-outline-black">OUR</span>
                  <span className="block text-black">MISSION</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-black/80 font-light">
                <p className="font-body">
                  Our commitment to excellence, creativity, and precision sets us apart as we strive to bring your visions to life on a global stage.
                </p>
                <p className="font-body">
                  We specialize in creating tailored experiences that align with your brand identity and goals. Our team handles logistics, vendor management, and on-site coordination, allowing you to focus on what matters most.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <Target className="w-8 h-8" />
                <h2 className="text-4xl lg:text-6xl font-bold">
                  <span className="text-outline-black">OUR</span>
                  <span className="block text-black">VISION</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-black/80 font-light">
                <p className="font-body">
                  To be the premier event management company that transforms ordinary moments into extraordinary memories, creating unforgettable experiences that resonate globally.
                </p>
                <p className="font-body">
                  We envision a future where every event we manage becomes a masterpiece of creativity, precision, and innovation, setting new standards in the industry while delivering exceptional value to our clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Geometric Grid */}
      <section className="py-32 bg-black text-white relative">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-1 bg-white"></div>
              <span className="font-mono text-sm tracking-[0.3em] text-white/60">OUR VALUES</span>
              <div className="w-16 h-1 bg-white"></div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-white">CORE</span>
              <span className="block text-outline">PRINCIPLES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:border-white/30 relative overflow-hidden">
                  <div className="relative z-10">
                    <value.icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-4 font-mono tracking-wider">{value.title}</h3>
                    <p className="text-white/80 leading-relaxed font-light font-body">{value.description}</p>
                  </div>
                  
                  {/* Animated Background Element */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 border-2 border-white/20 clip-triangle opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white text-black relative">
        <div className="absolute inset-0 grid-dots opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-1 bg-black"></div>
              <span className="font-mono text-sm tracking-[0.3em] text-black/60">OUR SERVICES</span>
              <div className="w-16 h-1 bg-black"></div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-black">COMPREHENSIVE</span>
              <span className="block text-outline-black">SOLUTIONS</span>
            </h2>
            <p className="text-xl text-black/60 max-w-3xl mx-auto mt-8 font-light font-body">
              From concept to execution, we offer a complete range of event management and marketing services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'EVENT MANAGEMENT',
                description: 'From concept to execution, our event management services cover everything. We specialize in creating tailored experiences that align with your brand identity and goals.',
                icon: '🎪',
                route: '/event-management'
              },
              {
                title: 'DIGITAL MARKETING',
                description: 'Enhance your brand visibility and engagement with our comprehensive digital marketing services including social media management, SEO, and paid advertising.',
                icon: '📱',
                route: '/digital-marketing'
              },
              {
                title: 'BRANDING & DESIGN',
                description: 'A cohesive and visually appealing brand is key to making a lasting impression. Our branding services encompass logo design, brand strategy, and graphic design.',
                icon: '🎨',
                route: '/branding-design'
              },
              {
                title: 'CONTENT CREATION',
                description: 'Engaging content is at the heart of successful marketing. Our team excels in producing compelling written, visual, and multimedia content.',
                icon: '✍️',
                route: '/content-creation'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(service.route)}
              >
                <div className="bg-black/5 backdrop-blur-sm border border-black/10 p-8 h-full hover:bg-black/10 transition-all duration-500 group-hover:border-black/30 relative overflow-hidden rounded-2xl">
                  <div className="relative z-10">
                    <motion.div 
                      className="text-4xl mb-6 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 font-mono tracking-wider group-hover:text-black/90 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-black/80 leading-relaxed font-light mb-6 group-hover:text-black/90 transition-colors font-body">
                      {service.description}
                    </p>
                    
                    {/* Click to navigate indicator */}
                    <motion.div 
                      className="flex items-center text-black/60 group-hover:text-black font-mono text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                  
                  {/* Animated Background Element */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 border-2 border-black/20 clip-triangle opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="block text-white">OUR</span>
              <span className="block text-outline">EXPERTISE</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto font-light font-body">
              Specialized event management across diverse categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(item.route)}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:border-white/30 relative overflow-hidden rounded-2xl">
                  <div className="relative z-10">
                    <motion.div 
                      className="text-4xl mb-6 group-hover:scale-110 transition-transform"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.2
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 font-mono tracking-wider group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed font-light mb-6 group-hover:text-white/90 transition-colors font-body">
                      {item.description}
                    </p>
                    
                    {/* Click to navigate indicator */}
                    <motion.div 
                      className="flex items-center text-white/60 group-hover:text-white font-mono text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="mr-2">Explore</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.div>
                  </div>
                  
                  {/* Animated Background Element */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 border-2 border-white/20 clip-triangle opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1))',
                      filter: 'blur(20px)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 bg-white text-black relative">
        <div className="absolute inset-0 grid-dots opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="block text-black">WHAT</span>
              <span className="block text-outline-black">WE DO</span>
            </h2>
            <p className="text-xl text-black/60 max-w-3xl mx-auto font-light font-body">
              Comprehensive event management services from planning to execution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Meticulous event planning and coordination',
              'Logistics management for seamless execution',
              'On-site coordination for a flawless experience',
              'Entertainment and content creation tailored to your audience',
              'Exquisite catering services with attention to detail',
              'Innovative decoration and design concepts',
              'Cutting-edge audio-visual services',
              'Strategic promotion and marketing initiatives',
              'Post-event evaluation for continuous improvement'
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 group cursor-pointer"
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  x: 10, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform"
                  whileHover={{ 
                    scale: 2,
                    backgroundColor: "#000",
                    boxShadow: "0 0 20px rgba(0,0,0,0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.p 
                  className="text-lg text-black/80 font-light leading-relaxed group-hover:text-black transition-colors font-body"
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Enhanced Stats */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-outline">OUR</span>
              <span className="block text-white">IMPACT</span>
            </h2>
            <p className="text-xl text-white/60 font-light font-body">
              Numbers that speak to our commitment to excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <motion.div
                  className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.h3 
                    className="text-5xl lg:text-7xl font-bold mb-2 font-mono group-hover:text-outline transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0 0 30px rgba(255,255,255,0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {achievement.number}
                  </motion.h3>
                  <motion.p 
                    className="text-sm font-mono tracking-[0.3em] text-white/60 group-hover:text-white/80 transition-colors"
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {achievement.label}
                  </motion.p>
                  
                  {/* Animated background element */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 border-2 border-white/20 clip-triangle opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;