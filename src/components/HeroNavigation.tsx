import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Instagram, Facebook, Zap, Menu, X } from 'lucide-react';

type NavItem = 'HOME' | 'ABOUT' | 'SERVICES' | 'PORTFOLIO' | 'CONTACT';

interface HeroNavigationProps {
  active: NavItem;
}

const navItems: NavItem[] = ['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'];

const HeroNavigation = ({ active }: HeroNavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderNavLink = (item: NavItem, variant: 'mobile' | 'desktop') => {
    const isActive = active === item;
    const basePath = item === 'HOME' ? '/' : `/${item.toLowerCase()}`;

    if (variant === 'mobile') {
      return (
        <Link
          key={item}
          to={basePath}
          className={`text-lg sm:text-xl font-mono font-bold transition-all duration-300 text-center ${
            isActive ? 'text-white' : 'text-white/80 hover:text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="relative inline-block pb-1.5 sm:pb-2">
            {item}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white rounded-full"
                layoutId="activeTabMobile"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)',
                }}
              />
            )}
          </span>
        </Link>
      );
    }

    return (
      <Link
        key={item}
        to={basePath}
        className={`relative px-4 py-2 text-sm font-mono font-medium transition-all duration-300 rounded-full ${
          isActive ? 'bg-white text-black' : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        <span className="relative z-10">{item}</span>
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            layoutId="activeTabDesktop"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Link>
    );
  };

  const socialLinks = [
    {
      href: 'https://wa.me/971508194875',
      label: 'WhatsApp',
      hover: 'hover:bg-green-500/20',
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    },
    {
      href: 'https://instagram.com/semsmanaging',
      label: 'Instagram',
      hover: 'hover:bg-pink-500/20',
      icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    },
    {
      href: 'https://www.facebook.com/sems.live',
      label: 'Facebook',
      hover: 'hover:bg-blue-500/20',
      icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    },
  ];

  return (
    <section className="relative pt-0 pb-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20"></div>
      <div className="absolute inset-0 noise-bg"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl lg:rounded-full shadow-2xl mb-8 sm:mb-12 mt-2 sm:mt-4 relative overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <div className="lg:hidden">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 gap-3">
              <Link
                to="/"
                className="flex items-center space-x-2.5 sm:space-x-3 group flex-shrink-0"
                aria-label="SEMS Events - Go to homepage"
              >
                <div className="relative">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-white to-white/90 text-black flex items-center justify-center font-bold text-xl sm:text-2xl clip-hexagon group-hover:morph-shape transition-all duration-300 shadow-lg">
                    S
                  </div>
                  <Zap className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
                <div className="font-heading">
                  <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide glitch-text drop-shadow-lg" style={{ fontWeight: 900 }}>
                    SEMS
                  </h1>
                  <p className="text-xs sm:text-sm text-white/70 tracking-[0.35em] -mt-1 font-mono">EVENTS</p>
                </div>
              </Link>

              <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
                <button
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg"
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  aria-label="Toggle navigation menu"
                >
                  <AnimatePresence mode="wait" initial={false}>
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
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 sm:px-6 py-4 border-t border-white/10"
                >
                  <div className="flex flex-col items-center space-y-4">
                    {navItems.map((item) => renderNavLink(item, 'mobile'))}
                    
                    {/* Social Media Icons in Mobile Menu */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="flex items-center gap-3 pt-4 mt-4 border-t border-white/10 w-full justify-center"
                    >
                      {socialLinks.map((link) => (
                        <motion.a
                          key={`mobile-menu-${link.label}`}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-white/10 ${link.hover} backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 transition-all duration-300`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={link.label}
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-1 lg:p-2 w-full">
            <Link
              to="/"
              className="flex items-center space-x-2 group mr-2"
              aria-label="SEMS Events - Go to homepage"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold text-lg clip-hexagon group-hover:morph-shape transition-all duration-300">
                  S
                </div>
                <Zap className="absolute -top-1 -right-1 w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-heading">
                <h1 className="text-lg font-bold text-white tracking-wide glitch-text" style={{ fontWeight: 900 }}>SEMS</h1>
                <p className="text-xs text-white/60 tracking-[0.3em] -mt-1 font-mono">EVENTS</p>
              </div>
            </Link>

            {navItems.map((item) => renderNavLink(item, 'desktop'))}

            <div className="flex items-center space-x-1.5 ml-2 pl-2 border-l border-white/20">
              {socialLinks.map((link) => (
                <motion.a
                  key={`desktop-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-colors ${link.hover === 'hover:bg-green-500/20' ? 'hover:bg-green-600' : link.hover === 'hover:bg-pink-500/20' ? 'hover:bg-pink-600' : 'hover:bg-blue-600'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroNavigation;

