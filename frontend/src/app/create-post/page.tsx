"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FileUpload } from "@/components/ui/file-upload";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);


    files.forEach((file) => {
      formData.append("images", file);
    });

    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("Token missing from localStorage.");
      return;
    }

    try {
      const response = await fetch("https://task-attack-capital.onrender.com/api/posts/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Post created successfully:", data);
        setTitle("");
        setContent("");
        setImage(null);
        setImagePreview(null);
        setFiles([]);
      } else {
        console.error("Error creating post:", data.message);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col  items-center justify-center p-10 bg-gradient-to-br from-purple-100 to-blue-50">
      {" "}
      <form
        onSubmit={handleSubmit}
        className="p-10 rounded-xl bg-white shadow-sm lg:w-2/3 w-full"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Create a New Post
        </h1>

        <div className="mb-4">
          <Label className="mb-4" htmlFor="title">
            Title
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border border-dashed mb-4"
          />
        </div>

        <div className="mb-4">
          <Label className="mb-4" htmlFor="image">
            Image
          </Label>
          <div className="w-full max-w-4xl mx-auto min-h-40 border border-dashed bg-white border-neutral-200 rounded-lg">
            <FileUpload onChange={handleFileUpload} />
          </div>
        </div>

        <div className="mb-4">
          <Label className="mb-4" htmlFor="content">
            Content
          </Label>
          <Textarea
            id="content"
            placeholder="Write your post content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-dashed mb-4"
            required
          />
        </div>

        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div className="flex justify-end">
          <Button
            type="submit"
            className="w-min mt-4 text-white rounded-full hover:scale-110 duration-500 transition font-semibold"
          >
            Create Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
