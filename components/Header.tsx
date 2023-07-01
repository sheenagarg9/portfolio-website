import React, { Component } from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

type State = {}

class Header extends Component<Props, State> {
  state = {}

  render() {
    return (
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 2,
        }}
        className="flex flex-row items-center">
            { /*Social Icons */ }
            <SocialIcon 
                url="https://www.linkedin.com/in/gargsheena" 
                fgColor="gray" 
                bgColor="transparent" 
            />

            <SocialIcon 
                url="https://www.github.com/sheenagarg9" 
                fgColor="gray" 
                bgColor="transparent" 
            />

            <SocialIcon 
                url="https://www.instagram.com/trippin_on_journeys" 
                fgColor="gray" 
                bgColor="transparent" 
            />
        </motion.div>
        
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 2,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer">
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />

            <Link href='#contact'><p className="uppercase hidden md:inline-flex tex-sm text-gray-400"><button>Let's have a chat</button></p></Link>
            </motion.div>
        
        </header>
    )
  }
}

export default Header