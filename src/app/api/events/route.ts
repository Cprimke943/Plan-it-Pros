// app/api/events/route.ts
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../config/mongodb";
import Event from "../../../models/itemSchema";

//  GET handler
export async function GET(request: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");
  const date = searchParams.get("date");

  const filter: any = {};

  if (location) {
    // Case-insensitive partial match for location
    filter.location = { $regex: location, $options: "i" };
  }

  if (date) {
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(start.getDate() + 1);
    filter.date = { $gte: start, $lt: end };
  }

  try {
    const events = await Event.find(filter).sort({ date: 1, time: 1 });
    return NextResponse.json(events, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching events", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  await dbConnect();

  const body = await request.json();

  const [year, month, day] = body.date.split("-").map(Number);
  const localDateOnly = new Date(year, month - 1, day);

  try {
    const userId = body.owner || "unknown";

    const newEvent = new Event({
      name: body.name,
      location: body.location,
      date: localDateOnly,
      time: body.time,
      photo: body.photo || null,
      owner: userId,
    });

    const saved = await newEvent.save();
    return NextResponse.json(
      { message: "Event created", event: saved },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error creating event", error: error.message },
      { status: 500 }
    );
  }
}
