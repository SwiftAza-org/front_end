import React, { useState, useEffect } from "react";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  // Toggle theme logic
  useEffect(() => {
    document.body.classList.remove(theme === "light" ? "dark" : "light");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            href="#overview"
            onClick={(e) => e.preventDefault()}
            className="text-black text-base uppercase hidden lg:inline-block font-bold"
            style={{
              marginTop: "20px",
              fontFamily: "Aeonik",
              fontWeight: 700,
            }}
          >
            Overview
          </a>

          {/* Navbar Items */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex mt-4">
            {/* Notifications */}
            <div className="mr-1">
              <NotificationDropdown />
            </div>
            
            {/* Theme Toggle Button */}
            <a
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center mr-3"
            >
              <i
                className={`fas ${
                  theme === "light" ? "fa-lightmode" : "fa-darkmode"
                } text-yellow-500 dark:text-gray-300`}
              ></i>
            </a>

            {/* User Dropdown */}
            <div className="mr-4 mt-2">
              <UserDropdown />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}








{/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form> */}
          {/* User */}
