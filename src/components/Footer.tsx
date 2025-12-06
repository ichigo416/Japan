import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter an email address');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }])
        .select();

      if (error) {
        if (error.code === '23505') {
          setMessage('This email is already subscribed');
        } else {
          setMessage('Failed to subscribe. Please try again.');
        }
      } else {
        setMessage('Subscribed successfully!');
        setEmail('');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🗾</span>
              <h3 className="text-2xl font-bold text-red-500">Visit Japan</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Discover the perfect blend of ancient traditions and modern innovation in the Land of the Rising Sun. Your gateway to unforgettable Japanese experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-sm transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-sm transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-sm transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-sm transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Destinations', 'Travel Guides', 'Tour Packages', 'Blog', 'FAQs'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <span className="text-red-500">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  123 Sakura Street, Shibuya-ku
                  <br />
                  Tokyo 150-0002, Japan
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">+81 3-1234-5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">info@visitjapan.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Subscribe to receive travel tips, special offers, and updates about Japan.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="px-4 py-3 bg-gray-800 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all placeholder-gray-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-700 text-white font-semibold rounded-sm transition-all duration-300 hover:scale-105 disabled:scale-100"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
                <Send className="w-4 h-4" />
              </button>
              {message && (
                <p className={`text-sm ${message.includes('success') ? 'text-green-400' : message.includes('already') ? 'text-yellow-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Visit Japan. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
