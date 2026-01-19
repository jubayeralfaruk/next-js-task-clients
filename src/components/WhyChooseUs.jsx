'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Guaranteed",
      description: "All products are thoroughly tested and come with manufacturer warranties",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Delivery",
      description: "Express shipping available with same-day delivery in select areas",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Best Prices",
      description: "Competitive pricing with regular discounts and exclusive member deals",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "Expert Support",
      description: "24/7 customer service with technical experts ready to help you",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Secure Shopping",
      description: "SSL encryption and secure payment processing for your peace of mind",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Customer First",
      description: "Your satisfaction is our priority with easy returns and exchanges",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Us?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We're committed to providing the best shopping experience with unmatched quality, 
            service, and value for all your technology needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${reason.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied customers who trust us for their tech needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                Shop Now
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}