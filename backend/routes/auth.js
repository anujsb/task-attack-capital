import { signup, login } from '../controllers/auth.js'; // Use import instead of require
import express from 'express';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router; // Export as default
