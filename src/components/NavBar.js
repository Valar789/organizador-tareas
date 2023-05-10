import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex text-white font-semibold gap-4 justify-center p-2 bg-black'>
        <Link  href="/">Tareas Pendientes</Link>
        <Link  href="/done">Historial </Link>
    </div>
  )
}
