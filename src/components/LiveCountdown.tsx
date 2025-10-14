import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const LiveCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Event date: October 18, 2025, 6:00 PM Dubai time
  const eventDate = new Date('2025-10-18T18:00:00+04:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const countdownItems = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Mins' },
    { value: timeLeft.seconds, label: 'Secs' }
  ];

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Event Date and Time */}
      <div className="mb-6">
        <motion.div 
          className="text-2xl font-bold text-black mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sat 18 Oct
        </motion.div>
        <motion.div 
          className="text-gray-600 space-y-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Doors: 17:00</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Start: 18:00</span>
          </div>
        </motion.div>
      </div>

      {/* Live Countdown Timer */}
      <div className="mb-6">
        <motion.div 
          className="text-sm font-medium text-gray-600 mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Sale ends in
        </motion.div>
        <div className="flex space-x-2 text-center">
          {countdownItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-gray-50 rounded-lg p-3 flex-1 border border-gray-200"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 0.5 + index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f3f4f6",
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-2xl font-bold text-black"
                key={item.value}
                initial={{ scale: 1.2, color: "#3b82f6" }}
                animate={{ scale: 1, color: "#000" }}
                transition={{ duration: 0.3 }}
              >
                {item.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs text-gray-500 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Price Information */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="text-sm text-gray-600 mb-2">Price from:</div>
        <div className="text-2xl font-bold text-black">14.17 USD</div>
      </motion.div>

      {/* Book Now Button */}
      <motion.button 
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Select tickets</span>
        <motion.div
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          →
        </motion.div>
      </motion.button>

      {/* Song Preview Section */}
      <motion.div 
        className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <div className="flex items-center space-x-3">
          <motion.div 
            className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ▶
            </motion.div>
          </motion.div>
          <div className="flex-1">
            <div className="font-medium text-black">Andrea Jerem...</div>
            <div className="text-sm text-gray-500">Song preview</div>
          </div>
          <div className="flex items-center space-x-2">
            <motion.button 
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ⭐
            </motion.button>
            <motion.button 
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ▶
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Location Info */}
      <motion.div 
        className="mt-4 flex items-center space-x-2 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <MapPin className="w-4 h-4" />
        <span className="text-sm">Etisalat Academy • Dubai</span>
      </motion.div>
    </motion.div>
  );
};

export default LiveCountdown;
