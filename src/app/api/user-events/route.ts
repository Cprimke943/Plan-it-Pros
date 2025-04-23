import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../config/mongodb';
import Event from '@/models/itemSchema';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get('user');

  console.log("Fetching events for user:", user);

  await connectMongoDB();
  const events = await Event.find({ owner: user });

  return NextResponse.json(events);
}
