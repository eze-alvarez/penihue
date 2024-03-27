'use client'
import React from 'react'
import logo from '../../public/manosBlack.png'
import logoFrase from '../../public/cabañas LOGO nav.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu,AiOutlineClose, AiOutlineInstagram } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { FaFacebook, FaAirbnb,  } from "react-icons/fa";
import { useState } from 'react';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () =>{
        setMenuOpen(!menuOpen)
    }

  return (
    // <nav className="bg-slate-500 flex">
    //     <Image src={logo} alt='mano' width={25} height={25}/>
    //     <h3>hola</h3>
    // </nav>
    <nav className="fixed w-full h-24 shadow-xl bg-slate-500">
        <div className='container mx-auto flex justify-between items-center h-full w-full px-8'>
            <Link href="/">
                <Image src={logoFrase} alt='mano' width={185} height={50} className="cursor-pointer"/>
            </Link>

            <div className="hidden sm:flex">
                <ul>
                    <Link href="/">
                        <li  className="ml-10 uppercase hover:border-b text-xl">home</li>
                    </Link>
                </ul>
               
                <ul>
                    <Link href="/galeria">
                        <li  className="ml-10 uppercase hover:border-b text-xl">galeria</li>
                    </Link>
                </ul>

                <ul>
                    <Link href="/contacto">
                        <li  className="ml-10 uppercase hover:border-b text-xl">contacto</li>
                    </Link>
                </ul>
            </div>

            <div
            onClick={handleNav}
            className="sm:hidden cursor-pointer pl-24"    >
                <AiOutlineMenu size={25}/>
            </div>
        </div>

        {/* aca ponemos todo lo del bars */}
        <div className={
            menuOpen
            ?"fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-pink-400 p-10 ease-in duration-500"
                :"fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500"
        }
        >
            
            <div className="flex w-full items-center justify-end">
                <div onClick={handleNav} className="cursor-pointer">
                    <AiOutlineClose size={25}/>
                </div>
            </div>
                    
            <div className="flex-col py-4">
                <ul>
                    <Link href="/">
                        <li  
                        onClick={()=>setMenuOpen(false)}
                        className="py-2 cursor-pointer">Home
                        </li>
                    </Link>

                    <Link href="/galeria">
                        <li  
                        onClick={()=>setMenuOpen(false)}
                        className="py-2 cursor-pointer">Galeria
                        </li>
                    </Link>

                    <Link href="/contacto">
                        <li  
                        onClick={()=>setMenuOpen(false)}
                        className="py-2 cursor-pointer">Contacto
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="flex justify-around pt-10 items-center mb-10">
                <ul>
                    <li>
                        <a href='https://www.instagram.com/cabanas_penihue/' target="_blank" className="flex items-center gap-x-1">
                        <AiOutlineInstagram size={25} className="cursor-pointer"/>
                        <span>cabanas_penihue</span>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.facebook.com/profile.php?id=100055115721974' target="_blank" className="flex items-center gap-x-1 mt-2">
                        <FaFacebook size={25} className="cursor-pointer"/>
                        <span>Cabanas Penihue</span>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.airbnb.com.ar/rooms/21802549?source_impression_id=p3_1711498488_glTf2el8ZoK9HJ6H' target="_blank" className="flex items-center gap-x-1 mt-2">
                        <FaAirbnb size={25} className="cursor-pointer"/>
                        <span>AirBnb</span>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.booking.com/hotel/ar/cabanas-penihue.es-ar.html' target="_blank" className="flex items-center gap-x-1 mt-2">
                        <TbBrandBooking size={25} className="cursor-pointer"/>
                        <span>Booking</span>
                        </a>
                    </li>
                    
                </ul>
               
            </div>

            <Link href="/">
                <Image src={logoFrase} alt='logo con frase ' width={205} height={75} className="cursor-pointer"/>
            </Link>
            
        </div>
    </nav>

  )

}
