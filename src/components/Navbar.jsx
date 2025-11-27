"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();
  const user = session?.user;

  const links = [
    <li key="home">
      <Link href="/">Home</Link>
    </li>,
    <li key="all-product">
      <Link href="all-product">All Product</Link>
    </li>,
    ...(session
      ? [
          <li key="add-product">
            <Link href="/add-product">Add Product</Link>
          </li>,
          <li key="manage-products">
            <Link href="/manage-products">Manage Products</Link>
          </li>,
        ]
      : []),
    <li key="about">
      <Link href="about">About Us</Link>
    </li>,
    <li key="contact">
      <Link href="contact">Contact</Link>
    </li>,
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
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
          className="text-xl font-bold cursor-pointer">
          Take Your Gadgets
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {session ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.image || "/default-avatar.png"}
                  alt="Profile"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              <li>
                <a>Profile</a>
              </li>
              <li>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })} // Redirect after logout
                  className="w-full text-left">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            className="btn"
            href="login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
