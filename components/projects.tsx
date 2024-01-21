"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import ProjectItem from './project'
import hook from '@/lib/hook';

function Projects() {
    const {ref} = hook("Projects", 0.5);

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