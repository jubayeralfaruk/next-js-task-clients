'use client';

export default function Brands() {
  const brands = [
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      description: "Premium smartphones, laptops, and accessories"
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      description: "Innovative mobile devices and smart home solutions"
    },
    {
      name: "Sony",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
      description: "High-quality audio and gaming equipment"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description: "Cutting-edge laptops and gaming consoles"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Smart home devices and wearable technology"
    },
    {
      name: "Nintendo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg",
      description: "Revolutionary gaming consoles and accessories"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Trusted Brands</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We partner with the world's leading technology brands to bring you the best products
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="w-full h-full bg-white rounded-lg p-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-800 font-bold text-lg">
                      {brand.name}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{brand.name}</h3>
              <p className="text-gray-400 text-sm">{brand.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Trusted Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Products Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}