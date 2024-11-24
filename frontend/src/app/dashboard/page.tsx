import Blog from "@/components/Blog";
import MyBlog from "@/components/MyBlog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between bg-gradient-to-br from-purple-100 to-blue-50 p-10 top-0 rounded-lg border-b border-accent">
        {/* <div className="pt-4">
          <h1 className="text-center mb-2 text-3xl">Hi, User</h1>
        </div> */}
        <Link href="/create-post">
          <Button className="w-full bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none hover:scale-110 duration-500 transition  flex  items-center justify-center">
            Create Post
          </Button>
        </Link>
      </div>
      <div className="">
        <h1 className="text-center mb-2 mt-10 text-3xl">your Blogs</h1>
        <div>
          <MyBlog />
        </div>
      </div>
    </div>
  );
};

export default page;
