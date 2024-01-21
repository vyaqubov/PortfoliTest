import { useActiveSection } from '@/context/activeSectionObserver';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import type { sectionName } from './types';

function hook(sectionName : sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, timeOfLastClick, sectionName])

  return {ref}
}

export default hook