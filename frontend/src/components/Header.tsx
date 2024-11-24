"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { SquarePen, Menu, X } from 'lucide-react';
import { useRouter } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Check login state on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle sign-out with server logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("No authentication token found.");
        return;
      }

      localStorage.removeItem("authToken");
      setIsLoggedIn(false);

      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        router.push("/login");
      } else {
        const data = await response.json();
        alert(data.message || "Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Protected route navigation
  const handleProtectedRoute = (route: string) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/login");
    } else {
      router.push(route);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 p-2 z-30 transition-all duration-300 ${
        isScrolled
          ? "border-b backdrop-blur-lg shadow-sm rounded-b-2xl"
          : "bg-gradient-to-r from-purple-100 to-[#f1f0fe]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          BlogPlatform
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 items-center">
          {renderMenuItems()}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {renderMenuItems()}
        </div>
      )}
    </nav>
  );

  function renderMenuItems() {
    return (
      <>
        {!isLoggedIn ? (
          <>
            <Link href="/login" className="block md:inline-block py-2 px-4 hover:bg-gray-100 rounded">Login</Link>
            <Link href="/signup" className="block md:inline-block py-2 px-4 hover:bg-gray-100 rounded">Sign Up</Link>
          </>
        ) : (
          <Button variant="outline" onClick={handleLogout} className="w-full md:w-auto">
            Sign Out
          </Button>
        )}

        <Button
          variant="outline"
          onClick={() => handleProtectedRoute("/create-post")}
          className="w-full md:w-auto flex items-center justify-center"
        >
          <SquarePen className="mr-2" />
          Create Post
        </Button>
        <Button
          className="w-full md:w-auto bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none hover:scale-110 duration-500 transition"
          onClick={() => handleProtectedRoute("/dashboard")}
        >
          Dashboard
        </Button>
      </>
    );
  }
};

export default Header;

