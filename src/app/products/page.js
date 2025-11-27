"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ProductsListPage() {
  const [products, setProducts] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res.data);
    });
    // setFilteredData(filtered)
  }, []);
  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? p.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Product List</h1>
      <p className="text-gray-600 mb-6">
        Browse all available items in one place.
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 bg-gray-900 rounded w-full sm:w-60"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option>Smartphones</option>
          <option>Laptops</option>
          <option>Accessories</option>
          <option>Smart Home</option>
          <option>Wearables</option>
          <option>Gaming</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
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
    </div>
  );
}
