'use client';

import Image from 'next/image';
import logo from '../assets/icon.jpg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';


const Navbar = () => {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(!!session?.user);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!session?.user);
  }, [session]);

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
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
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2">
                  Login / Register
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
