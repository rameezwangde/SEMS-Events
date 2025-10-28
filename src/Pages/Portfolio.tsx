import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Calendar, MapPin, X, Star, Zap, ArrowRight, ExternalLink, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'ANDREA JEREMIAH LIVE IN DUBAI',
      category: 'ENTERTAINMENT',
      description: 'First ever live concert in Dubai featuring The Jeremiah Project, Amrut Suresh, DJ Black, and host Kuraishi. A high-energy night with first-class sound, lights and immersive visuals.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 2000,
        date: 'OCTOBER 2025',
        location: 'ETISALAT ACADEMY, DUBAI',
        duration: '4 HOURS'
      },
      testimonial: 'SEMS delivered an unforgettable South-Indian music spectacle that exceeded all expectations. The production quality was world-class.',
      rating: 5,
      tags: ['LIVE MUSIC', 'MULTILINGUAL', 'IMMERSIVE'],
      featured: true
    },
    {
      id: 2,
      title: 'DUBAI CORPORATE SUMMIT 2024',
      category: 'CORPORATE',
      description: 'International business conference featuring keynote speakers, networking sessions, and cutting-edge technology displays.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 500,
        date: 'MARCH 2024',
        location: 'DUBAI CONVENTION CENTER',
        duration: '2 DAYS'
      },
      testimonial: 'Flawless execution from start to finish. SEMS handled every detail with precision and professionalism.',
      rating: 5,
      tags: ['INTERNATIONAL', 'TECHNOLOGY', 'NETWORKING']
    },
    {
      id: 3,
      title: 'CULTURAL FESTIVAL DUBAI',
      category: 'CULTURAL',
      description: 'A vibrant celebration of diversity featuring traditional performances, art exhibitions, and cultural showcases from around the world.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 3000,
        date: 'NOVEMBER 2024',
        location: 'DUBAI FESTIVAL CITY',
        duration: '3 DAYS'
      },
      testimonial: 'An incredible celebration of cultures that brought our community together. SEMS made it magical.',
      rating: 5,
      tags: ['MULTICULTURAL', 'FESTIVAL', 'COMMUNITY']
    },
    {
      id: 4,
      title: 'DUBAI MARATHON 2024',
      category: 'SPORTS',
      description: 'Annual marathon event with professional runners, community participation, and comprehensive event management including logistics, timing, and entertainment.',
      image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 15000,
        date: 'JANUARY 2024',
        location: 'DUBAI MARINA',
        duration: '1 DAY'
      },
      testimonial: 'Outstanding event management for our marathon. Every detail was perfectly coordinated.',
      rating: 5,
      tags: ['SPORTS', 'COMMUNITY', 'LOGISTICS']
    },
    {
      id: 5,
      title: 'LUXURY WEDDING GALA',
      category: 'SOCIAL',
      description: 'An opulent wedding celebration featuring bespoke decor, premium catering, and personalized entertainment for a high-profile couple.',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 250,
        date: 'FEBRUARY 2024',
        location: 'BURJ AL ARAB',
        duration: '8 HOURS'
      },
      testimonial: 'SEMS created the wedding of our dreams. Every moment was perfect and unforgettable.',
      rating: 5,
      tags: ['LUXURY', 'WEDDING', 'BESPOKE']
    },
    {
      id: 6,
      title: 'TECH STARTUP SHOWCASE',
      category: 'CORPORATE',
      description: 'Innovation showcase featuring emerging tech companies, investor presentations, and networking opportunities in Dubai\'s tech ecosystem.',
      image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 400,
        date: 'SEPTEMBER 2024',
        location: 'DUBAI INTERNATIONAL FINANCIAL CENTRE',
        duration: '6 HOURS'
      },
      testimonial: 'Professional event management that helped our startup gain visibility and connections.',
      rating: 5,
      tags: ['STARTUP', 'INNOVATION', 'NETWORKING']
    },
    {
      id: 7,
      title: 'RAMADAN IFTAR GATHERING',
      category: 'CULTURAL',
      description: 'Community iftar event bringing together families and friends for a traditional Ramadan celebration with cultural performances and authentic cuisine.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 800,
        date: 'APRIL 2024',
        location: 'DUBAI CULTURE VILLAGE',
        duration: '5 HOURS'
      },
      testimonial: 'A beautiful celebration of tradition and community. SEMS made it truly special.',
      rating: 5,
      tags: ['RAMADAN', 'COMMUNITY', 'TRADITIONAL']
    },
    {
      id: 8,
      title: 'DUBAI FASHION WEEK',
      category: 'ENTERTAINMENT',
      description: 'Fashion week event featuring runway shows, designer showcases, and industry networking with international and local fashion brands.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 1200,
        date: 'MAY 2024',
        location: 'DUBAI MALL',
        duration: '4 DAYS'
      },
      testimonial: 'Exceptional production value and flawless execution. Our fashion week was a huge success.',
      rating: 5,
      tags: ['FASHION', 'RUNWAY', 'INDUSTRY']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Revolutionary Hero */}
      <section className="py-32 relative overflow-hidden">
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

      {/* Revolutionary Projects Grid */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  className="group cursor-pointer relative"
                  whileHover={{ 
                    y: -15, 
                    scale: 1.03,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden mb-6 rounded-2xl">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div 
                        className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 text-xs font-mono tracking-wider rounded-full"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        FEATURED
                      </motion.div>
                    )}
                    
                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs font-mono tracking-wider rounded-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.div>
                    
                    {/* Hover Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Eye className="w-12 h-12 mx-auto mb-4" />
                        </motion.div>
                        <span className="font-mono font-bold tracking-wider">VIEW PROJECT</span>
                      </div>
                    </motion.div>
                    
                    {/* Floating Stats */}
                    <motion.div 
                      className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0, rotate: 45 }}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <Users className="w-4 h-4 mx-auto mb-1" />
                        <p className="text-xs font-bold">{project.details.guests.toLocaleString()}</p>
                      </div>
                    </motion.div>
                    
                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100"
                      animate={{ 
                        borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.2)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <motion.h3 
                      className="text-base sm:text-lg lg:text-xl font-heading font-bold tracking-wide group-hover:text-gray-200 transition-all duration-300 mb-2 sm:mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ 
                        x: 5,
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 leading-relaxed font-body text-xs sm:text-sm lg:text-base mb-3 sm:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ 
                        color: "#d1d5db",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <motion.span 
                          key={i} 
                          className="text-xs font-mono-enhanced tracking-wider bg-gray-800/50 px-2 sm:px-3 py-1 rounded-full border border-gray-700/50"
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.1 + 0.4 }}
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "rgba(75, 85, 99, 0.8)",
                            borderColor: "rgba(156, 163, 175, 0.8)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-500 font-mono-enhanced space-y-1 sm:space-y-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ color: "#d1d5db" }}
                    >
                      <motion.div 
                        className="flex items-center space-x-2"
                        whileHover={{ x: 5 }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{project.details.date}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        {[...Array(project.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            <Star className="w-3 h-3 text-white fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                    
                    {/* Navigation Button */}
                    <motion.div 
                      className="flex items-center text-white/60 group-hover:text-white font-mono text-sm mt-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="mr-2">View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -30, y: 50 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 30, y: -50 }}
              transition={{ 
                duration: 0.6, 
                type: "spring", 
                stiffness: 100 
              }}
              className="bg-white text-black max-w-6xl w-full max-h-[90vh] overflow-y-auto relative rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Close Button */}
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors rounded-full"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Hero Section */}
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-white text-black px-3 py-1 text-sm font-mono tracking-wider">
                      {selectedProject.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(selectedProject.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-white fill-current" />
                      ))}
                    </div>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-mono tracking-wider">
                    {selectedProject.title}
                  </h1>
                  <p className="text-xl font-light max-w-2xl">{selectedProject.description}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Stats Grid */}
                  <div>
                    <h2 className="text-3xl font-bold mb-8 font-mono tracking-wider">PROJECT DETAILS</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-black/5 border border-black/10">
                        <Users className="w-10 h-10 mx-auto mb-3" />
                        <p className="text-sm text-black/60 font-mono">GUESTS</p>
                        <p className="text-3xl font-bold font-mono">{selectedProject.details.guests}</p>
                      </div>
                      <div className="text-center p-6 bg-black/5 border border-black/10">
                        <Calendar className="w-10 h-10 mx-auto mb-3" />
                        <p className="text-sm text-black/60 font-mono">DATE</p>
                        <p className="text-lg font-bold font-mono">{selectedProject.details.date}</p>
                      </div>
                      <div className="text-center p-6 bg-black/5 border border-black/10">
                        <MapPin className="w-10 h-10 mx-auto mb-3" />
                        <p className="text-sm text-black/60 font-mono">LOCATION</p>
                        <p className="text-lg font-bold font-mono">{selectedProject.details.location}</p>
                      </div>
                      <div className="text-center p-6 bg-black/5 border border-black/10">
                        <Zap className="w-10 h-10 mx-auto mb-3" />
                        <p className="text-sm text-black/60 font-mono">DURATION</p>
                        <p className="text-lg font-bold font-mono">{selectedProject.details.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div>
                    <h2 className="text-3xl font-bold mb-8 font-mono tracking-wider">CLIENT FEEDBACK</h2>
                    <div className="bg-black text-white p-8 relative">
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(selectedProject.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-white fill-current" />
                        ))}
                      </div>
                      <p className="text-xl italic mb-6 font-light leading-relaxed">
                        "{selectedProject.testimonial}"
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-8">
                        {selectedProject.tags.map((tag: string, i: number) => (
                          <span key={i} className="text-xs font-mono tracking-wider bg-white/20 px-3 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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