import { motion } from 'motion/react';
import { Users, Award, Heart, Target, CheckCircle, Zap, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'INNOVATION',
      description: 'Pushing boundaries with cutting-edge concepts and revolutionary event experiences.'
    },
    {
      icon: Target,
      title: 'PRECISION',
      description: 'Meticulous planning and flawless execution in every detail of your event.'
    },
    {
      icon: Users,
      title: 'COLLABORATION',
      description: 'Working as true partners to bring your unique vision to extraordinary life.'
    },
    {
      icon: Award,
      title: 'EXCELLENCE',
      description: 'Delivering award-winning experiences that exceed expectations every time.'
    }
  ];

  const team = [
    {
      name: 'ALEXANDRA STONE',
      role: 'FOUNDER & CREATIVE DIRECTOR',
      image: 'https://images.pexels.com/photos/3760137/pexels-photo-3760137.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 18 years of experience creating extraordinary events that push creative boundaries.',
      specialty: 'CREATIVE STRATEGY'
    },
    {
      name: 'MARCUS CHEN',
      role: 'OPERATIONS DIRECTOR',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Master of logistics and execution, ensuring every event runs with military precision and seamless flow.',
      specialty: 'OPERATIONS EXCELLENCE'
    },
    {
      name: 'SOPHIA RIVERA',
      role: 'LEAD EXPERIENCE DESIGNER',
      image: 'https://images.pexels.com/photos/3760736/pexels-photo-3760736.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning designer who transforms spaces into immersive environments that captivate and inspire.',
      specialty: 'SPATIAL DESIGN'
    }
  ];

  const achievements = [
    { number: '847', label: 'EVENTS DELIVERED' },
    { number: '23', label: 'INDUSTRY AWARDS' },
    { number: '18', label: 'YEARS EXPERIENCE' },
    { number: '4.9', label: 'CLIENT RATING' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Revolutionary Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 clip-hexagon"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6 sm:space-y-8 perspective-3d"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div 
                className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
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
                <div className="w-1 sm:w-2 h-12 sm:h-16 bg-white"></div>
                <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/60">ABOUT SEMS EVENTS</span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-none">
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
                    WE ARE
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
                    EVENT
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
                      delay: 0.8, 
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
                    ARCHITECTS
                  </motion.span>
                </h1>
                
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
                    delay: 1.0, 
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
                  Since 2006, we've been revolutionizing the event industry through innovative design, 
                  cutting-edge technology, and an unwavering commitment to creating extraordinary experiences.
                </motion.p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                {[
                  '847+ SUCCESSFUL EVENTS DELIVERED',
                  '23 INDUSTRY AWARDS WON',
                  '4.9/5 CLIENT SATISFACTION RATING'
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <span className="text-sm sm:text-lg font-mono tracking-wider">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <div className="relative">
                <div className="overflow-hidden clip-diagonal">
                  <img
                    src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="About SEMS Events"
                    className="w-full h-96 lg:h-[600px] object-cover hover-scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-white text-black p-6"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-center">
                    <Zap className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-bold text-2xl">18+</p>
                    <p className="text-sm font-mono">YEARS</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Revolutionary Layout */}
      <section className="py-32 bg-white text-black relative">
        <div className="absolute inset-0 grid-dots opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <Eye className="w-8 h-8" />
                <h2 className="text-4xl lg:text-6xl font-bold">
                  <span className="text-outline-black">OUR</span>
                  <span className="block text-black">MISSION</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-black/80 font-light">
                <p>
                  To revolutionize the event industry by creating extraordinary experiences that 
                  transcend expectations and leave lasting impressions on every attendee.
                </p>
                <p>
                  We believe every event should be a masterpiece of creativity, precision, and 
                  innovation. Our mission is to transform ordinary moments into extraordinary 
                  memories through cutting-edge design and flawless execution.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <Target className="w-8 h-8" />
                <h2 className="text-4xl lg:text-6xl font-bold">
                  <span className="text-outline-black">OUR</span>
                  <span className="block text-black">VISION</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-black/80 font-light">
                <p>
                  To be the global leader in event innovation, setting new standards for 
                  creativity, sustainability, and technological integration in every experience we create.
                </p>
                <p>
                  We envision a future where events are not just gatherings, but transformative 
                  experiences that inspire, connect, and create positive change in the world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Geometric Grid */}
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
              <div className="w-16 h-1 bg-white"></div>
              <span className="font-mono text-sm tracking-[0.3em] text-white/60">OUR VALUES</span>
              <div className="w-16 h-1 bg-white"></div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-white">CORE</span>
              <span className="block text-outline">PRINCIPLES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:border-white/30 relative overflow-hidden">
                  <div className="relative z-10">
                    <value.icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-4 font-mono tracking-wider">{value.title}</h3>
                    <p className="text-white/80 leading-relaxed font-light">{value.description}</p>
                  </div>
                  
                  {/* Animated Background Element */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 border-2 border-white/20 clip-triangle opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Revolutionary Presentation */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="block text-black">MEET THE</span>
              <span className="block text-outline-black">VISIONARIES</span>
            </h2>
            <p className="text-xl text-black/60 max-w-3xl mx-auto font-light">
              The creative minds behind every extraordinary experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover clip-diagonal group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Specialty Badge */}
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-mono tracking-wider">
                    {member.specialty}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-mono tracking-wider">{member.name}</h3>
                  <p className="text-lg text-black/60 font-mono">{member.role}</p>
                  <p className="text-black/80 leading-relaxed font-light">{member.bio}</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Minimal Stats */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl lg:text-7xl font-bold mb-2 font-mono group-hover:text-outline transition-all duration-300">
                  {achievement.number}
                </h3>
                <p className="text-sm font-mono tracking-[0.3em] text-white/60">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;