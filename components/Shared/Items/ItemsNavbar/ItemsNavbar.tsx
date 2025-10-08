import { itemsNavbar } from '@/data'

import React from 'react'
import { LinkNavbar } from '@/components/Shared'

export  function ItemsNavbar() {
  return (
    <>
      {itemsNavbar.map((item) => (
        <LinkNavbar key={item.id} href={item.href} name={item.name} />
      ))}
    </>
  )
}
