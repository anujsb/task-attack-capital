import Post from "../models/post.js";
import { uploadImages } from "./cloudinaryUploader.js"; // Ensure this handles uploading to Cloudinary

// Controller for creating a post
export const createPost = async (req, res) => {
  try {
    const files = req.files; // Access the uploaded files
    const images = files.map((file) => ({
      path: `data:${file.mimetype};base64,${file.buffer.toString("base64")}`, // Convert buffer to base64
    }));

    // Upload images to Cloudinary
    const uploadedImages = await uploadImages(images);

    // Your logic to save post data, e.g., saving to the database
    const postData = {
      user: req.user.id, // Assuming user ID is in req.user
      images: uploadedImages,
      // other fields from req.body
    };

    // Simulate saving post to DB
    res.status(201).json({ message: "Post created successfully", postData });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Error creating post", error });
  }
};

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("authorId");
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get posts of the logged-in user
export const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ authorId: req.user.userId }).populate(
      "authorId"
    );
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching user posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
