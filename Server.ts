import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import partnerRoutes from './routes/partnerRoutes';
import orderRoutes from './routes/orderRoutes';
import assignmentRoutes from './routes/assignmentRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json

// API routes
app.use('/api', partnerRoutes);
app.use('/api', orderRoutes);
app.use('/api', assignmentRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/smart-delivery', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
