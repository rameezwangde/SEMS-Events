import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Zap, Users, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle service parameter from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    if (service) {
      setFormData(prev => ({ ...prev, eventType: service }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      budget: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'HEADQUARTERS',
      details: ['DUBAI, UAE', 'ETISALAT ACADEMY AREA']
    },
    {
      icon: Phone,
      title: 'DIRECT LINE',
      details: ['+971 508194875', '+971 564526626']
    },
    {
      icon: Mail,
      title: 'EMAIL',
      details: ['SUPPORT@SEMS.AE', 'INFO@SEMS.AE']
    },
    {
      icon: Clock,
      title: 'HOURS',
      details: ['MON - FRI: 9:00 AM - 7:00 PM', 'SAT - SUN: BY APPOINTMENT']
    }
  ];

  const eventTypes = [
    'CORPORATE EVENTS',
    'SOCIAL EVENTS',
    'CULTURAL EVENTS',
    'SPORTS EVENTS',
    'ENTERTAINMENT EVENTS',
    'WEDDING',
    'CONFERENCE',
    'PRODUCT LAUNCH',
    'OTHER'
  ];

  const budgetRanges = [
    'UNDER AED 20,000',
    'AED 20,000 - AED 50,000',
    'AED 50,000 - AED 100,000',
    'AED 100,000 - AED 200,000',
    'AED 200,000+',
    'I NEED GUIDANCE'
  ];

  const whyChooseUs = [
    '15 DIFFERENT EVENT CATEGORIES',
    'GLOBAL EVENT MANAGEMENT EXPERTISE',
    'DIGITAL MARKETING INTEGRATION',
    'BRANDING & DESIGN SERVICES',
    'CONTENT CREATION CAPABILITIES',
    'DUBAI-BASED PREMIUM SERVICES'
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
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center perspective-3d">
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
                GET IN TOUCH
              </motion.span>
              <motion.div 
                className="w-16 h-1 bg-white"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display mb-6 sm:mb-8 leading-tight px-2"
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
                LET'S
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
                TOGETHER
              </motion.span>
            </motion.h1>
            
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
                delay: 1.1, 
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
              Ready to transform your vision into an extraordinary experience? 
              Let's discuss your event and bring it to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards - Revolutionary Layout */}
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
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="bg-black/5 border border-black/10 p-6 sm:p-8 h-full hover:bg-black hover:text-white transition-all duration-500 group-hover:border-black relative overflow-hidden"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative z-10">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="w-10 h-10 sm:w-12 sm:h-12" />
                    </motion.div>
                    <motion.h3 
                      className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-mono tracking-wider"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {info.title}
                    </motion.h3>
                    {info.details.map((detail, i) => (
                      <motion.p 
                        key={i} 
                        className="text-xs sm:text-sm font-mono opacity-80 mb-1"
                        initial={{ x: -10, opacity: 0.6 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {detail}
                      </motion.p>
                    ))}
                  </div>
                  
                  {/* Enhanced Decorative Elements */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 bg-current opacity-0 group-hover:opacity-20 transition-opacity"
                    whileHover={{ scale: 1.5, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-current opacity-0 group-hover:opacity-20 transition-opacity"
                    whileHover={{ scale: 1.5, rotate: -45 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-black/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Revolutionary Form */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-2 h-12 bg-black"
                  initial={{ height: 0 }}
                  whileInView={{ height: 48 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                />
                <motion.h2 
                  className="text-4xl font-bold font-mono tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  GET YOUR QUOTE
                </motion.h2>
              </motion.div>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black text-white p-6 mb-8 flex items-center space-x-4"
                >
                  <CheckCircle className="w-8 h-8" />
                  <div>
                    <p className="font-bold text-lg">MESSAGE SENT SUCCESSFULLY!</p>
                    <p className="text-white/80">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.label 
                      className="block text-sm font-mono tracking-wider font-bold text-black/80"
                      initial={{ opacity: 0.6 }}
                      whileFocus={{ opacity: 1 }}
                    >
                      FULL NAME *
                    </motion.label>
                    <motion.input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-all duration-300 font-mono hover:border-black/40"
                      placeholder="YOUR FULL NAME"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.label 
                      className="block text-sm font-mono tracking-wider font-bold text-black/80"
                      initial={{ opacity: 0.6 }}
                      whileFocus={{ opacity: 1 }}
                    >
                      EMAIL ADDRESS *
                    </motion.label>
                    <motion.input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-all duration-300 font-mono hover:border-black/40"
                      placeholder="YOUR@EMAIL.COM"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-mono tracking-wider font-bold text-black/80">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-colors font-mono"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-mono tracking-wider font-bold text-black/80">
                      EVENT TYPE *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-colors font-mono"
                    >
                      <option value="">SELECT EVENT TYPE</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-mono tracking-wider font-bold text-black/80">
                      EVENT DATE
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-colors font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-mono tracking-wider font-bold text-black/80">
                      GUEST COUNT
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-colors font-mono"
                      placeholder="E.G. 150"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-mono tracking-wider font-bold text-black/80">
                    BUDGET RANGE
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-colors font-mono"
                  >
                    <option value="">SELECT BUDGET RANGE</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-mono tracking-wider font-bold text-black/80">
                    TELL US ABOUT YOUR EVENT *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-colors resize-none font-mono"
                    placeholder="DESCRIBE YOUR VISION, SPECIAL REQUIREMENTS, OR ANY QUESTIONS..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-6 font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center space-x-4 ${
                    isSubmitting
                      ? 'bg-black/50 cursor-not-allowed text-white/50'
                      : 'bg-black text-white hover:bg-black/80'
                  }`}
                  whileHover={!isSubmitting ? { 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 }
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>SENDING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send className="w-6 h-6" />
                      </motion.div>
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="lg:col-span-4 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-8 font-mono tracking-wider"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  WHY CHOOSE SEMS?
                </motion.h3>
                <div className="space-y-4">
                  {whyChooseUs.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 group cursor-pointer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0 group-hover:text-green-600 transition-colors duration-300" />
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
                </div>
              </motion.div>

              {/* Emergency Contact */}
              <motion.div 
                className="bg-black text-white p-8 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center space-x-3 mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 15,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Zap className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold font-mono tracking-wider">EMERGENCY CONTACT</h3>
                  </motion.div>
                  <motion.p 
                    className="text-white/80 mb-4 font-mono text-sm"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    FOR URGENT EVENT MATTERS:
                  </motion.p>
                  <motion.p 
                    className="text-3xl font-bold font-mono mb-2"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#00ff00",
                      transition: { duration: 0.2 }
                    }}
                  >
                    +971 508194875
                  </motion.p>
                  <motion.p 
                    className="text-sm text-white/60 font-mono"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    AVAILABLE 24/7 DURING EVENTS
                  </motion.p>
                </div>
                
                {/* Enhanced Decorative Element */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 border-2 border-white/20 clip-triangle"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "linear",
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Additional Floating Elements */}
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8 border border-white/10 clip-hexagon"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 180, 360],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-center p-4 bg-black/5 border border-black/10 group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Users className="w-8 h-8 mx-auto mb-2 group-hover:text-blue-600 transition-colors duration-300" />
                  </motion.div>
                  <motion.p 
                    className="text-2xl font-bold font-mono group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    15+
                  </motion.p>
                  <p className="text-xs font-mono tracking-wider text-black/60 group-hover:text-black transition-colors duration-300">EVENT CATEGORIES</p>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-black/5 border border-black/10 group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: -360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Calendar className="w-8 h-8 mx-auto mb-2 group-hover:text-green-600 transition-colors duration-300" />
                  </motion.div>
                  <motion.p 
                    className="text-2xl font-bold font-mono group-hover:text-green-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    GLOBAL
                  </motion.p>
                  <p className="text-xs font-mono tracking-wider text-black/60 group-hover:text-black transition-colors duration-300">REACH</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;