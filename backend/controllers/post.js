import Post from "../models/post.js";
import { uploadImages } from "./cloudinaryUploader.js"; // Ensure this handles uploading to Cloudinary

// Controller for creating a post
export const createPost = async (req, res) => {
  try {
    console.log("Uploaded files:", req.files);
    console.log("User:", req.user); // Verify user data

    const { title, content } = req.body;
    const images = req.files;

    if (!images || images.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one image is required for the post." });
    }

    const uploadedImageUrls = await uploadImages(images);

    const newPost = await Post.create({
      title,
      content,
      authorId: req.user.userId, // This is the logged-in user's ObjectId
      imageLink: uploadedImageUrls[0],
    });

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: error.message });
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
