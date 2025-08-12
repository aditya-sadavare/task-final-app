import express from 'express';
import { getTasks, addTask, toggleTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.patch('/:id/toggle', toggleTask);

export default router;
