"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="bg-primary text-white sticky top-[-12rem] rounded-b-2xl">
        <div className="flex mx-10 pb-10">
          <div className="pt-4">
            <Image
              src="/attack-white.webp"
              alt="Company Logo"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full"
            />
            <h1 className="text-center mb-2 text-3xl">Attack Capital</h1>
            <p className="text-center text-neutral-300">
              Blog project by anuj bhuyar
            </p>
            <div className="flex gap-2">
              <p>github</p>
              <p>ln</p>
            </div>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
}
