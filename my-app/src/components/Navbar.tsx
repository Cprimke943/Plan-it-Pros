'use client';

import Image from 'next/image';
import logo from '../assets/icon.jpg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Initialize the router

  // Read login state on mount
  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Toggle and persist login state
  const handleLogin = () => {
    const newLoginState = !isLoggedIn;
    setIsLoggedIn(newLoginState);
    localStorage.setItem('isLoggedIn', newLoginState.toString());

    // Navigate based on login state
    if (newLoginState) {
      router.push('/your-events'); // Navigate to "Your Events" when logging in
    } else {
      router.push('/'); // Navigate to home when logging out
    }
  };

  return (
    <nav className="bg-[#a88c66] border-b-1">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">

          {/* Logo */}
          <Link className="flex flex-shrink-0 items-center" href="/">
            <Image className="h-15 w-auto" src={logo} alt="Plan-it-pros logo" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              Plan-it-Pro
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <Link href="/" className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2">
              Home
            </Link>
            <Link href="/about" className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2">
              About
            </Link>
            <Link href="/search" className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2">
              Search
            </Link>
            {isLoggedIn && (
              <Link
                href="/your-events"
                className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
              >
                Your Events
              </Link>
            )}
          </div>

          {/* Login / Logout Button */}
          <div className="hidden md:block md:ml-6">
            <button
              onClick={handleLogin}
              className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
            >
              {isLoggedIn ? 'Logout' : 'Login | Register'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
