import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ Twitter X icon

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Take Your Gadgets</h2>
          <p className="mt-3 text-gray-400">
            Discover Your Next Gadget. Latest tech delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-2xl">
            <Link
              href="#"
              className="hover:text-white">
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="hover:text-white">
              <FaXTwitter />
            </Link>{" "}
            {/* ← Twitter X */}
            <Link
              href="#"
              className="hover:text-white">
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="hover:text-white">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Take Your Gadgets — All Rights Reserved.
      </div>
    </footer>
  );
}
