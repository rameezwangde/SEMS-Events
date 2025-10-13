import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

interface TicketBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketBookingModal = ({ isOpen, onClose }: TicketBookingModalProps) => {
  const ticketOptions = [
    {
      name: 'Platinumlist',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-white font-semibold text-sm">Platinumlist</span>
        </div>
      ),
      url: 'https://dubai.platinumlist.net/event-tickets/101167/andrea-jeremiah-live-ft-the-jeremiah-project-at-etisalat-academy-in-dubai?utm_source=website&utm_medium=button&utm_campaign=andrea_concert&utm_content=platinumlist',
      description: 'Premium ticketing platform'
    },
    {
      name: 'Q-Tickets',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">Q</span>
          </div>
          <div className="flex space-x-1">
            <span className="text-red-500 font-bold text-sm">T</span>
            <span className="text-orange-500 font-bold text-sm">I</span>
            <span className="text-yellow-500 font-bold text-sm">C</span>
            <span className="text-green-500 font-bold text-sm">K</span>
            <span className="text-blue-500 font-bold text-sm">E</span>
            <span className="text-purple-500 font-bold text-sm">T</span>
            <span className="text-pink-500 font-bold text-sm">S</span>
          </div>
        </div>
      ),
      url: 'https://events.q-tickets.com/uae/eventdetails/6313967666/andrea-jeremiah-live-in-dubai?utm_source=website&utm_medium=button&utm_campaign=andrea_concert&utm_content=qtickets',
      description: 'Official event ticketing'
    }
  ];

  const handleTicketClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4 
            }}
          >
            {/* Close Button - Top Right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Choose Your Ticket Platform</h3>
              <p className="text-gray-400 text-sm">Select your preferred ticketing platform to purchase tickets</p>
            </div>

            {/* Ticket Options */}
            <div className="space-y-4 mb-8">
              {ticketOptions.map((option, index) => (
                <motion.button
                  key={option.name}
                  onClick={() => handleTicketClick(option.url)}
                  className="w-full bg-gray-700 hover:bg-gray-600 rounded-xl p-4 flex items-center justify-between transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    {option.logo}
                    <div className="text-left">
                      <div className="text-white font-semibold">Buy Tickets</div>
                      <div className="text-gray-400 text-xs">{option.description}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.button>
              ))}
            </div>

            {/* Close Button - Bottom */}
            <motion.button
              onClick={onClose}
              className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 rounded-xl font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TicketBookingModal;
