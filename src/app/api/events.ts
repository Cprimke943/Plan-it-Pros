// pages/api/events.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../config/mongodb';
import Event from '../../models/itemSchema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === 'GET') {
    // Build query filter based on query parameters
    const { location, date } = req.query;
    let filter: any = {};

    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    if (date) {
      // Convert date string to a Date object and search for events on that day
      const queryDate = new Date(date as string);
      if (!isNaN(queryDate.getTime())) {
        const nextDay = new Date(queryDate);
        nextDay.setDate(queryDate.getDate() + 1);
        filter.date = { $gte: queryDate, $lt: nextDay };
      }
    }

    try {
      const events = await Event.find(filter);
      return res.status(200).json(events);
    } catch (error: any) {
      return res.status(500).json({ message: 'Failed to fetch events', error: error.message });
    }
  } else if (req.method === 'POST') {
    // Create a new event using the data from the request body
    try {
      const event = new Event({
        name: req.body.name,
        location: req.body.location,
        date: new Date(req.body.date),
        time: req.body.time,
        photo: req.body.photo // this field is optional
      });

      await event.save();
      return res.status(201).json({ message: 'Event created successfully', event });
    } catch (error: any) {
      return res.status(500).json({ message: 'Failed to create event', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
