import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../config/mongodb';
import Event from '../../../models/itemSchema';

export async function GET(request: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    const events = await Event.find({});
    return NextResponse.json(events, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
