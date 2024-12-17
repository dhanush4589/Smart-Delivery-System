import mongoose, { Schema, Document } from 'mongoose';

interface IPartner extends Document {
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  currentLoad: number; // max: 3
  areas: string[];
  shift: { start: string; end: string };
  metrics: {
    rating: number;
    completedOrders: number;
    cancelledOrders: number;
  };
}

const PartnerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], required: true },
  currentLoad: { type: Number, required: true, max: 3 },
  areas: { type: [String], required: true },
  shift: {
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  metrics: {
    rating: { type: Number, default: 0 },
    completedOrders: { type: Number, default: 0 },
    cancelledOrders: { type: Number, default: 0 },
  },
});

const Partner = mongoose.model<IPartner>('Partner', PartnerSchema);

export default Partner;
