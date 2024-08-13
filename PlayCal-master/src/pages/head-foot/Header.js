import React, { useState } from "react";
import logo from "./media/NOGOMETNI.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md rounded-md w-full px-10 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#2dd4bf"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link to="/">
            <button>
              <img
                className="lg:w-40 w-32 ml-4 md:ml-0 "
                src={logo}
                alt="Logo"
              />
            </button>
          </Link>
        </div>
        <nav className="hidden md:flex md:items-center space-x-5 font-teachers md:text-xl lg:text-2xl text-primary-0">
          <Link
            to="/"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            Naslovna
          </Link>
          <Link
            to="/about"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            O nama
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
            href="#"
          >
            Kontakt
          </Link>
        </nav>
        <div className="flex justify-center items-center space-x-2">
          <Link to="/login">
            <button className="border-2 border-primary-0 hover:bg-primary-0 p-2 rounded-full ease-in-out duration-300 delay-100 shadow-md hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2dd4bf"
                className="size-6 svg-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
            </button>
          </Link>
          <Link to="/registration">
            <button className="shadow-md bg-primary-0 text-white py-2 px-5 rounded-lg ease-in-out duration-300 delay-100 hover:scale-110 text-lg">
              Registracija
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`md:hidden absolute rounded-md top-24 bg-white shadow-md w-44 border-2 border-primary-0 transition-all duration-300 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-2 font-teachers text-2xl text-primary-0">
          <Link
            to="/"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            Naslovna
          </Link>
          <Link
            to="/about"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            O nama
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
