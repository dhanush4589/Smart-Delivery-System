import { Request, Response } from 'express';
import Partner from '../models/Partner';

export const getPartners = async (req: Request, res: Response) => {
  try {
    const partners = await Partner.find();
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching partners' });
  }
};

export const createPartner = async (req: Request, res: Response) => {
  try {
    const partner = new Partner(req.body);
    await partner.save();
    res.status(201).json(partner);
  } catch (error) {
    res.status(400).json({ message: 'Error creating partner' });
  }
};

// Add other CRUD operations as needed (update, delete)
