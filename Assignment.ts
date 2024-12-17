import mongoose, { Schema, Document } from 'mongoose';

interface IAssignment extends Document {
  orderId: string;
  partnerId: string;
  timestamp: Date;
  status: 'success' | 'failed';
  reason?: string;
}

const AssignmentSchema: Schema = new Schema(
  {
    orderId: { type: String, required: true },
    partnerId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, enum: ['success', 'failed'], required: true },
    reason: { type: String },
  },
  { timestamps: true }
);

const Assignment = mongoose.model<IAssignment>('Assignment', AssignmentSchema);

export default Assignment;
