import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    // Fetch রুম ডেটা
    const fetchRooms = async () => {
        let url = 'http://localhost:5000/rooms'; // API URL

        // ফিল্টার যোগ করা হচ্ছে যদি মিন বা ম্যাক্স প্রাইস দেওয়া থাকে
        if (minPrice || maxPrice) {
            url += `?minPrice=${minPrice}&maxPrice=${maxPrice}`;
        }

        try {
            const response = await fetch(url); // Fetch API ব্যবহার করা হচ্ছে
            const data = await response.json(); // JSON ডেটা পাচ্ছি
            setRooms(data); // রুমগুলো স্টেটে সেট করা হচ্ছে
        } catch (error) {
            console.error('Error fetching rooms:', error); // যদি কোনো সমস্যা হয়
        }
    };

    // যখনই মিন প্রাইস বা ম্যাক্স প্রাইস চেঞ্জ হবে, তখন রুম ফেচ করা হবে
    useEffect(() => {
        fetchRooms(); // ফেচ রুম
    }, [minPrice, maxPrice]); // ফিল্টার চেঞ্জ হলে কল হবে
    return (
        <div className="container mx-auto px-4">
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
                        onChange={(e) => setMinPrice(e.target.value)} // মিন প্রাইস চেঞ্জ হলে
                    />
                </div>
                <div>
                    <label htmlFor="maxPrice" className="mr-2">Max Price:</label>
                    <input
                        id="maxPrice"
                        type="number"
                        className="px-2 py-1 border"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)} // ম্যাক্স প্রাইস চেঞ্জ হলে
                    />
                </div>
                <button
                    onClick={fetchRooms} // ফিল্টার অ্যাপ্লাই করার সময় রুম ফেচ করা হবে
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
