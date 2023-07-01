import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
    const skills = ["/images/java-logo.jpeg", "/images/js-logo.png","/images/css.png","/images/apache_spark-ar21.png","/images/docker.png","/images/html.png","/images/kafka.png","/images/kubernetes_logo.png","/images/linux.png","/images/mongo_logo.jpg","/images/nextjs-icon.png","/images/postgres.jpg","/images/postman.png","/images/python-logo.png","/images/react.png","/images/sql.png","/images/typescript.png","/images/wireshark.png"];
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
    className="h-screen flex relative text-center flex-col md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>

        <h3 className="top-36 uppercase tracking-[3px] text-gray-500 text-sm absolute space-y-10 pb-5">Hover over a skill for currency proficiency</h3>
        <div className="space-y-10"/>
        <div className="-space-y-2 grid grid-cols-4 gap-5 pt-10">
            {skills.map((skill) => (
                <Skill data={skill} />
            ))}
        </div>
    </motion.div>
    </div>
    
  )
}

export default Skills