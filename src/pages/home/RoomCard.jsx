import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
    return (
        <Link to={`/rooms/${room._id}`} className="block max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
                src={room.image}
                alt={room.name}
                className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-lg font-medium text-gray-600">Price: <span className="text-green-600">${room.price}</span></p>
                <p className="text-sm text-gray-500 mt-2">{room.description}</p>
            </div>
        </Link>
    );
};

export default RoomCard;
