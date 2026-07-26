import express from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

roter.post("/register",register);
roter.post("/login",login);
roter.get("/me",protect, getMe);

export default router;

