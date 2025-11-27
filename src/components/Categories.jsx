// app/components/Categories.tsx
export default function Categories() {
  const categories = [
    "Smartphones",
    "Laptops",
    "Accessories",
    "Smart Home",
    "Wearables",
    "Gaming",
  ];
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            className="border rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer">
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
