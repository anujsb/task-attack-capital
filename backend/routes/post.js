// import express from "express";
// import { createPost, getAllPosts, getUserPosts } from "../controllers/post.js";
// import authMiddleware from "../middlewares/auth.js"; // Use import for ES Modules
// import multer from "multer";
// import path from "path";

// const router = express.Router();

// // Multer setup for storing files in memory
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Path to save uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Make sure files have unique names
//   },
// });
// const upload = multer({ storage: storage });

// // Routes
// router.post("/post", upload.array("images", 5), authMiddleware, createPost);

// router.get("/posts", getAllPosts);
// router.get("/posts/user", authMiddleware, getUserPosts);

// export default router; // Export the router as default


import express from "express";
import { createPost, getAllPosts, getUserPosts } from "../controllers/post.js";
import authMiddleware from "../middlewares/auth.js";
import multer from "multer";

const router = express.Router();

// Multer setup for storing files in memory
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Routes
router.post("/post", upload.array("images", 5), authMiddleware, createPost);

router.get("/posts", getAllPosts);
router.get("/posts/user", authMiddleware, getUserPosts);


router.get("/posts/:id", getPostById);



export default router;