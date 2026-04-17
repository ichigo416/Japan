import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Itineraries from './pages/Itineraries';
import TravelInfo from './pages/TravelInfo';
import Gallery from './pages/Gallery';
import './index.css' 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/travel-info" element={<TravelInfo />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
