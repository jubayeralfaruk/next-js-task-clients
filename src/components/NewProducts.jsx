"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NewProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://next-js-task-server-seven.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);
        setProducts(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="p-10 text-center text-lg">Loading New Products...</p>;

  return (
    <section className="py-14 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">🆕 New Products</h1>
        <p className="text-gray-600 mt-2">
          Check out the latest arrivals in our store.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 hover:bg-blue-950 shadow-2xl transition">
            <img
              src={product?.imageUrl}
              className="w-full h-48 object-cover rounded"
              alt={product.title}
            />

            <h3 className="text-xl font-semibold mt-3">{product.title}</h3>

            <p className="text-gray-600 mt-1 line-clamp-2">
              {product.shortDesc}
            </p>

            <p className="font-bold text-2xl mt-2">${product.price}</p>

            <Link
              href={`/products/${product._id}`}
              className="btn btn-primary w-full mt-4">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
