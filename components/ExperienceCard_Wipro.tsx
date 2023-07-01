import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard_Wipro({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] h-[550px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
            src="/images/wipro.jpg"
            alt="Wipro Pvt. Ltd.">
    
            </motion.img>
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">
                    Web Development Intern
                </h4>
                <p className="font-bold text-2xl mt-1">
                    Wipro Pvt. Ltd.
                </p>
                <div className="flex space-x-2 my-2">
                    <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                    <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                    <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                    <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                    <Image src="/images/apache_spark-ar21.png" width={32} height={32} alt="" className="rounded-full" />
                    { /* Tech Used */ }
                </div>
                <p className="uppercase py-5 text-gray-300">May 2018 - June 2018</p>
    
                <ul className="list-disc space-y-4 ml-3 text-sm text-justify">
                    <li>Automating Compliance Tracker for HP using jQuery and XML</li>
                    <li>Used various Dev-ops tools for this standalone project </li>
                    <li>Reduction in manual work for onboarding and offboarding of employees by 80%</li>
                </ul>
            </div>
        </article>
      )
}

export default ExperienceCard_Wipro