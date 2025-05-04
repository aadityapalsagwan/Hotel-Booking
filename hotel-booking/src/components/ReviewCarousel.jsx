import { useState } from "react";

const reviews = [
  { name: "John Doe", review: "Amazing stay! Highly recommend." },
  { name: "Jane Smith", review: "Beautiful hotel with great service." },
  { name: "Chris Johnson", review: "Loved the location and amenities!" },
];

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((index + 1) % reviews.length);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">What our guests say</h2>
      <p className="italic text-gray-700 mb-2">"{reviews[index].review}"</p>
      <h4 className="text-blue-900 font-semibold">{reviews[index].name}</h4>
      <button onClick={nextReview} className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">Next</button>
    </div>
  );
};

export default ReviewCarousel;
