"use client";
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex w-full max-w-3xl flex-col items-center py-12 px-8 bg-white dark:bg-black rounded-lg shadow-md sm:items-start">
        <h1 className="text-4xl font-bold mb-6">About DropVault</h1>
        
        <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
          <Image
            src="/vaultimage_0.jpg"
            alt="About Image"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          DropVault is a secure, automated file-sharing platform designed to handle 
          temporary data lifecycles with built-in garbage collection.
        </p>
      </main>
    </div>
  );
};
export default About;