"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ title, content, image });
    setTitle("");
    setContent("");
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className="h-screen flex flex-col  items-center justify-center bg-[radial-gradient(circle,_#cacafb_45%,_#ffd1c700)]">
      <form
        // onSubmit={handleSubmit}
        className=" p-10  rounded-lg bg-[#f0f1fa]"
      >
        {/* <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4"> */}
        <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>

        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            placeholder="Write your post content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-64"
            required
          />
        </div>

        <div>
          <Label htmlFor="image">Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
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

        <Button type="submit" className="w-full mt-4 text-white">
          Create Post
        </Button>
      </form>
    </div>
  );
};

export default page;
