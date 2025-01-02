import Image from 'next/image'
import React from 'react'
import github from '@/images/github.svg';
import instagram from '@/images/instagram.svg';
import linkedin from '@/images/linkedin.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='flex flex-col items-center p-6'>
                <h1 className='text-[#4FC3F7]'>Get in touch</h1>
                <div className='flex justify-between p-4 gap-6'>
                    <a href='https://github.com/Akshay-Jayan3' title='https://github.com/Akshay-Jayan3'><Image src={github} width={24} height={24} alt='' className='hover:scale-125 transition-transform duration-300' /></a>
                    <a href='https://www.instagram.com/akshay_jayan_' title='https://www.instagram.com/akshay_jayan_'><Image src={instagram} width={24} height={24} alt='' className='hover:scale-125 transition-transform duration-300' /></a>
                    <a href='https://www.linkedin.com/in/-akshay-jayan' title='https://www.linkedin.com/in/-akshay-jayan'> <Image src={linkedin} width={24} height={24} alt='' className='hover:scale-125 transition-transform duration-300' /></a>

                </div>
                <p className='text-xs text-gray-400'>Designed and developed by Akshay Jayan</p>

            </div>
        </div>
    )
}

export default Footer