import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Revolutionary Logo with Contact */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 sm:space-x-4 group"
                aria-label="SEMS Events - Go to homepage"
              >
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center font-bold text-lg sm:text-xl clip-hexagon group-hover:morph-shape transition-all duration-300">
                    S
                  </div>
                  <Zap className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-mono">
                  <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider glitch-text">SEMS</h1>
                  <p className="text-xs text-white/60 tracking-[0.3em] -mt-1">EVENTS</p>
                </div>
              </Link>
              
              {/* Phone Numbers and All Navigation - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:flex items-center space-x-4">
                <motion.a 
                  href="tel:+971508194875"
                  className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-3 h-3" />
                  <span className="font-mono">+971 508194875</span>
                </motion.a>
                <motion.a 
                  href="tel:+971564526626"
                  className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-3 h-3" />
                  <span className="font-mono">+971 564526626</span>
                </motion.a>
                
                {/* All Navigation Links with Social Media - Grouped together */}
                <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 ml-4">
                  {navItems.map((item, _) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`relative px-6 py-3 text-sm font-mono font-medium transition-all duration-300 rounded-full ${
                        location.pathname === item.path
                          ? 'bg-white text-black'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute inset-0 bg-white rounded-full"
                          layoutId="activeTab"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  ))}
                  
                  {/* Social Media Icons - Next to Contact */}
                  <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/20">
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
                </div>
              </div>
            </div>


            {/* Futuristic Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
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
                    <X size={20} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Revolutionary Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50, rotateY: -90 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      to={item.path}
                      className="text-2xl sm:text-4xl font-mono font-bold text-white hover:text-outline transition-all duration-300 glitch-text"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;