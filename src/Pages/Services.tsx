import { motion } from 'motion/react';
import { Calendar, Megaphone, Shield, Camera, ArrowRight, Zap, Star, Users, CheckCircle } from 'lucide-react';

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

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'EVENT MANAGEMENT',
      description: 'From concept to execution, our event management services cover everything. We specialize in creating tailored experiences that align with your brand identity and goals. Our team handles logistics, vendor management, and on-site coordination, allowing you to focus on what matters.',
      features: ['CONFERENCE MANAGEMENT', 'BRAND ACTIVATIONS', 'PRODUCT LAUNCHES', 'EXECUTIVE RETREATS', 'NETWORKING EVENTS'],
      duration: 'FULL SERVICE',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlight: 'PREMIUM'
    },
    {
      icon: Megaphone,
      title: 'DIGITAL MARKETING',
      description: 'In the digital age, a strong online presence is crucial for success. Our digital marketing services are designed to enhance your brand visibility and engagement. Whether it\'s social media management, content creation, search engine optimization (SEO), or paid advertising, we employ a holistic approach to maximize your digital impact.',
      features: ['SOCIAL MEDIA MANAGEMENT', 'CONTENT CREATION', 'SEO OPTIMIZATION', 'PAID ADVERTISING', 'BRAND VISIBILITY'],
      duration: 'MONTHLY PACKAGES',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlight: 'DIGITAL'
    },
    {
      icon: Shield,
      title: 'BRANDING & DESIGN',
      description: 'A cohesive and visually appealing brand is key to making a lasting impression. Our branding and design services encompass logo design, brand strategy, and graphic design, ensuring that your brand communicates its unique identity effectively.',
      features: ['LOGO DESIGN', 'BRAND STRATEGY', 'GRAPHIC DESIGN', 'VISUAL IDENTITY', 'BRAND COMMUNICATION'],
      duration: 'PROJECT BASED',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlight: 'CREATIVE'
    },
    {
      icon: Camera,
      title: 'CONTENT CREATION',
      description: 'Engaging content is at the heart of successful marketing. Our team of content creators excels in producing compelling written, visual, and multimedia content that resonates with your target audience, driving engagement and loyalty.',
      features: ['WRITTEN CONTENT', 'VISUAL CONTENT', 'MULTIMEDIA PRODUCTION', 'AUDIENCE ENGAGEMENT', 'CONTENT STRATEGY'],
      duration: 'FLEXIBLE TERMS',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlight: 'ENGAGING'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'DISCOVERY',
      description: 'Deep dive consultation to understand your vision, objectives, and unique requirements.',
      icon: '🎯'
    },
    {
      step: '02',
      title: 'CONCEPTUALIZATION',
      description: 'Creative development of concepts, themes, and comprehensive event strategy.',
      icon: '💡'
    },
    {
      step: '03',
      title: 'ORCHESTRATION',
      description: 'Meticulous planning, vendor coordination, and timeline management.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'EXECUTION',
      description: 'Flawless event delivery with real-time management and quality assurance.',
      icon: '✨'
    }
  ];

  const addOns = [
    'CUSTOM LIGHTING DESIGN',
    'LIVE STREAMING PRODUCTION',
    'INTERACTIVE TECHNOLOGY',
    'SUSTAINABILITY CONSULTING',
    'POST-EVENT ANALYTICS',
    'BRAND INTEGRATION'
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Revolutionary Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        {/* Enhanced Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 border-2 border-white/20 clip-triangle"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear",
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white/20 clip-hexagon"
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-white/5 clip-hexagon"
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-12 h-12 border border-white/30 clip-triangle"
          animate={{ 
            x: [-10, 10, -10],
            rotate: [0, -180, -360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center perspective-3d">
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
              <motion.div 
                className="w-16 h-1 bg-white"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.span 
                className="font-mono text-sm tracking-[0.3em] text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                OUR SERVICES
              </motion.span>
              <motion.div 
                className="w-16 h-1 bg-white"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
            
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-8 leading-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
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
                OUR
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
                SERVICES
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 max-w-3xl mx-auto font-light"
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
                delay: 0.9, 
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
              From event management to digital marketing, we provide comprehensive solutions 
              that elevate your brand and create unforgettable experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Revolutionary Layout */}
      <section className="py-32 bg-white text-black relative">
        <div className="absolute inset-0 grid-dots opacity-10"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-black/5 clip-hexagon"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Image Section */}
                <motion.div 
                  className={`lg:col-span-6 relative group ${index % 2 === 1 ? 'lg:col-start-7' : ''}`}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative overflow-hidden">
                    <LazyImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 lg:h-[500px] object-cover clip-diagonal"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Service Highlight Badge */}
                    <motion.div 
                      className="absolute top-6 left-6 bg-white text-black px-4 py-2 font-mono text-sm tracking-wider"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#000",
                        color: "#fff",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {service.highlight}
                    </motion.div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      className="absolute -bottom-6 -right-6 w-16 h-16 bg-black text-white flex items-center justify-center clip-hexagon"
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  className={`lg:col-span-6 space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-2 h-12 bg-black"
                        whileHover={{ scaleY: 1.2 }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.h3 
                        className="text-4xl lg:text-5xl font-bold font-mono tracking-wider"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                    </motion.div>
                    
                    <motion.p 
                      className="text-xl text-black/70 leading-relaxed font-light"
                      whileHover={{ color: "#000" }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Features Grid */}
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center space-x-3 group cursor-pointer"
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 + i * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 360,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <CheckCircle className="w-5 h-5 text-black flex-shrink-0 group-hover:text-green-600 transition-colors duration-300" />
                        </motion.div>
                        <motion.span 
                          className="text-black/80 font-mono text-sm tracking-wider group-hover:text-black transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Service Type and CTA */}
                  <motion.div 
                    className="flex items-center justify-between pt-8 border-t border-black/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span 
                        className="text-2xl font-bold font-mono"
                        whileHover={{ color: "#000" }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.duration}
                      </motion.span>
                      <p className="text-sm text-black/60 font-mono">SERVICE TYPE</p>
                    </motion.div>
                    <motion.button 
                      className="bg-black text-white px-8 py-4 font-bold hover:bg-black/80 transition-all duration-300 flex items-center space-x-3 group"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        // Redirect to specific service page or contact page
                        if (service.title === 'EVENT MANAGEMENT') {
                          window.location.href = '/event-management';
                        } else if (service.title === 'DIGITAL MARKETING') {
                          window.location.href = '/digital-marketing';
                        } else if (service.title === 'BRANDING & DESIGN') {
                          window.location.href = '/branding-design';
                        } else if (service.title === 'CONTENT CREATION') {
                          window.location.href = '/content-creation';
                        } else {
                          window.location.href = '/contact?service=' + encodeURIComponent(service.title);
                        }
                      }}
                    >
                      <span>GET QUOTE</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Vertical Timeline */}
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
              <Zap className="w-8 h-8" />
              <span className="font-mono text-sm tracking-[0.3em] text-white/60">OUR PROCESS</span>
              <Zap className="w-8 h-8" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-white">HOW WE</span>
              <span className="block text-outline">CREATE MAGIC</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20"></div>
            
            <div className="space-y-20">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="space-y-4">
                      <div className="text-6xl mb-4">{step.icon}</div>
                      <h3 className="text-2xl font-bold font-mono tracking-wider">{step.title}</h3>
                      <p className="text-white/80 leading-relaxed font-light">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-bold text-xl clip-hexagon">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="block text-black">PREMIUM</span>
              <span className="block text-outline-black">ADD-ONS</span>
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto font-light">
              Enhance your event with our specialized services and cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                className="bg-black/5 border border-black/10 p-6 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono tracking-wider font-medium">{addon}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <Star className="w-16 h-16 mx-auto mb-6" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white">READY TO</span>
              <span className="block text-outline">START?</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
              Let's discuss your vision and create an extraordinary experience together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-minimal group">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>GET CONSULTATION</span>
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
              <button className="btn-ghost group">
                <span className="flex items-center space-x-3">
                  <span>VIEW PORTFOLIO</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;