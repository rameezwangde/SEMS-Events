import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Shield, Palette, Monitor, Smartphone, Printer, Package, Home, BarChart3, Share2, Play, BookOpen, Camera, PenTool, MapPin, ArrowRight, CheckCircle, Zap, Layers, Users } from 'lucide-react';

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

const BrandingDesign = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Palette,
      title: 'LOGO DESIGN',
      description: 'Create unique and impactful logos that visually represent a brand\'s identity, values, and personality.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['UNIQUE CONCEPTS', 'BRAND IDENTITY', 'VALUE REPRESENTATION', 'PERSONALITY EXPRESSION', 'VISUAL IMPACT'],
      highlight: 'LOGO'
    },
    {
      icon: Shield,
      title: 'BRAND IDENTITY DEVELOPMENT',
      description: 'Develop a comprehensive brand identity, including visual elements such as logos, color schemes, typography, and imagery, to maintain a consistent and cohesive brand image.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['COMPREHENSIVE IDENTITY', 'COLOR SCHEMES', 'TYPOGRAPHY', 'VISUAL CONSISTENCY', 'BRAND COHESION'],
      highlight: 'IDENTITY'
    },
    {
      icon: Layers,
      title: 'GRAPHIC DESIGN',
      description: 'Provide a range of graphic design services for various marketing collateral, such as brochures, business cards, banners, and other promotional materials.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['MARKETING COLLATERAL', 'BROCHURES', 'BUSINESS CARDS', 'BANNERS', 'PROMOTIONAL MATERIALS'],
      highlight: 'GRAPHIC'
    },
    {
      icon: Monitor,
      title: 'WEB DESIGN',
      description: 'Design visually appealing and user-friendly websites that align with a brand\'s identity and provide an optimal user experience.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['VISUAL APPEAL', 'USER-FRIENDLY', 'BRAND ALIGNMENT', 'OPTIMAL UX', 'MODERN DESIGN'],
      highlight: 'WEB'
    },
    {
      icon: Smartphone,
      title: 'UI/UX DESIGN',
      description: 'Focus on creating intuitive and aesthetically pleasing user interfaces (UI) and user experiences (UX) for websites, apps, and digital platforms.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['INTUITIVE INTERFACES', 'AESTHETIC DESIGN', 'USER EXPERIENCE', 'DIGITAL PLATFORMS', 'INTERACTION DESIGN'],
      highlight: 'UI/UX'
    },
    {
      icon: Printer,
      title: 'PRINT DESIGN',
      description: 'Design materials for print, including posters, flyers, packaging, and other physical marketing collateral.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['POSTERS', 'FLYERS', 'PACKAGING', 'PRINT MATERIALS', 'PHYSICAL COLLATERAL'],
      highlight: 'PRINT'
    },
    {
      icon: Package,
      title: 'BRANDED MERCHANDISE DESIGN',
      description: 'Create designs for branded merchandise such as apparel, mugs, and promotional items to enhance brand visibility.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['APPAREL DESIGN', 'MUGS', 'PROMOTIONAL ITEMS', 'BRAND VISIBILITY', 'MERCHANDISE'],
      highlight: 'MERCH'
    },
    {
      icon: Package,
      title: 'PACKAGING DESIGN',
      description: 'Develop eye-catching and functional packaging designs that attract consumers and communicate the brand story.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['EYE-CATCHING DESIGN', 'FUNCTIONAL PACKAGING', 'CONSUMER ATTRACTION', 'BRAND STORY', 'PRODUCT PACKAGING'],
      highlight: 'PACKAGING'
    },
    {
      icon: Home,
      title: 'ENVIRONMENTAL DESIGN',
      description: 'Design physical spaces, such as offices or event venues, to reflect the brand\'s identity and create a cohesive brand experience.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['PHYSICAL SPACES', 'OFFICE DESIGN', 'EVENT VENUES', 'BRAND IDENTITY', 'COHESIVE EXPERIENCE'],
      highlight: 'ENVIRONMENTAL'
    },
    {
      icon: BarChart3,
      title: 'INFOGRAPHIC DESIGN',
      description: 'Design visually engaging infographics to convey complex information in a clear and easily digestible format.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['VISUAL ENGAGEMENT', 'COMPLEX INFORMATION', 'CLEAR COMMUNICATION', 'DIGESTIBLE FORMAT', 'DATA VISUALIZATION'],
      highlight: 'INFOGRAPHIC'
    },
    {
      icon: Share2,
      title: 'SOCIAL MEDIA GRAPHICS',
      description: 'Create graphics optimized for various social media platforms to enhance brand presence and engagement.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['PLATFORM OPTIMIZATION', 'SOCIAL MEDIA', 'BRAND PRESENCE', 'ENGAGEMENT', 'VISUAL CONTENT'],
      highlight: 'SOCIAL'
    },
    {
      icon: Play,
      title: 'MOTION GRAPHICS & ANIMATION',
      description: 'Produce animated content and motion graphics for websites, social media, presentations, and other digital platforms.',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['ANIMATED CONTENT', 'MOTION GRAPHICS', 'PRESENTATIONS', 'DIGITAL PLATFORMS', 'DYNAMIC VISUALS'],
      highlight: 'MOTION'
    },
    {
      icon: BookOpen,
      title: 'BRAND GUIDELINES',
      description: 'Develop comprehensive brand guidelines that outline the correct usage of brand elements, ensuring consistency across all touchpoints.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['COMPREHENSIVE GUIDELINES', 'BRAND ELEMENTS', 'USAGE RULES', 'CONSISTENCY', 'TOUCHPOINT MANAGEMENT'],
      highlight: 'GUIDELINES'
    },
    {
      icon: Camera,
      title: 'PHOTOGRAPHY & IMAGE EDITING',
      description: 'Provide professional photography services and image editing to enhance the visual appeal of marketing materials.',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['PROFESSIONAL PHOTOGRAPHY', 'IMAGE EDITING', 'VISUAL APPEAL', 'MARKETING MATERIALS', 'QUALITY ENHANCEMENT'],
      highlight: 'PHOTOGRAPHY'
    },
    {
      icon: PenTool,
      title: 'CUSTOM ILLUSTRATIONS',
      description: 'Create original illustrations that align with a brand\'s personality and messaging for use in various marketing materials.',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['ORIGINAL ILLUSTRATIONS', 'BRAND PERSONALITY', 'MESSAGING ALIGNMENT', 'MARKETING MATERIALS', 'CUSTOM ARTWORK'],
      highlight: 'ILLUSTRATIONS'
    },
    {
      icon: MapPin,
      title: 'SIGNAGE & WAYFINDING DESIGN',
      description: 'Design effective signage and wayfinding systems for physical spaces to enhance brand visibility and guide visitors.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['EFFECTIVE SIGNAGE', 'WAYFINDING SYSTEMS', 'PHYSICAL SPACES', 'BRAND VISIBILITY', 'VISITOR GUIDANCE'],
      highlight: 'SIGNAGE'
    },
    {
      icon: Smartphone,
      title: 'RESPONSIVE DESIGN',
      description: 'Ensure that all design elements are optimized for responsiveness across different devices and screen sizes.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['RESPONSIVE OPTIMIZATION', 'MULTI-DEVICE', 'SCREEN ADAPTATION', 'CROSS-PLATFORM', 'FLEXIBLE DESIGN'],
      highlight: 'RESPONSIVE'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'DISCOVERY',
      description: 'Deep dive into your brand values, target audience, and competitive landscape to understand your unique positioning.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'CONCEPTUALIZATION',
      description: 'Develop creative concepts and visual directions that align with your brand identity and business goals.',
      icon: '💡'
    },
    {
      step: '03',
      title: 'DESIGN',
      description: 'Create compelling visual designs across all touchpoints, ensuring consistency and brand coherence.',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'IMPLEMENTATION',
      description: 'Deploy designs across all platforms and provide comprehensive brand guidelines for future use.',
      icon: '🚀'
    }
  ];

  const benefits = [
    'STRONG BRAND IDENTITY',
    'VISUAL CONSISTENCY',
    'MEMORABLE IMPACT',
    'PROFESSIONAL APPEARANCE',
    'COMPETITIVE ADVANTAGE',
    'BRAND RECOGNITION'
  ];

  const stats = [
    { number: '200+', label: 'BRANDS DESIGNED' },
    { number: '98%', label: 'CLIENT SATISFACTION' },
    { number: '500+', label: 'DESIGN PROJECTS' },
    { number: '15+', label: 'YEARS EXPERIENCE' }
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
                BRANDING & DESIGN
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
                CREATE A
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
                LASTING IMPRESSION
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
              A cohesive and visually appealing brand is key to making a lasting impression. Our branding and design services encompass logo design, brand strategy, and graphic design, ensuring that your brand communicates its unique identity effectively.
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
              <Shield className="w-8 h-8" />
              <span className="font-mono text-sm tracking-[0.3em] text-white/60">OUR SERVICES</span>
              <Shield className="w-8 h-8" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-white">COMPREHENSIVE</span>
              <span className="block text-outline">DESIGN SOLUTIONS</span>
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
              <span className="block text-outline-black">CREATE BRANDS</span>
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
              <span className="block text-outline">BRANDING & DESIGN</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
              Transform your brand with our comprehensive design solutions
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
              <Shield className="w-16 h-16 mx-auto mb-6" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-black">READY TO BUILD</span>
              <span className="block text-outline-black">YOUR BRAND?</span>
            </h2>
            
            <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto font-light">
              Let's create a compelling brand identity that resonates with your audience and drives business growth.
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
                  navigate('/contact?service=Branding & Design');
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

export default BrandingDesign;
