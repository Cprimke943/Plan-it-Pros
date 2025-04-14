'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import Content from '../../components/Content';
import Items from '../../components/Items';
import { IEvent } from '../../models/itemSchema';

const SearchPage: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const params = new URLSearchParams();
        if (location) params.append('location', location);
        if (date) params.append('date', date);

        const res = await fetch(`/api/events?${params.toString()}`);
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
    fetchEvents();
  }, [location, date]);

  return (
    <Content>
      <div className="flex flex-col items-center justify-start p-4">
        {/* Search Form Container */}
        <div className="mt-8 bg-gradient-to-br from-[#E88183] to-[#676767] bg-opacity-90 p-12 rounded-xl shadow-xl w-full max-w-3xl text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">Search for Events</h1>
          <div className="mb-4 flex flex-col md:flex-row md:items-end md:space-x-4">
            <div className="flex flex-col mb-2 md:mb-0 w-full">
              <label htmlFor="location" className="mb-1 font-bold">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Search by location..."
                value={location}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                className="border p-2 rounded-md text-black"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="date" className="mb-1 font-bold">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                className="border p-2 rounded-md text-black"
              />
            </div>
          </div>
        </div>
        {/* Event Items List */}
        <div className="w-full max-w-3xl mt-8">
          <Items events={events} />
        </div>
      </div>
    </Content>
  );
};

export default SearchPage;
