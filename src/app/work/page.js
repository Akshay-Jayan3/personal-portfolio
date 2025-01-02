import React from 'react'
import musicApp from '@/images/music-app.png';
import Image from 'next/image';

const Work = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center p-8 sm:p-16 md:p-24 gap-16'>
            <h2 className='text-3xl sm:text-4xl pb-8 text-center border-b border-zinc-500'>
                What I’ve Built
            </h2>
            <div className='flex flex-col gap-8 p-6 sm:p-8 text-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl transition-all duration-300 ease-in-out' 
                style={{ borderRadius: "36px" }}>
                <Image src={musicApp} style={{ borderRadius: "20px" }} alt='' />
                <h5 className='font-bold text-xl sm:text-2xl'>Hoot - The Music Player</h5>
                <p className='text-sm sm:text-base'>
                    Hoot, the music player completely built with Electron JS, combines sleek design with powerful functionality. With intuitive playlist creation, and an immersive audio experience, Hoot transforms your music journey into a harmonious adventure. Its user-friendly interface and smart organizational features make navigating your music library a breeze.
                </p>
            </div>
        </section>
    )
}

export default Work;
