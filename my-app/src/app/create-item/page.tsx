'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../../components/Card';

export default function CreateEventPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fakeOwner = 'test@example.com'; // simulate a logged-in user

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          owner: fakeOwner,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      setFormData({ title: '', description: '', date: '', url: '' });
      router.push('/your-events');
    } catch (error) {
      console.error('Error in CreateEvent:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a New Event</h2>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Title</label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Date</label>
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Image</label>
            <input
              name="url"
              type="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Image URL"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 mt-4"
            >
              Add Event
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
