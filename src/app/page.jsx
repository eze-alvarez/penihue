import cabaña from '../../public/cabana new.jpg';
import balcon from '../../public/balcon vista.jpg'
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaCar, FaWifi,FaSwimmingPool, FaRegSnowflake } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { GiBarbecue, GiTowel } from "react-icons/gi";
import { RiHomeOfficeFill, RiComputerLine,RiFirstAidKitFill } from "react-icons/ri";
import { MdEmojiPeople } from "react-icons/md";
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import mauro from "../../public/mauro-03-24.png"
import sandra from "../../public/sandra-07-21.png"
import silvia from "../../public/silvia-01-2020.png"


import Image from 'next/image';
import mes from '@/utils/CalcularMes'

export default function Home() {
  return (
    <main className="pt-[106px]">
        
     
      <div className="relative w-full">
        <picture className="absolute -z-10 w-full">
          {/* <source media='(max-width: 1199)' srcSet={cabañaTab} /> */}
          <Image src={cabaña} alt='pile y cabaña' className=" object-cover h-[calc(100vh-106px)] w-full" />
        </picture>

      </div>

      <div className="h-[calc(100vh-106px)] flex items-center">
        <div className='bg-gradient-to-b from-stone-900/50  w-[90%] h-[75vh] text-white flex flex-col  justify-center mx-auto px-2 py-2 text-center rounded-lg sm:gap-y-10 sm:py-6 sm:w-[80%] lg:w-[70%] xl:justify-end xl:gap-24 xl:py-0 2xl:gap-10'>

          <div >
            <p className='text-7xl sm:text-9xl lg:text-7xl  lg:p-10 xl:text-9xl '>Un lugar <br />
            </p>
            <p className='text-7xl sm:text-9xl lg:text-7xl  xl:text-9xl ' >para disfrutar</p>
          </div>
          


          <p className='bg-blue_forza rounded-lg px-3 py-2 flex flex-col sm:text-4xl '>de la tranquilidad
            <span className='font-bold'> y el encanto de las cumbres</span>
          </p>
        </div>
      </div>
     

      <section className=" p-6 flex flex-col sm:px-16 xl:flex-row xl:h-auto xl:max-w-5xl xl:mx-auto xl:gap-x-10">
        <article className='py-8 '>
          <h2 className="text-penihue-side text-3xl font-bold text-center">Cabañas Peñihue</h2>
          <p className="text-penihue-text mt-8">Cómo desde hace 12 años seguimos recibiendo y agasajando a muchisimas hermosas familias para disfrutar de este maravilloso rinconcito ubicado en Carpinteria San Luis a solo 8km de Merlo y a un paso de traslasierra.Te esperamos como siempre con amigos o en familia</p>
          <br/>
          <p className="text-penihue-text">Estamos en {mes()} y el turismo esta recorriendo los centros gastronómicos, sierras , arroyos, miradares, ferias artesanales, y disfrutando de diversas aventuras como traking, escalada, puentes colgantes, cabalgatas, Tirolesa.</p>
          <br />
          <blockquote className="text-penihue-text text-center italic text-lg font-bold">Cabañas Peñihue te espera</blockquote>
        </article>
      
        <picture className=" w-full ">
          {/* <source media='(max-width: 1199)' srcSet={cabañaTab} /> */}
          <Image src={balcon} alt='balcon hacia la montaña' className="object-contain xl:h-[100%]" />
        </picture>
      </section>


      <section className='p-8 my-8 mx-auto bg-penihue-fondo sm:px-16 xl:mt-0 xl:max-w-5xl'>
        <h2 className="text-penihue-side text-3xl font-bold text-center">Capacidad máxima por cabaña</h2>
        <div className="flex justify-center pt-6">
          <MdEmojiPeople size={50}/>
          <MdEmojiPeople size={50}/>
          <MdEmojiPeople size={50}/>
          <MdEmojiPeople size={50}/>
          <MdEmojiPeople size={50}/>
        </div>
        <p className=' text-penihue-text text-center text-xl'>5 personas</p>
        

        <ul className='pt-4 flex flex-col gap-y-2 text-penihue-text'>
          <li className='flex gap-x-3'>
            < LuBedDouble size={25} className='text-black'/>
            <span>1 cama KING</span>
          </li>

          <li className='flex gap-x-3'>
            <LuBedSingle size={25} className='text-black'/>   
            <span>3 camas de una plaza</span>
          </li>
        </ul>
      </section>  


      <section className='px-8 mb-8 mx-auto sm:px-16 xl:max-w-5xl'>
        <h2 className="text-penihue-side text-3xl font-bold text-center">Qué ofrece cada cabaña?</h2>

        <article className='pt-4 flex flex-col sm:flex-row sm:justify-around'>
          <ul className='flex flex-col gap-y-2 text-penihue-text'>
            <li className='flex gap-x-3'>
              <TbToolsKitchen2 size={25} className='text-black'/>
              <span>Cocina</span>
            </li>

            <li className='flex gap-x-3'>
              <FaCar size={25} className='text-black'/>
              <span>Estacionamiento techado</span>
            </li>

            <li className='flex gap-x-3'>
              <GiBarbecue size={25} className='text-black'/>
              <span>Asador</span>
            </li>
            
            <li className='flex gap-x-3'>
              <FaWifi size={25} className='text-black'/>
              <span>Wifi de 13 Mbps</span>
            </li>

            <li className='flex gap-x-3'>
              <RiHomeOfficeFill size={25} className='text-black'/>
              <span>Zona de trabajo</span>
            </li>

            <li className='flex gap-x-3'>
              <FaSwimmingPool size={25} className='text-black'/>
              <span>Pileta COMPARTIDA</span>
            </li>
          </ul>

          <ul className='pt-2 flex flex-col gap-y-2 text-penihue-text sm:pt-0'>
            <li className='flex gap-x-3'>
              <FaRegSnowflake size={25} className='text-black'/>
              <span>Aire Acondicionado</span>
            </li>

            <li className='flex gap-x-3'>
              <FaTemperatureHalf size={25} className='text-black'/>
              <span>Calefacción</span>
            </li>

            <li className='flex gap-x-3'>
              <RiComputerLine size={25} className='text-black'/>
              <span>Television con Cable estándar</span>
            </li>

            <li className='flex gap-x-3'>
              <GiTowel size={25} className='text-black'/>
              <span>Toallas, sábanas, jabón y papel higiénico</span>
            </li>

            <li className='flex gap-x-3'>
              <RiFirstAidKitFill size={25} className='text-black'/>
              <span>Botiquín</span>
            </li>
          
          </ul>
        </article>
      </section>


      {/* testimonios */}
      
  
      <section className=" bg-penihue-fondo px-8 mx-auto xl:max-w-5xl">

        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-10 ">

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
                Experiencia de los Huéspedes
          </h2>
          <div >
            <div className="max-w-xl xl:max-w-2xl">
              

              <p className="mt-6 max-w-lg leading-relaxed  text-penihue-text xl:max-w-full">
              Bienvenido al área de opiniones donde las historias de nuestros huéspedes cobran vida. 
              <p className='mt-4'>
                Sumérgete en una colección de experiencias auténticas y opiniones sinceras de quienes han pasado tiempo en nuestras acogedoras cabañas.
              </p>
              </p>
            </div>

           
          </div>

          <div className='flex justify-end'> 
            <a
                href="#"
                className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
              >
                <span className="font-medium"> ver todas </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 rtl:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
          </div>
          







      {/* ------------- */}

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  alt=""
                  src={mauro}
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">Mauro</p>
                </div>
              </div>

              <p className="mt-4  text-penihue-text">
              Excelente lugar! Carmen y su marido excelentes personas que nos brindaron información y ayuda cuando la necesitamos. Lo recomiendo al 100%, el lugar es hermoso y muy tranquilo. la pileta un 10 , si volvemos a Merlo volveremos a alquilar aca
              </p>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                Marzo 2024
              </footer>
            </blockquote>

            {/* --------------- */}

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  alt="sandra airbnb"
                  src={sandra}
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">Sandra</p>
                </div>
              </div>

              <p className="mt-4  text-penihue-text">
              Estuvimos en la cabaña de Luis y Carmen y la pasamos genial! Muy bien atendidos, todo el tiempo atentos a nuestras necesidades. Nos dejaron pasar una noche gratis y el check out horas más tarde de lo normal para que no tengamos que apurarnos. 
              <br />
              Disfrutamos hasta lo último! La cabaña muy bien ubicada, cerca del centro de Carpinteria, un lugar muy tranquilo y hermoso! Ver las sierras al despertar, impagable. A solo 8 km de Merlo. Muchas gracias Luis y Carmen! Totalmente recomendado!
              </p>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                Julio 2021
              </footer>
            </blockquote>

            {/* ---------- */}
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  alt="silvia airbnb"
                  src={silvia}
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">Silvia</p>
                </div>
              </div>

              <p className="mt-4 text-penihue-text">
              Un lugar ideal para descansar!! Con un parque en el que uno se encuentra rodeado de la naturaleza....con una hermosa pileta que esta muy bien cuidada.
              Tanto Carmen como Luis se mostraron siempre muy amables y atentos.
              <br />
              La ubicación es perfecta se encuentra cerca d todo y al mismo tiempo reina la paz en todo el lugar. Las vacaciones en un lugar así están aseguradas!!!
              </p>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                Enero 2020
              </footer>
            </blockquote>

          </div>


        </div>
      </section>
      
      
    </main>
   
  );
}
