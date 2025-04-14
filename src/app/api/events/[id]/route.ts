import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../../config/mongodb';
import Event from '../../../../models/itemSchema';

interface RouteParams {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  await dbConnect();
  const event = await Event.findById(params.id);
  return NextResponse.json({ event });
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  await dbConnect();
  const body = await request.json();

  const [year, month, day] = body.date.split('-').map(Number);
  const localDateOnly = new Date(year, month - 1, day);

  await Event.findByIdAndUpdate(params.id, {
    name: body.name,
    location: body.location,
    date: localDateOnly,
    time: body.time,
    photo: body.photo || null,
  });

  return NextResponse.json({ message: 'Event updated' });
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  await dbConnect();
  await Event.findByIdAndDelete(params.id);
  return NextResponse.json({ message: 'Event deleted' });
}
