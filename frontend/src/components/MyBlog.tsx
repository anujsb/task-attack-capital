"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Post {
  _id: string;
  title: string;
  authorId: {
    _id: string;
    name: string;
    email: string;
  };
  content: string;
  imageLink: string;
}

const MyBlog = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          setError("Authentication token missing.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://task-attack-capital.onrender.com/api/posts/posts/user",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
        console.log("Fetched posts:", data);
      } catch (err) {
        setError("Error fetching posts.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.authorId?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center m-10">
        Loading posts...
        <Image
          src="/Loader-blog.gif"
          alt="loader"
          width="300"
          height="300"
          className=""
        />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-10 p-4">
      <div className="w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card
                key={post._id}
                className="flex flex-col justify-between overflow-hidden bg-transparent shadow-none border border-secondary p-2 hover:shadow-lg duration-500 transition hover:border-accent"
              >
                <Image
                  src={post.imageLink || "/default-image.jpg"}
                  alt={`Thumbnail for ${post.title}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    By {post.authorId?.name || "Anonymous"}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                    {post.content.substring(0, 100)}...
                  </p>
                  <Link href={`/post/${post._id}`}>
                    <Button
                      variant="outline"
                      className="w-full bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none hover:scale-110 duration-500 transition flex items-center justify-center"
                    >
                      Read more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))
          ) : (
            <div>No posts found.</div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MyBlog;
