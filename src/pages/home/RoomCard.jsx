import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
    return (
        <Link
            to={`/rooms/${room._id}`}
            className="block w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl mx-auto"
        >
            <img
                src={room.image}
                alt={room.name}
                className="w-full h-40 sm:h-56 object-cover rounded-t-lg"
            />
            <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-sm sm:text-lg font-medium text-gray-600">
                    Price: <span className="text-green-600">${room.price}</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">{room.description}</p>
            </div>
        </Link>
    );
};

export default RoomCard;




