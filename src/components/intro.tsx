"use client";

import Image from "next/image";
import React from 'react';
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className='flex items-center justify-center'>
            <div className="relative">
              <motion.div 
              initial={{ opacity: 0, scale: 1}}
              animate={{ opacity: 1, scale: 1}}
              transition={{ 
                type: "tween", 
                duration: 0.2,
              }}
              >
                <Image 
                src='/photoProfile.jpg' 
                alt="Barik Photo" 
                width='192' 
                height='192' 
                quality='95'
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
              </motion.div>
                
              <motion.span className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0}}
              animate={{ opacity: 1, scale: 1}}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>👋</motion.span>
            </div>
        </div>

        <p>
          <span className="font-bold">Hello, I&apos;m Barik.</span> I&apos;m a{" "} 
          <span className="font-bold">Back End Developer</span> and{" "}  
          <span className="font-bold">Cloud Engineer</span>. I enjoy building an <span className="italic">websites & apps</span>, right now I'm focusing on{" "}<span className="underline">NodeJS & GCP</span>.  
        </p>
    </section>
  )
}
