import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

function ExperienceCard_NYUIT({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center spac-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] h-[550px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 2,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        viewport={{
            once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xs:h-[200px] object-cover object-center"
        src="/images/New-York-University-Logo.png"
        alt="NYU IT">

        </motion.img>
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">
                Network Researcher <br /> Big Data Instructor
            </h4>
            <p className="font-bold text-2xl mt-1">
                NYU IT
            </p>
            <div className="flex space-x-2 my-2">
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                { /* Tech Used */ }
            </div>
            <p className="uppercase py-5 text-gray-300">February 2023 - Present</p>

            <ul className="list-disc space-y-4 ml-3 text-sm text-justify">
                <li>Developing open source code for Netbox Agent in collaboration with San Diego Supercomputing.</li>
                <li>Development of network topologies and configurations for diverse features like BGP, OTN, etc.</li>
                <li>Curating and delivering Big Data tutorials for students, staff and other users of HPC clusters</li>
                <li>Developing and managing the NYU HPC website for latest Big Data resources.</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard_NYUIT