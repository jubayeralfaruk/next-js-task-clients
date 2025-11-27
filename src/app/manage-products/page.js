"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageProductsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Fetch products created by the logged-in user
  const fetchProducts = async () => {
    if (!session) return;

    const res = await axios.get(
      `https://next-js-task-server-seven.vercel.app/products?email=${session.user.email}`
    );
    setProducts(res.data);
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchProducts();
    }
  }, [status, session]);

  // Delete product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    const res = await axios.delete(
      `https://next-js-task-server-seven.vercel.app/products/${id}`
    );
    if (res.status === 200) {
      toast.success("Product deleted successfully");
      fetchProducts();
    } else {
      setMessage("Failed to delete product");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manage My Products</h1>

      {message && <p className="mb-4 text-sm text-green-600">{message}</p>}

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="">
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-4">
                  No products found
                </td>
              </tr>
            )}

            {products.map((product) => (
              <tr
                key={product._id}
                className="hover:bg-blue-900">
                <td className="border px-4 py-2">{product.title}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">{product.date}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                    onClick={() =>
                      router.push(`/update-product/${product._id}`)
                    }>
                    Update
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
