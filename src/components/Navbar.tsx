'use client';

import Image from 'next/image';
import logo from '../assets/icon.jpg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedLogin = localStorage.getItem('loggedIn');
    setIsLoggedIn(storedLogin === 'true');
  }, []);

  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userId', 'demo-user-123'); // 🔐 fake user ID
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="bg-[#a88c66] border-b-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left section: logo + links */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="Plan-it-Pro logo" width={80} height={80} />
              <span className="text-white text-2xl font-bold hidden md:inline">Plan-it-Pro</span>
            </Link>

            <div className="hidden md:flex space-x-4">
              <Link
                href="/"
                className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
              >
                About
              </Link>
              <Link
                href="/search"
                className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
              >
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
          </div>

          {/* Right section: login/logout */}
          <div className="hidden md:block">
            <button
              onClick={isLoggedIn ? handleLogout : handleLogin}
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
