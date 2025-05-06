"use client"

import { motion } from "framer-motion"

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      Services
    </motion.div>
  )
}

export default Services