import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='block mb-2 text-xs'>
                &copy; {year} Barik. All rights reserved.
            </small>
            <p className='text-xs '>
                <span className='font-semibold'>About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend. I make this website with help from <a className='text-gray-950 underline transition-all' href="https://www.youtube.com/@ByteGrad" target='_blank'>ByteGrad</a>.
            </p>
        </footer>
    )
}
