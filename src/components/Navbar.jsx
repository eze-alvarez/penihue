'use client'
import React from 'react'
import logoFrase from '../../public/cabañas LOGO.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { FaFacebook, FaAirbnb, FaWindowClose, FaBars} from "react-icons/fa";
import { useState } from 'react';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () =>{
        setMenuOpen(!menuOpen)
    }

  return (
    <nav className="fixed w-full h-14 shadow-xl bg-penihue z-30">
        <div className='container mx-auto xl:max-w-5xl  flex justify-between items-center h-full w-full px-8'>
            <Link href="/">
                <Image src={logoFrase} alt='mano' priority  className=" h-8 w-auto cursor-pointer"/>
            </Link>

            <div className="hidden text-white font-medium landscape:flex sm:flex">
                <ul className='flex gap-x-3 text-sm xl:text-xl xl:gap-x-5'>
                    <Link href="/">
                        <li  className=" uppercase hover:border-b ">home</li>
                    </Link>

                    <Link href="/galeria">
                        <li  className=" uppercase hover:border-b ">galeria</li>
                    </Link>

                    <Link href="/opiniones">
                        <li  className=" uppercase hover:border-b ">opiniones</li>
                    </Link>

                    <Link href="/contacto">
                        <li  className=" uppercase hover:border-b ">contacto</li>
                    </Link>
                </ul>
            </div>

            <div
            onClick={handleNav}
            className="sm:hidden cursor-pointer pl-24 text-white"    >
                <FaBars size={25}/>
            </div>
        </div>

        {/* aca ponemos todo lo del bars */}
        <div className={
            menuOpen
            ?"fixed left-0 top-0 z-20 w-[65%] sm:hidden h-screen bg-penihue-side p-10 ease-in duration-500"
                :"fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500"
        }
        >
            
            <div className="flex w-full items-center justify-end text-white">
                <div onClick={handleNav} className="cursor-pointer ">
                    <FaWindowClose size={25}/>
                </div>
            </div>
                    
            <div className="flex-col py-4 text-white font-bold">
                <ul>
                    <Link href="/">
                        <li  
                        onClick={()=>setMenuOpen(false)}
                        className="hover:bg-black rounded py-2 cursor-pointer">Home
                        </li>
                    </Link>

                    <Link href="/galeria">
                        <li  
                        onClick={()=>setMenuOpen(false)}
                        className="hover:bg-black rounded py-2 cursor-pointer">Galeria
                        </li>
                    </Link>

                    <Link href="/opiniones">
                        <li  
                        onClick={()=>setMenuOpen(false)}
                        className="hover:bg-black rounded py-2 cursor-pointer">Opiniones
                        </li>
                    </Link>

                    <Link href="/contacto">
                        <li  
                        onClick={()=>setMenuOpen(false)}
                        className="hover:bg-black rounded py-2 cursor-pointer">Contacto
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="flex justify-around pt-10 items-center mb-16 font-medium">
                <ul>

                    <li>
                        <a href='https://www.airbnb.com.ar/rooms/21802549?source_impression_id=p3_1711498488_glTf2el8ZoK9HJ6H' target="_blank" className="flex  items-center gap-x-1 mt-2">
                        <FaAirbnb size={25} className="cursor-pointer"/>
                        <span className="hover:text-white">AirBnb</span>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.booking.com/hotel/ar/cabanas-penihue.es-ar.html' target="_blank" className="flex items-center gap-x-1 mt-2">
                        <TbBrandBooking size={25} className="cursor-pointer"/>
                        <span className="hover:text-white">Booking</span>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/cabanas_penihue/' target="_blank" className="flex  items-center gap-x-1 mt-2">
                        <AiOutlineInstagram size={25} className="cursor-pointer"/>
                        <span className="hover:text-white">cabanas_penihue</span>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.facebook.com/cabanas.penihue' target="_blank" className="flex items-start gap-x-1 mt-2 pl-1">
                        <FaFacebook size={28} className="cursor-pointer"/>
                        <span className="hover:text-white">Cabañas Peñihue San Luis</span>
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
