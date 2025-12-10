import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <h1 className="mb-6 text-center text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in">
          Discover the Heart of Japan
        </h1>
        <p className="mb-8 max-w-2xl text-center text-lg sm:text-xl md:text-2xl opacity-95 animate-slide-up">
          Experience the perfect blend of ancient traditions and modern marvels
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delayed">
          <button
            onClick={() => navigate('/destinations')}
            className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-sm transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg justify-center"
          >
            Explore Destinations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
