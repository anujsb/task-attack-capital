import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav className="sticky top-0 border-b backdrop-blur-lg shadow-sm  p-4 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          BlogPlatform
        </Link>
        <div className="space-x-4 ">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/create-post">Create Post</Link>
          <Link href="/dashboard">
            <Button className="text-white font-semibold rounded-full shadow-lg">dashboard</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
