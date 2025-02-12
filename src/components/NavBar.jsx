import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../provider/AuthContext";
import userlogo from "../assets/free-user-icon-3296-thumb.png";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);


  return (
    <div className=" navbar bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        {/* Dropdown for smaller screens */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-lg w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#717413] font-semibold"
                    : "hover:text-[#C18440]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#717413] font-semibold"
                    : "hover:text-[#C18440]"
                }
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#717413] font-semibold"
                    : "hover:text-[#C18440]"
                }
              >
                My Bookings
              </NavLink>
            </li>

          </ul>
        </div>
        {/* Website Name/Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Room Haven
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        {/* Navigation Links */}
        <ul className="menu menu-horizontal space-x-4 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#eeeeec] bg-[#468596] border-b-2 border-[#f1972f] pb-1 font-semibold"
                  : "hover:text-white hover:bg-[#0A92B9]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                isActive
                  ? "text-[#eeeeec] bg-[#468596] border-b-2 border-[#f1972f] pb-1 font-semibold"
                  : "hover:text-white hover:bg-[#0A92B9]"
              }
            >
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                isActive
                  ? "text-[#eeeeec] bg-[#468596] border-b-2 border-[#f1972f] pb-1 font-semibold"
                  : "hover:text-white hover:bg-[#0A92B9]"
              }
            >
              My Bookings
            </NavLink>
          </li>

        </ul>
      </div>



      <div className="navbar-end">
        <div className="flex gap-4 items-center">

          {
            user && user?.email ? (
              <img className="w-[35px] h-[35px] rounded-full" src={user?.photoURL} alt="" />
            ) : (<img className="w-[50px]" src={userlogo} alt="" />)
          }

          {
            user && user?.email ? (<button onClick={logOut} className="btn btn-sm bg-[#0A92B9] hover:bg-[#3866c9] border-none text-white">Log out</button>
            ) : (<Link to="/auth/login"><button className="btn btn-sm bg-[#0A92B9] hover:bg-[#3866c9] border-none text-white">log in</button></Link>)
          }

        </div>

      </div>
    </div>
  );
};

export default Navbar;
