import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectMongoDB from '../../../../config/mongodb';
import User from '@/models/UserSchema';
export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    await connectMongoDB();

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = { username, email, password: hashedPassword };

    await User.create(newUser);

    return NextResponse.json({ message: 'User created' }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
