'use client';

import Link from 'next/link';

export default function Categories() {
  const categories = [
    { name: "Smartphones", icon: "📱", color: "from-blue-500 to-blue-600" },
    { name: "Laptops", icon: "💻", color: "from-purple-500 to-purple-600" },
    { name: "Accessories", icon: "🎧", color: "from-green-500 to-green-600" },
    { name: "Smart Home", icon: "🏠", color: "from-orange-500 to-orange-600" },
    { name: "Wearables", icon: "⌚", color: "from-pink-500 to-pink-600" },
    { name: "Gaming", icon: "🎮", color: "from-red-500 to-red-600" },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Shop by Category</h2>
        <p className="text-gray-300 text-lg">
          Discover our wide range of tech products organized by category
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/products?category=${encodeURIComponent(category.name)}`}
            className="group block"
          >
            <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-transparent`}>
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-white font-semibold text-sm lg:text-base">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Categories Button */}
      <div className="text-center mt-12">
        <Link
          href="/products"
          className="inline-flex items-center px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium border border-gray-600 hover:border-gray-500"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          View All Products
        </Link>
      </div>
    </section>
  );
}
