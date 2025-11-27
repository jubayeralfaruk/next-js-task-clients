"use client";

import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Fetch product data ONCE
  useEffect(() => {
    axios
      .get(`https://next-js-task-server-seven.vercel.app/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      shortDesc: e.target.shortDesc.value,
      fullDesc: e.target.fullDesc.value,
      price: e.target.price.value,
      category: e.target.category.value,
      imageUrl: e.target.imageUrl.value,
    };

    const res = await axios.patch(
      `https://next-js-task-server-seven.vercel.app/products/${id}`,
      formData
    );

    if (res.status === 200) {
      toast.success("Product updated successfully");
      router.push("/manage-products");
    } else {
      setMessage("Failed to update product");
    }
  };

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>

      {message && <p className="mb-4 text-sm text-green-600">{message}</p>}

      <form
        onSubmit={handleUpdate}
        className="space-y-4">
        <input
          name="title"
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Product Title"
          defaultValue={product.title}
        />

        <input
          name="shortDesc"
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Short Description"
          defaultValue={product.shortDesc}
        />

        <textarea
          name="fullDesc"
          className="w-full border px-3 py-2 rounded h-24"
          placeholder="Full Description"
          defaultValue={product.fullDesc}
        />

        <input
          name="price"
          className="w-full border px-3 py-2 rounded"
          type="number"
          placeholder="Price"
          defaultValue={product.price}
        />

        <select
          name="category"
          className="w-full border px-3 py-2 rounded bg-blue-950 text-white"
          defaultValue={product.category}>
          <option>Select a category</option>
          <option>Smartphones</option>
          <option>Laptops</option>
          <option>Accessories</option>
          <option>Smart Home</option>
          <option>Wearables</option>
          <option>Gaming</option>
        </select>

        <input
          name="imageUrl"
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Image URL"
          defaultValue={product.imageUrl}
        />

        <button
          type="submit"
          className="px-4 py-2 bg-yellow-600 text-white rounded">
          Update
        </button>
      </form>
    </div>
  );
}
