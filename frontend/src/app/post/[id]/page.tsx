// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { useRouter } from "next/router";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import Image from "next/image";
// // // import { Button } from "@/components/ui/button";

// // // interface Post {
// // //   id: string;
// // //   title: string;
// // //   authorId: { name: string };
// // //   content: string;
// // //   imageLink: string;
// // // }

// // // const page = () => {
// // // //   const router = useRouter();
// // // //   const { id } = router.query;
// // // //   const [post, setPost] = useState<Post | null>(null);
// // // //   const [loading, setLoading] = useState<boolean>(true);

// // //   //   useEffect(() => {
// // //   //     const fetchPost = async () => {
// // //   //       if (!id) return; // Wait until the `id` is available
// // //   //       try {
// // //   //         const response = await fetch(`https://task-attack-capital.onrender.com/api/posts/post/${id}`);
// // //   //         if (response.ok) {
// // //   //           const data = await response.json();
// // //   //           console.log("Fetched Post:", data);
// // //   //           setPost(data); // Set the fetched post data
// // //   //         } else {
// // //   //           console.error("Failed to fetch post:", response.statusText);
// // //   //         }
// // //   //       } catch (error) {
// // //   //         console.error("Error fetching post:", error);
// // //   //       } finally {
// // //   //         setLoading(false);
// // //   //       }
// // //   //     };

// // //   //     fetchPost();
// // //   //   }, [id]);

// // // //   if (loading) {
// // // //     return <p>Loading...</p>;
// // // //   }

// // // //   if (!post) {
// // // //     return <p>Post not found</p>;
// // // //   }

// // //   return (
// // //     <div className="flex flex-col items-center mt-10 p-4">
// // //       <Card className="w-full max-w-3xl overflow-hidden bg-transparent shadow-none border border-accent p-4">
// // //         <Image
// // //           //   src={post.imageLink}
// // //           src="/favicon.ico"
// // //         //   alt={`Image for ${post.title}`}
// // //           width={800}
// // //           height={400}
// // //           className="w-full h-64 object-cover rounded-md"
// // //         />
// // //         <CardHeader>
// // //           <CardTitle className="text-2xl font-bold mt-4">
// // //             title
// // //             {/* {post.title} */}
// // //           </CardTitle>
// // //           <p className="text-sm text-muted-foreground mt-2">
// // //             By
// // //             {/* {post.authorId?.name} */}
// // //           </p>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <p className="text-base mt-4">
// // //             content
// // //             {/* {post.content} */}
// // //             </p>
// // //         </CardContent>
// // //       </Card>
// // //       <Button
// // //         variant="outline"
// // //         className="mt-4 bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none"
// // //         // onClick={() => router.push("/")}
// // //       >
// // //         Back to Blog
// // //       </Button>
// // //     </div>
// // //   );
// // // };

// // // export default page;

// // // // url : http://localhost:3000/api/posts/posts/6742f0d9d59b70587f953a64

// // File: frontend/src/app/post/[id]/page.tsx

// // "use client";

// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import Image from "next/image";
// // import { Button } from "@/components/ui/button";

// // interface Post {
// //   id: string;
// //   title: string;
// //   authorId: { name: string };
// //   content: string;
// //   imageLink: string | null;
// // }

// // const PostPage = ({ params }: { params: { id: string } }) => {
// //   const router = useRouter();
// //   const [post, setPost] = useState<Post | null>(null);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string>("");

