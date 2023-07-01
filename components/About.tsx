import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({ }: Props) {
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
        className="flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                // viewport={{
                //     once: true,
                // }}
                transition={{
                    duration: 1.2,
                }}
                src='/images/IMG_5922.png' className="-mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover w-56 h-56 md:rounded-ls md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]" width={500} height={500}
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[violet]">little</span> background.
                </h4>
                <p className="text-base text-justify">
                    I am pursuing my Master's degree in Computer Engineering at New York University, where I gained a solid foundation in programming, data structures, and machine learning. I am particularly proficient in Java, Python, SQL, JavaScript, and C, and have experience working with frameworks such as React and Spring. My coursework in Big Data and Deep Learning has provided me with a strong understanding of modern software development practices and technologies.
                    One of my notable achievements includes the implementation of a budget trip recommendation system using a range of Big Data tools, including Python, Spark, Redis, PostGres, MongoDB, and OpenAI. This project showcased my ability to work with large datasets, apply machine learning algorithms, and develop user-friendly interfaces.
                    In addition, I have successfully completed projects in image classification, pipeline implementation for RISC-V architecture, and an automated portable traffic light system. These projects not only strengthened my technical skills but also showcased my problem-solving abilities, attention to detail, and ability to work effectively both individually and as part of a team.
                </p>
            </div>
        </motion.div>
        </div>
    )
}

export default About