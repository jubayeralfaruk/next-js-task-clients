"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://next-js-task-server-seven.vercel.app/products/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="loading loading-spinner loading-lg"></div>
        <p className="mt-4 text-white">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="alert alert-error bg-red-900 border-red-700">
          <span className="text-red-200">{error}</span>
        </div>
        <Link
          href="/products"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          ← Back to Products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-400">Product not found.</p>
        <Link
          href="/products"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title and Category */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{product.shortDesc}</p>
          </div>

          {/* Price */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-lg">Price:</span>
              <span className="text-3xl font-bold text-green-400">${product.price}</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Product Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-gray-400 text-sm">Date Added:</span>
                <p className="text-white font-medium">{product.date}</p>
              </div>
              
              <div>
                <span className="text-gray-400 text-sm">Created By:</span>
                <p className="text-white font-medium">{product.createBy}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Interested in this product?</h3>
            <p className="text-blue-100 mb-3">
              Contact the seller directly to make a purchase or ask questions.
            </p>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">{product.createBy}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition text-center font-medium">
              ← Back to Products
            </Link>
            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
              Contact Seller
            </button>
          </div>
        </div>
      </div>

      {/* Full Description */}
      <div className="mt-16">
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Description</h2>
          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {product.fullDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
