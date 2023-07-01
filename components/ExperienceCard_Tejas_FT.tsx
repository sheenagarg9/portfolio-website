import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard_Tejas_FT({}: Props) {
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
        src="/images/tejas.png"
        alt="Tejas Networks">

        </motion.img>
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">
                Engineer, R&D
            </h4>
            <p className="font-bold text-2xl mt-1">
                Tejas Networks
            </p>
            <div className="flex space-x-2 my-2">
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                { /* Tech Used */ }
            </div>
            <p className="uppercase py-5 text-gray-300">July 2020 - July 2022</p>

            <ul className="list-disc space-y-4 ml-3 text-sm text-justify">
                <li>Conceptualized and designed Full-Stack systems for Dynamic Host Configuration Protocol, Multicast Listener Discovery and Synchronous Ethernet networks for leading providers.</li>
                <li>Deploying, set up of servers through Dockers using Kafka and ActiveMQ for internal messaging and network elements..</li>
                <li>Singlehandedly accomplished implementation of infrastructure data services</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard_Tejas_FT