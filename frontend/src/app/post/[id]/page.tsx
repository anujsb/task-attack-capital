// // "use client";

// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/router";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import Image from "next/image";
// // import { Button } from "@/components/ui/button";

// // interface Post {
// //   id: string;
// //   title: string;
// //   authorId: { name: string };
// //   content: string;
// //   imageLink: string;
// // }

// // const page = () => {
// // //   const router = useRouter();
// // //   const { id } = router.query; 
// // //   const [post, setPost] = useState<Post | null>(null);
// // //   const [loading, setLoading] = useState<boolean>(true);

// //   //   useEffect(() => {
// //   //     const fetchPost = async () => {
// //   //       if (!id) return; // Wait until the `id` is available
// //   //       try {
// //   //         const response = await fetch(`https://task-attack-capital.onrender.com/api/posts/post/${id}`);
// //   //         if (response.ok) {
// //   //           const data = await response.json();
// //   //           console.log("Fetched Post:", data);
// //   //           setPost(data); // Set the fetched post data
// //   //         } else {
// //   //           console.error("Failed to fetch post:", response.statusText);
// //   //         }
// //   //       } catch (error) {
// //   //         console.error("Error fetching post:", error);
// //   //       } finally {
// //   //         setLoading(false);
// //   //       }
// //   //     };

// //   //     fetchPost();
// //   //   }, [id]);

// // //   if (loading) {
// // //     return <p>Loading...</p>;
// // //   }

// // //   if (!post) {
// // //     return <p>Post not found</p>;
// // //   }

// //   return (
// //     <div className="flex flex-col items-center mt-10 p-4">
// //       <Card className="w-full max-w-3xl overflow-hidden bg-transparent shadow-none border border-accent p-4">
// //         <Image
// //           //   src={post.imageLink}
// //           src="/favicon.ico"
// //         //   alt={`Image for ${post.title}`}
// //           width={800}
// //           height={400}
// //           className="w-full h-64 object-cover rounded-md"
// //         />
// //         <CardHeader>
// //           <CardTitle className="text-2xl font-bold mt-4">
// //             title
// //             {/* {post.title} */}
// //           </CardTitle>
// //           <p className="text-sm text-muted-foreground mt-2">
// //             By
// //             {/* {post.authorId?.name} */}
// //           </p>
// //         </CardHeader>
// //         <CardContent>
// //           <p className="text-base mt-4">
// //             content
// //             {/* {post.content} */}
// //             </p>
// //         </CardContent>
// //       </Card>
// //       <Button
// //         variant="outline"
// //         className="mt-4 bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none"
// //         // onClick={() => router.push("/")}
// //       >
// //         Back to Blog
// //       </Button>
// //     </div>
// //   );
// // };

// // export default page;



// // // url : http://localhost:3000/api/posts/posts/6742f0d9d59b70587f953a64


// File: frontend/src/app/post/[id]/page.tsx



// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

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

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Define Post interface
interface Post {
  id: string;
  title: string;
  authorId: { name: string };
  content: string;
  imageLink: string | null;
}

// Define the correct props type for the PostPage
interface PostPageProps {
  params: {
    id: string;
  };
}

const PostPage: React.FC<PostPageProps> = ({ params }) => {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://task-attack-capital.onrender.com/api/posts/posts/${params.id}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch post: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message || "Error fetching post.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !post) {
    return <p>{error || "Post not found"}</p>;
  }

  return (
    <div className="flex flex-col items-center mt-10 p-4">
      <Card className="w-full max-w-3xl overflow-hidden bg-transparent shadow-none border border-accent p-4">
        <Image
          src={post.imageLink || "/default-image.jpg"}
          alt={`Image for ${post.title}`}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-md"
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

export default PostPage;