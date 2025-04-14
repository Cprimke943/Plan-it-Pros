'use client';

import { useState } from 'react';
import Welcome from '../components/Welcome';
import ItemsStatic from '../components/ItemsStatic';
import ItemsDynamic from '../components/ItemsDynamic';
import Link from 'next/link';
import Image from 'next/image';
import createEventImg from '../assets/Create_event.png';
import earthLogo from '../assets/Earthlogo.png';

export default function Home() {
  const [isLoggedIn] = useState(false); // 🔁 Replace with real auth check when ready

  return (
    <div className="space-y-24">
      {/* Welcome Hero */}
      <Welcome />

      {/* Upcoming Events Section */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Upcoming Events</h2>
        {isLoggedIn ? <ItemsDynamic /> : <ItemsStatic />}
      </section>

      {/* Call to Action Section */}
      <section className="bg-white text-black rounded-md shadow-md mx-4 md:mx-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 p-6">
          <div className="w-full md:w-1/2">
            <Image
              src={createEventImg}
              alt="Create event illustration"
              className="rounded-md w-full h-auto"
              placeholder="blur"
            />
          </div>
          <div className="space-y-4 w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Make your own Event</h3>
            <p>
              Create and share events effortlessly—whether it’s a game, gathering, or group meetup.
              Customize details, invite others, and manage RSVPs all in one place.
            </p>
            <Link
              href="/create-item"
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 inline-block"
            >
              Create Events
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#d3b58f] text-black pt-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Logo + Description */}
          <div className="flex items-start space-x-4">
            <Image
              src={earthLogo}
              alt="Plan-It Pro"
              width={48}
              height={48}
              className="rounded-full object-cover shadow-sm"
            />
            <div>
              <h4 className="font-bold text-lg">Plan-It Pro</h4>
              <p className="text-sm">
                Plan-It Pro is a smart event planning platform that helps users discover, filter, and RSVP to personalized events.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-lg mb-2">Plan-It Pro</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-bold text-lg mb-2">Stay in The Loop</h4>
            <p className="text-sm mb-4">Join our mailing list to stay in the loop for Events</p>
            <form className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address.."
                className="px-4 py-2 text-sm outline-none flex-grow"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded-full m-1"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 text-center text-sm py-3">
          © {new Date().getFullYear()} Plan-It Pro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
