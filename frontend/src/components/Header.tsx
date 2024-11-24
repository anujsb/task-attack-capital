"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { SquarePen } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 p-2 z-30 transition-all duration-300 ${
        isScrolled
          ? "border-b backdrop-blur-lg shadow-sm rounded-b-2xl "
          : "bg-gradient-to-r from-purple-100 to-[#f1f0fe]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          BlogPlatform
        </Link>
        <div className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/create-post">
            <Button variant="outline">
              <SquarePen />
              Create Post
            </Button>
          </Link>
          <Link href="/dashboard">
            {/* <Button className="w-min mt-4 text-white rounded-full hover:scale-110 duration-500 transition font-semibold"> */}
            <Button className="w-min bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none hover:scale-110 duration-500 transition ">
              dashboard
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
