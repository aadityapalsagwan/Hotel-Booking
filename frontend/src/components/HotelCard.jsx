const HotelCard = ({ hotel }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
        <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">{hotel.name}</h3>
          <p className="text-gray-600">{hotel.location}</p>
          <p className="mt-2 text-yellow-500 font-semibold">${hotel.price}/night</p>
        </div>
      </div>
    );
  };
  
  export default HotelCard;
  