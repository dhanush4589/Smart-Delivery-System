import { Router } from 'express';
import { getPartners, createPartner } from '../controllers/partnerController';

const router = Router();

router.get('/partners', getPartners);
router.post('/partners', createPartner);

// Define other routes like PUT, DELETE, etc.

export default router;
