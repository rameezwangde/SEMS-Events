import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Calendar, MapPin, X, Filter, Star, Eye, Zap } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['ALL', 'WEDDINGS', 'CORPORATE', 'SOCIAL', 'CONFERENCES'];

  const projects = [
    {
      id: 1,
      title: 'ETHEREAL GARDEN WEDDING',
      category: 'WEDDINGS',
      description: 'A romantic outdoor ceremony featuring cascading florals, ambient lighting, and bespoke installations.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 180,
        date: 'JUNE 2024',
        location: 'GARDEN VALLEY ESTATE',
        budget: '$45,000'
      },
      testimonial: 'SEMS Events transformed our wedding into pure magic. Every detail was flawlessly executed.',
      rating: 5,
      tags: ['LUXURY', 'OUTDOOR', 'FLORAL DESIGN']
    },
    {
      id: 2,
      title: 'TECH INNOVATION SUMMIT',
      category: 'CORPORATE',
      description: 'A cutting-edge technology conference with interactive displays and immersive brand experiences.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 750,
        date: 'MARCH 2024',
        location: 'CONVENTION CENTER',
        budget: '$95,000'
      },
      testimonial: 'Professional execution from concept to completion. Exceeded all expectations.',
      rating: 5,
      tags: ['TECHNOLOGY', 'CORPORATE', 'INTERACTIVE']
    },
    {
      id: 3,
      title: 'GOLDEN ANNIVERSARY GALA',
      category: 'SOCIAL',
      description: 'An elegant 50th wedding anniversary celebration with sophisticated decor and personalized touches.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 120,
        date: 'SEPTEMBER 2024',
        location: 'GRAND BALLROOM',
        budget: '$32,000'
      },
      testimonial: 'They captured our 50 years together beautifully. Absolutely perfect evening.',
      rating: 5,
      tags: ['ANNIVERSARY', 'ELEGANT', 'PERSONALIZED']
    },
    {
      id: 4,
      title: 'MEDICAL SYMPOSIUM 2024',
      category: 'CONFERENCES',
      description: 'International medical conference featuring state-of-the-art technology and seamless logistics.',
      image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 450,
        date: 'OCTOBER 2024',
        location: 'MEDICAL CENTER',
        budget: '$78,000'
      },
      testimonial: 'Exceptional attention to detail and flawless coordination throughout the event.',
      rating: 5,
      tags: ['MEDICAL', 'INTERNATIONAL', 'TECHNOLOGY']
    },
    {
      id: 5,
      title: 'CORPORATE AWARDS GALA',
      category: 'CORPORATE',
      description: 'An exclusive black-tie awards ceremony with dramatic lighting and premium entertainment.',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 300,
        date: 'DECEMBER 2024',
        location: 'FIVE STAR HOTEL',
        budget: '$68,000'
      },
      testimonial: 'A night to remember! The production value was absolutely incredible.',
      rating: 5,
      tags: ['BLACK-TIE', 'AWARDS', 'PREMIUM']
    },
    {
      id: 6,
      title: 'SUNSET BEACH WEDDING',
      category: 'WEDDINGS',
      description: 'An intimate seaside ceremony at golden hour with minimalist elegance and natural beauty.',
      image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        guests: 85,
        date: 'AUGUST 2024',
        location: 'SUNSET BEACH',
        budget: '$35,000'
      },
      testimonial: 'Our dream beach wedding came to life exactly as we envisioned. Perfect!',
      rating: 5,
      tags: ['BEACH', 'INTIMATE', 'MINIMALIST']
    }
  ];

  const filteredProjects = selectedCategory === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center perspective-3d">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-8"
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
              <div className="w-16 h-1 bg-white"></div>
              <span className="font-mono text-sm tracking-[0.3em] text-white/60">OUR PORTFOLIO</span>
              <div className="w-16 h-1 bg-white"></div>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-none">
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
                EXTRAORDINARY
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
                EXPERIENCES
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto font-light px-4"
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
                delay: 0.8, 
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
              A curated showcase of our most innovative and memorable events that demonstrate 
              our commitment to excellence and creative vision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Filter Section */}
      <section className="py-16 bg-white text-black sticky top-20 z-40 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Filter className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-mono text-base sm:text-lg tracking-wider font-bold">FILTER PROJECTS</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-mono text-xs sm:text-sm tracking-wider">{filteredProjects.length} PROJECTS</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-8 py-3 sm:py-4 font-mono font-bold tracking-wider transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-black/10 text-black hover:bg-black/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Projects Grid */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer relative"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover clip-diagonal group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs font-mono tracking-wider">
                      {project.category}
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <Eye className="w-12 h-12 mx-auto mb-4" />
                        <span className="font-mono font-bold tracking-wider">VIEW PROJECT</span>
                      </div>
                    </div>
                    
                    {/* Floating Stats */}
                    <div className="absolute bottom-4 right-4 bg-white text-black p-3 clip-hexagon opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <Users className="w-4 h-4 mx-auto mb-1" />
                        <p className="text-xs font-bold">{project.details.guests}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-mono tracking-wider group-hover:text-outline transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed font-light">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-mono tracking-wider bg-white/10 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-white/60 font-mono">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.details.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-white fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Project Modal */}
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
              initial={{ scale: 0.8, opacity: 0, rotateX: -30 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 30 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-black max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors clip-hexagon"
              >
                <X className="w-6 h-6" />
              </button>

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
                        <p className="text-sm text-black/60 font-mono">INVESTMENT</p>
                        <p className="text-lg font-bold font-mono">{selectedProject.details.budget}</p>
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
                        {selectedProject.tags.map((tag, i) => (
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
    </div>
  );
};

export default Portfolio;