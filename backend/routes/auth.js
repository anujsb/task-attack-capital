import { signup, login, logout } from "../controllers/auth.js"; // Use import instead of require
import authMiddleware from "../middlewares/auth.js";

import express from "express";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
export default router; // Export as default