'use client';

import Image from 'next/image';

import taqueriaImg from '../assets/taqueria.jpg';
import freshmanImg from '../assets/freshman.jpg';
import footballImg from '../assets/football.jpg';
import formalImg from '../assets/formal.jpg';
import dawgs5kImg from '../assets/dawgs5k.jpg';
import gamingImg from '../assets/gaming.jpg';

const dummyItems = [
  {
    _id: 1,
    title: 'Mexican Feast at Taqueria La Parrilla',
    description: 'Serving traditional and affordable Mexican food',
    url: taqueriaImg,
    date: '2025-04-14',
  },
  {
    _id: 2,
    title: 'Freshman Social',
    description: 'Opportunities to connect with student organizations and campus resources',
    url: freshmanImg,
    date: '2025-08-20',
  },
  {
    _id: 3,
    title: 'Flag Football Game at IM Fields',
    description: 'Offering a fun, fair, and competitive atmosphere for UGA students',
    url: footballImg,
    date: '2025-09-18',
  },
  {
    _id: 4,
    title: 'Spring Formal UGA *Club*',
    description: 'Come celebrate and bring friends',
    url: formalImg,
    date: '2025-04-14',
  },
  {
    _id: 5,
    title: 'DAWGS 5K',
    description: 'Opportunity to foster community and create lifelong memories',
    url: dawgs5kImg,
    date: '2025-08-20',
  },
  {
    _id: 6,
    title: 'Game Night',
    description: 'Gaming social! Bring friends!',
    url: gamingImg,
    date: '2025-09-18',
  },
];

const ItemsStatic = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyItems.map((item) => {
          const date = new Date(item.date);
          const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
          const day = date.getDate();

          return (
            <div key={item._id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src={item.url}
                alt={item.title}
                className="w-full h-40 object-cover"
                placeholder="blur"
              />
              <div className="flex p-4 gap-4">
                <div className="text-center">
                  <p className="text-xs font-bold text-purple-700">{month}</p>
                  <p className="text-xl font-bold">{day}</p>
                </div>
                <div>
                  <h3 className="text-md font-semibold text-black">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsStatic;
