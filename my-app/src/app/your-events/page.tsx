'use client';

import { useEffect, useState } from 'react';
import Item from '@/components/Item';
import Link from 'next/link';

interface ItemType {
  _id: number | string;
  title: string;
  description: string;
  url: string;
  owner?: string;
}

export default function YourEventsPage() {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const ownerEmail = "test@example.com"; // hardcoded for now
      try {
        const res = await fetch(`/api/events?owner=${ownerEmail}`);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch user events:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Events</h1>
        <Link
          href="/create-item"
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          + Create New Event
        </Link>
      </div>

      {items.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">You haven’t created any events yet.</p>
      )}
    </div>
  );
}
