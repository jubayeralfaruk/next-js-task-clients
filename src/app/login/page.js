"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useMockAuth } from "@/contexts/MockAuthContext";
import { useRouter } from "next/navigation";
import GoogleLoginBtn from "@/components/auth/GoogleLoginBtn";
import Link from "next/link";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();
  const { login: mockLogin } = useMockAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authMode, setAuthMode] = useState("mock"); // "mock" or "nextauth"

  async function handleMockLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await mockLogin(email, password);

    if (result.success) {
      toast.success("Login successful!");
      router.push("/products");
    } else {
      setError(result.error);
    }
    setLoading(false);
  }

  async function handleNextAuthLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    } else {
      toast.success("Login successful!")
      router.push("/products");
    }
  }

  const handleSubmit = authMode === "mock" ? handleMockLogin : handleNextAuthLogin;

  return (
    <div className="min-h-screen flex items-center justify-center max-w-7xl mx-auto p-6">
      <div className="max-w-md w-full p-8 rounded-xl shadow-2xl bg-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Login to Your Account</h1>

        {/* Authentication Mode Toggle */}
        <div className="mb-6">
          <div className="flex bg-gray-700 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setAuthMode("mock")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                authMode === "mock"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Mock Login
            </button>
            <button
              type="button"
              onClick={() => setAuthMode("nextauth")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                authMode === "nextauth"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              NextAuth
            </button>
          </div>
        </div>

        {/* Credentials Display */}
        {authMode === "mock" && (
          <div className="mb-4 p-3 bg-blue-900 rounded-lg">
            <p className="text-sm text-blue-200 mb-1">Test Credentials:</p>
            <p className="text-xs text-blue-300">Email: admin@example.com</p>
            <p className="text-xs text-blue-300">Password: password123</p>
          </div>
        )}

        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Your password"
              className="w-full p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : `Login with ${authMode === "mock" ? "Mock Auth" : "NextAuth"}`}
          </button>
        </form>

        {authMode === "nextauth" && (
          <>
            <div className="my-4 text-center text-gray-400">OR</div>
            <GoogleLoginBtn />
          </>
        )}

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-400 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
