import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings';
import { urlFor } from '../sanityx';


type Props = {
    pageInfo: PageInfo;
}

export default function Hero({ pageInfo }: Props) {

    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Nuthelk Molina",
            "I'm React Developer",
            "<LovesToCode />"
        ],
        loop: true,
        delaySpeed: 2000,
    })



    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <motion.img
                className='relative rounded-full h-32 w-32 mx-auto object-cover '
                src={urlFor(pageInfo?.heroImage).url()} alt="nuthelk" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo.role}</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10 z-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#B343EF' />
                </h1>
            </div>

            <div className='pt-5 z-20'>
                <Link href="#about">
                    <button className='heroButton'>About</button>  
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button> 
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button> 
                </Link>
            </div>
        </div>
    )

}   