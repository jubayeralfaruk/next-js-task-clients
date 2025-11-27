// app/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-6 rounded-lg border py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Next Gadget</h1>
      <p className="text-lg md:text-2xl mb-6">Latest tech delivered to your doorstep.</p>
      <Link href="/products" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Shop Now
      </Link>
    </section>
  );
}
