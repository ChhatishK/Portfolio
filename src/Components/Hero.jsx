import {HERO_CONTENT} from '../constants/index.js'
import profilePic from '../assets/ProfilePic.jpeg'
import { motion } from 'framer-motion'
import Stars from './Stars.jsx'

const Hero = () => {

    const container = (delay) => ({
        hidden : {x: -100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.5, delay: delay}
        }
    })
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36 z-99999">
        <Stars />
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                     variants={container(0)}
                     initial="hidden"
                     animate="visible"
                     className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Chhatish Kumar</motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent pb-6">Frontend Developer</motion.span>

                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 mx-w-xl font-light tracking-tighter">{HERO_CONTENT}</motion.p>

                    <motion.a variants={container(1.4)} initial="hidden" animate="visible" href="https://drive.google.com/file/d/1JQsMNpLIEF2FWAPFPqFyuSYEPJXzyP0t/view?usp=sharing"><button className='px-6 py-1 bg-white text-black rounded-lg text-2xl mt-4 hover:scale-105 transition-all duration-200'>Resume</button></motion.a>
                </div>
            </div>

            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center opacity-50 '>
                    <motion.img initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.2}} src={profilePic} width={350} alt="ProfilePic" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero