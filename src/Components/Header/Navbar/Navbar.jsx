/* eslint-disable react/jsx-no-undef */
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-7">
        <img src="/src/assets/Logo.png" alt="" />
        <ul className="flex gap-12 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-500 underline"
                  : ""
              }
            >
              <span className="text-center text-[black] text-xl font-normal ">
                Home
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-500 underline"
                  : ""
              }
            >
              <span className="text-center text-[black] text-xl font-normal ">
                Donation
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-500 underline"
                  : ""
              }
            >
              <span className="text-center text-[black] text-xl font-normal ">
                Statistics
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
