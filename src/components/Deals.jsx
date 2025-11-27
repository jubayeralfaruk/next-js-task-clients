export default function Deals() {
  const deals = [
    {
      id: 1,
      title: "Samsung Galaxy S23",
      price: 899,
      image: "/images/galaxy-s23.jpg",
    },
    {
      id: 2,
      title: "Apple AirPods Pro",
      price: 199,
      image: "/images/airpods-pro.jpg",
    },
    {
      id: 3,
      title: "Sony WH-1000XM5 Headphones",
      price: 349,
      image: "/images/sony-headphones.jpg",
    },
    {
      id: 4,
      title: "MacBook Air M2",
      price: 1199,
      image: "/images/macbook-air.jpg",
    },
  ];
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Hot Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-[#313647]">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="border rounded-lg p-4 hover:shadow-lg transition bg-yellow-50">
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 font-semibold">{deal.title}</h3>
            <p className="mt-2 font-bold">${deal.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
