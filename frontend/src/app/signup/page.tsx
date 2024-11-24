"use client";
import Info from "@/components/Info";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://task-attack-capital.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        router.push('/login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="h-screen w-full grid grid-flow-col gap-2">
      <div className="hidden lg:block felx items-center justify-center bg-gradient-to-br from-purple-100 to-blue-50 rounded-lg border-r border-accent h-full w-full p-20">
        {" "}
        <Info />
      </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="p-10 rounded-xl bg-white shadow-sm w-full lg:w-1/2 m-10"
        >
          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border border-dashed rounded shadow-sm"
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-dashed rounded shadow-sm"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-dashed rounded shadow-sm"
            required
          />
          <div className="flex justify-end mb-4">
            <Button
              type="submit"
              className="w-min mt-4 text-white rounded-full hover:scale-110 duration-500 transition font-semibold"
            >
              Sign Up
            </Button>
          </div>
          <div>
            <p className="text-center">
              Have an account?
              <Link href="/login">
                <Button
                  variant="link"
                  className="text-primary font-semibold bg-none"
                >
                  Login
                </Button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;