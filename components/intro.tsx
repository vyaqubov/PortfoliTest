"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSection } from '@/context/activeSectionObserver'
import useSectionInView from '@/lib/hook'


function Intro() {
    const {ref} = useSectionInView("Home", 0.75);
    const {setActiveSection, setTimeOfLastClick}  = useActiveSection();
    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 mx-auto scroll-mt-[100rem]'>
            <div className='flex flex-col items-center justify-center'>
                <div className='relative'>
                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'tween', duration: "0.2" }}>
                        <Image className='rounded-full h-24 w-24 border-[0.35rem] border-white shadow-xl' src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe" width="192" height="192" quality="100" priority={true} alt='Profil_image' />
                    </motion.div>
                    <motion.span className='text-4xl absolute bottom-0 right-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👍
                    </motion.span>
                </div>
                <motion.p className='mb-10 px-4 text-2xl font-medium leading-[1.5]' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                    <span className='font-bold'>Lorem, ipsum dolor sit amet.</span> I&apos;m a{" "}
                    <span className='font-bold'>Lorem, ipsum dolor sit amet.</span> I&apos;m a{" "}
                    <span className='font-bold'>Lorem, ipsum dolor sit amet.</span> I&apos;m a{" "}
                </motion.p>
                <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:sacle-105 transition' onClick={()=>{setActiveSection("Contact");setTimeOfLastClick(Date.now())}}>Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /> </Link>

                    <a href="/Vasif_Yaqubov.pdf" className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:sacle-105 transition border border-black/10 dark:bg-white/10' download={true}>Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition" /></a>

                    <a href="#" className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:sacle-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60'><BsLinkedin /></a>

                    <a href="#" className='bg-white p-[.8rem] text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:sacle-105 transition border border-black/10 text-[1.35rem] dark:bg-white/10 dark:text-white/60'><FaGithubSquare /></a>
                </motion.div>
            </div>
        </section>
    )
}

export default Intro