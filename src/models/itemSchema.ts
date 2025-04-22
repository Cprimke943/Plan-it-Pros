import mongoose, { Schema, Document } from "mongoose";

const eventSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  photo: { type: String },
  owner: { type: String, required: true },
});

export default mongoose.models.Event ||
  mongoose.model<IEvent>("Event", eventSchema, "Planevents");
