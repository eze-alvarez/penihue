import Image from 'next/image'
import Link from 'next/link'
import balcon from '../../public/balcon vista.jpg'

export default function NotFound() {
  return (
    <div className='pt-14'>
        <div className="relative w-full">
            <picture className="absolute -z-10 w-full">
            {/* <source media='(max-width: 1199)' srcSet={cabañaTab} /> */}
            <Image src={balcon} alt='pile y cabaña' className=" object-cover h-[calc(100vh-3.5rem)] w-full" />
            </picture>
        </div>

        
        <div className="h-[calc(100vh-3.5rem)] flex items-center">
            <div className='bg-penihue-fondo opacity-90 w-[90%]  flex flex-col  justify-center mx-auto p-8 text-center rounded-lg  gap-y-5
            sm:w-[80%]  sm:landscape:gap-y-2 
            md:landscape:gap-y-20 md:landscape:max-w-[35%]
            xl:landscape:gap-y-5  xl:landscape:p-10 
            '>

            <div className='flex flex-col  text-8xl 
            landscape:text-5xl 
            sm:text-9xl sm:landscape:text-4xl 
            md:landscape:text-9xl ' >
                <p className='text-penihue'>404<br />
                </p>
                <p className='text-2xl mt-1 font-bold 
            landscape:text-xl
            sm:text-4xl
            md:landscape:text-4xl' >¡Ups! Página no encontrada</p>
            </div>
            


            <p className='rounded-lg px-3 mb-10 flex flex-col 
            landscape:mb-4 
            sm:text-xl sm:landscape:text-base 
            md:landscape:text-xl md:landscape:mb-10 '>No te preocupes, te ayudaremos a encontrar el camino de regreso a casa.  
            </p>

            <Link href="/">
                <span className='bg-penihue text-white rounded-lg  p-3 text-lg font-bold'>Volver a inicio</span>
            </Link>
            </div>

            
      </div>
           
        
    </div>
  )
}
