import React from 'react';
import SectionHeading from './sectionHeading';
import { fadeAnimationVariants, skillsData } from '@/lib/data';
import { animate, motion } from 'framer-motion';
import useSectionInView from '@/lib/hook';

function Skills() {
  const {ref} = useSectionInView("Skills")
  return (
    <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
          {
            skillsData.map((item, index) => {
              return (
                <motion.li variants={fadeAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={index} key={index} className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'>
                  {item}
                </motion.li>
              )
            })
          }
        </ul>
    </section>
  )
}

export default Skills