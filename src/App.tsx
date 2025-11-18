import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import PerformanceMonitor from './components/PerformanceMonitor';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import EventManagement from './Pages/EventManagement';
import DigitalMarketing from './Pages/DigitalMarketing';
import BrandingDesign from './Pages/BrandingDesign';
import ContentCreation from './Pages/ContentCreation';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <PerformanceMonitor />
        <main role="main" className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/event-management" element={<EventManagement />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/branding-design" element={<BrandingDesign />} />
            <Route path="/content-creation" element={<ContentCreation />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;