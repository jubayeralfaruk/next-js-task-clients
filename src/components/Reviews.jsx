'use client';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing quality products! Fast shipping and excellent customer service. Highly recommended!",
      product: "Wireless Headphones",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      comment: "Great selection of tech gadgets. The smart watch I bought works perfectly and arrived quickly.",
      product: "Smart Watch",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 4,
      comment: "Love the gaming keyboard! RGB lighting is fantastic and the keys feel great for gaming.",
      product: "Gaming Keyboard",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">⭐ Customer Reviews</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          See what our customers are saying about their experience with our products
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-500"
          >
            {/* Header */}
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-white font-semibold">{review.name}</h3>
                <div className="flex items-center mt-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>

            {/* Review Content */}
            <blockquote className="text-gray-300 mb-4 italic">
              "{review.comment}"
            </blockquote>

            {/* Product */}
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-400">
                Reviewed: <span className="text-blue-400">{review.product}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Thousands of Happy Customers
          </h3>
          <p className="text-blue-100 mb-6">
            Experience the quality and service that our customers love
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}