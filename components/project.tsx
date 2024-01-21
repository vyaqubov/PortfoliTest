
"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ProjectProps {
    title: string,
    description: string,
    tags: string[],
    imageUrl: any
}

function ProjectItem({title, description, tags, imageUrl} : ProjectProps){
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.31 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1] , [0.8, 1]); 
    const opacityProgress = useTransform(scrollYProgress, [0, 1] , [0.6, 1]); 
    return (
        <motion.article style={{scale: scaleProgress, opacity: opacityProgress}} ref={ref} className='group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 dark:bg-white/10 dark:hover:bg-white/20'>
            <div className='py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col gap-3 sm:group-even:ml-[20rem] '>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {
                        tags.map((item,key) => <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={key}>{item}</li>)
                    }
                </ul>
            </div>
            <Image className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even-hover:translate-x-3 group-even-hover:-translate-y-3 group-even-hover:rotate-2 hidden sm:block' src={imageUrl.src} alt={title} width={300} height={200} />
        </motion.article>
    )
}

export default ProjectItem