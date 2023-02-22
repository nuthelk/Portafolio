import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings';


type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center 
    '>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1

                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center '>
                    {
                        socials.map((social) => (
                            <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent' target="_blank" className='hover:scale-125 transition-all duration-300' />
                        ))
                    }
            </motion.div>
            
            
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                whileHover={{
                    scale:1.15
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer '>
                <SocialIcon url="#contactme" className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
                <Link href="#contactme"><p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p></Link>
            </motion.div>


        </header>
    )
}