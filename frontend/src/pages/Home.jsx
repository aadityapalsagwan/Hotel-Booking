import HotelCard from "../components/HotelCard";
import ReviewCarousel from "../components/ReviewCarousel";
import { Link } from "react-router-dom";

const hotels = [
  { name: "Grand Palace", location: "New York", price: 200, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
  { name: "Ocean View", location: "Miami", price: 150, image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d" },
];

const Home = () => {
  return (
    <>
      <section className="relative bg-cover bg-center min-h-[80vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-6">Find your perfect stay</h1>
          <Link to="/booking" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded hover:bg-yellow-300 font-semibold transition duration-300">Book Now</Link>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Hotels</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, idx) => <HotelCard key={idx} hotel={hotel} />)}
        </div>
      </section>

      {/* <section className="p-8">
        <ReviewCarousel />
      </section> */}
    </>
  );
};

export default Home;
