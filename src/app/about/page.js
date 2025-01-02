import ExperienceAndEducation from '@/components/eduction';
import TechList from '@/components/marqee'
import ScrollingText from '@/components/typing'
import profile from '@/images/profile.jpg';
import Image from 'next/image'
import React from 'react'

const About = () => {

    return (
        <>
            <section id="about" className='p-8 md:p-24 text-center flex justify-center items-center'>
                <div className='flex flex-col items-center gap-24 leading-10 ' style={{
                    backgroundImage: 'radial-gradient(circle closest-side at 50% 30%, #142443 0%, #060C17 85%)'
                }}>
                    <Image src={profile} style={{ borderRadius: "50%" }} width={250} height={250} alt='profile-pic'
                        objectFit='contain' objectPosition='center' className='ring ring-zinc-400' />
                    <h2 className={`text-2xl md:text-4xl pb-8 border-b border-zinc-500 whitespace-nowrap`}>Get to Know Me</h2>
                    <ScrollingText text={'I am a front-end developer and tech enthusiast currently based in kochi,Kerala. I am passionate about building dynamic web applications that deliver exceptional user experiences and drive engagement. My focus is on writing clean, efficient code and crafting interfaces that not only look great but also function seamlessly.'} />
                </div>
            </section>
            <TechList />
            <ExperienceAndEducation/>
           
        </>
    )
}

export default About