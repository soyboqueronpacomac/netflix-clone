import Link from 'next/link';
import React from 'react'
interface Props {
    href: string;
    name: string;
    
}
    

export  function LinkNavbar({ href, name}: Props) {
  return (
    <Link href={href} className='hover:text-gray-300 transition-all duration-300'>{name}</Link>
  )
}
