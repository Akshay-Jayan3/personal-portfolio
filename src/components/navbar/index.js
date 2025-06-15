"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '../icons/home-icon';
import WorkIcon from '../icons/work-icon';
import AboutIcon from '../icons/about-icon';

const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path ? "#4FC3F7" : "#fff";

    const navItems = [
        { href: '/', icon: <HomeIcon color={isActive("/")} />, label: 'Home' },
        { href: '/about', icon: <AboutIcon color={isActive("/about")} />, label: 'About' },
        { href: '/work', icon: <WorkIcon color={isActive("/work")} />, label: 'Work' },
    ];

    return (
        <div className="w-full flex justify-center items-center fixed bottom-4 z-50">
            <nav className="bottom-nav animateborder">
                <ul className="flex gap-10">
                    {navItems.map(({ href, icon, label }) => (
                        <li
                            key={href}
                            className={`relative group w-10 h-10 flex justify-center items-center hover:scale-110 transition-all duration-300 rounded-[40px] ${pathname === href ? "bg-[#133c64] border border-zinc-600" : ""
                                }`}
                        >
                            <Link href={href}>
                                {icon}
                            </Link>
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/20 text-white backdrop-blur-md text-xs font-medium py-1.5 px-3 rounded-lg shadow-md scale-0 group-hover:scale-100 transition-transform duration-200 origin-bottom z-50">
                                {label}
                            </div>

                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
