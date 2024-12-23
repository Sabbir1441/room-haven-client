import React from 'react';
import Navbar from '../../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;