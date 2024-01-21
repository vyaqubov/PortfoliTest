import { useActiveSection } from '@/context/activeSectionObserver';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { sectionName } from './types';

function useSectionInView(sectionName: sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, sectionName, setActiveSection]); // Include setActiveSection in the dependency array

  return { ref };
}

export default useSectionInView;
