import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


  return (
    <div className=" navbar bg-gradient-to-r from-[#202221] via-[#0b2c16] to-[#094830] text-white shadow-md sticky top-0 z-50">
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
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-visas"
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
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-visas"
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
          <div className="space-x-3">
            <Link
              to="/auth/login"
              className="btn btn-sm bg-[#0A92B9] hover:bg-[#3866c9] border-none text-white"
            >
              Login
            </Link>
            
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;
