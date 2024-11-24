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

  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="h-screen flex flex-col  items-center justify-center p-10">
      <form
        // onSubmit={handleSubmit}
        className=" p-10  rounded-xl bg-white shadow-sm lg:w-2/3 w-full "
      >
        {/* <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4"> */}
        <h1 className="text-2xl font-bold mb-4 text-center">
          Create a New Post
        </h1>

        <div>
          <Label className="" htmlFor="title">
            Title
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border border-dashed "
          />
        </div>
        <div>
          <Label htmlFor="image">Image</Label>
          {/* <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          /> */}
          <div className="w-full max-w-4xl mx-auto min-h-40 border border-dashed bg-white  border-neutral-200 rounded-lg">
            <FileUpload onChange={handleFileUpload} />
          </div>
        </div>

        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            placeholder="Write your post content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-dashed "
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
            className="w-min mt-4 text-white rounded-full hover:scale-110 duration-500 transition font-semibold "
          >
            Create Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
