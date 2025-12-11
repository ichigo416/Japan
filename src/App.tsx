import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ItinerariesPage from './pages/IternariesPage';
import TravelInfoPage from './pages/TravelInfo';
import GalleryPage from './pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/itineraries" element={<ItinerariesPage />} />
            <Route path="/travel-info" element={<TravelInfoPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
