import React from "react";
import { Link } from "react-router-dom";
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full h-[400px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={room1}
          className="w-full"
          alt="Hotel Luxury 1"
        />
        <div className="absolute flex flex-col justify-center items-start h-full px-20 space-y-4 bg-black bg-opacity-50 text-white">
          <h2 className="text-4xl font-bold">Experience True Luxury</h2>
          <p className="text-lg">
            Relax and unwind in our luxurious rooms and enjoy premium services.
          </p>
          <Link to="/rooms" className="px-3 py-1 bg-transparent border-2 border-[#0A92B9] text-[#0A92B9] rounded-full hover:bg-[#0A92B9] hover:text-white transition duration-200">
            Explore Rooms
          </Link>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={room2}
          className="w-full"
          alt="Hotel Luxury 2"
        />
        <div className="absolute flex flex-col justify-center items-start h-full px-20 space-y-4 bg-black bg-opacity-50 text-white">
          <h2 className="text-4xl font-bold">Your Comfort, Our Priority</h2>
          <p className="text-lg">
            Discover the perfect blend of elegance and comfort in our rooms.
          </p>
          <Link to="/rooms" className="px-3 py-1 bg-transparent border-2 border-[#0A92B9] text-[#0A92B9] rounded-full hover:bg-[#0A92B9] hover:text-white transition duration-200">
            Explore Rooms
          </Link>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={room3}
          className="w-full"
          alt="Hotel Luxury 3"
        />
        <div className="absolute flex flex-col justify-center items-start h-full px-20 space-y-4 bg-black bg-opacity-50 text-white">
          <h2 className="text-4xl font-bold">Book Your Stay Today</h2>
          <p className="text-lg">
            Plan your next adventure with us and enjoy an unforgettable stay.
          </p>
          <Link to="/rooms" className="px-3 py-1 bg-transparent border-2 border-[#0A92B9] text-[#0A92B9] rounded-full hover:bg-[#0A92B9] hover:text-white transition duration-200">
            Explore Rooms
          </Link>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
