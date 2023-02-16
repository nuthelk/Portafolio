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
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3>

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
        className='w-56 h-56 object-cover -mb-20 md:mt-0 flex-shrink-0 rounded-full md:rounded-lg md:w-64 md:h-95
        xl:w-[400px] xl:h-[500px] mt-10'
        src={urlFor(pageInfo?.profilePic).url()} alt="" />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold' >Here is a <span className='underline decoration-[#B343EF]/50'>little</span> background</h4>
            <p className='text-sm'>
                {pageInfo.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}