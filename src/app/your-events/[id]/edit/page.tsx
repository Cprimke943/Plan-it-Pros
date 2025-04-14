'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Content from '../../../../components/Content';

const EditEventPage = () => {
  const router = useRouter();
  const params = useParams();
  const eventId = params?.id as string;

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date: '',
    time: '',
    photo: '',
  });

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(`/api/events/${eventId}`);
      const data = await res.json();

      const dateOnly = new Date(data.event.date).toISOString().split('T')[0];

      setFormData({
        name: data.event.name,
        location: data.event.location,
        date: dateOnly,
        time: data.event.time,
        photo: data.event.photo || '',
      });
    };

    if (eventId) fetchEvent();
  }, [eventId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/events/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/your-events');
    } else {
      alert('Error updating event.');
    }
  };

  return (
    <Content>
      <div className="max-w-xl mx-auto mt-12 bg-white bg-opacity-90 p-6 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Edit Event</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="photo"
            placeholder="Image URL (optional)"
            value={formData.photo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </Content>
  );
};

export default EditEventPage;
