"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ProductsContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Set initial category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://next-js-task-server-seven.vercel.app/products");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
        setError("");
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? p.category === category : true;
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearch("");
    setCategory("");
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="loading loading-spinner loading-lg"></div>
        <p className="mt-4 text-white">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="alert alert-error bg-red-900 border-red-700">
          <span className="text-red-200">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-white">
          {category ? `${category} Products` : 'All Products'}
        </h1>
        <p className="text-gray-300 mb-4">
          {category 
            ? `Browse our collection of ${category.toLowerCase()} products` 
            : 'Browse all available items in one place'
          }
        </p>
        
        {/* Active Filters */}
        {(category || search) && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-gray-400 text-sm">Active filters:</span>
            {category && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {category}
                <button 
                  onClick={() => setCategory("")}
                  className="hover:bg-blue-700 rounded-full p-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            {search && (
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                Search: "{search}"
                <button 
                  onClick={() => setSearch("")}
                  className="hover:bg-green-700 rounded-full p-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            <button 
              onClick={clearFilters}
              className="text-gray-400 hover:text-white text-sm underline"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="lg:w-64">
          <select
            className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Smartphones">📱 Smartphones</option>
            <option value="Laptops">💻 Laptops</option>
            <option value="Accessories">🎧 Accessories</option>
            <option value="Smart Home">🏠 Smart Home</option>
            <option value="Wearables">⌚ Wearables</option>
            <option value="Gaming">🎮 Gaming</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-400">
          Showing {filtered.length} of {products.length} products
          {category && ` in ${category}`}
          {search && ` matching "${search}"`}
        </p>
      </div>

      {/* No Results Message */}
      {filtered.length === 0 && !loading && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20a7.962 7.962 0 01-5-1.709M15 3H9a2 2 0 00-2 2v1.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 000 1.414l6.414 6.414a1 1 0 01.293.707V20a2 2 0 002 2h6a2 2 0 002-2v-1.586a1 1 0 01.293-.707l6.414-6.414a1 1 0 000-1.414L16.707 5.707A1 1 0 0016.414 5.414V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
            <p className="text-gray-400 mb-4">
              {category || search 
                ? "Try adjusting your filters or search terms" 
                : "No products are currently available"
              }
            </p>
            {(category || search) && (
              <button 
                onClick={clearFilters}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <div
            key={product._id}
            className="border border-gray-700 rounded-xl p-4 hover:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-800 group"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={product?.imageUrl}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                alt={product.title}
              />
              <div className="absolute top-2 right-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
                {product.title}
              </h3>

              <p className="text-gray-300 text-sm line-clamp-2">
                {product.shortDesc}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-2xl font-bold text-green-400">
                  ${product.price}
                </span>
                <Link
                  href={`/products/${product._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <div className="loading loading-spinner loading-lg"></div>
      <p className="mt-4 text-white">Loading products...</p>
    </div>
  );
}

export default function ProductsListPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}
