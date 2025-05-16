"use client"

import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  HiOutlineMapPin,
  HiOutlineArrowLongRight,
} from "react-icons/hi2"
import {
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons"





const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div>info text</div>
            {/* form */}
            <div className="flex-1">
              <form className="flex flex-col gap-6 items-start">
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="name">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input 
                      id="firstname"
                      name="firstname"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="name">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="w-full">
                  <Label htmlFor="name">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="w-full">
                  <Label htmlFor="name">
                    I'm interested in <span className="text-accent">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger id="service" className="w-full !h-12 bgg-white/5 border-white/10 px-4">
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>

                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="webdev">Web Development</SelectItem>
                      <SelectItem value="uiux">UI/UX Design</SelectItem>
                      <SelectItem value="logo">Logo Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact