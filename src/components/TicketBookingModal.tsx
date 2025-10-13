import { X, ExternalLink } from 'lucide-react';

interface TicketBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketBookingModal = ({ isOpen, onClose }: TicketBookingModalProps) => {
  if (!isOpen) return null;

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
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(4px)'
      }}
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          backgroundColor: '#1f2937',
          borderRadius: '1rem',
          padding: '2rem',
          maxWidth: '28rem',
          width: '90%',
          margin: '0 auto',
          zIndex: 10000
        }}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '2rem',
            height: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
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
            <button
              key={option.name}
              onClick={() => handleTicketClick(option.url)}
              className="w-full bg-gray-700 hover:bg-gray-600 rounded-xl p-4 flex items-center justify-between transition-all duration-300 group"
              style={{
                width: '100%',
                backgroundColor: '#374151',
                borderRadius: '0.75rem',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '1rem'
              }}
            >
              <div className="flex items-center space-x-4">
                {option.logo}
                <div className="text-left">
                  <div className="text-white font-semibold">Buy Tickets</div>
                  <div className="text-gray-400 text-xs">{option.description}</div>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          ))}
        </div>

        {/* Close Button - Bottom */}
        <button
          onClick={onClose}
          className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 rounded-xl font-medium transition-colors"
          style={{
            width: '100%',
            backgroundColor: '#4b5563',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '0.75rem',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TicketBookingModal;