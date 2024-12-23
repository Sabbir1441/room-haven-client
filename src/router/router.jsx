import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Rooms from "../pages/rooms/Rooms";
import MyBookings from "../pages/myBookings/MyBookings";
import MainLayout from "../pages/MainLayout/MainLayout";
import Auth from "../pages/auth/Auth";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../pages/notFound/NotFound";

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
                path: '/my-bookings',
                element: <MyBookings></MyBookings>
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