import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

const Info = () => {
  return (
    <div className="pt-4">
      <div
      // initial={{ y: 0, opacity: 0 }}
      // animate={{ y: 20, opacity: 1 }}
      // transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <Image
          // src="/attack-white.webp"
          src="/Attack-black.png"
          // src="/attack.jpeg"
          alt="Company Logo"
          width={100}
          height={100}
          className="mx-auto mb-2 rounded-full"
        />
        <h1 className="text-4xl text-center font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Attack Capital
        </h1>
        <p className="text-center text-neutral-600">
          Blog project by anuj bhuyar
        </p>
        <div className="flex gap-2 mt-4 items-center justify-center">
          <Link href="https://github.com/anujsb">
            <Github className="text-neutral-600" />
          </Link>
          <Link href="https://www.linkedin.com/in/anujbhuyar/">
            <Linkedin className="text-neutral-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;


