"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'// Import useRouter hook
import Image from 'next/image';
import HomeIcon from '../icons/home-icon';
import WorkIcon from '../icons/work-icon';
import AboutIcon from '../icons/about-icon';

const Navbar = () => {
    const pathname = usePathname()// Initialize useRouter hook
    const isActive = (path) => pathname === path ? "#4FC3F7" : "#fff";

    return (
        <div className="w-full flex justify-center items-center fixed bottom-4 z-50">
            <nav className="bottom-nav animateborder">
                <ul className="flex gap-10">
                    <li className={`w-10 h-10 flex justify-center items-center hover:scale-110 transition-all duration-300 rounded-[40px] ${pathname === "/" && "bg-[#2c3e50] border border-zinc-600"}`}>
                        <Link href="/" >
                         <HomeIcon color={isActive("/")} />
                        </Link>
                    </li>
                    <li className={`w-10 h-10 flex justify-center items-center hover:scale-110 transition-all duration-300 rounded-[40px] ${pathname === "/about" && "bg-[#2c3e50] border border-zinc-600"}`}>
                        <Link href="/about">
                            <AboutIcon color={isActive("/about")}/>
                        </Link>
                    </li>
                    <li className={`w-10 h-10 flex justify-center items-center hover:scale-110 transition-all duration-300 rounded-[40px] ${pathname === "/work" && "bg-[#2c3e50] border border-zinc-600"}`}>
                        <Link href="/work">
                            <WorkIcon color={isActive("/work")}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
