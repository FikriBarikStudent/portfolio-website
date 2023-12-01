"use client"

import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
    ref={ref} 
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id='about'>
        <SectionHeading>
            About me
        </SectionHeading>
        <p className='mb-3'>
            I&apos;m a <span className='font-medium'>mathematics</span> fresh graduate from <span className='font-medium'>Gadjah Mada University</span>. After graduating with a degree in <span className='font-medium'>Mathematics</span>, I decided to purse my passion for programming. To pursue my passion, I enrolled in a coding and learned{' '} <span className='font-medium'>back-end development</span> and {' '} <span className='font-medium'>cloud computing</span>. The thing that I <span className='underline'>love</span> so much about programming is the problem-solving part. It feels really good when I finally found a solution to a problem. My core stack is <span className='font-medium'>Node.js, Express.js, MySQL</span>. I&apos;m also familiar with TypeScript and MongoDB. I&apos;m open to a new challenge and eager to learn new technologies. I am currently looking for a{' '} <span className='font-medium'>full-time position</span> as a software developer.
        </p>
        <p>
          <span className="italic">When I&apos;m not doing coding</span>, I enjoy playing
          video games, watching movies, and writing with my fountain pen. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am currently
          learning{" "}
          <span className="font-medium">spanish</span>.
        </p>
    </motion.section>
  )
}
