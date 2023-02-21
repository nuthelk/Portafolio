import { Skill } from '../typings';
import { motion } from 'framer-motion'
import { urlFor } from '../sanityx';


type Props = {
    directonLeft?: boolean;
    skill: Skill;
}

const Skill = ({directonLeft, skill}: Props) => {
  return (
    <div className='group relative flex cursor-pointer hover:scale-110 transition duration-300 ease-in-out'>
        <motion.img 
        initial={{
            x:directonLeft ? -100: 100,
            opacity: 0
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        className="h-16 w-16 object-scale-down rounded-full border border-gray-500 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition-all duration-300 ease-out"
        src={urlFor(skill.image).url()} alt="" />

        <div className='absolute opacity-0 group-hover:opacity-80 transition-all duration-300 ease-out group-hover:bg-white/60 h-16 w-16 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
            <div className='flex items-center text-center justify-center h-full'>
                <p className='text-xs md:text-xl font-bold text-black opacity-100'>{skill.progress}</p>
            </div>
        </div>

    </div>
  )
}

export default Skill