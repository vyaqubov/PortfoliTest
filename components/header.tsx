"use client"
import { ActiveSectionContext, useActiveSection } from '@/context/activeSectionObserver'
import { links } from '@/lib/data'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useContext } from 'react'

interface headerLink {
    name: string,
    hash: string
}


function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

    return (
        <header className='z-[999] relative flex justify-center'>
            <motion.div
                className='fixed top-0 h-[6.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <nav className='h-[100%] flex justify-center items-center sm:py-5'>
                    <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                        {
                            links.map((item: headerLink) => (
                                <motion.li className='relative' key={item.hash}>
                                    <Link className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                        {
                                            "text-gray-950 dark:text-white": activeSection === item.name
                                        }
                                    )} href={item.hash}
                                        onClick={() => { setActiveSection(item.name),setTimeOfLastClick(Date.now()) }}
                                    >
                                        {item.name}
                                        {
                                            item.name === activeSection && (
                                                <motion.span className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800' layoutId="activeSection" transition={{ type: "spring", stiffness: 380, damping: 30 }}></motion.span>
                                            )
                                        }
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </ul>
                </nav>
            </motion.div>
        </header>
    )
}

export default Header