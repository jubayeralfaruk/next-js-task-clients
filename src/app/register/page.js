"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/firebase.init";
import { useRouter } from "next/navigation";
import GoogleLoginBtn from "@/components/auth/GoogleLoginBtn";
import Link from "next/link";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      // Create user with email/password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update user's display name and photo URL
      await updateProfile(userCredential.user, {
        displayName: fullName,
        photoURL: photoURL || null,
      });

      toast.success("Register successful.")
      // Redirect to login page
      router.push("/login");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Your Account</h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Photo URL</label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Your password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-400">OR</div>

        {/* Google Login Button */}
        <GoogleLoginBtn />

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
