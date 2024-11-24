import Post from "../models/post.js";
import { uploadImages } from "./cloudinaryUploader.js"; // Ensure this handles uploading to Cloudinary

// Controller for creating a post
export const createPost = async (req, res) => {
  try {
    // Logging inputs for debugging
    console.log("Uploaded files:", req.files);
    console.log("User:", req.user);

    // Extract data from the request body
    const { title, content } = req.body;

    // Validate inputs
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required." });
    }

    const images = req.files;

    if (!images || images.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one image is required for the post." });
    }

    // Upload images to Cloudinary
    const uploadedImageUrls = await uploadImages(
      images.map((file) => ({
        path: `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
      }))
    );

    // Create the post in the database
    const newPost = await Post.create({
      title,
      content,
      authorId: req.user.userId, // Assumes user ID is available in `req.user`
      imageLink: uploadedImageUrls[0], // Use the first uploaded image as the main link
    });

    // Respond with the created post
    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
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
