"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Post {
  id: string;
  title: string;
  authorId: { name: string };
  content: string;
  imageLink: string | null;
}

interface PostClientProps {
  initialPost: Post;
}

const PostClient = ({ initialPost }: PostClientProps) => {
  const router = useRouter();
  const [post, setPost] = useState<Post>(initialPost);

  return (
    <div className="flex flex-col items-center mt-10 p-4">
      <Card className="w-full max-w-3xl overflow-hidden bg-transparent shadow-none border border-accent p-4">
        <Image
          src={post.imageLink || "/default-image.jpg"}
          alt={`Image for ${post.title}`}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-md"
          priority
        />
        <CardHeader>
          <CardTitle className="text-2xl font-bold mt-4">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            By {post.authorId?.name || "Anonymous"}
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-base mt-4">{post.content}</p>
        </CardContent>
      </Card>
      <Button
        variant="outline"
        className="mt-4 bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none"
        onClick={() => router.push("/")}
      >
        Back to Blog
      </Button>
    </div>
  );
};

export default PostClient;