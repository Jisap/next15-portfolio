"use client"


import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'

const projects = [
  {
    id: 1,
    category: "frontend",
    title: "LaunchWave Landing Page",
    description: "React + Tailwind landing page",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    category: "frontend",
    title: "Nextfolio Portfolio Site",
    description: "Next.js portfolio site",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"]
  },
  {
    id: 3,
    category: "fullstack",
    title: "AuthBoard Dashboard",
    description: "Mern app with authentication",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Node.jsx", "Express", "MongoDB"]
  },
  {
    id: 4,
    category: "fullstack",
    title: "ChatSync Platform",
    description: "Real-time MERN app with chat funcionality",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["MERN", "Socket.IO", "Redux"]
  },
  {
    id: 5,
    category: "uiux",
    title: "FlowMobile App Desing",
    description: "Mobile-first Figma design",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["Figma", "Adobe XD"]
  },
  {
    id: 6,
    category: "uiux",
    title: "ShopEase Dashboard Redesing",
    description: "Redesing of e-commerce dashboard",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Figma", "Framer", "Whimsical"]
  },
  {
    id: 7,
    category: "branding",
    title: "Brewhaus Brand Identity",
    description: "A bold and earthy visual identity for a mordern coffee brand",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Photoshop", "Figma"]
  },
  {
    id: 8,
    category: "branding",
    title: "LunaSkin Luxury Branding",
    description: "Elegant branding for a premium skincare product line",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Photoshop", "Figma", "Canva"]
  },
  {
    id: 9,
    category: "branding",
    title: "NovaTech Brand Kit",
    description: "Full branding kit for a tech startup including logo and brand book",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Figma", "Notion"]
  },
]



const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      Work
    </motion.div>
  )
}

export default Work