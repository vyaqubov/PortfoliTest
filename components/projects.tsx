"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import ProjectItem from './project'
import useSectionInView from '@/lib/hook';

function Projects() {
    const {ref} = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    projectsData.map((item, index) => (
                        <React.Fragment key={index}>
                            <ProjectItem {...item} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects