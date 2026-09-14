import React, { useRef } from 'react'
import AnimatedHeaderSection from '../components/common/AnimatedHeaderSection'
import AnimateText from '../components/common/AnimateText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {
    const imgRef = useRef(null);
    const text = `I craft modern, responsive frontends with smooth 
                 interactions, optimized performance and clean 
                 architecture at the core.`

    const aboutText = `I am fascinated by how software works beneath the surface. From backend architecture and REST APIs to databases and frontend integration, I enjoy building reliable solutions and continuously improving my craft.

Outside the commit history:

☕ Exploring Spring Boot internals

🔍 Studying system design & clean architecture

🎧 Music and long coding nights

🛠 Building projects that challenge me

📚 Learning something new every day`


    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 90%",
                end: "bottom 20%",
                scrub: true,

            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    });


    return (
        <section id='about' className='min-h-screen bg-black rounded-b-4xl'>
            <AnimatedHeaderSection subTitle={'Code With Purpose'} title={"About"} text={text} textColor={'text-white'} withScrollTrigger={true} />

            <div className='flex flex-col  items-center justify-between gap-16 px-7 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
                <img ref={imgRef} src="images/photo.png" alt="photo" className='w-md rounded-3xl' />
                <AnimateText text={aboutText} className={'w-full'} />
            </div>


        </section>
    )
}

export default About