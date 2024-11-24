"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Blog from "@/components/Blog";
import Info from "@/components/Info";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-50 p-10 top-0 rounded-lg border-b border-accent">
        <Info />
      </div>
      <Blog />
    </div>
  );
}
