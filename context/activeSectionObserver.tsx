"use client"

import { sectionName } from '@/lib/types';
import React, { createContext, useState, useContext } from 'react'

interface ActiveSectionContextType {
    activeSection: sectionName,
    setActiveSection: any | React.Dispatch<React.SetStateAction<sectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

function ActiveSectionObserver({ children }: {
    children: React.ReactNode
}) {
    const [activeSection, setActiveSection] = useState<sectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export default ActiveSectionObserver

export function useActiveSection() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "Use active section in activesection provider"
        )
    }

    return context;
}