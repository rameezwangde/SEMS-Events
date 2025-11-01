import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Camera, FileText, Search, Share2, BarChart3, ArrowRight, ArrowLeft, CheckCircle, Star, Zap, Users, Eye, Target, PenTool, Image, Video, Calendar } from 'lucide-react';

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

const ContentCreation = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: FileText,
      title: 'WEBSITE COPYWRITING',
      description: 'Create persuasive and SEO-friendly website content, including homepage copy, service pages, and about us sections, to enhance the overall user experience.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['PERSUASIVE COPY', 'SEO-FRIENDLY', 'HOMEPAGE CONTENT', 'SERVICE PAGES', 'USER EXPERIENCE'],
      highlight: 'COPYWRITING'
    },
    {
      icon: Search,
      title: 'SEO CONTENT OPTIMIZATION',
      description: 'Optimize content for search engines by incorporating relevant keywords and ensuring that it aligns with SEO best practices.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['KEYWORD INTEGRATION', 'SEO BEST PRACTICES', 'SEARCH OPTIMIZATION', 'RANKING IMPROVEMENT', 'TECHNICAL SEO'],
      highlight: 'SEO'
    },
    {
      icon: Share2,
      title: 'SOCIAL MEDIA CONTENT',
      description: 'Develop content tailored for various social media platforms, including text posts, images, videos, and interactive content to engage and grow the audience.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['PLATFORM-SPECIFIC', 'TEXT POSTS', 'VISUAL CONTENT', 'INTERACTIVE CONTENT', 'AUDIENCE GROWTH'],
      highlight: 'SOCIAL'
    },
    {
      icon: BarChart3,
      title: 'INFOGRAPHIC DESIGN',
      description: 'Combine information and visual elements to create compelling infographics that simplify complex topics and enhance content shareability.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['VISUAL STORYTELLING', 'COMPLEX SIMPLIFICATION', 'SHAREABLE CONTENT', 'DATA VISUALIZATION', 'ENGAGING FORMATS'],
      highlight: 'INFOGRAPHIC'
    },
    {
      icon: Calendar,
      title: 'CONTENT STRATEGY DEVELOPMENT',
      description: 'Provide strategic guidance on content planning, including content calendars, target audience analysis, and alignment with business goals.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['STRATEGIC PLANNING', 'CONTENT CALENDARS', 'AUDIENCE ANALYSIS', 'GOAL ALIGNMENT', 'STRATEGIC GUIDANCE'],
      highlight: 'STRATEGY'
    }
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: 'WRITTEN CONTENT',
      description: 'Blog posts, articles, website copy, and marketing materials that engage and inform your audience.',
      features: ['BLOG POSTS', 'ARTICLES', 'WEBSITE COPY', 'MARKETING MATERIALS', 'TECHNICAL WRITING']
    },
    {
      icon: Image,
      title: 'VISUAL CONTENT',
      description: 'Images, graphics, infographics, and visual elements that enhance your brand\'s visual appeal.',
      features: ['IMAGES', 'GRAPHICS', 'INFOGRAPHICS', 'VISUAL ELEMENTS', 'BRAND ASSETS']
    },
    {
      icon: Video,
      title: 'MULTIMEDIA PRODUCTION',
      description: 'Videos, animations, and interactive content that captivate and engage your target audience.',
      features: ['VIDEOS', 'ANIMATIONS', 'INTERACTIVE CONTENT', 'MOTION GRAPHICS', 'AUDIO CONTENT']
    },
    {
      icon: Target,
      title: 'AUDIENCE ENGAGEMENT',
      description: 'Content designed to build relationships, foster community, and drive meaningful interactions.',
      features: ['COMMUNITY BUILDING', 'RELATIONSHIP FOSTERING', 'INTERACTION DRIVING', 'ENGAGEMENT STRATEGIES', 'AUDIENCE CONNECTION']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'RESEARCH',
      description: 'Deep research into your industry, target audience, and content landscape to inform our strategy.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'STRATEGY',
      description: 'Development of a comprehensive content strategy aligned with your business objectives.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'CREATION',
      description: 'Production of high-quality, engaging content across all platforms and formats.',
      icon: '✍️'
    },
    {
      step: '04',
      title: 'OPTIMIZATION',
      description: 'Continuous optimization and performance tracking to maximize content effectiveness.',
      icon: '📈'
    }
  ];

  const benefits = [
    'INCREASED ENGAGEMENT',
    'BRAND AWARENESS',
    'AUDIENCE GROWTH',
    'LEAD GENERATION',
    'THOUGHT LEADERSHIP',
    'COMPETITIVE ADVANTAGE'
  ];

  const stats = [
    { number: '1000+', label: 'CONTENT PIECES' },
    { number: '95%', label: 'CLIENT SATISFACTION' },
    { number: '300%', label: 'ENGAGEMENT INCREASE' },
    { number: '24/7', label: 'CONTENT SUPPORT' }
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
                CONTENT CREATION
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
                ENGAGING CONTENT
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
                THAT RESONATES
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
              Engaging content is at the heart of successful marketing. Our team of content creators excels in producing compelling written, visual, and multimedia content that resonates with your target audience, driving engagement and loyalty.
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
              <Camera className="w-8 h-8" />
              <span className="font-mono text-sm tracking-[0.3em] text-white/60">OUR SERVICES</span>
              <Camera className="w-8 h-8" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-white">COMPREHENSIVE</span>
              <span className="block text-outline">CONTENT SOLUTIONS</span>
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
                      priority={index < 3}
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

      {/* Content Types Section */}
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
              <PenTool className="w-8 h-8" />
              <span className="font-mono text-sm tracking-[0.3em] text-black/60">CONTENT TYPES</span>
              <PenTool className="w-8 h-8" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-black">DIVERSE</span>
              <span className="block text-outline-black">CONTENT FORMATS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
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
                    className="w-16 h-16 bg-black text-white flex items-center justify-center clip-hexagon mx-auto"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <type.icon className="w-8 h-8" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold font-mono tracking-wider">{type.title}</h3>
                  <p className="text-black/80 leading-relaxed font-light text-sm">
                    {type.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {type.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center justify-center space-x-2"
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.3 + i * 0.1, duration: 0.4 }}
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
              <span className="block text-outline">CREATE CONTENT</span>
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

      {/* Benefits Section */}
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
              <span className="block text-outline-black">CONTENT CREATION</span>
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto font-light">
              Transform your brand with compelling content that drives engagement and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
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
                  <span className="font-mono tracking-wider font-medium">{benefit}</span>
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
              <Camera className="w-16 h-16 mx-auto mb-6" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white">READY TO CREATE</span>
              <span className="block text-outline">COMPELLING CONTENT?</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
              Let's create content that resonates with your audience and drives meaningful engagement.
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
                  navigate('/contact?service=Content Creation');
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  navigate('/contact?service=Content Creation');
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

export default ContentCreation;
