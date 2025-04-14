'use client';

import { useState } from 'react';

interface NewItem {
    _id: number;
    owner: number;
    title: string;
    description: string;
    url: string;
  };
  
interface ItemAddFormProps {
    onAddItem: (item: NewItem) => void;
  };

export default function ItemAddForm({ onAddItem }:ItemAddFormProps) {
    const [formData, setFormData] = useState ({
      owner: 0,
      title: '',
      description: '',
      url: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Create a new object from the existing item (prev) with the update to the field 
    // that changed.  If the owner field changed, convert the string input to a number.
    setFormData(prev => ({
      ...prev,
      [name]: name === 'owner' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: NewItem = {
        _id: Math.floor(Math.random() * 100000), // random ID
        ...formData,
      };
      onAddItem(newItem); // Lifting the state up to parent
      setFormData({ owner: 0, title: '', description: '', url: '' }); // Clear form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4  p-4 rounded">
      <input
        name="owner"
        type="number"
        value={formData.owner}
        onChange={handleChange}
        placeholder="Owner ID"
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="url"
        type="url"
        value={formData.url}
        onChange={handleChange}
        placeholder="Image URL"
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600"
      > Add Item
      </button>
    </form>
  );
}