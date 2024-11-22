"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  image: string;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const posts: Post[] = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      author: "John Doe",
      content:
        "Next.js is a powerful React framework that makes building web applications a breeze. In this post, we'll explore the basics of Next.js and how to get started with your first project...",
      image: "/favicon.ico",
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      author: "Jane Smith",
      content:
        "Artificial Intelligence is rapidly changing the landscape of web development. From intelligent chatbots to automated testing, AI is revolutionizing how we build and maintain websites...",
      image: "/favicon.ico",
    },
    {
      id: 3,
      title: "Mastering CSS Grid Layout",
      author: "Alex Johnson",
      content:
        "CSS Grid Layout is a game-changer for web designers. It provides a powerful and flexible way to create complex layouts with ease. In this tutorial, we'll dive deep into CSS Grid...",
      image: "/favicon.ico",
    },
    {
      id: 4,
      title: "Optimizing React Performance",
      author: "Emily Brown",
      content:
        "Performance is crucial for a great user experience. In this post, we'll explore various techniques to optimize your React applications, from code splitting to memoization...",
      image: "/favicon.ico",
    },
    {
      id: 5,
      title: "The Power of GraphQL",
      author: "Michael Lee",
      content:
        "GraphQL is changing how we think about API design. Learn how this query language for APIs can make your data fetching more efficient and flexible in this comprehensive guide...",
      image: "/favicon.ico",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row p-8 min-h-screen">
      <div className="w-full lg:w-3/4 lg:pr-8">
        <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
        <div className="mb-6 relative">
          <Input
            type="text"
            placeholder="Search by author"
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            className="pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div>
          <div className="space-y-8">
            {posts.map((post) => (
              <Card key={post.id}>
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={post.image}
                      alt={`Thumbnail for ${post.title}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        By {post.author}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        {post.content.substring(0, 150)}...
                      </p>
                      <Link
                        href={`/post/${post.id}`}
                        className="text-primary hover:underline"
                      >
                        Read more
                      </Link>
                    </CardContent>
                  </div>
                </div>

                {/* <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    By {post.author}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.content.substring(0, 150)}...</p>
                  <Link
                    href={`/post/${post.id}`}
                    className="text-primary hover:underline"
                  >
                    Read more
                  </Link>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
        <div className="sticky top-8">
          <Card>
            <CardContent className="pt-6">
              <Image
                src="/favicon.ico"
                alt="Company Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <CardTitle className="text-center mb-2">Attack Capital</CardTitle>
              <p className="text-center text-muted-foreground">
                Blog project by anuj bhuyar
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
