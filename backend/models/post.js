import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming your user model is named 'User'
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
