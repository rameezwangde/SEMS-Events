import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ArrowRight, Users, Award, Calendar, Zap, Eye, Target, Sparkles, MapPin, ChevronDown, Play } from 'lucide-react';
import TicketBookingModal from '../components/TicketBookingModal';

// Simple image component with lazy loading
const LazyImage = ({ src, alt, className, priority }: any) => (
  <img 
    src={src} 
    alt={alt} 
    className={className}
    loading={priority ? 'eager' : 'lazy'}
    decoding="async"
  />
);

const Home = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

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

  const stats = [
    { number: '847', label: 'EVENTS EXECUTED', icon: Calendar },
    { number: '12K+', label: 'SATISFIED CLIENTS', icon: Users },
    { number: '23', label: 'INDUSTRY AWARDS', icon: Award },
    { number: '4.9', label: 'GOOGLE RATING', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
      {/* Featured Event Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 clip-hexagon"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 clip-triangle"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
              <div className="w-8 sm:w-16 h-1 bg-white"></div>
              <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/60">FEATURED EVENT</span>
              <div className="w-8 sm:w-16 h-1 bg-white"></div>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="block text-white">ANDREA JEREMIAH</span>
              <span className="block text-outline">LIVE IN DUBAI</span>
            </h2>
            
            <p className="text-sm sm:text-xl text-white/80 mb-6 sm:mb-8 font-mono tracking-wider px-4">
              FT. THE JEREMIAH PROJECT | AMRUTH SURESH | DJ BLACK | HOST KURAISHI
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                <span className="font-mono text-sm sm:text-base text-white/80">Saturday, 18 Oct 2025</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                <span className="font-mono text-sm sm:text-base text-white/80">Etisalat Academy • Dubai</span>
              </div>
            </div>
            
            <motion.button
              className="bg-white text-black px-6 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 group mx-auto cursor-pointer relative z-10"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsTicketModalOpen(true)}
              style={{ pointerEvents: 'auto' }}
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          
          {/* Event Image Section */}
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative overflow-hidden clip-diagonal group">
              <div className="aspect-video relative">
                {/* Event Image */}
                <LazyImage
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
                  alt="Andrea Jeremiah Live in Dubai - First Ever Live Concert in Dubai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={true}
                />
                
                {/* Event Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-white font-mono text-sm tracking-wider mb-2">ANDREA JEREMIAH - FIRST EVER LIVE CONCERT IN DUBAI</p>
                    <p className="text-white/80 font-mono text-xs">Saturday, 18 Oct 2025 · from 6:00 PM — Etisalat Academy, Exit 60 – E311, Dubai</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white text-black p-6 clip-hexagon"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <Star className="w-6 h-6 mx-auto mb-2" />
                <p className="font-bold text-lg">SOLD OUT</p>
                <p className="text-sm font-mono">PREVIOUS SHOWS</p>
              </div>
            </motion.div>
            
            {/* Additional Event Image */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 overflow-hidden clip-hexagon"
              animate={{ rotate: 5 }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <LazyImage
                src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Andrea Jeremiah Performance"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 clip-hexagon"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 clip-triangle"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center min-h-screen py-16 sm:py-0">
            {/* Left Content - Avant-garde Typography */}
            <motion.div
              className="lg:col-span-7 space-y-6 sm:space-y-8 perspective-3d"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-1 sm:w-2 h-12 sm:h-16 bg-white"></div>
                  <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/60">PREMIUM EVENT MANAGEMENT</span>
                </motion.div>

                <div className="space-y-4">
                  <motion.h1
                    className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
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
                        delay: 0.5, 
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
                      WE
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
                        delay: 0.7, 
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
                      CREATE
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
                        delay: 0.9, 
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
                      MOMENTS
                    </motion.span>
                  </motion.h1>
                  
                  <motion.div
                    className="flex items-center space-x-4"
                    initial={{ 
                      opacity: 0, 
                      x: -50, 
                      y: -80,
                      scale: 0.8,
                      rotateX: -45
                    }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      y: 0,
                      scale: 1,
                      rotateX: 0
                    }}
                    transition={{ 
                      delay: 1.1, 
                      duration: 1.2,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      x: 10,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        rotate: -180
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        rotate: 0
                      }}
                      transition={{ 
                        delay: 1.3, 
                        duration: 0.8,
                        ease: "easeOut",
                        type: "spring"
                      }}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.span 
                      className="text-2xl font-mono tracking-wider"
                      initial={{ 
                        opacity: 0, 
                        y: -60,
                        scale: 0.9
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: 1
                      }}
                      transition={{ 
                        delay: 1.4, 
                        duration: 1,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        color: "#fff",
                        transition: { duration: 0.2 }
                      }}
                    >
                      THAT MATTER
                    </motion.span>
                  </motion.div>
                </div>

                <motion.p
                  className="text-base sm:text-xl text-white/80 max-w-2xl leading-relaxed font-light"
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
                    delay: 1.5, 
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
                  Transforming visions into extraordinary experiences through innovative design, 
                  flawless execution, and uncompromising attention to detail.
                </motion.p>
              </div>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8"
                initial={{ 
                  opacity: 0, 
                  y: -60, 
                  scale: 0.8,
                  rotateX: -20
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0
                }}
                transition={{ 
                  delay: 1.7, 
                  duration: 1.2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80
                }}
              >
                <Link
                  to="/contact"
                  className="btn-minimal group"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>START YOUR EVENT</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/portfolio"
                  className="btn-ghost group"
                >
                  <span className="flex items-center space-x-3">
                    <Eye className="w-5 h-5" />
                    <span>VIEW PORTFOLIO</span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Layered Image Design */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="relative h-[600px]">
                {/* Background Layer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Main Image - Circular Design */}
                <motion.div
                  className="absolute top-8 left-8 w-80 h-80 rounded-full overflow-hidden shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <LazyImage
                    src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="SEMS Events"
                    className="w-full h-full object-cover"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </motion.div>

                {/* Secondary Image - Hexagonal */}
                <motion.div
                  className="absolute bottom-8 right-8 w-48 h-48 overflow-hidden clip-hexagon shadow-xl"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <LazyImage
                    src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Event Performance"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Tertiary Image - Diamond Shape */}
                <motion.div
                  className="absolute top-1/2 right-4 w-32 h-32 overflow-hidden clip-diamond shadow-lg"
                  animate={{ 
                    x: [-3, 3, -3],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: -15,
                    transition: { duration: 0.3 }
                  }}
                >
                  <LazyImage
                    src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Concert Stage"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Stats Card - New Position */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white text-black p-4 rounded-2xl shadow-2xl"
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="font-bold text-sm">4.9/5 RATING</p>
                  <p className="text-xs opacity-70">300+ REVIEWS</p>
                </motion.div>

                {/* Animated Geometric Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                <motion.div
                  className="absolute bottom-1/3 left-4 w-8 h-8 bg-white/20 clip-triangle"
                  animate={{ 
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />

                {/* Connection Lines */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-b from-white/40 to-transparent"
                  animate={{ 
                    scaleY: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revolutionary Stats Section */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-outline-black">PROVEN</span>
              <span className="block text-black">EXCELLENCE</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4 sm:mb-6">
                  <stat.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <motion.div
                    className="absolute inset-0 border-2 border-black/20 clip-hexagon opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-1 sm:mb-2 font-mono">{stat.number}</h3>
                <p className="text-xs sm:text-sm font-mono tracking-wider opacity-70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Google Reviews */}
      <section className="py-32 bg-black text-white relative">
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
      </section>

      {/* Interactive Process Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        
        {/* Simplified Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-white/10 clip-hexagon"
          animate={{ 
            rotate: 360
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 clip-triangle"
          animate={{ 
            rotate: -360
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />
        
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
            
            {/* Interactive Play Button */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isPlaying ? <ChevronDown className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.div>
                <span className="font-mono text-sm tracking-wider">
                  {isPlaying ? 'PAUSE' : 'PLAY'} ANIMATION
                </span>
              </motion.button>
            </motion.div>
            
            <motion.h2 
              className="text-5xl lg:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
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
            
            {/* SEMS Image */}
            <motion.div 
              className="mb-12 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative max-w-md">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://tse3.mm.bing.net/th/id/OIP.X7j2EaIpWdgwo2BNYZ3ofAHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="SEMS Events"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Star className="w-4 h-4 text-black" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [5, -5, 5],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Sparkles className="w-3 h-3 text-black" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
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
                  initial={{ opacity: 0, x: step.position === 'left' ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                  animate={isPlaying ? {
                    scale: [1, 1.02, 1],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.15,
                      ease: "easeInOut"
                    }
                  } : {}}
                >
                  {/* Content Section */}
                  <div className={`w-full lg:w-5/12 ${step.position === 'left' ? 'text-center lg:text-right pr-0 lg:pr-12' : 'text-center lg:text-left pl-0 lg:pl-12'} mb-8 lg:mb-0`}>
                    <motion.div 
                      className={`space-y-6 group-hover:space-y-8 transition-all duration-300 ${
                        activeStep === index ? 'bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20' : ''
                      }`}
                      whileHover={{ 
                        x: step.position === 'left' ? -10 : 10,
                        transition: { duration: 0.3 }
                      }}
                      animate={activeStep === index ? {
                        scale: 1.02,
                        backgroundColor: "rgba(255,255,255,0.05)",
                        transition: { duration: 0.3 }
                      } : {}}
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
                          transition: { duration: 0.2 }
                        }}
                      >
                        {step.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-white/80 leading-relaxed font-light text-lg"
                        whileHover={{ 
                          color: "#fff",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {step.description}
                      </motion.p>
                      
                      {/* Interactive hover effect */}
                      <motion.div
                        className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
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
                      {/* Animated background ring */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-30 rounded-full blur-md`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      />
                      
                      {/* Main hexagon */}
                      <motion.div 
                        className="relative w-20 h-20 bg-white text-black flex items-center justify-center font-bold text-xl clip-hexagon shadow-2xl"
                        whileHover={{ 
                          rotate: 360,
                          transition: { duration: 0.5 }
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
                        transition={{ delay: index * 0.05 + 0.3, duration: 0.4 }}
                        viewport={{ once: true }}
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
      <section className="py-32 bg-white text-black relative overflow-hidden">
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

      {/* Ticket Booking Modal */}
      <TicketBookingModal 
        isOpen={isTicketModalOpen} 
        onClose={() => setIsTicketModalOpen(false)} 
      />
    </div>
  );
};

export default Home;