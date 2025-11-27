"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id;

  console.log(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        console.log("data fetch", res);
        
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product.");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <p className="p-10 text-center">Loading...</p>;

  if (error)
    return <p className="p-10 text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto py-14 px-4">

      {/* Large Banner Image */}
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg shadow"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mt-6">{product.title}</h1>

      {/* Short Description */}
      <p className="text-gray-600 mt-2 text-lg">{product.shortDesc}</p>

      {/* Meta Info */}
      <div className="mt-4 text-gray-700 space-y-1">
        <p>
          <span className="font-semibold">Price:</span>{" "}
          <span className="font-bold">${product.price}</span>
        </p>
        <p>
          <span className="font-semibold">Date:</span> {product.date}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {product.category}
        </p>
        <p>
          <span className="font-semibold">Created By:</span> {product.createBy}
        </p>
      </div>

      {/* Full Description */}
      <p className="mt-8 text-lg leading-relaxed">{product.fullDesc}</p>

      {/* Back Button */}
      <Link
        href="/products"
        className="inline-block mt-10 bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-900 transition"
      >
        ← Back to Products
      </Link>
    </div>
  );
}