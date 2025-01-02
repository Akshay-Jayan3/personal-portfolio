"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
    subsets: ['latin'],
    display: 'swap',
  })

const RunningText = () => {
  const marqueeRef = useRef(null); // Reference to the marquee container

  useLayoutEffect(() => {
    // Get the width of the text container
    const marqueeWidth = marqueeRef.current.offsetWidth;
    const parentWidth = marqueeRef.current.parentNode.offsetWidth;

    // GSAP animation to scroll the text
    gsap.to(marqueeRef.current, {
      x: `-${marqueeWidth}px`, // Move left by the width of the text
      duration: 25, // Duration of the animation
      ease: "linear", // Linear scrolling
      repeat: -1, // Repeat infinitely
    });
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap relative">
      <div
        ref={marqueeRef}
        className={`${orbitron.className}`}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: "8rem",
          fontWeight: "bold",
          color: "#2c3e50",
        }}
      >
        {/* Add your scrolling text here */}
        <span >- WEB-DEVELOPMENT </span>
        <span style={{ marginLeft: "20px" }}>- UI DESIGN </span>
        <span style={{ marginLeft: "20px" }}>- FRONT-END DEVELOPER</span>
      </div>
    </div>
  );
};

export default RunningText;
