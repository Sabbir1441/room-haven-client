import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard';
import { Helmet } from 'react-helmet-async';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const fetchRooms = async () => {
        let url = 'http://localhost:5000/rooms'; 

        if (minPrice || maxPrice) {
            url += `?minPrice=${minPrice}&maxPrice=${maxPrice}`;
        }

        try {
            const response = await fetch(url); 
            const data = await response.json(); 
            setRooms(data); 
        } catch (error) {
            console.error('Error fetching rooms:', error); 
        }
    };

    useEffect(() => {
        fetchRooms(); 
    }, [minPrice, maxPrice]); 
    return (
        <div className="container mx-auto px-4">
            *<Helmet>
                <title>Rooms</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center my-6">Available Rooms</h2>
            {/* Filter Section */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <label htmlFor="minPrice" className="mr-2">Min Price:</label>
                    <input
                        id="minPrice"
                        type="number"
                        className="px-2 py-1 border"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="maxPrice" className="mr-2">Max Price:</label>
                    <input
                        id="maxPrice"
                        type="number"
                        className="px-2 py-1 border"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)} 
                    />
                </div>
                <button
                    onClick={fetchRooms}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Apply Filter
                </button>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {rooms.map((room) => (
                    <RoomCard key={room._id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default Rooms;