// //   useEffect(() => {
// //     const fetchPost = async () => {
// //       setLoading(true);
// //       try {
// //         const response = await fetch(
// //           `https://task-attack-capital.onrender.com/api/posts/posts/${params.id}`
// //         );
// //         if (!response.ok) {
// //           throw new Error(`Failed to fetch post: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         setPost(data);
// //       } catch (err: any) {
// //         setError(err.message || "Error fetching post.");
// //         console.error(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchPost();
// //   }, [params.id]);

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   if (error || !post) {
// //     return <p>{error || "Post not found"}</p>;
// //   }

// //   return (
// //     <div className="flex flex-col items-center mt-10 p-4">
// //       <Card className="w-full max-w-3xl overflow-hidden bg-transparent shadow-none border border-accent p-4">
// //         <Image
// //           src={post.imageLink || "/default-image.jpg"}
// //           alt={`Image for ${post.title}`}
// //           width={800}
// //           height={400}
// //           className="w-full h-64 object-cover rounded-md"
// //         />
// //         <CardHeader>
// //           <CardTitle className="text-2xl font-bold mt-4">{post.title}</CardTitle>
// //           <p className="text-sm text-muted-foreground mt-2">
// //             By {post.authorId?.name || "Anonymous"}
// //           </p>
// //         </CardHeader>
// //         <CardContent>
// //           <p className="text-base mt-4">{post.content}</p>
// //         </CardContent>
// //       </Card>
// //       <Button
// //         variant="outline"
// //         className="mt-4 bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none"
// //         onClick={() => router.push("/")}
// //       >
// //         Back to Blog
// //       </Button>
// //     </div>
// //   );
// // };

// // export default PostPage;
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// // Define Post interface
// interface Post {
//   id: string;
//   title: string;
//   authorId: { name: string };
//   content: string;
//   imageLink: string | null;
// }

// const PostPage = ({ params }: { params: { id: string } }) => {
//   const router = useRouter();
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const fetchPost = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://task-attack-capital.onrender.com/api/posts/posts/${params.id}`
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch post: ${response.status}`);
//         }
//         const data = await response.json();
//         setPost(data);
//       } catch (err: any) {
//         setError(err.message || "Error fetching post.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [params.id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error || !post) {
//     return <p>{error || "Post not found"}</p>;
//   }

//   return (
//     <div className="flex flex-col items-center mt-10 p-4">
//       <Card className="w-full max-w-3xl overflow-hidden bg-transparent shadow-none border border-accent p-4">
//         <Image
//           src={post.imageLink || "/default-image.jpg"}
//           alt={`Image for ${post.title}`}
//           width={800}
//           height={400}
//           className="w-full h-64 object-cover rounded-md"
//         />
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold mt-4">{post.title}</CardTitle>
//           <p className="text-sm text-muted-foreground mt-2">
//             By {post.authorId?.name || "Anonymous"}
//           </p>
//         </CardHeader>
//         <CardContent>
//           <p className="text-base mt-4">{post.content}</p>
//         </CardContent>
//       </Card>
//       <Button
//         variant="outline"
//         className="mt-4 bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none"
//         onClick={() => router.push("/")}
//       >
//         Back to Blog
//       </Button>
//     </div>
//   );
// };

// export default PostPage;

// app/post/[id]/page.tsx
// import PostClient from './PostClient';

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// export default function PostPage({ params }: PageProps) {
//   return <PostClient id={params.id} />;
// }

// app/post/[id]/page.tsx
// import PostClient from "./PostClient";

// interface Post {
//   id: string;
//   title: string;
//   authorId: { name: string };
//   content: string;
//   imageLink: string | null;
// }

// interface PageProps {
//   params: {
//     id: string;
//   };
//   searchParams: { [key: string]: string | string[] | undefined };
// }

// async function getData(id: string) {
//   const response = await fetch(
//     `https://task-attack-capital.onrender.com/api/posts/posts/${id}`,
//     {
//       next: { revalidate: 60 }, // Revalidate every 60 seconds
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch post");
//   }

//   return response.json();
// }

// export default async function PostPage({ params, searchParams }: PageProps) {
//   try {
//     const post = await getData(params.id);
//     return <PostClient initialPost={post} />;
//   } catch (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p>Error loading post</p>
//       </div>
//     );
//   }
// }

// "use client"
// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from 'next/link';
// import { ArrowLeft } from 'lucide-react';

// interface Author {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface Post {
//   _id: string;
//   title: string;
//   content: string;
//   imageLink: string;
//   authorId: Author;
//   createdAt: string;
// }

// const PostPage = () => {
//   const params = useParams();
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await fetch(`https://task-attack-capital.onrender.com/api/posts/posts/${params.id}`);
//         const data = await response.json();
        
//         if (response.ok) {
//           setPost(data);
//         } else {
//           setError(data.message || 'Failed to fetch post');
//         }
//       } catch (error) {
//         console.error('Error fetching post:', error);
//         setError('Error loading post');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (params.id) {
//       fetchPost();
//     }
//   }, [params.id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-pulse text-lg">Loading...</div>
//       </div>
//     );
//   }

//   if (error || !post) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center p-4">
//         <p className="text-red-500 mb-4">{error || 'Post not found'}</p>
//         <Link href="/blog">
//           <Button>
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Blog
//           </Button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <div className="mb-6">
//         <Link href="/blog">
//           <Button className="gap-2">
//             <ArrowLeft className="h-4 w-4" />
//             Back to Blog
//           </Button>
//         </Link>
//       </div>
      
//       <Card className="bg-white shadow-lg">
//         <div className="aspect-video relative overflow-hidden rounded-t-lg">
//           <Image
//             src={post.imageLink}
//             alt={post.title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
        
//         <CardHeader>
//           <CardTitle className="text-2xl md:text-3xl font-bold">
//             {post.title}
//           </CardTitle>
//           <div className="flex items-center justify-between text-muted-foreground">
//             <p className="text-sm md:text-base">
//               By {post.authorId?.name}
//             </p>
//             <p className="text-sm">
//               {new Date(post.createdAt).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric'
//               })}
//             </p>
//           </div>
//         </CardHeader>
        
//         <CardContent>
//           <div className="prose prose-slate max-w-none">
//             <p className="text-base md:text-lg leading-relaxed whitespace-pre-wrap">
//               {post.content}
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default PostPage;


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
        
        console.log('Received post data:', data); // Debug log

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