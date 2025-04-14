import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../config/mongodb';
import Event from '../../models/itemSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const events = await Event.find({});
      res.status(200).json(events);
    } catch (error: any) {
      res.status(500).json({ message: 'Error fetching events', error: error.message });
    }

  } else if (req.method === 'POST') {
    try {
      const newEvent = new Event({
        name: req.body.name,
        location: req.body.location,
        date: new Date(req.body.date),
        time: req.body.time,
        photo: req.body.photo || null
      });

      const saved = await newEvent.save();
      res.status(201).json({ message: 'Event created', event: saved });

    } catch (error: any) {
      res.status(500).json({ message: 'Error creating event', error: error.message });
    }

  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
