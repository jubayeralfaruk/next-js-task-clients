"use client";

import { useSession, signOut } from "next-auth/react";
import { useMockAuth } from "@/contexts/MockAuthContext";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Navbar() {
  const { data: session, status } = useSession();
  const { user: mockUser, logout: mockLogout, isAuthenticated: mockAuth } = useMockAuth();
  
  // Use mock auth as primary, NextAuth as fallback
  const user = mockUser || session?.user;
  const isAuthenticated = mockAuth || !!session;

  const handleLogout = async () => {
    if (mockUser) {
      await mockLogout();
      toast.success("Logged out successfully!");
    } else if (session) {
      signOut({ callbackUrl: "/" });
      toast.success("Logged out successfully!");
    }
  };

  const links = [
    <li key="home">
      <Link href="/">Home</Link>
    </li>,
    <li key="products">
      <Link href="/products">Products</Link>
    </li>,
    ...(isAuthenticated
      ? [
          <li key="/add-product">
            <Link href="/add-product">Add Item</Link>
          </li>,
          <li key="manage-products">
            <Link href="/manage-products">Manage Items</Link>
          </li>,
        ]
      : []),
    <li key="about">
      <Link href="/about">About Us</Link>
    </li>,
    <li key="contact">
      <Link href="/contact">Contact</Link>
    </li>,
  ];

  return (
    <div className="navbar bg-gray-900 shadow-xl sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link
          href="/"
          className="text-xl font-bold cursor-pointer text-white">
          Take Your Gadgets
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
      </div>

      <div className="navbar-end">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.image ? (
                  <img
                    src={user?.image}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">
                      {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              <li>
                <span className="text-sm text-gray-600">
                  {user?.email || 'User'}
                </span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            className="btn btn-primary"
            href="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
