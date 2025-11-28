"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Medium");
  const [imageUrl, setImageUrl] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !shortDesc || !fullDesc || !price) {
      setMessage("Please fill all required fields");
      return;
    }

    const now = new Date();
    const date = now.toLocaleString();
    const createBy = session.user.email;

    const newProduct = {
      title,
      shortDesc,
      fullDesc,
      price,
      date,
      createBy,
      category,
      imageUrl,
    };

    // Axios POST request
    const res = await axios.post(
      "https://next-js-task-server-seven.vercel.app/products",
      newProduct
    );

    if (res.status === 200 || res.status === 201) {
      toast.success("Product added successfully");
      setTitle("");
      setShortDesc("");
      setFullDesc("");
      setPrice("");
      setCategory("Select a category");
      setImageUrl("");
    } else {
      setMessage("Failed to add product");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      {message && <p className="mb-3 text-sm text-red-600">{message}</p>}

      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Short Description"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
        />

        <textarea
          className="w-full border px-3 py-2 rounded h-24"
          placeholder="Full Description"
          value={fullDesc}
          onChange={(e) => setFullDesc(e.target.value)}
        />

        <input
          className="w-full border px-3 py-2 rounded"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          className="w-full border px-3 py-2 rounded bg-blue-950"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option defaultValue={"Select a category"}>Select a category</option>
          <option>Smartphones</option>
          <option>Laptops</option>
          <option>Accessories</option>
          <option>Smart Home</option>
          <option>Wearables</option>
          <option>Gaming</option>
        </select>

        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
