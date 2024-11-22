import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="sticky top-0  text-accent bg-primary p-4 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          BlogPlatform
        </Link>
        <div className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/create-post">Create Post</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
