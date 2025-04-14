'use client';

import Image from 'next/image';
import logo from '../assets/icon.jpg';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <nav className="bg-[#a88c66] border-b-1">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button - hamburger */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image className="h-15 w-auto" src={logo} alt="Plan-it-pros logo" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Plan-it-Pro
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 ml-6">
              <div className="flex space-x-2 items-center justify-center">
                <Link
                  href="/"
                  className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  href="/search"
                  className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
                >
                  Search
                </Link>

                {/* Conditionally render Your Events when logged in */}
                {isLoggedIn && (
                  <a
                    href="/your-events"
                    className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
                  >
                    Your Events
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Side Menu */}
          {!isLoggedIn && (
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                <button
                  onClick={handleLogin}
                  className="flex items-center text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
                >
                  <span>Login | Register</span>
                </button>
              </div>
            </div>
          )}

          {isLoggedIn && (
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                <button
                  onClick={handleLogin}
                  className="flex items-center text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
                >
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Contact
          </a>
          <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4">
            <i className="fa-brands fa-google mr-2"></i>
            <span>Login or Register</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
