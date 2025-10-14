import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight, Filter, Grid, List, X, ExternalLink } from 'lucide-react';

// Sample upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: 'Andrea Jeremiah Live in Dubai',
    date: '2025-10-18',
    time: '18:00',
    location: 'Etisalat Academy, Dubai',
    category: 'Entertainment',
    description: 'First-ever live concert in Dubai featuring Andrea Jeremiah with The Jeremiah Project',
    image: 'https://cdn.platinumlist.net/upload/event/promo/56810_upload68a6d0347dbb9_1755762740-0-en1755762754.jpeg',
    price: 'From AED 150',
    status: 'upcoming',
    featured: true,
    ticketUrl: 'https://dubai.platinumlist.net/event-tickets/101167/andrea-jeremiah-live-ft-the-jeremiah-project-at-etisalat-academy-in-dubai'
  },
  {
    id: 2,
    title: 'Corporate Gala Dinner 2025',
    date: '2025-11-15',
    time: '19:30',
    location: 'Atlantis The Palm, Dubai',
    category: 'Corporate',
    description: 'Annual corporate gala dinner with awards ceremony and networking',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'AED 500 per person',
    status: 'upcoming',
    featured: false,
    ticketUrl: '#'
  },
  {
    id: 3,
    title: 'Tech Innovation Summit',
    date: '2025-12-05',
    time: '09:00',
    location: 'Dubai World Trade Centre',
    category: 'Conference',
    description: 'Leading technology conference featuring industry experts and innovators',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'AED 300 per person',
    status: 'upcoming',
    featured: false,
    ticketUrl: '#'
  },
  {
    id: 4,
    title: 'Wedding Expo 2025',
    date: '2025-12-20',
    time: '10:00',
    location: 'Dubai Festival City',
    category: 'Exhibition',
    description: 'Premier wedding exhibition showcasing latest trends and vendors',
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'Free Entry',
    status: 'upcoming',
    featured: false,
    ticketUrl: '#'
  },
  {
    id: 5,
    title: 'New Year Eve Celebration',
    date: '2025-12-31',
    time: '20:00',
    location: 'Burj Khalifa Area, Dubai',
    category: 'Entertainment',
    description: 'Spectacular New Year celebration with fireworks and live entertainment',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'From AED 200',
    status: 'upcoming',
    featured: true,
    ticketUrl: '#'
  },
  {
    id: 6,
    title: 'Fashion Week Dubai',
    date: '2026-01-15',
    time: '18:00',
    location: 'Dubai Mall Fashion Avenue',
    category: 'Fashion',
    description: 'International fashion week showcasing emerging and established designers',
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'AED 400 per show',
    status: 'upcoming',
    featured: false,
    ticketUrl: '#'
  }
];

