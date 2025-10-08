import { itemsAuthNavbar } from '@/data'
import { LinkNavbar } from '@/components/Shared'

import React from 'react'

export  function ItemsAuth() {
  return (
    <>
      {itemsAuthNavbar.map((item) => (
        <LinkNavbar key={item.id} href={item.href} name={item.name} />
      ))}
    </>
  )
}
