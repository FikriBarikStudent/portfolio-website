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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae repudiandae vitae perspiciatis nisi cumque porro placeat itaque, quibusdam velit, ipsa ex aut, veniam at provident corporis ea totam fugiat.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos, exercitationem illum ipsum quasi laudantium aliquid soluta ipsam deserunt, beatae quod voluptates sunt facilis cum sequi accusamus, dolor aut corporis.
        </p>
    </motion.section>
  )
}
