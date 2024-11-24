import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";


const Info = () => {
  return (
    <div className="pt-4">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <Image
          // src="/attack-white.webp"
          src="/attack-black.png"
          // src="/attack.jpeg"
          alt="Company Logo"
          width={100}
          height={100}
          className="mx-auto mb-2 rounded-full"
        />
        <h1 className="text-center mb-2 text-3xl">Attack Capital</h1>
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
      </motion.div>
    </div>
  );
};

export default Info;
