import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-10 bg-gray-50">
            <Helmet>
                <title>About</title>
            </Helmet>
            <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-12">
                About Us
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <img
                        src="https://englanderline.com/wp-content/uploads/elementor/thumbs/Minimalism-bedroom-600x400-1-qghzm11e2kbji208vp4hiv0p0o5rsyk04j3nvis1pc.jpg"
                        alt="About Us Image"
                        className="w-full rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 filter blur-sm" />
                </div>
                <div className="flex-1">
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                        Welcome to <span className="font-bold text-blue-600">Room Haven</span>, your trusted partner in booking the perfect room for your stay. We offer a variety of rooms across multiple locations with unbeatable prices. Whether you are on a business trip, a vacation, or just need a comfortable place to stay, we’ve got you covered. Our mission is to provide guests with a seamless and hassle-free experience.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                        At Room Haven, we believe that everyone deserves a comfortable and convenient place to stay. Our team works tirelessly to ensure that all your needs are met, from booking to checkout. We’re committed to offering personalized service and ensuring that your stay is nothing short of perfect.
                    </p>
                    <div className="flex justify-start gap-6">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-200">
                            Learn More
                        </button>
                        <button className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-200">
                            Connect Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
