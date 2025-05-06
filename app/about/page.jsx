"use client"

import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      about
    </motion.div>
  )
}

export default About