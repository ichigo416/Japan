import { useState } from 'react';
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [touched, setTouched] = useState(false);

  // Only validate on blur (when user leaves the field), never while typing
  const handleBlur = () => {
    setTouched(true);
    if (email && !isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setSuccess('');
    // Only clear error live if user has already been shown one and now fixes it
    if (touched && isValidEmail(e.target.value)) {
      setError('');
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setSuccess('');

    if (!email) { setError('Email is required.'); return; }
    if (!isValidEmail(email)) { setError('Please enter a valid email address.'); return; }

    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        setEmail('');
        setTouched(false);
        setTimeout(() => setSuccess(''), 5000);
      } else {
        setError(data.message);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold">Visit Japan</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Discover the perfect blend of ancient traditions and modern innovation.
              From serene temples to bustling cities, experience the beauty and culture
              that makes Japan truly unique.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@visitjapan.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+81 3-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
                <span>Tokyo, Japan</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest travel tips and exclusive deals.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3" noValidate>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your email address"
                  disabled={loading}
                  className={`w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    error
                      ? 'ring-2 ring-red-500 focus:ring-red-500'
                      : 'focus:ring-red-600'
                  }`}
                />
                {/* Error — only shown after blur or submit, never while typing */}
                {error && (
                  <p className="text-red-400 text-sm mt-1">{error}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>

              {success && (
                <p className="text-green-400 text-sm">{success}</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Visit Japan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;