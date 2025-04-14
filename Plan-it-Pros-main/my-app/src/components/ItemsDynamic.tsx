'use client';

import { useEffect, useState } from 'react';
import { ItemType } from '@/models/item.model'; // or define inline

const ItemsDynamic = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch('/api/items');
      const data = await res.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div className="text-white">
      {/* You can use the same grid/card layout as ItemsStatic here */}
      {items.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item._id} className="bg-white text-black p-4 rounded shadow">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsDynamic;
