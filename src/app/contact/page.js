export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Have questions, feedback, or collaboration ideas?  
        Send us a message — we’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="space-y-6 bg-blue-950 p-8 rounded-xl shadow">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full border px-4 py-2 rounded resize-none focus:outline-none focus:ring focus:ring-gray-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition">
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-12 text-center text-gray-700">
        <p>Email: <span className="font-semibold">support@example.com</span></p>
        <p>Phone: <span className="font-semibold">+880-1234-567890</span></p>
        <p className="mt-2">Address: Dhaka, Bangladesh</p>
      </div>
    </section>
  );
}
