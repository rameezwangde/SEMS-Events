import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Trophy, Music, GraduationCap, Heart, Building, Lightbulb, Store, Shirt, Activity, Leaf, MapPin, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';

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

const EventManagement = () => {
  const navigate = useNavigate();
  const eventTypes = [
    {
      icon: Building,
      title: 'CORPORATE EVENTS',
      description: 'Corporate event management involves meticulous planning to ensure successful execution. From coordinating schedules to managing vendors, every detail must be carefully considered. Effective communication is key to ensuring all stakeholders are on the same page, from clients to suppliers.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['SCHEDULE COORDINATION', 'VENDOR MANAGEMENT', 'STAKEHOLDER COMMUNICATION', 'DETAILED PLANNING', 'SUCCESSFUL EXECUTION'],
      highlight: 'PROFESSIONAL'
    },
    {
      icon: Users,
      title: 'SOCIAL EVENTS',
      description: 'Social event management involves coordinating various aspects like venue selection, catering, and entertainment. It requires attention to detail and effective communication with vendors and attendees. Successful event management leads to a smooth and enjoyable experience for all participants.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['VENUE SELECTION', 'CATERING COORDINATION', 'ENTERTAINMENT PLANNING', 'ATTENDEE MANAGEMENT', 'SMOOTH EXECUTION'],
      highlight: 'SOCIAL'
    },
    {
      icon: Star,
      title: 'CULTURAL EVENTS',
      description: 'Cultural event management involves coordinating logistics and activities for cultural gatherings and celebrations. It is essential to consider factors like venue selection, program planning, and participant engagement. Effective management ensures a seamless and memorable experience for attendees.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['CULTURAL LOGISTICS', 'PROGRAM PLANNING', 'PARTICIPANT ENGAGEMENT', 'VENUE COORDINATION', 'MEMORABLE EXPERIENCES'],
      highlight: 'CULTURAL'
    },
    {
      icon: Trophy,
      title: 'SPORTS EVENTS',
      description: 'Sport event management involves meticulous planning and coordination to ensure smooth execution. From booking venues to coordinating with sponsors, every detail must be carefully orchestrated. Effective communication and quick problem-solving skills are crucial in handling unexpected challenges.',
      image: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['VENUE BOOKING', 'SPONSOR COORDINATION', 'PROBLEM SOLVING', 'TEAM COORDINATION', 'SMOOTH EXECUTION'],
      highlight: 'SPORTS'
    },
    {
      icon: Music,
      title: 'ENTERTAINMENT EVENTS',
      description: 'Entertainment event management involves coordinating a variety of activities, from live performances to interactive exhibits. This diversity ensures there is something for everyone attending the event.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['LIVE PERFORMANCES', 'INTERACTIVE EXHIBITS', 'DIVERSE ACTIVITIES', 'AUDIENCE ENGAGEMENT', 'MEMORABLE EXPERIENCES'],
      highlight: 'ENTERTAINMENT'
    },
    {
      icon: GraduationCap,
      title: 'EDUCATIONAL EVENTS',
      description: 'Organizing educational events requires meticulous planning. From selecting speakers to coordinating schedules, each detail must be carefully managed. Effective event management ensures smooth execution and a valuable learning experience for attendees.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['SPEAKER SELECTION', 'SCHEDULE COORDINATION', 'DETAILED PLANNING', 'LEARNING EXPERIENCE', 'SMOOTH EXECUTION'],
      highlight: 'EDUCATIONAL'
    },
    {
      icon: Heart,
      title: 'CHARITY & FUNDRAISING EVENTS',
      description: 'Managing charity events requires careful planning and organization. From coordinating volunteers to securing donations, each aspect plays a crucial role in the success of the event. Effective management ensures that the funds raised can make a significant impact on the cause being supported.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['VOLUNTEER COORDINATION', 'DONATION SECURING', 'CAUSE IMPACT', 'CAREFUL PLANNING', 'SUCCESSFUL FUNDRAISING'],
      highlight: 'CHARITY'
    },
    {
      icon: Users,
      title: 'COMMUNITY EVENTS',
      description: 'Community event management involves coordinating various aspects like scheduling, logistics, and communication. It requires attention to detail and strong organizational skills. Effective management ensures that the event runs smoothly and all participants have a positive experience.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['SCHEDULING COORDINATION', 'LOGISTICS MANAGEMENT', 'COMMUNICATION', 'ORGANIZATIONAL SKILLS', 'POSITIVE EXPERIENCES'],
      highlight: 'COMMUNITY'
    },
    {
      icon: Building,
      title: 'GOVERNMENT EVENTS',
      description: 'Government event management involves meticulous planning and coordination. Attention to detail is crucial for ensuring the success of events. From securing venues to managing logistics, every aspect must be carefully considered. Effective communication among all stakeholders is essential for a seamless execution.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['MILITARY PLANNING', 'VENUE SECURING', 'LOGISTICS MANAGEMENT', 'STAKEHOLDER COMMUNICATION', 'SEAMLESS EXECUTION'],
      highlight: 'GOVERNMENT'
    },
    {
      icon: Lightbulb,
      title: 'EXPERIENTIAL MARKETING EVENTS',
      description: 'Experiential marketing events require careful planning. These events aim to create engaging and memorable experiences for consumers. By incorporating interactive elements and immersive environments, event managers can effectively promote brands and products.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['INTERACTIVE ELEMENTS', 'IMMERSIVE ENVIRONMENTS', 'BRAND PROMOTION', 'CONSUMER ENGAGEMENT', 'MEMORABLE EXPERIENCES'],
      highlight: 'MARKETING'
    },
    {
      icon: Store,
      title: 'TRADE & INDUSTRY SHOWS',
      description: 'Trade and industry event management involves meticulous planning and execution. It requires attention to detail and coordination among various stakeholders. From securing the right venue to managing logistics and ensuring a smooth flow of activities, every aspect plays a crucial role in the success of the event.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['VENUE SECURING', 'LOGISTICS MANAGEMENT', 'STAKEHOLDER COORDINATION', 'SMOOTH ACTIVITIES', 'SUCCESSFUL EXECUTION'],
      highlight: 'TRADE'
    },
    {
      icon: Shirt,
      title: 'FASHION SHOWS',
      description: 'Fashion event management involves coordinating various elements to create a successful and memorable show. From selecting the right venue and designing the layout to managing guest lists and coordinating with designers, every detail plays a crucial role in the overall success of the event.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['VENUE SELECTION', 'LAYOUT DESIGN', 'GUEST MANAGEMENT', 'DESIGNER COORDINATION', 'CREATIVE EXECUTION'],
      highlight: 'FASHION'
    },
    {
      icon: Activity,
      title: 'HEALTH & WELLNESS EVENTS',
      description: 'Health and wellness event management involves coordinating activities that promote physical and mental well-being. From organizing fitness classes to arranging mindfulness workshops, these events aim to enhance overall health. Providing a platform for professionals to share knowledge and resources.',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['FITNESS CLASSES', 'MINDFULNESS WORKSHOPS', 'HEALTH PROMOTION', 'PROFESSIONAL PLATFORMS', 'WELLNESS ENHANCEMENT'],
      highlight: 'WELLNESS'
    },
    {
      icon: Leaf,
      title: 'ENVIRONMENTAL EVENTS',
      description: 'Environmental events like wildfires or hurricanes can have a significant impact on the ecosystem. These events can disrupt the balance of various species and habitats, leading to long-term consequences. Our management ensures proper coordination and awareness.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['ECOSYSTEM AWARENESS', 'ENVIRONMENTAL COORDINATION', 'SUSTAINABILITY FOCUS', 'EDUCATIONAL IMPACT', 'CONSCIOUS PLANNING'],
      highlight: 'ENVIRONMENTAL'
    },
    {
      icon: MapPin,
      title: 'DESTINATION EVENTS',
      description: 'Hosting destination events can be a great way to create memorable experiences for attendees. It allows for unique settings and activities that can enhance the overall event experience. The change of scenery can also inspire creativity and foster new connections among participants.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['UNIQUE SETTINGS', 'MEMORABLE EXPERIENCES', 'CREATIVITY INSPIRATION', 'NEW CONNECTIONS', 'ENHANCED ENGAGEMENT'],
      highlight: 'DESTINATION'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'CONSULTATION',
      description: 'We begin with a comprehensive consultation to understand your vision, objectives, and specific requirements for your event.',
      icon: '🎯'
    },
    {
      step: '02',
      title: 'PLANNING',
      description: 'Our team creates a detailed event plan including timeline, budget, vendor coordination, and logistics management.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'COORDINATION',
      description: 'We handle all aspects of coordination including venue setup, vendor management, and real-time event oversight.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'EXECUTION',
      description: 'Flawless event delivery with professional management, ensuring every detail is executed to perfection.',
      icon: '✨'
    }
  ];

  const whyChooseUs = [
    '15+ YEARS EXPERIENCE',
    '500+ SUCCESSFUL EVENTS',
    '24/7 SUPPORT',
    'CUSTOM SOLUTIONS',
    'BUDGET FLEXIBILITY',
    'PROVEN TRACK RECORD'
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        {/* Floating Elements */}
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
                EVENT MANAGEMENT
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
                COMPREHENSIVE
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
                SOLUTIONS
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed"
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
              From concept to execution, our event management services cover everything. We specialize in creating tailored experiences that align with your brand identity and goals. Our team handles logistics, vendor management, and on-site coordination, allowing you to focus on what matters most – your guests and the overall success of your event.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Event Types Grid */}
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
              <Calendar className="w-8 h-8" />
              <span className="font-mono text-sm tracking-[0.3em] text-black/60">EVENT TYPES</span>
              <Calendar className="w-8 h-8" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-black">OUR SPECIALIZED</span>
              <span className="block text-outline-black">SERVICES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="bg-white border border-black/10 overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:border-black/30">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <LazyImage
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={index < 6}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Event Type Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-white text-black px-3 py-1 font-mono text-xs tracking-wider"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#000",
                        color: "#fff",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {event.highlight}
                    </motion.div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 w-12 h-12 bg-black text-white flex items-center justify-center clip-hexagon"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <event.icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    <motion.h3 
                      className="text-xl font-bold font-mono tracking-wider group-hover:text-black/80 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {event.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-black/70 leading-relaxed text-sm"
                      whileHover={{ color: "#000" }}
                      transition={{ duration: 0.2 }}
                    >
                      {event.description}
                    </motion.p>

                    {/* Features */}
                    <div className="space-y-2">
                      {event.features.slice(0, 3).map((feature, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center space-x-2"
                          whileHover={{ 
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 + i * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                          <span className="text-xs font-mono tracking-wider text-black/80">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              <span className="block text-outline">EXECUTE</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="space-y-6">
                  <motion.div 
                    className="text-6xl mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-bold text-xl clip-hexagon mx-auto">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold font-mono tracking-wider">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed font-light text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="block text-black">WHY CHOOSE</span>
              <span className="block text-outline-black">SEMS EVENTS</span>
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto font-light">
              We bring expertise, creativity, and dedication to every event we manage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/5 border border-black/10 p-6 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono tracking-wider font-medium">{item}</span>
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
              <Calendar className="w-16 h-16 mx-auto mb-6" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white">READY TO PLAN</span>
              <span className="block text-outline">YOUR EVENT?</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
              Let's discuss your vision and create an extraordinary event experience together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                className="btn-minimal group"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/contact?service=Event Management');
                }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>GET CONSULTATION</span>
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </motion.button>
              <motion.button 
                className="btn-ghost group"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/portfolio');
                }}
              >
                <span className="flex items-center space-x-3">
                  <span>VIEW PORTFOLIO</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventManagement;
