import Blog from "@/components/Blog";
import MyBlog from "@/components/MyBlog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="m-20">
      {/* <div className='flex justify-between border rounded-lg p-10'>
            <h1>
                hi, User
            </h1>
            <Button className='text-white'>
                Add Blog
            </Button>
        </div> */}
      <div className="flex items-center justify-between bg-[radial-gradient(circle,_#cacafb_45%,_#ffd1c700)] p-10 rounded-lg border border-[#cacafb]">
        <div className="pt-4">
          <h1 className="text-center mb-2 text-3xl">Hi, User</h1>
        </div>
        <Link href="/create-post" >
          <Button className=" bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none">
          Create Post
          </Button>
        </Link>
      </div>
      <div className="border rounded-lg mt-10 p-10">
        <h1 className="text-center mb-2 text-3xl">your Blogs</h1>
        <div>
          <MyBlog />
        </div>
      </div>
    </div>
  );
};

export default page;
