import Image from 'next/image'
import React from 'react'
import cielo from '../../../public/letrero zoom.jpg'

export default function Gracias() {
  return (
    <div className="relative h-screen  w-full 
    sm:h-[calc(100vh-419px)]
    sm:landscape:h-screen lg:landscape:h-[calc(100vh-224px)]">
      <Image
        src={cielo}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        fill = {true}
        placeholder='blur'
      
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 " />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-7 pt-14  sm:px-16 ">
        <h1 className="text-4xl text-white font-bold">GRACIAS !</h1>
        <p className="text-xl text-white mt-4 text-center font-medium">Muchas gracias por tus comentarios</p>
  </div>
</div>

  )
}
