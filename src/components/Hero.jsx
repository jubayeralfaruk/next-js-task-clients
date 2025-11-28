"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mt-10">
      <div className="rounded-xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white px-6 py-24 text-center shadow-xl">
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Find Your Next Gadget
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 opacity-90"
        >
          Latest tech delivered to your doorstep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link
            href="/products"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}