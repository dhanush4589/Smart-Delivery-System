import { Router } from 'express';
import { getAssignments, createAssignment } from '../controllers/assignmentController';

const router = Router();

router.get('/assignments', getAssignments);
router.post('/assignments', createAssignment);

// Define other routes like PUT, DELETE, etc.

export default router;
