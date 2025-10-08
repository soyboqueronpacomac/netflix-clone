import Link from 'next/link';
import React from 'react'
interface Props {
    href: string;
    name: string;
    
}
    

export  function LinkNavbar({ href, name}: Props) {
  return (
    <Link href={href} className='hover:text-gray-800 hover:bg-white hover:rounded-md hover:underline-offset-2 hover:p-1 transition-all duration-300'>{name}</Link>
  )
}
