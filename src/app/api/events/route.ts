import { NextResponse } from 'next/server';
import dbConnect from '../../../../config/mongodb';
import Event from '../../../models/itemSchema';

export async function GET(request: Request) {
  await dbConnect();

  // Parse the search parameters from the URL.
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location') || '';
  const dateParam = searchParams.get('date');
  let filter: any = {};

  if (location) {
    filter.location = { $regex: location, $options: 'i' };
  }
  
  if (dateParam) {
    const queryDate = new Date(dateParam);
    if (!isNaN(queryDate.getTime())) {
      const nextDay = new Date(queryDate);
      nextDay.setDate(queryDate.getDate() + 1);
      filter.date = { $gte: queryDate, $lt: nextDay };
    }
  }

  try {
    const events = await Event.find(filter);
    return NextResponse.json(events, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to fetch events', error: error.message },
      { status: 500 }
    );
  }
}
