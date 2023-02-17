import { motion } from 'framer-motion'
import { PageInfo } from '../typings';
import { urlFor } from '../sanityx';

type Props = {
    pageInfo: PageInfo;
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='pb-28 sm:pb-0 flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-[12vh] sm:top-24 left-1/2 -translate-x-[calc(50%-10px)] sm:left-1/2 sm:-translate-x-1/2 uppercase tracking-[20px]  text-gray-500 text-2xl'>About</h3>

        <motion.img 
        initial={{
            x:-200,
            opacity: 0
        }}
        whileInView={{
            x:0,
            opacity: 1
        }}
        viewport={{once:true}}
        transition={{
            duration: 1.2
        }}
        className=' w-40 h-40 mt-32 mb-2 sm:mt-10 sm:-mb-20 md:mb-0 flex-shrink-0 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[38vw] xl:h-[65vh] xl:max-w-[500px]'
        src={urlFor(pageInfo?.profilePic).url()} alt="" />

        <div className='space-y-3 sm:space-y-10 px-0 md:px-10 overflow-y-auto'>
            <h4 className='text-2xl sm:text-4xl font-semibold' >Here is a <span className='underline decoration-[#B343EF]/50'>little</span> background</h4>
            <p className='text-base  sm:h-full sm:overflow-y-auto'>
                {pageInfo.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}