import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="lg:ml-4 p-2">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "bg-green-400 hover:bg-red-600" : isPending ? "" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="lg:ml-4 p-2">
        <NavLink
          to="/update"
          className={({ isActive, isPending }) =>
            isActive ? "bg-green-400 hover:bg-red-600" : isPending ? "" : ""
          }
        >
          Update Profile
        </NavLink>
      </li>
      <li className="lg:ml-4 p-2">
        <NavLink
          to="/user"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-400 hover:bg-red-600"
              : isPending
              ? "pending"
              : ""
          }
        >
          User Profile
        </NavLink>
      </li>

    </>
  );

  return (
    <div>
      <div className="container mx-auto">
        <div className="navbar bg-base-100 mt-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabindex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl lg:text-2xl font-bold">
              Dream houses
            </a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="lg:navbar-end md:navbar-end ml-24 lg:ml-0 md:ml-0">
            {/*  */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mt-2 avatar tooltip tooltip-bottom" data-tip="hello"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>

            </div>
            <button className="btn lg:p-4 md:p-4 text-white bg-green-400">Logout</button>
            {/*  */}
          </div>
        </div>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="hello">
     <button className="btn">Hover me</button>
    </div>
    </div>
  );
};

export default Navbar;
