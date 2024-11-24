"use client";

import { motion } from "framer-motion";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  image: string;
}
const Blog = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const posts: Post[] = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      author: "John Doe",
      content:
        "Next.js is a powerful React framework that makes building web applications a breeze. In this post, we'll explore the basics of Next.js and how to get started with your first project...",
      image: "/samp.png",
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      author: "Jane Smith",
      content:
        "Artificial Intelligence is rapidly changing the landscape of web development. From intelligent chatbots to automated testing, AI is revolutionizing how we build and maintain websites...",
      image: "/samp.png",
    },
    {
      id: 3,
      title: "Mastering CSS Grid Layout",
      author: "Alex Johnson",
      content:
        "CSS Grid Layout is a game-changer for web designers. It provides a powerful and flexible way to create complex layouts with ease. In this tutorial, we'll dive deep into CSS Grid...",
      image: "/samp.png",
    },
    {
      id: 4,
      title: "Optimizing React Performance",
      author: "Emily Brown",
      content:
        "Performance is crucial for a great user experience. In this post, we'll explore various techniques to optimize your React applications, from code splitting to memoization...",
      image: "/samp.png",
    },
    {
      id: 5,
      title: "The Power of GraphQL",
      author: "Michael Lee",
      content:
        "GraphQL is changing how we think about API design. Learn how this query language for APIs can make your data fetching more efficient and flexible in this comprehensive guide...",
      image: "/samp.png",
    },
  ];

  const filteredPosts = posts.filter((post) =>
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-10 p-4">
      <div className="w-full lg:w-1/4 ">
        <div className="sticky top-20 bg-accent p-4 rounded-2xl">
          <div className="mb-6 flex gap-2 border border-none rounded-full p-2">
            <Search className=" text-text mt-2" size={20} />
            <Input
              type="text"
              placeholder="Search by author"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className=" rounded-full shadow-none placeholder:text-text border-text"
            />
          </div>
          <div>popular tags</div>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
            >
              <Card
                key={post.id}
                className="flex flex-col justify-between overflow-hidden bg-transparent shadow-none border border-secondary p-2 hover:shadow-lg duration-500 transition hover:border-accent"
              >
                <Image
                  src={post.image}
                  alt={`Thumbnail for ${post.title}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md "
                />
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    By {post.author}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                    {post.content.substring(0, 100)}...
                  </p>
                  <Link href={`/post/${post.id}`}>
                    <Button
                      variant="outline"
                      className="w-full bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none hover:scale-110 duration-500 transition  flex  items-center justify-center"
                    >
                      Read more
                      <ChevronRight />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
