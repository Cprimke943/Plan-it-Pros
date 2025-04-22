"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Content from "../../../components/Content";

const CreateEventPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: "",
    time: "",
    photo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session?.user?.email) {
      alert("You must be logged in to create an event.");
      return;
    }

    let finalPhoto = formData.photo;

    // Generate image if none provided
    if (!finalPhoto) {
      const imageRes = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: formData.name }),
      });

      if (imageRes.ok) {
        const data = await imageRes.json();
        finalPhoto = data.url;
      } else {
        alert("Failed to generate image. Please try again.");
        return;
      }
    }

    const res = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        photo: finalPhoto,
        owner: session.user.email,
      }),
    });

    if (res.ok) {
      router.push("/your-events");
    } else {
      alert("Error creating event.");
    }
  };

  return (
    <Content>
      <div className="max-w-xl mx-auto mt-12 bg-white bg-opacity-90 p-6 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Create New Event
        </h1>

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
            placeholder="Image URL (if left blank, an image will be AI generated)"
            value={formData.photo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Create Event
          </button>
        </form>
      </div>
    </Content>
  );
};

export default CreateEventPage;
