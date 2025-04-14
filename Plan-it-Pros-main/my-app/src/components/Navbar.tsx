'use client';
import Image from 'next/image';
import logo from '../assets/Earthlogo.png';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <nav className="bg-[#d3b58f] shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full object-cover shadow-sm"
              />
            </Link>
            <Link href="/" className="text-black font-medium hover:underline">
              Home
            </Link>
            <Link href="/features" className="text-black font-medium hover:underline">
              Features
            </Link>
            <Link href="/search" className="text-black font-medium hover:underline">
              Search
            </Link>
          </div>
          <div>
            {!isLoggedIn ? (
              <button
                onClick={handleLogin}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Login/Register
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
