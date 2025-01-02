"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TechList = () => {
  const component = useRef(null);

  // Hardcoded tech skills data
  const techData = {
    title: "Tech Skills",
    items: [
      { tech_name: "HTML", tech_color: "#e34f26" },          // HTML
      { tech_name: "JavaScript", tech_color: "#f7df1e" },    // JavaScript
      { tech_name: "CSS", tech_color: "#264de4" },           // CSS
      { tech_name: "React", tech_color: "#61dafb" },         // React.js
      { tech_name: "Node.js", tech_color: "#68a063" },       // Node.js
      { tech_name: "TypeScript", tech_color: "#007acc" },    // TypeScript
      { tech_name: "Next.js", tech_color: "#f7df1e" },       // Next.js
      { tech_name: "Tailwind", tech_color: "#38bdf8" },      // Tailwind CSS
      { tech_name: "Redux", tech_color: "#764abc" },         // Redux
      { tech_name: "MongoDB", tech_color: "#61dafb" },       // Mongodb
      { tech_name: "Git", tech_color: "#f34f29" },           // Git
      { tech_name: "VIte", tech_color: "#264de4" },          // Vite
      { tech_name: "Electron JS", tech_color: "#646cff" },   // Electron JS
      { tech_name: "Figma", tech_color: "#f24e1e" },         // Figma
      { tech_name: "Storybook", tech_color: "#ff4785" },     // Storybook
    ],
    
  };

  // GSAP animations with ScrollTrigger
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: component.current, // Attach ScrollTrigger to the component
          start: "top bottom", // When the component is near the viewport's top
          end: "bottom top", // End when it leaves the viewport
          scrub: true, // Smooth animation on scroll
        },
      });

      timeline.fromTo(
        ".tech-row",
        { x: (index) => (index % 2 === 0 ? 500 : -500), opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
      );
    }, component);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="wrapper overflow-hidden" ref={component}>
      {techData.items.map(({ tech_name, tech_color }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
        >
          {Array.from({ length: 11 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <span
                className="tech-item text-6xl font-extrabold uppercase tracking-tighter whitespace-nowrap"
                style={{
                  color: idx === 5 ? tech_color : "inherit", // Highlight one item per row
                }}
              >
                {tech_name}
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
