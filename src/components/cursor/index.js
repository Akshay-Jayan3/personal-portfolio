// components/CustomCursor.js
'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const border = borderRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(border, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(border, { x: e.clientX, y: e.clientY, duration: 0.15 });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className= 'hidden md:block cursor' ref={cursorRef}></div>
      <div className= 'hidden md:block cursorBorder' ref={borderRef}></div>
    </>
  );
};

export default CustomCursor;
