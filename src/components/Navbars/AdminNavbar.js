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
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent flex items-center p-4">
        <div className="w-full mx-auto flex justify-between items-center flex-wrap px-4">
          {/* Brand */}
          <a
            href="#overview"
            onClick={(e) => e.preventDefault()}
            className="text-black text-base uppercase lg:inline-block font-bold"
            style={{
              marginTop: "20px",
              fontFamily: "Aeonik",
              fontWeight: 700,
            }}
          >
            Overview
          </a>

          {/* Navbar Items */}
          <ul className="flex-col md:flex-row list-none items-center flex mt-4 md:mt-0">
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
