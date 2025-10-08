"use client"
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


import { ItemsAuth, ItemsNavbar, Logo } from '@/components/Shared'
import { BellRing, MenuIcon, Search } from 'lucide-react'

export  function NavbarMobile() {
  return (
    <div className='p-4 flex justify-between items-center'>
      <Logo />
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side='left' className='bg-black p-4'>
          <div className="flex flex-col gap-4">
            <ItemsNavbar />
          </div>
          <div className='border-[1px] border-white/70 my-5' />

          <div className='flex gap-4 items-center'>
                        <Search className='cursor-pointer'/>
                        <BellRing className='cursor-pointer'/>
                        <div className="flex gap-4 items-center">
                            {/** TODO: Add user profile */}
                            <ItemsAuth />
                        </div>
                    </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
