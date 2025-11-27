export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      message: "Amazing gadgets and super fast delivery!",
    },
    {
      name: "Bob Smith",
      message: "Great prices and excellent customer support.",
    },
    {
      name: "Clara Lee",
      message: "I love the variety of tech products available.",
    },
    {
      name: "David Kim",
      message: "Smooth shopping experience and reliable service.",
    },
  ];
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-[#313647]">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-6 bg-white hover:shadow-lg transition">
            <p className="mb-4">"{t.message}"</p>
            <p className="font-bold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
