import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import room1 from '../../assets/room1.jpg';
import room2 from '../../assets/room2.jpg';
import room3 from '../../assets/room3.jpg';
import { Link } from "react-router-dom";
import RoomCard from "./RoomCard";
import Location from "./Location";
import SpecialOffersModal from "./SpecialOffersModal";
import { motion } from 'framer-motion';
import { Hotel, Clock, DollarSign } from 'lucide-react';

const Home = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("https://room-haven-server.vercel.app/rooms/latest")
            .then((res) => res.json())
            .then((data) => {
                setRooms(data);
            })
            .catch((error) => console.error("Error fetching rooms:", error));
    }, []);

    return (
        <div className="bg-gray-100">
            {/* Modal for special offers */}
            <SpecialOffersModal />
            <Banner />

            {/* Latest Rooms Section */}
            <div className="container  mx-auto px-4  py-10">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Latest Rooms</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rooms.map((room) => (
                        <RoomCard key={room._id} room={room} />
                    ))}
                </div>
            </div>



            {/* Special Offers Section */}
            <section className="bg-gray-200 py-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Exclusive Offers Just for You</h2>
                    <p className="text-lg mb-12">
                        Take advantage of our exclusive offers and make your stay even more memorable!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
                            <img src={room1} alt="Special Offer 1" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">Winter Special Offer</h3>
                                <p className="text-lg text-gray-600">Save 30% on all bookings in December!</p>
                                <p className="text-sm text-gray-600 mb-4">Book your stay now and enjoy a winter escape with special discounts.</p>
                                <Link to="/offers" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
                            <img src={room2} alt="Special Offer 2" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">Early Bird Offer</h3>
                                <p className="text-lg text-gray-600">Get 20% off by booking 3 months in advance!</p>
                                <p className="text-sm text-gray-600 mb-4">Plan ahead and enjoy great savings on your upcoming stay.</p>
                                <Link to="/offers" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
                            <img src={room3} alt="Special Offer 3" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">Weekend Getaway</h3>
                                <p className="text-lg text-gray-600">Book a weekend stay and get a free breakfast!</p>
                                <p className="text-sm text-gray-600 mb-4">Enjoy your weekend escape with a complimentary breakfast every morning.</p>
                                <Link to="/offers" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guest Reviews Section */}
            <section className="bg-gray-100 py-10">
                <div className="container mx-auto px-4 text-center text-gray-800">
                    <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
                    <p className="text-lg mb-12">
                        Hear directly from our guests about their unforgettable stay at Room Haven.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-500">
                            <div className="flex justify-center mb-4">
                                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Guest 1" className="w-16 h-16 rounded-full" />
                            </div>
                            <p className="text-lg text-gray-800 mb-4">"Room Haven provided an amazing experience! The staff was friendly, and the rooms were spotless. I’ll definitely be back!"</p>
                            <h3 className="font-semibold text-gray-700">John Doe</h3>
                            <p className="text-sm text-gray-500">Business Traveler</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-500">
                            <div className="flex justify-center mb-4">
                                <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="Guest 2" className="w-16 h-16 rounded-full" />
                            </div>
                            <p className="text-lg text-gray-800 mb-4">"An incredible experience at Room Haven! The rooms were comfortable, the location was perfect, and the staff was super friendly. A wonderful stay overall!"</p>
                            <h3 className="font-semibold text-gray-700">James Wilson</h3>
                            <p className="text-sm text-gray-500">Business Trip</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-500">
                            <div className="flex justify-center mb-4">
                                <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Guest 3" className="w-16 h-16 rounded-full" />
                            </div>
                            <p className="text-lg text-gray-800 mb-4">"The best vacation ever! The hotel had everything I needed for a relaxing weekend, and the food was incredible!"</p>
                            <h3 className="font-semibold text-gray-700">Michael Smith</h3>
                            <p className="text-sm text-gray-500">Family Vacation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Chose us Section */}

            <section className="bg-gray-200 py-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Room Haven?</h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Discover what makes us stand out and why guests love staying with us.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-xl shadow-md p-8"
                        >
                            <Hotel className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Rooms</h3>
                            <p className="text-gray-600">Elegant, spacious, and designed for your comfort.</p>
                            <button className="mt-4 text-green-600 hover:underline">Read More</button>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-xl shadow-md p-8"
                        >
                            <Clock className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Service</h3>
                            <p className="text-gray-600">Always available to meet your needs, day or night.</p>
                            <button className="mt-4 text-green-600 hover:underline">Read More</button>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="bg-white rounded-xl shadow-md p-8"
                        >
                            <DollarSign className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Price</h3>
                            <p className="text-gray-600">Enjoy premium facilities without breaking the bank.</p>
                            <button className="mt-4 text-green-600 hover:underline">Read More</button>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Location Section */}
            <div className="bg-gray-100 pt-10">
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Our Location</h2>
                <Location />
            </div>


            {/* Newsletter Section */}
            <section className="bg-gray-200 py-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-lg text-gray-600 mb-6">Get exclusive deals, latest room updates, and travel tips delivered straight to your inbox!</p>

                    <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Home;
