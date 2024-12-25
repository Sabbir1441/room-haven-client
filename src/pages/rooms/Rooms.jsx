import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard'; // RoomCard কম্পোনেন্ট ইম্পোর্ট

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data); // ডেটা সেট করা
            })
            .catch(error => console.error('Error fetching rooms:', error));
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center my-6">Available Rooms</h2>
            <div className="grid grid-cols-1 gap-6">
                {rooms.map((room) => (
                    <RoomCard key={room._id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default Rooms;
