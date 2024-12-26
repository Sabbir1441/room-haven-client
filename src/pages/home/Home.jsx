import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner"; // Import Banner
import RoomCard from "./RoomCard";
// Import RoomCard

const Home = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/rooms/latest") // Fetch only latest 6 rooms
            .then((res) => res.json())
            .then((data) => {
                setRooms(data); // Set last 6 rooms from server
            })
            .catch((error) => console.error("Error fetching rooms:", error));
    }, []);

    return (
        <div>
            <Banner /> {/* Banner component */}
            <div className="container mx-auto px-4 mt-8">
                <h2 className="text-2xl font-bold text-center mb-6">Latest Rooms</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rooms.map((room) => (
                        <RoomCard key={room._id} room={room} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;