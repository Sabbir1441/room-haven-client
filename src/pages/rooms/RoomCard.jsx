import React from 'react';
import { useNavigate } from 'react-router-dom';


const RoomCard = ({ room }) => {
    const { name, type, price, location, image, rating, reviews, facilities } = room;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/rooms/${room._id}`);
    };


    return (
        <div  onClick={handleNavigate} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mb-6">
            {/* Image Section */}
            <div className="w-full md:w-1/3">
                <img
                    src={image || 'https://via.placeholder.com/300'}
                    alt={name || 'Room Image'}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                {/* Room Info */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">{name || 'Room Name'}</h3>
                    <p className="text-gray-600 text-sm mt-1">{type || 'Room Type'}</p>
                    <p className="text-gray-600 text-sm mt-1">
                        Location: <span className="text-gray-800 font-medium">{location || 'N/A'}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-4">
                        Price: <span className="text-green-600">${price || 'N/A'}</span> / Night
                    </p>
                </div>

                {/* Facilities */}
                <div className="mt-4">
                    <h4 className="text-gray-700 font-medium">Facilities:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                        {facilities?.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                </div>

                {/* Rating and Reviews */}
                <div className="flex justify-between items-center mt-6">
                    <p className="text-sm text-gray-500">
                        Rating: <span className="text-yellow-500 font-bold">{rating || 'No Rating'}⭐</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        Reviews: {reviews || 0} reviews
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
