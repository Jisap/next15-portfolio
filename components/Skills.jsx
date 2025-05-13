

import { 
  RiReactjsFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiNodejsFill
} from 'react-icons/ri';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const skills = [
  {
    name: 'React',
    icon: <RiReactjsFill />,
  },
  {
    name: 'Next.js',
    icon: <RiNextjsFill />,
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill />,
  },
  {
    name: 'HTML5',
    icon: <RiHtml5Fill />,
  },
  {
    name: 'CSS3',
    icon: <RiCss3Fill />,
  },
  {
    name: 'Node.js',
    icon: <RiNodejsFill />,
  },
]

const Skills = () => {
  return (
    <div className='h2 mb-8'>
      <h2>My <span className='text-accent'>skills</span></h2>
      <div className='flex flex-wrap gap-6 max-w-sm xl:max-w-none'>
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                  <div className='text-3xl group-hover:text-accent transition-all duration-300'>
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className='text-lg'>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </div>
    </div>
  )
}

export default Skills