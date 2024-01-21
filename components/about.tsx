"use client"
import React, { useEffect } from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSection } from '@/context/activeSectionObserver'
import hook from '@/lib/hook'

function About() {
  const {ref} = hook("About")

  return (
    <motion.section ref={ref} id='about' className='mb-28 max-w-[45rem] leading-8 text-center sm:mb-40 scroll-mt-28' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea exercitationem nostrum pariatur ex accusamus recusandae quae totam consequatur deleniti cupiditate repellendus modi doloribus, doloremque eum, architecto beatae tenetur earum enim.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, incidunt quibusdam expedita itaque suscipit temporibus. Culpa distinctio praesentium illum non esse repellendus accusantium molestiae neque, nihil fuga ipsa nostrum laudantium.</p>
    </motion.section>
  )
}

export default About