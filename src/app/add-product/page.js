"use client";

import { useSession } from "next-auth/react";
import { useMockAuth } from "@/contexts/MockAuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import ProtectedRoute from "@/components/ProtectedRoute";

function AddProductContent() {
  const { data: session } = useSession();
  const { user: mockUser } = useMockAuth();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const user = mockUser || session?.user;

  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) newErrors.title = "Item name is required";
    if (!shortDesc.trim()) newErrors.shortDesc = "Short description is required";
    if (!fullDesc.trim()) newErrors.fullDesc = "Full description is required";
    if (!price || price <= 0) newErrors.price = "Valid price is required";
    if (!category) newErrors.category = "Category is required";
    if (!imageUrl.trim()) newErrors.imageUrl = "Image URL is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the form errors");
      return;
    }

    setLoading(true);

    try {
      const now = new Date();
      const date = now.toLocaleString();
      const createBy = user?.email || 'Unknown User';

      const newProduct = {
        title: title.trim(),
        shortDesc: shortDesc.trim(),
        fullDesc: fullDesc.trim(),
        price: parseFloat(price),
        date,
        createBy,
        category,
        imageUrl: imageUrl.trim(),
      };

      const response = await fetch("https://next-js-task-server-seven.vercel.app/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        toast.success("Item added successfully!");
        // Reset form
        setTitle("");
        setShortDesc("");
        setFullDesc("");
        setPrice("");
        setCategory("");
        setImageUrl("");
        setErrors({});
        
        // Redirect to items list after successful creation
        setTimeout(() => {
          router.push("/products");
        }, 1500);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add item");
      }
    } catch (error) {
      console.error("Error adding item:", error);
      toast.error(error.message || "Failed to add item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Add New Item</h1>
          <p className="text-gray-300 text-lg">Fill in the details to add a new item to your catalog</p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h2 className="text-2xl font-semibold text-white">Item Information</h2>
            <p className="text-blue-100 mt-1">Please provide accurate details for your item</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Item Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Item Name *
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.title ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600'
                      }`}
                      type="text"
                      placeholder="Enter item name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                  </div>
                  {errors.title && (
                    <p className="text-red-400 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.title}
                    </p>
                  )}
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Short Description *
                  </label>
                  <input
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.shortDesc ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600'
                    }`}
                    type="text"
                    placeholder="Brief description of the item"
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                  />
                  {errors.shortDesc && (
                    <p className="text-red-400 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.shortDesc}
                    </p>
                  )}
                </div>

                {/* Price and Category Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Price */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Price *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400 text-lg">$</span>
                      </div>
                      <input
                        className={`w-full pl-8 pr-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.price ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600'
                        }`}
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="0.00"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    {errors.price && (
                      <p className="text-red-400 text-sm mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.price}
                      </p>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Category *
                    </label>
                    <select
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.category ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600'
                      }`}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select category</option>
                      <option value="Smartphones">📱 Smartphones</option>
                      <option value="Laptops">💻 Laptops</option>
                      <option value="Accessories">🎧 Accessories</option>
                      <option value="Smart Home">🏠 Smart Home</option>
                      <option value="Wearables">⌚ Wearables</option>
                      <option value="Gaming">🎮 Gaming</option>
                    </select>
                    {errors.category && (
                      <p className="text-red-400 text-sm mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.category}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Full Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Description *
                  </label>
                  <textarea
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                      errors.fullDesc ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600'
                    }`}
                    rows={6}
                    placeholder="Provide detailed information about the item, its features, specifications, and benefits..."
                    value={fullDesc}
                    onChange={(e) => setFullDesc(e.target.value)}
                  />
                  {errors.fullDesc && (
                    <p className="text-red-400 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.fullDesc}
                    </p>
                  )}
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Image URL *
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.imageUrl ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600'
                      }`}
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  {errors.imageUrl && (
                    <p className="text-red-400 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.imageUrl}
                    </p>
                  )}
                  
                  {/* Image Preview */}
                  {imageUrl && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-400 mb-2">Preview:</p>
                      <div className="relative w-full h-32 bg-gray-700 rounded-lg overflow-hidden">
                        <img
                          src={imageUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-gray-400 hidden">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span className="ml-2">Invalid image URL</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-700">
              <button
                type="button"
                onClick={() => router.push('/products')}
                className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding Item...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Item
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Need help? Make sure all required fields are filled out correctly. 
            <span className="text-blue-400 hover:text-blue-300 cursor-pointer ml-1">Contact support</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AddProductPage() {
  return (
    <ProtectedRoute>
      <AddProductContent />
    </ProtectedRoute>
  );
}
