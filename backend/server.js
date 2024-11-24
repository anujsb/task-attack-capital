import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js"; // Use import for ES Modules
import authRoutes from "./routes/auth.js"; // Use import for ES Modules
import postRoutes from "./routes/post.js"; // Use import for ES Modules
import dotenv from "dotenv"; // Use import for dotenv
import multer from "multer";

dotenv.config(); // Initialize dotenv
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(
  cors({
    origin: "https://task-attack-capital.vercel.app", // Remove trailing slash
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow necessary HTTP methods
    credentials: true, // Include credentials if needed
  })
);

app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// Default route to check server
app.get("/", (req, res) => {
  res.json({
    status: "Server is up!",
    now: new Date(),
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});