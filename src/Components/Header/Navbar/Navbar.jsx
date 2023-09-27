/* eslint-disable react/jsx-no-undef */
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-wrap justify-center gap-10 lg:justify-between items-center py-7">
        <img src={Logo} alt="image" />
        <ul className="flex flex-wrap justify-center gap-12 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500  underline font-bold"
                  : ""
              }
            >
              <span className="text-center  text-xl ">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500  underline font-bold"
                  : ""
              }
            >
              <span className="text-center  text-xl ">Donation</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500  underline font-bold"
                  : ""
              }
            >
              <span className="text-center text-xl ">Statistics</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
