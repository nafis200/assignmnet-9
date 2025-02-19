import React, { useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  let names = "unknown";
  let images = "https://i.postimg.cc/0N2Fs1LG/photo-2024-04-10-15-50-24.jpg";

  let names1 = "";
  let images1 = "";
  if (users) {
    const { displayName, photoURL } = users;
    console.log(displayName, photoURL);
    if (displayName) {
      names1 = displayName;
    }
    if (photoURL) {
      images1 = photoURL;
    }
  }
  if (names1) {
    names = names1;
  }
  if (images1) {
    images = images1;
  }

  console.log("names", names1, images1);
  console.log("new id", names, images);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Navigate("/login");
      })
      .catch((error) => {
        console.log("logout error meesage", error.message);
      });
  };

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
      <li className="lg:ml-4 p-2">
        <NavLink
          to="/office"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-400 hover:bg-red-600"
              : isPending
              ? "pending"
              : ""
          }
        >
          office
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
                className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52 flex"
              >
                <div>{links}</div>
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
            {users ? (
              <>
                <div className="dropdown dropdown-left lg:hidden md:hidden">
                  <div tabIndex={0} role="button" className="btn m-1">
                  <IoIosArrowDropdownCircle className="text-2xl"></IoIosArrowDropdownCircle>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[20] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <>
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle mt-2 avatar tooltip tooltip-bottom"
                        data-tip={names}
                      >
                        <div className="lg:w-10 md:w-10 w-9 -ml-2 rounded-full">
                          <img
                            className=""
                            alt="Tailwind CSS Navbar component"
                            src={images}
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="lg:btn md:btn p-2 lg:p-4 md:p-4 mr-20 lg:mr-4 md:mr-4 text-white bg-green-400 lg:bg-green-400 md:bg-green-400"
                      >
                        Logout
                      </button>
                    </>
                  </ul>
                </div>
                <div className="lg:flex md:flex hidden ">
                  {" "}
                  <div className=" w-10 -ml-2 rounded-full tooltip tooltip-bottom" data-tip={names}>
                    <img
                      className=" mt-1 rounded-full -ml-5"
                      alt="Tailwind CSS Navbar component"
                      src={images}
                    />
                  </div>
                  <button
                    onClick={handleLogout}
                    className="lg:btn md:btn p-2 lg:p-4 md:p-4 mr-20 lg:mr-4 md:mr-4 text-white bg-green-400 lg:bg-green-400 md:bg-green-400"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <NavLink to="/login">
                <button className="btn lg:p-4 lg:mr-5 md:mr-5 md:p-4 text-white bg-blue-400">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

//
export default Navbar;
