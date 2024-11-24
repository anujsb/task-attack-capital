"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check login state on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Get the token from localStorage
    setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of the token
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

      // Remove the token from localStorage (client-side logout)
      localStorage.removeItem("authToken");
      setIsLoggedIn(false); // Update state

      // Send the token in the Authorization header (Bearer token)
      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // No need for Authorization header here
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });

      if (response.ok) {
        // Redirect to login page after successful logout
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
    const token = localStorage.getItem("authToken"); // Check token before navigating
    if (!token) {
      router.push("/login");
    } else {
      router.push(route);
    }
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
        <div className="space-x-4">
          {!isLoggedIn ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
            </>
          ) : (
            <Button variant="outline" onClick={handleLogout}>
              Sign Out
            </Button>
          )}

          {/* Protected Routes */}
          <Button
            variant="outline"
            onClick={() => handleProtectedRoute("/create-post")}
          >
            <SquarePen />
            Create Post
          </Button>
          <Button
            className="w-min bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none hover:scale-110 duration-500 transition"
            onClick={() => handleProtectedRoute("/dashboard")}
          >
            Dashboard
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;