'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { sendEmail } from '../actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section ref={ref} id='contact' className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1
    }}
    viewport={{
      once: true
    }}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className='underline' href="mailto:muhammadfikrialbarik@gmail.com">muhammadfikrialbarik@gmail.com</a> or through this form.</p>
        <form action={async (formData) => {
          const { data, error} = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success('Email sent successfully')
        }} className='flex flex-col mt-10 dark:text-black'>
          <input
          name='senderEmail' 
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' 
          type="email" 
          required 
          maxLength={500} 
          placeholder='Your email'
          />
          <textarea 
          name='message'
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' 
          required 
          maxLength={500} 
          placeholder='Your message'
          />
          <SubmitBtn/>
        </form>
    </motion.section>
  )
}
