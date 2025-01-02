// hooks/useGsapScroll.js

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const useGsapScroll = (targetClass, animationConfig) => {
  useLayoutEffect(() => {
    gsap.utils.toArray(targetClass).forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50, scale: 0.95 }, // Initial state
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 20%",
            scrub: true,
          },
          ...animationConfig, // Optional overrides
        }
      );
    });
  }, [targetClass, animationConfig]);
};

export default useGsapScroll;
