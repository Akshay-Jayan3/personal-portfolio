// components/SmoothScroll.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const SmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('section');
    const totalHeight = [...sections].reduce((total, section) => total + section.offsetHeight, 0);

    gsap.to(sections, {
      y: () => {
        return `-${totalHeight}px`;
      },
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: `+=${totalHeight}`,
        scrub: true,
        pin: true,
        markers: true, // Remove this in production
      },
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return null; // No rendering required for this component
};

export default SmoothScroll;
