import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/rooms/${id}`)
            .then((res) => res.json())
            .then((data) => setRoom(data))
            .catch((error) => console.error('Error loading room details:', error));
    }, [id]);

    if (!room) {
        return <p>Loading room details...</p>;
    }

    return (
        <div className="container mx-auto px-4 my-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Room Image Section */}
                <div className="relative h-96">
                    <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg">
                        ${room.price} / Night
                    </div>
                </div>

                {/* Room Details Section */}
                <div className="p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{room.name}</h1>
                    <p className="text-gray-500 mb-2 text-lg">Location: {room.location}</p>
                    <p className="text-gray-500 mb-6 text-lg">Type: {room.type}</p>

                    {/* Facilities */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Facilities</h2>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        {room.facilities.map((facility, index) => (
                            <li key={index} className="text-lg">
                                {facility}
                            </li>
                        ))}
                    </ul>

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-yellow-500 text-xl font-semibold">
                            Rating: {room.rating} ⭐
                        </p>
                        <p className="text-gray-600 text-lg">
                            Total Reviews: {room.reviews}
                        </p>
                    </div>

                    {/* Availability */}
                    <p
                        className={`text-lg font-semibold ${room.availability ? 'text-green-600' : 'text-red-600'
                            }`}
                    >
                        {room.availability ? 'Available for Booking' : 'Not Available'}
                    </p>

                    {/* Description */}
                    <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Description</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        'This room offers the perfect combination of comfort and elegance. With modern amenities and an excellent location, it’s the ideal choice for travelers looking for a memorable stay. Book now and experience luxury at its best!'

                    </p>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
