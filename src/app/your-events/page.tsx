'use client';

import { useEffect, useState } from 'react';
import Content from '../../components/Content';
import { IEvent } from '../../models/itemSchema';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const YourEventsPage = () => {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState<IEvent[]>([]);
  const userEmail = session?.user?.email;

  useEffect(() => {
    if (!session?.user?.email) return;
  
    console.log("Requesting events for:", session.user.email); 
  
    const fetchUserEvents = async () => {
      const res = await fetch(`/api/user-events?user=${session.user.email}`);
      const data = await res.json();
      console.log("Events fetched:", data); 
      setEvents(data);
    };
  
    fetchUserEvents();
  }, [session?.user?.email]);
  
  

  const handleDelete = async (id: string) => {
    await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });
    setEvents(events.filter(event => event._id !== id));
  };

  if (status === 'loading') {
    return <div className="text-white text-center mt-20">Loading your events...</div>;
  }

  if (!session) {
    return (
      <Content>
        <div className="text-white text-center mt-20 text-xl">
          You must be logged in to view your events.
        </div>
      </Content>
    );
  }

  return (
    <Content>
      <div className="max-w-4xl mx-auto mt-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Your Events</h1>
          <Link
            href="/your-events/create"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            + Create Event
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="text-white text-center">No events created yet.</div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {events.map(event => (
              <div key={event._id} className="border p-4 rounded-md bg-white bg-opacity-90">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{event.name}</h2>
                {event.photo ? (
                  <img
                    src={event.photo}
                    alt="Event"
                    className="mt-2 h-40 w-full object-cover rounded-md"
                  />
                ) : (
                  <div className="mt-2 h-40 w-full bg-gray-200 flex items-center justify-center rounded-md">
                    <span className="text-gray-500">Event Photo</span>
                  </div>
                )}

                <p>
                  <span className="font-bold text-black">Location:</span>{' '}
                  <span className="text-gray-700">{event.location}</span>
                </p>
                <p>
                  <span className="font-bold text-black">Date:</span>{' '}
                  <span className="text-gray-700">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </p>
                <p>
                  <span className="font-bold text-black">Time:</span>{' '}
                  <span className="text-gray-700">
                    {new Date(`1970-01-01T${event.time}`).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                    })}
                  </span>
                </p>

                <div className="flex justify-between mt-4">
                  <Link
                    href={`/your-events/${event._id}/edit`}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Content>
  );
};

export default YourEventsPage;
