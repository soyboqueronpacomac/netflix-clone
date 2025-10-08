"use client"

import { cn } from '@/lib'
import { BellRing, Search } from 'lucide-react'

import React from 'react'
import { Logo, ItemsNavbar, ItemsAuth } from "@/components/Shared"
import { useScrollPosition } from '@/hooks';


export  function NavbarDesktop() {
    const scrollPosition = useScrollPosition();
    console.log(scrollPosition);
  return (
    <div className={cn(
        "z-30 fixed top-0 left-0 right-0 transition-all duration-300",
        scrollPosition > 20 ? "bg-black p-4" : "bg-transparent"
        )}>
        <div className="px-[4%] mx-auto h-full">
            <div className="flex gap-4 justify-between items-center h-full">
                <div className='flex gap-2 items-center'>
                    {/**Logo */}
                    <Logo />
                    <div className='ml-10 flex gap-4'>
                        <ItemsNavbar />
                    </div>
                    
                </div>
                    <div className='flex gap-4 items-center'>
                        <Search className='cursor-pointer'/>
                        <BellRing className='cursor-pointer'/>
                        <div className="flex gap-4 items-center">
                            {/** TODO: Add user profile */}
                            <ItemsAuth />
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}
