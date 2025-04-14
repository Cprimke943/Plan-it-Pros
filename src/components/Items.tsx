import React from 'react';
import { IEvent } from '../models/itemSchema';

interface ItemsProps {
  events: IEvent[];
}

const Items: React.FC<ItemsProps> = ({ events }) => {
  if (!events || events.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-xl font-bold text-white bg-black bg-opacity-70 p-4 rounded-xl">
          No events found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {events.map((event) => (
        <div key={event._id.toString()} className="border p-4 rounded-md bg-white bg-opacity-90">
          <h2 className="font-bold text-xl mb-2 text-gray-800">{event.name}</h2>
          <p className="text-gray-700">Location: {event.location}</p>
          <p className="text-gray-700">
            Date: {new Date(event.date).toLocaleDateString()}
          </p>
          <p className="text-gray-700">Time: {event.time}</p>
          {/* Placeholder for event photo */}
          <div className="mt-2 h-40 w-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Event Photo</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
