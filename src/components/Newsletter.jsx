'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate newsletter signup
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, 
            exclusive deals, and special offers.
          </p>
        </div>

        {isSubscribed ? (
          <div className="bg-green-500 text-white p-4 rounded-lg inline-block">
            ✅ Thank you for subscribing! Check your email for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none text-white border border-gray-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 flex justify-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-blue-100">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-blue-100">Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">99%</div>
            <div className="text-blue-100">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}