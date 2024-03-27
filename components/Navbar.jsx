import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from '../public/manosBlack.png'

export default function Navbar() {
  return (
    <nav className='fixed w-full h-24 shadow-xl bg-white'>
        <div className="flex">
            <Link href='/'>
                <img
                    src={Logo}
                    alt='Logo penihue'
                    
                    className='cursor-pointer'
                    
                />
            </Link>

            <div>                <Link href='/'
                    className='ml-10 uppercase hover:border-b text-xl'
                    >
                        Home
                    </Link>

                    <Link href='/Servicios'
                    className='ml-10 uppercase hover:border-b text-xl'
                    >
                        Servicios
                    </Link>

                    <Link href='/Galeria'
                    className='ml-10 uppercase hover:border-b text-xl'
                    >
                        Galeria
                    </Link>
            
            </div>

        </div>
    </nav>
  )
}
