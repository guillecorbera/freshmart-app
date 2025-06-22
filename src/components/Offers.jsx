// src/components/Offers.jsx
export default function Offers() {
  return (
    <section
      id="offers"
      className="relative py-12 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/discount.jpg')"  }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        <h2 className="text-3xl font-bold mb-4">Get 15% Off Your First Order!</h2>
        <p className="text-lg mb-6">
          Use code <strong className="bg-white text-emerald-600 px-2 py-1 rounded">FRESH15</strong> at checkout.
        </p>
        <a
          href="#products"
          className="bg-white hover:bg-gray-100 text-emerald-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block shadow-md hover:shadow-lg"
        >
          Shop Now & Save
        </a>
      </div>
    </section>
  );
}