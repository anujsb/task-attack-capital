// "use client";

// import { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// interface Post {
//   id: string; // Ensure 'id' is unique, or use '_id' if needed
//   title: string;
//   authorId: { name: string };
//   content: string;
//   imageLink: string;
// }

// const Blog = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [posts, setPosts] = useState<Post[]>([]);

//   // Fetch posts from API when component mounts
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("https://task-attack-capital.onrender.com/api/posts/posts");
//         if (response.ok) {
//           const data = await response.json();
//           console.log("Fetched Posts:", data);
//           setPosts(data); // Set the fetched posts
//         } else {
//           console.error("Failed to fetch posts:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []); // Empty dependency array ensures this runs once on component mount

//   // Filter posts based on search term
//   const filteredPosts = posts.filter((post) =>
//     post.authorId?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   console.log("Filtered Posts:", filteredPosts); // Log filtered posts to console

//   return (
//     <div className="flex flex-col lg:flex-row gap-8 mt-10 p-4">
//       <div className="w-full lg:w-1/4">
//         <div className="sticky top-20 bg-accent p-4 rounded-2xl">
//           <div className="mb-6 flex gap-2 border border-none rounded-full p-2">
//             <Search className=" text-text mt-2" size={20} />
//             <Input
//               type="text"
//               placeholder="Search by author"
//               value={searchTerm}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                 setSearchTerm(e.target.value)
//               }
//               className="rounded-full shadow-none placeholder:text-text border-text"
//             />
//           </div>
//           <div>popular tags</div>
//         </div>
//       </div>
//       <div className="w-full lg:w-3/4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredPosts.length > 0 ? (
//             filteredPosts.map((post) => (
//               <Card
//                 key={`${post.id}-${post.title}`} // Combine ID and title (or other unique fields)
//                 className="overflow-hidden bg-transparent shadow-none border border-accent p-2 hover:shadow-sm"
//               >
//                 <Image
//                   src={post.imageLink}
//                   alt={`Thumbnail for ${post.title}`}
//                   width={300}
//                   height={200}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <CardHeader>
//                   <CardTitle className="text-lg">{post.title}</CardTitle>
//                   <p className="text-sm text-muted-foreground">
//                     By {post.authorId?.name}
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="mb-4 text-sm">
//                     {post.content.substring(0, 100)}...
//                   </p>
//                   <Link href={`/post/${post.id}`}>
//                     <Button
//                       variant="outline"
//                       className="w-full bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none"
//                     >
//                       Read more
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))
//           ) : (
//             <p>No posts found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;


"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Post {
  _id: string;  // Changed from id to _id to match MongoDB
  title: string;
  authorId: { 
    _id: string;
    name: string; 
  };
  content: string;
  imageLink: string;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://task-attack-capital.onrender.com/api/posts/posts");
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched Posts:", data);
          setPosts(data);
        } else {
          console.error("Failed to fetch posts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.authorId?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Filtered Posts:", filteredPosts);

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-10 p-4">
      <div className="w-full lg:w-1/4">
        <div className="sticky top-20 bg-accent p-4 rounded-2xl">
          <div className="mb-6 flex gap-2 border border-none rounded-full p-2">
            <Search className="text-text mt-2" size={20} />
            <Input
              type="text"
              placeholder="Search by author"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className="rounded-full shadow-none placeholder:text-text border-text"
            />
          </div>
          <div>popular tags</div>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card
                key={post._id}  // Changed from post.id to post._id
                className="overflow-hidden bg-transparent shadow-none border border-accent p-2 hover:shadow-sm"
              >
                <Image
                  src={post.imageLink}
                  alt={`Thumbnail for ${post.title}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    By {post.authorId?.name}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                    {post.content.substring(0, 100)}...
                  </p>
                  <Link href={`/post/${post._id}`}>  {/* Changed from post.id to post._id */}
                    <Button
                      variant="outline"
                      className="w-full bg-[#ffffff] hover:bg-[#1a2ffb] hover:text-white rounded-full shadow-md hover:shadow-lg font-semibold border-none"
                    >
                      Read more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No posts found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;