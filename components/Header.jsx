
import Logo from './Logo'
import { CiMenuFries } from 'react-icons/ci'
import { MdArrowOutward, MdFileDonwload } from 'react-icons/md'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import NavLinks from './NavLinks'


const Header = () => {
  return (
    <heder className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className='container mx-auto'>
        {/* logo */}
        <div className='flex items-center justify-between py-6'>
          <Logo />
          {/* nav mobile */}
          <Sheet>
            <SheetTrigger className="cursor-pointer text-[30px] text-white">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20" side="left">
              <SheetHeader>
                <SheetTitle><Logo /></SheetTitle>
                <SheetDescription className="sr-only">Navigation menu</SheetDescription>
              </SheetHeader>
              <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]"/>
              <div>
                <button className='btn btn-lg btn-accent mb-16'>
                  <div className='flex items-center gap-3'>
                    <span>Let's talk</span>
                    <MdArrowOutward className="text-xl" />
                  </div>
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </heder>
  )
}

export default Header