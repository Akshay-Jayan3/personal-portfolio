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
                <div className="w-full flex gap-4 mt-4 items-center justify-between flex-wrap">
                    <a
                        href="https://jayanakshay.gumroad.com/l/isjsu"
                        target="_blank"
                        className="w-full md:w-fit text-center px-4 py-2 bg-[#4fc3f7] text-black font-semibold rounded-lg shadow hover:bg-[#36a9e1] transition whitespace-nowrap"
                    >
                        Download via Gumroad
                    </a>
                    <a
                        href="https://github.com/Akshay-Jayan3/Hoot"
                        target="_blank"
                        className="w-full md:w-fit text-center px-4 py-2 border border-white text-white rounded-lg hover:bg-white/10 transition whitespace-nowrap"
                    >
                        View on GitHub
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Work;
