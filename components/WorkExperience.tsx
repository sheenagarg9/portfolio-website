import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard_NYUIT from './ExperienceCard_NYUIT'
import ExperienceCard_Tejas_FT from './ExperienceCard_Tejas_FT'
import ExperienceCard_Tejas_In from './ExperienceCard_Tejas_In'
import ExperienceCard_Wipro from './ExperienceCard_Wipro'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <div>
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
      Work Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-5 snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[violet]/80">
        <ExperienceCard_NYUIT />
        <ExperienceCard_Tejas_FT />
        <ExperienceCard_Tejas_In />
        <ExperienceCard_Wipro />
      </div>
    </motion.div>
    </div>
  )
}

export default WorkExperience