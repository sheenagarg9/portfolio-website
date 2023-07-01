import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {

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
    className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">

                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 2
                        }}
                        viewport={{
                            once: true
                        }}
                        src="/images/IMG_4753.png" alt="done" />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[violet]/50">
                                    Case Study 1 of 5: UPS clone
                                </span>
                            </h4>
                            <h6 className="text-lg text-center md:text-left">
                                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                            </h6>
                        </div>
                    </div>
                
            </div>

            <div className="w-full absolute top-[30%] bg-[violet]/10 left-0 h-[500px] -skew-y-12">

            </div>
    </motion.div>
    </div>
  )
}

export default Projects