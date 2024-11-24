// "use client";

// import { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// interface Post {
//   id: string;
//   title: string;
//   author: string;
//   content: string;
//   imageLink: string | null;
// }

// const MyBlog = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         console.log("Stored token:", token);

//         if (!token) {
//           setError("Authentication token missing.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "https://task-attack-capital.onrender.com/api/posts/posts/user", // Adjusted endpoint
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch posts");
//         }

//         const data = await response.json();
//         console.log("Fetched posts:", data);

//         const postsData = data.map((post: any) => ({
//           id: post._id, // MongoDB's default _id field is a string, so use _id here
//           title: post.title,
//           author: post.authorId?.email || "Anonymous", // Use authorId's email or fallback to "Anonymous"
//           content: post.content,
//           imageLink: post.imageLink || null, // Default to null if no image link exists
//         }));

//         setPosts(postsData);
//         console.log("Processed posts data:", postsData);
//       } catch (err) {
//         setError("Error fetching posts.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserPosts();
//   }, []);

//   const filteredPosts = posts.filter((post) =>
//     post.author.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   console.log("Filtered posts:", filteredPosts); // Log filtered posts

//   if (loading) {
//     return <div>Loading posts...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="flex flex-col lg:flex-row gap-8 mt-10 p-4">
//       <div className="w-full">
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ ease: "easeInOut", duration: 0.75 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {filteredPosts
//             .filter((post) => post.id) // Ensure `id` is valid
//             .map((post) => (
//               <Card
//                 key={post.id}
//                 className="flex flex-col justify-between overflow-hidden bg-transparent shadow-none border border-secondary p-2 hover:shadow-lg duration-500 transition hover:border-accent"
//               >
//                 <Image
//                   src={post.imageLink || "/default-image.jpg"} // Default image fallback
//                   alt={`Thumbnail for ${post.title}`}
//                   width={300}
//                   height={200}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <CardHeader>
//                   <CardTitle className="text-lg">{post.title}</CardTitle>
//                   <p className="text-sm text-muted-foreground">
//                     By {post.author}
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="mb-4 text-sm">
//                     {post.content.substring(0, 100)}...
//                   </p>
//                   <Link
//                     href={`/post/${post.id}`} // Updated link to match single post route
//                   >
//                     <Button
//                       variant="outline"
//                       className="w-full bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none hover:scale-110 duration-500 transition flex items-center justify-center"
//                       disabled={!post.id} // Disable if `id` is missing
//                     >
//                       Read more
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default MyBlog;


"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  imageLink: string | null;
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
        console.log("Stored token:", token);

        if (!token) {
          setError("Authentication token missing.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "http://localhost:3000/api/posts/posts/user",
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
        console.log("Fetched posts:", data);

        const postsData = data.map((post: any) => ({
          id: post._id, // MongoDB's default _id field is a string, so use _id here
          title: post.title,
          author: post.authorId?.email || "Anonymous", // Use authorId's email or fallback to "Anonymous"
          content: post.content,
          imageLink: post.imageLink || null, // Default to null if no image link exists
        }));

        setPosts(postsData);
        console.log("Processed posts data:", postsData);
      } catch (err) {
        setError("Error fetching posts.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  // Update filtering logic to match author or email (or other condition)
  const filteredPosts = posts.filter((post) =>
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Filtered posts:", filteredPosts); // Log filtered posts

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-10 p-4">
      <div className="w-full">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {" "}
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col justify-between overflow-hidden bg-transparent shadow-none border border-secondary p-2 hover:shadow-lg duration-500 transition hover:border-accent"
              >
                <Image
                  src={post.imageLink || "/default-image.jpg"} // Default image if imageLink is invalid or missing
                  alt={`Thumbnail for ${post.title}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
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
