import React from "react";
import {NavLink} from "react-router";

const NavBar = () => {
  return (
    <div className=" sticky z-50 top-0">
      <div className="navbar bg-base-100 shadow-sm px-[5%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="font-semibold">Home</a>
              </li>

              <li>
                <a className="font-semibold">Listed Books</a>
              </li>
              <li>
                <a className="font-semibold">Pages to Read</a>
              </li>
              <li>
                <div>
                  <button className="btn bg-green-600 text-white hover:scale-105 transition-transform ">
                    Sign In
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <a className=" text-2xl  sm:text-4xl">
            BOi<span className="text-green-600">Poka</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* <a className=""></a> */}
              <NavLink
                to={"/"}
                className={ ({isActive}) =>` font-semibold ${isActive?"bg-green-600" : ""} `}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={ ({isActive}) =>` font-semibold ${isActive?"bg-green-600" : ""} `}
              >
                About
              </NavLink>
            </li>

            <li>
              <a className="font-semibold">Pages to Read</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <button className="btn bg-green-600 hidden lg:block text-white hover:scale-105 transition-transform ">
            Sign In
          </button>
          <button className="btn bg-blue-400 text-white hover:scale-105 transition-transform ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
