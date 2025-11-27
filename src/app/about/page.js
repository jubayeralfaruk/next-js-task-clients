import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Welcome to <span className="font-semibold">Take Your Gadgets</span> — your trusted
        platform for buying high-quality tech, accessories, and digital products.
      </p>

      {/* Section 1: Mission */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
          alt="Mission"
          className="rounded-xl shadow"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple: to make technology accessible, affordable, and reliable for
            everyone. Whether you're a student, professional, or business owner, we are here to bring
            you the best tech products at the right price.
          </p>
        </div>
      </div>

      {/* Section 2: What We Offer */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We specialize in delivering carefully selected tech items that improve your daily life.
            From gadgets to accessories, everything we offer goes through a quality-check process.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Premium quality tech items</li>
            <li>Affordable pricing</li>
            <li>Fast and reliable delivery</li>
            <li>Dedicated customer support</li>
          </ul>
        </div>

        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          alt="What We Offer"
          className="rounded-xl shadow"
        />
      </div>

      {/* Section 3: Team */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          We are a small but passionate team dedicated to providing the best shopping experience.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="p-4 border rounded-xl shadow-sm">
            <img
              src="https://i.pravatar.cc/200?img=1"
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Monirul</h3>
            <p className="text-gray-600 text-sm">Founder & Admin</p>
          </div>

          {/* Member 2 */}
          <div className="p-4 border rounded-xl shadow-sm">
            <img
              src="https://i.pravatar.cc/200?img=2"
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Jubayer</h3>
            <p className="text-gray-600 text-sm">Product Manager</p>
          </div>

          {/* Member 3 */}
          <div className="p-4 border rounded-xl shadow-sm">
            <img
              src="https://i.pravatar.cc/200?img=3"
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Arif</h3>
            <p className="text-gray-600 text-sm">Tech Support</p>
          </div>
        </div>
      </div>

      {/* Section 4: Contact CTA */}
      <div className="bg-gray-900 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-3">Have Questions?</h2>
        <p className="mb-6">We’re always here to help. Feel free to get in touch with us.</p>
        <Link
          href="/contact"
          className="bg-white text-gray-900 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
