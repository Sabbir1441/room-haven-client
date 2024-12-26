import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Rooms from "../pages/rooms/Rooms";
import MyBookings from "../pages/myBookings/MyBookings";
import MainLayout from "../pages/MainLayout/MainLayout";
import Auth from "../pages/auth/Auth";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../pages/notFound/NotFound";
import RoomDetails from "../pages/roomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRouters";
import AboutUs from "../pages/about/AboutUs";
import ConnectUs from "../pages/ConnectUs/ConnectUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
            },
            {
                path: '/rooms/:id',
                element: <PrivateRoutes><RoomDetails></RoomDetails></PrivateRoutes>
            },
            {
                path: '/my-bookings',
                element: <PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/connect',
                element: <ConnectUs></ConnectUs>
            },
            {
                path: '/auth',
                element: <Auth></Auth>,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/auth/register',
                        element: <Register></Register>
                    }
                ]
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;