const categories = ['All', 'Entertainment', 'Corporate', 'Conference', 'Exhibition', 'Fashion'];

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [featuredSectionRef, setFeaturedSectionRef] = useState<HTMLDivElement | null>(null);

  // Filter events based on category
  const filteredEvents = selectedCategory === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  // Get current month and year
  const currentMonth = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Navigate months
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  // Get events for current month
  const getEventsForMonth = (date: Date) => {
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === date.getMonth() && 
             eventDate.getFullYear() === date.getFullYear();
    });
  };

  // Get calendar days
  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      const dayEvents = getEventsForMonth(current).filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === current.getDate();
      });
      
      days.push({
        date: new Date(current),
        events: dayEvents,
        isCurrentMonth: current.getMonth() === month,
        isToday: current.toDateString() === new Date().toDateString()
      });
      
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  const calendarDays = getCalendarDays();

  // Handle event click - modal will be centered within featured section
  const handleEventClick = (event: any, clickEvent: React.MouseEvent) => {
    setSelectedEvent(event);
  };

  // Handle ticket booking
  const handleTicketClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="py-20 bg-white text-black relative overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-black"></div>
            <span className="font-mono text-sm tracking-[0.3em] text-black/60">UPCOMING EVENTS</span>
            <div className="w-16 h-1 bg-black"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-black">EVENT</span>
            <span className="block text-outline-black">CALENDAR</span>
          </h2>
          
          <p className="text-lg text-black/70 max-w-3xl mx-auto font-light">
            Discover our upcoming events and never miss an opportunity to experience something extraordinary
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Month Navigation */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-black/10 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <h3 className="text-2xl font-bold font-mono tracking-wider min-w-[200px] text-center">
              {currentMonth}
            </h3>
            
            <motion.button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-black/10 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* View Controls */}
          <div className="flex items-center space-x-4">
            {/* Filter Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 px-4 py-2 border border-black/20 rounded-lg hover:bg-black/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Filter className="w-4 h-4" />
                <span className="font-mono text-sm">{selectedCategory}</span>
              </motion.button>
              
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 bg-white border border-black/20 rounded-lg shadow-lg z-10 min-w-[150px]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-black/5 transition-colors font-mono text-sm ${
                          selectedCategory === category ? 'bg-black text-white' : ''
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* View Toggle */}
            <div className="flex border border-black/20 rounded-lg overflow-hidden">
              <motion.button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Grid className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <List className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Calendar Grid */}
        <motion.div
          className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Calendar Header */}
          <div className="grid grid-cols-7 bg-black text-white">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-4 text-center font-mono text-sm font-bold">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7">
            {calendarDays.map((day, index) => (
              <motion.div
                key={index}
                className={`min-h-[120px] p-2 border-r border-b border-black/10 last:border-r-0 ${
                  !day.isCurrentMonth ? 'bg-gray-50 text-gray-400' : 'hover:bg-black/5'
                } ${day.isToday ? 'bg-blue-50' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.01, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col h-full">
                  <div className={`text-sm font-mono font-bold mb-2 ${
                    day.isToday ? 'text-blue-600' : day.isCurrentMonth ? 'text-black' : 'text-gray-400'
                  }`}>
                    {day.date.getDate()}
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    {day.events.slice(0, 2).map((event) => (
                      <motion.div
                        key={event.id}
                        className={`text-xs p-1 rounded cursor-pointer transition-colors ${
                          event.featured 
                            ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                            : 'bg-black/10 text-black hover:bg-black hover:text-white'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => handleEventClick(event, e)}
                      >
                        <div className="truncate font-mono font-medium">{event.title}</div>
                        <div className="text-xs opacity-75">{event.time}</div>
                      </motion.div>
                    ))}
                    {day.events.length > 2 && (
                      <div className="text-xs text-gray-500 font-mono">
                        +{day.events.length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Events List */}
        <motion.div
          ref={setFeaturedSectionRef}
          className="mt-16 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold font-mono tracking-wider mb-8 text-center">
            FEATURED EVENTS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                onClick={(e) => handleEventClick(event, e)}
              >
                <div className="bg-white border border-black/10 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:border-black/30">
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Event Badge */}
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-mono text-xs font-bold">
                      FEATURED
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 text-black px-2 py-1 rounded font-mono text-xs">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-bold font-mono tracking-wider group-hover:text-black/80 transition-colors">
                      {event.title}
                    </h4>
                    
                    <div className="space-y-2 text-sm text-black/70">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-black/10">
                      <span className="font-bold text-lg">{event.price}</span>
                      <motion.div
                        className="flex items-center space-x-2 text-black group-hover:text-black/60 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="font-mono text-sm">LEARN MORE</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Event Detail Modal - Constrained to Featured Section */}
      <AnimatePresence>
        {selectedEvent && featuredSectionRef && (
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            margin: 0,
            padding: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setSelectedEvent(null)}
        >
          {/* Modal Content - Centered within featured section */}
          <motion.div 
            onClick={(e) => e.stopPropagation()}
            initial={{ 
              scale: 0.3, 
              opacity: 0
            }}
            animate={{ 
              scale: 1, 
              opacity: 1
            }}
            exit={{ 
              scale: 0.3, 
              opacity: 0
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            style={{
              backgroundColor: '#1f2937',
              borderRadius: '1rem',
              padding: '1.5rem',
              maxWidth: '24rem',
              width: '90%',
              maxHeight: '80%',
              overflowY: 'auto',
              zIndex: 10000,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Close Button - Top Right */}
            <button
              onClick={() => setSelectedEvent(null)}
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

            {/* Event Image */}
            <div className="mb-4">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>

            {/* Event Badges */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-mono text-xs font-bold">
                {selectedEvent.category}
              </span>
              {selectedEvent.featured && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full font-mono text-xs font-bold">
                  FEATURED
                </span>
              )}
            </div>

            {/* Event Title */}
            <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-wider">
              {selectedEvent.title}
            </h3>

            {/* Event Description */}
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              {selectedEvent.description}
            </p>

            {/* Event Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-gray-400 text-sm font-mono">DATE</div>
                  <div className="text-white font-medium">
                    {new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-gray-400 text-sm font-mono">TIME</div>
                  <div className="text-white font-medium">{selectedEvent.time}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-gray-400 text-sm font-mono">LOCATION</div>
                  <div className="text-white font-medium">{selectedEvent.location}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-gray-400 text-sm font-mono">PRICE</div>
                  <div className="text-white font-medium">{selectedEvent.price}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => handleTicketClick(selectedEvent.ticketUrl)}
                className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>BOOK NOW</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setSelectedEvent(null)}
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
          </motion.div>
        </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventCalendar;