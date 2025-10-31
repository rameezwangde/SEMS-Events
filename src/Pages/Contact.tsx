import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Zap, Users, Calendar, MessageCircle, Instagram, Facebook, Sparkles, AlertCircle, Menu, X, Check } from 'lucide-react';

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
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle service parameter from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    if (service) {
      setFormData(prev => ({ ...prev, eventType: service }));
    }
  }, []);

  // Validation function
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        return '';
      case 'eventType':
        if (!value) return 'Please select an event type';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation for touched fields
    if (touchedFields.has(name)) {
      const error = validateField(name, value);
      setValidationErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleFieldFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleFieldBlur = (fieldName: string) => {
    setFocusedField(null);
    setTouchedFields(prev => new Set(prev).add(fieldName));
    
    // Validate on blur
    const value = formData[fieldName as keyof typeof formData];
    const error = validateField(fieldName, value);
    setValidationErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    const errors: Record<string, string> = {};
    (['name', 'email', 'eventType', 'message'] as const).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setTouchedFields(new Set(['name', 'email', 'eventType', 'message']));
      return;
    }
    
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
    setTouchedFields(new Set());
    setValidationErrors({});
    
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Section */}
      <section className="relative pt-0 pb-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Navigation Section */}
          <motion.div
            className="flex items-center justify-center space-x-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 mb-8 sm:mb-12 mt-2 sm:mt-4 relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            {/* SEMS Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-1.5 sm:space-x-2 group mr-2 sm:mr-3"
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
            
            {/* Navigation Links - Hidden on Mobile */}
            {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item, index) => (
              <Link
                key={item}
                to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                className={`hidden lg:block relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-mono font-medium transition-all duration-300 rounded-full ${
                  item === 'CONTACT'
                    ? 'bg-white text-black'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{item}</span>
                {item === 'CONTACT' && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Social Media Icons - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-1.5 ml-2 sm:ml-3 pl-2 sm:pl-3 border-l border-white/20">
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

            {/* Mobile Hamburger Menu Button - Only on Mobile */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden ml-auto w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="lg:hidden fixed inset-x-0 top-[72px] bg-gray-950 border-b-2 border-white/40 shadow-2xl"
                  style={{ zIndex: 99999, maxHeight: '80vh', overflowY: 'auto', touchAction: 'manipulation', position: 'fixed' }}
                >
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-2 p-5 bg-gray-950">
                    {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-5 py-4 text-base font-mono font-semibold rounded-xl transition-all duration-200 min-h-[52px] touch-manipulation ${
                            item === 'CONTACT'
                              ? 'bg-white text-black shadow-lg'
                              : 'text-white bg-white/5 hover:bg-white/15 active:bg-white/20'
                          }`}
                          style={{ 
                            WebkitTapHighlightColor: 'transparent',
                            touchAction: 'manipulation',
                            cursor: 'pointer'
                          }}
                        >
                          <span>{item}</span>
                          {item === 'CONTACT' && (
                            <Check className="w-5 h-5 ml-2 font-bold" strokeWidth={3} />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Social Icons */}
                  <div className="flex items-center justify-center space-x-3 py-4 border-t border-white/10 md:hidden">
                    <motion.a
                      href="https://wa.me/971508194875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com/semsmanaging"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href="https://facebook.com/semsmanaging"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 }}
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      {/* Revolutionary Hero */}
      <section className="py-10 relative overflow-hidden">
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
              
              {/* Enhanced Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 sm:p-8 mb-8 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex items-start space-x-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 0.2, 
                          type: "spring", 
                          stiffness: 200,
                          damping: 15
                        }}
                      >
                        <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.p 
                          className="font-bold text-lg sm:text-xl mb-2 font-mono tracking-wider"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          MESSAGE SENT SUCCESSFULLY!
                        </motion.p>
                        <motion.p 
                          className="text-white/90 text-sm sm:text-base font-mono"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          We'll get back to you within 24 hours.
                        </motion.p>
                      </div>
                    </div>

                    {/* Floating Particles */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        initial={{ 
                          x: Math.random() * 100 + '%',
                          y: '100%',
                          opacity: 0 
                        }}
                        animate={{ 
                          y: '-100%',
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          delay: Math.random() * 0.5,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    ))}

                    {/* Corner Decorations */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-white/10"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 45 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

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
                  {/* Enhanced Name Input with Floating Label */}
                  <motion.div 
                    className="relative"
                    animate={{ 
                      scale: focusedField === 'name' ? 1.01 : 1,
                      y: focusedField === 'name' ? -2 : 0
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <motion.input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('name')}
                        onBlur={() => handleFieldBlur('name')}
                        className={`w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b-2 ${
                          validationErrors.name 
                            ? 'border-red-500' 
                            : focusedField === 'name' 
                              ? 'border-black' 
                              : 'border-black/20 hover:border-black/40'
                        } focus:outline-none transition-all duration-300 font-mono`}
                        placeholder=" "
                        style={{
                          transform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                      />
                      <motion.label 
                        className={`absolute left-0 font-mono tracking-wider font-bold pointer-events-none transition-all duration-300 ${
                          validationErrors.name ? 'text-red-500' : 'text-black/60'
                        }`}
                        animate={{
                          top: formData.name || focusedField === 'name' ? '0px' : '20px',
                          fontSize: formData.name || focusedField === 'name' ? '0.75rem' : '0.875rem',
                          opacity: formData.name || focusedField === 'name' ? 1 : 0.6
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        FULL NAME *
                      </motion.label>
                      {/* Animated Underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-black"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: focusedField === 'name' ? '100%' : '0%'
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    {/* Validation Error Message */}
                    <AnimatePresence>
                      {validationErrors.name && touchedFields.has('name') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-1 mt-1 text-red-500 text-xs font-mono"
                        >
                          <AlertCircle className="w-3 h-3" />
                          <span>{validationErrors.name}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Enhanced Email Input with Floating Label */}
                  <motion.div 
                    className="relative"
                    animate={{ 
                      scale: focusedField === 'email' ? 1.01 : 1,
                      y: focusedField === 'email' ? -2 : 0
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <motion.input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('email')}
                        onBlur={() => handleFieldBlur('email')}
                        className={`w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b-2 ${
                          validationErrors.email 
                            ? 'border-red-500' 
                            : focusedField === 'email' 
                              ? 'border-black' 
                              : 'border-black/20 hover:border-black/40'
                        } focus:outline-none transition-all duration-300 font-mono`}
                        placeholder=" "
                        style={{
                          transform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                      />
                      <motion.label 
                        className={`absolute left-0 font-mono tracking-wider font-bold pointer-events-none transition-all duration-300 ${
                          validationErrors.email ? 'text-red-500' : 'text-black/60'
                        }`}
                        animate={{
                          top: formData.email || focusedField === 'email' ? '0px' : '20px',
                          fontSize: formData.email || focusedField === 'email' ? '0.75rem' : '0.875rem',
                          opacity: formData.email || focusedField === 'email' ? 1 : 0.6
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        EMAIL ADDRESS *
                      </motion.label>
                      {/* Animated Underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-black"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: focusedField === 'email' ? '100%' : '0%'
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    {/* Validation Error Message */}
                    <AnimatePresence>
                      {validationErrors.email && touchedFields.has('email') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-1 mt-1 text-red-500 text-xs font-mono"
                        >
                          <AlertCircle className="w-3 h-3" />
                          <span>{validationErrors.email}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Enhanced Phone Input */}
                  <motion.div 
                    className="relative"
                    animate={{ 
                      scale: focusedField === 'phone' ? 1.01 : 1,
                      y: focusedField === 'phone' ? -2 : 0
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('phone')}
                        onBlur={() => handleFieldBlur('phone')}
                        className={`w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b-2 ${
                          focusedField === 'phone' ? 'border-black' : 'border-black/20 hover:border-black/40'
                        } focus:outline-none transition-all duration-300 font-mono`}
                        placeholder=" "
                        style={{
                          transform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                      />
                      <motion.label 
                        className="absolute left-0 font-mono tracking-wider font-bold text-black/60 pointer-events-none transition-all duration-300"
                        animate={{
                          top: formData.phone || focusedField === 'phone' ? '0px' : '20px',
                          fontSize: formData.phone || focusedField === 'phone' ? '0.75rem' : '0.875rem',
                          opacity: formData.phone || focusedField === 'phone' ? 1 : 0.6
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        PHONE NUMBER
                      </motion.label>
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-black"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'phone' ? '100%' : '0%' }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>

                  {/* Enhanced Event Type Select */}
                  <motion.div 
                    className="relative"
                    animate={{ 
                      scale: focusedField === 'eventType' ? 1.01 : 1,
                      y: focusedField === 'eventType' ? -2 : 0
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <select
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('eventType')}
                        onBlur={() => handleFieldBlur('eventType')}
                        className={`w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b-2 ${
                          validationErrors.eventType 
                            ? 'border-red-500' 
                            : focusedField === 'eventType' 
                              ? 'border-black' 
                              : 'border-black/20 hover:border-black/40'
                        } focus:outline-none transition-all duration-300 font-mono cursor-pointer`}
                        style={{
                          transform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                      >
                        <option value="">SELECT EVENT TYPE</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <motion.label 
                        className={`absolute left-0 font-mono tracking-wider font-bold pointer-events-none transition-all duration-300 ${
                          validationErrors.eventType ? 'text-red-500' : 'text-black/60'
                        }`}
                        animate={{
                          top: '0px',
                          fontSize: '0.75rem',
                          opacity: 1
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        EVENT TYPE *
                      </motion.label>
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-black"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'eventType' ? '100%' : '0%' }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    <AnimatePresence>
                      {validationErrors.eventType && touchedFields.has('eventType') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-1 mt-1 text-red-500 text-xs font-mono"
                        >
                          <AlertCircle className="w-3 h-3" />
                          <span>{validationErrors.eventType}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Enhanced Event Date Input */}
                  <motion.div 
                    className="relative"
                    animate={{ 
                      scale: focusedField === 'eventDate' ? 1.01 : 1,
                      y: focusedField === 'eventDate' ? -2 : 0
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('eventDate')}
                        onBlur={() => handleFieldBlur('eventDate')}
                        className={`w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b-2 ${
                          focusedField === 'eventDate' ? 'border-black' : 'border-black/20 hover:border-black/40'
                        } focus:outline-none transition-all duration-300 font-mono cursor-pointer`}
                        style={{
                          transform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                      />
                      <motion.label 
                        className="absolute left-0 top-0 font-mono tracking-wider font-bold text-black/60 pointer-events-none text-xs"
                        initial={{ opacity: 1 }}
                      >
                        EVENT DATE
                      </motion.label>
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-black"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'eventDate' ? '100%' : '0%' }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>

                  {/* Enhanced Guest Count Input */}
                  <motion.div 
                    className="relative"
                    animate={{ 
                      scale: focusedField === 'guestCount' ? 1.01 : 1,
                      y: focusedField === 'guestCount' ? -2 : 0
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <input
                        type="number"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('guestCount')}
                        onBlur={() => handleFieldBlur('guestCount')}
                        className={`w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b-2 ${
                          focusedField === 'guestCount' ? 'border-black' : 'border-black/20 hover:border-black/40'
                        } focus:outline-none transition-all duration-300 font-mono`}
                        placeholder=" "
                        style={{
                          transform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                      />
                      <motion.label 
                        className="absolute left-0 font-mono tracking-wider font-bold text-black/60 pointer-events-none transition-all duration-300"
                        animate={{
                          top: formData.guestCount || focusedField === 'guestCount' ? '0px' : '20px',
                          fontSize: formData.guestCount || focusedField === 'guestCount' ? '0.75rem' : '0.875rem',
                          opacity: formData.guestCount || focusedField === 'guestCount' ? 1 : 0.6
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        GUEST COUNT
                      </motion.label>
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-black"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'guestCount' ? '100%' : '0%' }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Budget Select */}
                <motion.div 
                  className="relative"
                  animate={{ 
                    scale: focusedField === 'budget' ? 1.01 : 1,
                    y: focusedField === 'budget' ? -2 : 0
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => handleFieldFocus('budget')}
                      onBlur={() => handleFieldBlur('budget')}
                      className={`w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b-2 ${
                        focusedField === 'budget' ? 'border-black' : 'border-black/20 hover:border-black/40'
                      } focus:outline-none transition-all duration-300 font-mono cursor-pointer`}
                      style={{
                        transform: 'translateZ(0)',
                        willChange: 'transform'
                      }}
                    >
                      <option value="">SELECT BUDGET RANGE</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    <motion.label 
                      className="absolute left-0 top-0 font-mono tracking-wider font-bold text-black/60 pointer-events-none text-xs"
                      initial={{ opacity: 1 }}
                    >
                      BUDGET RANGE
                    </motion.label>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'budget' ? '100%' : '0%' }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>

                {/* Enhanced Message Textarea with Character Counter */}
                <motion.div 
                  className="relative"
                  animate={{ 
                    scale: focusedField === 'message' ? 1.01 : 1,
                    y: focusedField === 'message' ? -2 : 0
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFieldFocus('message')}
                      onBlur={() => handleFieldBlur('message')}
                      className={`w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b-2 ${
                        validationErrors.message 
                          ? 'border-red-500' 
                          : focusedField === 'message' 
                            ? 'border-black' 
                            : 'border-black/20 hover:border-black/40'
                      } focus:outline-none transition-all duration-300 resize-none font-mono`}
                      placeholder=" "
                      maxLength={500}
                      style={{
                        transform: 'translateZ(0)',
                        willChange: 'transform'
                      }}
                    />
                    <motion.label 
                      className={`absolute left-0 font-mono tracking-wider font-bold pointer-events-none transition-all duration-300 ${
                        validationErrors.message ? 'text-red-500' : 'text-black/60'
                      }`}
                      animate={{
                        top: '0px',
                        fontSize: '0.75rem',
                        opacity: 1
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      TELL US ABOUT YOUR EVENT *
                    </motion.label>
                    {/* Character Counter */}
                    <motion.div
                      className="absolute bottom-2 right-0 text-xs font-mono text-black/40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: focusedField === 'message' ? 1 : 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {formData.message.length}/500
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                  <AnimatePresence>
                    {validationErrors.message && touchedFields.has('message') && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-1 mt-1 text-red-500 text-xs font-mono"
                      >
                        <AlertCircle className="w-3 h-3" />
                        <span>{validationErrors.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Enhanced Submit Button with Ripple Effect */}
                <motion.button
                  ref={submitButtonRef}
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative w-full py-6 font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center space-x-4 overflow-hidden group ${
                    isSubmitting
                      ? 'bg-black/50 cursor-not-allowed text-white/50'
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                  whileHover={!isSubmitting ? { 
                    scale: 1.02,
                    y: -3,
                    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                    transition: { duration: 0.2, ease: "easeOut" }
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    transform: 'translateZ(0)',
                    willChange: 'transform'
                  }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Border Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 blur-sm"></div>
                  </motion.div>

                  {/* Button Content */}
                  <div className="relative z-10 flex items-center space-x-4">
                    {isSubmitting ? (
                      <>
                        <motion.div 
                          className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <motion.div
                          animate={{ 
                            x: isSubmitting ? 0 : [0, 3, 0],
                            rotate: 0
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          whileHover={{ 
                            rotate: 15,
                            x: 3,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Send className="w-6 h-6" />
                        </motion.div>
                        <span>SEND MESSAGE</span>
                        <motion.div
                          className="absolute right-6"
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0.8, 1.2, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Sparkles className="w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />
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