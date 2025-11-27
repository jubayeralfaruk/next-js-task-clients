"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export default function GoogleLoginBtn() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signIn(
        "google",
        { callbackUrl: "/" },
        toast.success("Google login successfully.")
      );
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full p-2 border rounded flex items-center justify-center gap-2"
      disabled={loading}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        aria-hidden>
        <path
          d="M21.35 11.1H12v2.8h5.35c-.23 1.34-1.05 2.48-2.24 3.23v2.67h3.62C20.8 18.05 22 14.8 22 12c0-.64-.06-1.26-.18-1.9z"
          fill="#4285F4"
        />
        <path
          d="M12 22c2.7 0 4.97-.9 6.63-2.44l-3.62-2.67c-.99.66-2.26 1.05-3.01 1.05-2.32 0-4.29-1.57-4.99-3.69H3.2v2.31C4.86 19.9 8.2 22 12 22z"
          fill="#34A853"
        />
        <path
          d="M7.01 13.25A5.41 5.41 0 0 1 6.6 12c0-.4.06-.79.16-1.16V8.53H3.2A9.99 9.99 0 0 0 2 12c0 1.6.36 3.12 1.01 4.5l3-3.25z"
          fill="#FBBC05"
        />
        <path
          d="M12 6.4c1.47 0 2.8.5 3.85 1.48l2.88-2.88C16.97 3.16 14.7 2 12 2 8.2 2 4.86 4.1 3.2 7.47l3.56 2.31C7.71 8 9.68 6.4 12 6.4z"
          fill="#EA4335"
        />
      </svg>
      {loading ? "Loading..." : "Continue with Google"}
    </button>
  );
}
