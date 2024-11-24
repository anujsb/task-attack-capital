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
      <div className="flex items-center justify-center bg-[radial-gradient(circle,_#cacafb_45%,_#ffd1c700)] p-10 m-10 rounded-lg border border-accent">
        <Info />
      </div>
      <Blog />
    </div>
  );
}
