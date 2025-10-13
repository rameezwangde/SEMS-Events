import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center font-bold text-lg sm:text-xl clip-hexagon">
                S
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-wider">SEMS</h3>
                <p className="text-xs font-mono tracking-[0.3em] text-black/60 -mt-1">EVENTS</p>
              </div>
            </div>
            <p className="text-black/80 leading-relaxed font-light">
              Your premier partner in turning ordinary moments into extraordinary memories. 
              We specialize in 15 different event categories with global reach and expertise.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 hover:bg-black text-black hover:text-white flex items-center justify-center transition-all duration-300 clip-hexagon"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 sm:space-y-8">
            <h4 className="text-base sm:text-lg font-bold font-mono tracking-wider">NAVIGATION</h4>
            <nav className="space-y-4">
              {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT', 'PRIVACY'].map((item) => (
                <Link
                  key={item}
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  className="block text-black/70 hover:text-black hover:translate-x-2 transform transition-all duration-300 font-mono text-sm tracking-wider"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6 sm:space-y-8">
            <h4 className="text-base sm:text-lg font-bold font-mono tracking-wider">SERVICES</h4>
            <nav className="space-y-4">
              {[
                'CORPORATE EVENTS',
                'SOCIAL EVENTS',
                'CULTURAL EVENTS',
                'SPORTS EVENTS',
                'ENTERTAINMENT EVENTS'
              ].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-black/70 hover:text-black hover:translate-x-2 transform transition-all duration-300 font-mono text-sm tracking-wider"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <h4 className="text-base sm:text-lg font-bold font-mono tracking-wider">CONTACT</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <div className="text-black/80 font-mono text-sm">
                  <p>DUBAI, UAE</p>
                  <p>ETISALAT ACADEMY AREA</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black/80 font-mono text-sm">+971 508194875</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black/80 font-mono text-sm">+971 564526626</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black/80 font-mono text-sm">SUPPORT@SEMS.AE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-black/20 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <p className="font-mono text-xs sm:text-sm tracking-wider text-center lg:text-left">
                © 2025 SEMS EVENTS. ALL RIGHTS RESERVED.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-center">
              <Link to="/privacy" className="text-black/60 hover:text-black text-xs sm:text-sm font-mono tracking-wider transition-colors duration-300">
                PRIVACY POLICY
              </Link>
              <a href="#" className="text-black/60 hover:text-black text-xs sm:text-sm font-mono tracking-wider transition-colors duration-300">
                TERMS OF SERVICE
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
