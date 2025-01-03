"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Orbitron font (assuming it's imported elsewhere)
const orbitron = { className: "font-orbitron" };

const HeroSection = () => {
  const sectionRef = useRef(null); // Ref for the entire section
  const headingRef = useRef(null); // Ref for the heading
  const paragraphRef = useRef(null); // Ref for the paragraph

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current, // Trigger animation when this section enters the viewport
        start: "top 75%", // Start animation when top of section is 75% into the viewport
        end: "bottom 25%", // End animation when bottom of section is 25% into the viewport
        scrub: false, // Animation doesn't follow scroll (set to true if you want scrub effect)
      },
    });

    // Animate the heading (h2)
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 }, // Start: Offscreen and invisible
      {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 1.5, // Animation duration
        ease: "power2.out", // Smooth easing effect
      }
    );

    // Animate the paragraph (p) after the heading animation completes
    tl.fromTo(
      paragraphRef.current,
      { y: 30, opacity: 0 }, // Start: Slightly lower and invisible
      {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 1.2, // Slightly shorter animation
        ease: "power2.out", // Smooth easing
      },
      "-=0.5" // Overlap by 0.5 seconds with the previous animation
    );

    return () => {
      if (ScrollTrigger.getById("hero-section")) {
        ScrollTrigger.getById("hero-section").kill();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="p-8 md:p-24 text-center">
      <div className="flex flex-col items-center gap-6 max-w-[600px] leading-10">
        <h2 ref={headingRef} className={`${orbitron.className} text-xl md:text-4xl whitespace-nowrap`}>
        <span className="text-[#4FC3F7]">&lt;h1&gt;</span>
          Hi ,I'm Akshay Jayan
        <span className="text-[#4FC3F7]">&lt;/h1&gt;</span>
        </h2>
        <p ref={paragraphRef} className="text-lg md:text-2xl text-gray-400">
        <span className="text-[#4FC3F7]">&lt;p&gt;</span>I'm a front-end developer with expertise in React,
          TypeScript, and modern web technologies. I specialize in building
          responsive, dynamic applications and optimizing performance for a
          seamless user experience.<span className="text-[#4FC3F7]">&lt;/p&gt;</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
