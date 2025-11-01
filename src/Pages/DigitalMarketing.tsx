import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Megaphone, Search, FileText, Share2, MousePointer, Users, TrendingUp, Globe, BarChart3, Smartphone, Video, Target, ArrowRight, ArrowLeft, CheckCircle, Star, Zap, Eye, DollarSign, MessageCircle } from 'lucide-react';

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

const DigitalMarketing = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Search,
      title: 'SEARCH ENGINE OPTIMIZATION (SEO)',
      description: 'Enhance the visibility of a website on search engines through strategic optimization of on-page elements, content, and backlinks to improve organic search rankings.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['ON-PAGE OPTIMIZATION', 'CONTENT STRATEGY', 'BACKLINK BUILDING', 'KEYWORD RESEARCH', 'RANKING IMPROVEMENT'],
      highlight: 'SEO'
    },
    {
      icon: FileText,
      title: 'CONTENT MARKETING',
      description: 'Develop and distribute valuable, relevant content to attract and engage a target audience. This includes blog posts, articles, infographics, videos, and more.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['BLOG POSTS', 'ARTICLES', 'INFOGRAPHICS', 'VIDEOS', 'AUDIENCE ENGAGEMENT'],
      highlight: 'CONTENT'
    },
    {
      icon: Share2,
      title: 'SOCIAL MEDIA MARKETING',
      description: 'Utilize social media platforms to promote brands, products, or services, increase brand awareness, and engage with the target audience through organic and paid strategies.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['PLATFORM MANAGEMENT', 'BRAND AWARENESS', 'AUDIENCE ENGAGEMENT', 'ORGANIC STRATEGIES', 'PAID CAMPAIGNS'],
      highlight: 'SOCIAL'
    },
    {
      icon: MousePointer,
      title: 'PAY-PER-CLICK ADVERTISING (PPC)',
      description: 'Run targeted ads on search engines or social media platforms, paying only when users click on the ads. This is an effective way to drive traffic and generate leads quickly.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['TARGETED ADS', 'TRAFFIC GENERATION', 'LEAD GENERATION', 'QUICK RESULTS', 'COST EFFICIENCY'],
      highlight: 'PPC'
    },
    {
      icon: Users,
      title: 'INFLUENCER MARKETING',
      description: 'Collaborate with influencers in a specific industry or niche to leverage their reach and credibility to promote products or services.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['INFLUENCER COLLABORATION', 'NICHE TARGETING', 'REACH AMPLIFICATION', 'CREDIBILITY BUILDING', 'AUTHENTIC PROMOTION'],
      highlight: 'INFLUENCER'
    },
    {
      icon: TrendingUp,
      title: 'AFFILIATE MARKETING',
      description: 'Establish partnerships with affiliates who promote a company\'s products or services and earn a commission for each sale or lead generated through their efforts.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['AFFILIATE PARTNERSHIPS', 'COMMISSION STRUCTURES', 'SALES GENERATION', 'LEAD CONVERSION', 'PERFORMANCE TRACKING'],
      highlight: 'AFFILIATE'
    },
    {
      icon: MessageCircle,
      title: 'ONLINE PUBLIC RELATIONS (PR)',
      description: 'Manage a brand\'s online reputation, build positive relationships with the media, and create strategies to address and respond to public relations issues.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['REPUTATION MANAGEMENT', 'MEDIA RELATIONS', 'CRISIS COMMUNICATION', 'BRAND PROTECTION', 'POSITIVE POSITIONING'],
      highlight: 'PR'
    },
    {
      icon: Globe,
      title: 'WEB DESIGN & DEVELOPMENT',
      description: 'Offer services to design and develop user-friendly, visually appealing websites that align with a brand\'s identity and goals.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['USER-FRIENDLY DESIGN', 'VISUAL APPEAL', 'BRAND ALIGNMENT', 'GOAL-ORIENTED', 'TECHNICAL EXCELLENCE'],
      highlight: 'WEB'
    },
    {
      icon: BarChart3,
      title: 'ANALYTICS & DATA ANALYSIS',
      description: 'Utilize tools to track and analyze website and campaign performance, providing valuable insights for data-driven decision-making and optimization.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['PERFORMANCE TRACKING', 'DATA ANALYSIS', 'INSIGHT GENERATION', 'DECISION SUPPORT', 'OPTIMIZATION GUIDANCE'],
      highlight: 'ANALYTICS'
    },
    {
      icon: Smartphone,
      title: 'MOBILE MARKETING',
      description: 'Optimize marketing strategies for mobile devices, including mobile-friendly websites, app marketing, and location-based marketing.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['MOBILE OPTIMIZATION', 'APP MARKETING', 'LOCATION-BASED', 'MOBILE-FIRST', 'RESPONSIVE DESIGN'],
      highlight: 'MOBILE'
    },
    {
      icon: Video,
      title: 'VIDEO MARKETING',
      description: 'Create and promote video content to enhance engagement and communicate messages effectively on platforms like YouTube, social media, and websites.',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['VIDEO CREATION', 'ENGAGEMENT ENHANCEMENT', 'MULTI-PLATFORM', 'MESSAGE COMMUNICATION', 'VISUAL STORYTELLING'],
      highlight: 'VIDEO'
    },
    {
      icon: Target,
      title: 'CONVERSION RATE OPTIMIZATION (CRO)',
      description: 'Improve website elements to increase the percentage of visitors who take desired actions, such as making a purchase or filling out a form.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['CONVERSION IMPROVEMENT', 'ACTION OPTIMIZATION', 'PURCHASE ENHANCEMENT', 'FORM OPTIMIZATION', 'PERFORMANCE BOOST'],
      highlight: 'CRO'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'ANALYSIS',
      description: 'Comprehensive analysis of your current digital presence, target audience, and competitive landscape.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'STRATEGY',
      description: 'Development of a customized digital marketing strategy tailored to your business goals and objectives.',
      icon: '📊'
    },
    {
      step: '03',
      title: 'IMPLEMENTATION',
      description: 'Execution of campaigns across multiple channels with continuous monitoring and optimization.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'OPTIMIZATION',
      description: 'Data-driven optimization and scaling of successful campaigns for maximum ROI and growth.',
      icon: '📈'
    }
  ];

  const benefits = [
    'INCREASED BRAND VISIBILITY',
    'HIGHER CONVERSION RATES',
    'TARGETED AUDIENCE REACH',
    'MEASURABLE RESULTS',
    'COST-EFFECTIVE SOLUTIONS',
    '24/7 DIGITAL PRESENCE'
  ];

  const stats = [
    { number: '500+', label: 'CAMPAIGNS MANAGED' },
    { number: '95%', label: 'CLIENT SATISFACTION' },
    { number: '300%', label: 'AVERAGE ROI INCREASE' },
    { number: '24/7', label: 'CAMPAIGN MONITORING' }
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
          {/* Back Button */}
          <motion.div
            className="flex justify-start mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button
              onClick={() => navigate('/services')}
              className="flex items-center space-x-2 px-3 sm:px-4 py-2.5 sm:py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-300 group min-h-[44px] sm:min-h-0"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm tracking-wider whitespace-nowrap">BACK TO SERVICES</span>
            </motion.button>
          </motion.div>
          
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
                DIGITAL MARKETING
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
                MAXIMIZE YOUR
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
                DIGITAL IMPACT
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
              In the digital age, a strong online presence is crucial for success. Our digital marketing services are designed to enhance your brand visibility and engagement. Whether it's social media management, content creation, search engine optimization (SEO), or paid advertising, we employ a holistic approach to maximize your digital impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-4xl lg:text-6xl font-bold mb-2"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#000",
                    transition: { duration: 0.2 }
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.p 
                  className="font-mono text-sm tracking-wider text-black/60"
                  whileHover={{ color: "#000" }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              <Megaphone className="w-8 h-8" />
              <span className="font-mono text-sm tracking-[0.3em] text-white/60">OUR SERVICES</span>
              <Megaphone className="w-8 h-8" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-white">COMPREHENSIVE</span>
              <span className="block text-outline">DIGITAL SOLUTIONS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                <div className="bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-300 group-hover:shadow-2xl">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <LazyImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={index < 6}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Service Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-white text-black px-3 py-1 font-mono text-xs tracking-wider"
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
                      className="absolute -bottom-4 -right-4 w-12 h-12 bg-white text-black flex items-center justify-center clip-hexagon"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <service.icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    <motion.h3 
                      className="text-lg font-bold font-mono tracking-wider group-hover:text-white transition-colors"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-white/70 leading-relaxed text-sm"
                      whileHover={{ color: "#fff" }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
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
                          <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                          <span className="text-xs font-mono tracking-wider text-white/80">
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
              <Zap className="w-8 h-8" />
              <span className="font-mono text-sm tracking-[0.3em] text-black/60">OUR PROCESS</span>
              <Zap className="w-8 h-8" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-black">HOW WE</span>
              <span className="block text-outline-black">DELIVER RESULTS</span>
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
                  
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-xl clip-hexagon mx-auto">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold font-mono tracking-wider">{step.title}</h3>
                  <p className="text-black/80 leading-relaxed font-light text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="block text-white">WHY CHOOSE</span>
              <span className="block text-outline">DIGITAL MARKETING</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
              Transform your online presence with our proven digital marketing strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer"
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
                  <span className="font-mono tracking-wider font-medium">{benefit}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <Megaphone className="w-16 h-16 mx-auto mb-6" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-black">READY TO BOOST</span>
              <span className="block text-outline-black">YOUR DIGITAL PRESENCE?</span>
            </h2>
            
            <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto font-light">
              Let's create a digital marketing strategy that drives real results for your business.
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
                  navigate('/contact?service=Digital Marketing');
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  navigate('/contact?service=Digital Marketing');
                }}
                style={{ 
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  cursor: 'pointer'
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
                onTouchEnd={(e) => {
                  e.preventDefault();
                  navigate('/portfolio');
                }}
                style={{ 
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  cursor: 'pointer'
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

export default DigitalMarketing;
