import React from 'react'

type sectionHeader = {
    children: React.ReactNode
}

function SectionHeading({children} : sectionHeader) {
    return (
        <h2 className='text-3xl text-center mb-5 font-medium capitalize'>{children}</h2>
    )
}

export default SectionHeading