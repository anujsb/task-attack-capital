"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Author {
  _id: string;
  name: string;
  email: string;
}

interface Post {
  _id: string;
  title: string;
  content: string;
  imageLink: string;
  authorId: Author;
  createdAt: string;
}

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!params.id) {
        setError('No post ID provided');
        setLoading(false);
        return;
      }

      try {
        console.log('Fetching post with ID:', params.id); // Debug log
        const response = await fetch(`https://task-attack-capital.onrender.com/api/posts/posts/${params.id}`);
        const data = await response.json();
        
        console.log('Received post data:', data); 

        if (response.ok && data) {
          setPost(data);
        } else {
          setError(data.message || 'Failed to fetch post');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Error loading post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  // Add debug log for params
  console.log('Current params:', params);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <p className="text-red-500 mb-4">{error || 'Post not found'}</p>
        <Link href="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
      
      <Card className="bg-white shadow-lg">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <Image
            src={post.imageLink}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            {post.title}
          </CardTitle>
          <div className="flex items-center justify-between text-muted-foreground">
            <p className="text-sm md:text-base">
              By {post.authorId?.name}
            </p>
            {post.createdAt && (
              <p className="text-sm">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="prose prose-slate max-w-none">
            <p className="text-base md:text-lg leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostPage;