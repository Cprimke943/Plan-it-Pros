import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  name: string;
  location: string;
  date: Date;
  time: string;
  photo?: string; // Optional field for a photo URL
}

const eventSchema: Schema<IEvent> = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  photo: { type: String } // Optional field for a photo URL
});

// The third parameter 'Planevents' tells Mongoose to use that collection name exactly.
export default mongoose.models.Event || mongoose.model<IEvent>('Event', eventSchema, 'Planevents');
