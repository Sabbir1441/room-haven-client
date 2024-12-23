import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <div >
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Auth;
