// src/components/SpecialOffersModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

// Modal styling
Modal.setAppElement('#root');

const SpecialOffersModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Special Offers"
            className="bg-white rounded-md p-6 max-w-md mx-auto"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
            <h2 className="text-xl font-bold mb-4">Special Offers and Promotions</h2>
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/493502387.jpg?k=03d4f2373bd70f06064956d07c8ba417a3ef3b449633bd0605ff1df73947ba1d&o=&hp=1" 
                alt="Special Offer" 
                className="w-full h-auto mb-4"
            />
            <p className="mb-4">Get up to 50% off on all bookings for a limited time!</p>
            <button 
                onClick={closeModal} 
                className="bg-[#0A92B9] text-white py-2 px-4 rounded hover:bg-[#236a7e]"
            >
                Close
            </button>
        </Modal>
    );
};

export default SpecialOffersModal;
