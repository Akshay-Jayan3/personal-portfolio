// components/ScrollingText.js

"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = ({text}) => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const words = text.split(" ");
    textRef.current.innerText = ""; // Clear the text for animation

    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerText = word + " "; // Add a space after each word
      span.style.opacity = "0.3"; // Start with lower opacity
      span.style.display = "inline-block"; // Ensure they display inline
      span.style.marginRight = "10px"; // Add space between words
      textRef.current.appendChild(span);
    });

    const spans = textRef.current.children;

    gsap.to(spans, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // When the text is about to enter the viewport
        end: "bottom top", // Until the bottom of the text leaves the top
        scrub: true, // Smooth animation as you scroll
      },
      duration: 0.5,
      stagger: 0.2, // Stagger the fade-in effect for each word
      opacity: 1, // Fade in to fully visible
      color: "#fff", // Ensure the text color changes if needed
    });
  }, []);

  return (
    <div style={{ overflow: 'hidden' }} className="text-lg md:text-2xl text-center" ref={textRef}>
      {/* Words will be dynamically added here */}
    </div>
  );
};

export default ScrollingText;
