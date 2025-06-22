// src/components/Newsletter.jsx
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate newsletter subscription
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    // Simulate successful subscription
    setMessage('Thank you! You have successfully subscribed to our newsletter.');
    setStatus('success');
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for the latest deals, recipes, and news.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full sm:w-auto flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow hover:shadow-md"
          >
            Subscribe
          </button>
        </form>

        {/* Message Display */}
        {message && (
          <p
            id="newsletter-message"
            className={`mt-4 text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}