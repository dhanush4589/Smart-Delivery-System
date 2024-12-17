import { Router } from 'express';
import { getOrders, createOrder } from '../controllers/orderController';

const router = Router();

router.get('/orders', getOrders);
router.post('/orders', createOrder);

// Define other routes like PUT, DELETE, etc.

export default router;
