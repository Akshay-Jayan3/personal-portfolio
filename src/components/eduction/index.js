"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Education from '@/images/education.svg';
import work from '@/images/work.svg';
gsap.registerPlugin(ScrollTrigger);

const ExperienceAndEducation = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each child element within the section
            gsap.fromTo(
                sectionRef.current.children,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%", // Animation starts when section reaches 80% of viewport
                        toggleActions: "play none none reverse", // Play animation on scroll in and reverse on scroll out
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full p-8 flex flex-col lg:flex-row gap-24 mx-auto max-w-[1100px]"
        >
            <div className="w-full lg:w-1/2 flex flex-col">
                <div className="flex gap-4 py-8 border-b border-zinc-500"> <Image src={work} alt='work' />  <h5 className={`text-2xl`}>Experience</h5></div>

                <div className="flex justify-between items-center border-b border-zinc-500 py-6">
                    <div className="flex flex-col gap-4">
                        <p className="text-xl text-[#4FC3F7]">Software Engineer</p>
                        <p className="text-zinc-400 text-sm">ThinkPalm Technologies</p>
                    </div>
                    <div>
                        <p className="text-zinc-400">2022 - Present</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col">
                <div className="flex gap-4 py-8 border-b border-zinc-500"> <Image src={Education} alt='education' />  <h5 className={`text-2xl`}>Education</h5></div>

                <div className="flex justify-between items-center border-b border-zinc-500 py-6">
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-[#4FC3F7] md:whitespace-nowrap">
                            Government Engineering College, Idukki
                        </p>
                        <p className="text-zinc-400 text-sm">
                            BTech - Electronics And Communication Engineering
                        </p>
                    </div>
                    <div>
                        <p className="text-zinc-400 whitespace-nowrap">2018 - 2022</p>
                    </div>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-500 py-6">
                    <div className="flex flex-col gap-4">
                        <p className="text-lg whitespace-nowrap text-[#4FC3F7]">
                            SVRV NSS HSS, Vazhoor
                        </p>
                        <p className="text-zinc-400 text-sm">Higher Secondary</p>
                    </div>
                    <div>
                        <p className="text-zinc-400 whitespace-nowrap">2016 - 2018</p>
                    </div>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-500 py-6">
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-[#4FC3F7]">SVRV NSS HSS, Vazhoor</p>
                        <p className="text-zinc-400 text-sm">High School</p>
                    </div>
                    <div>
                        <p className="text-zinc-400">2016</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceAndEducation;
