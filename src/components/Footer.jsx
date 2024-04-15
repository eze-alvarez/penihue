import Image from "next/image"
import manosLogo from "../../public/manosBlack.png"
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { FaFacebook, FaAirbnb, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className='bg-penihue-fondo'>
        <div className="p-8 flex flex-col sm:px-16 xl:h-56 xl:max-w-5xl xl:flex-row xl:items-center xl:mx-auto  xl:justify-between xl:px-12">

            <section className='max-w-60 flex flex-col items-center mx-auto xl:mx-0'>
                <picture className="">
                {/* <source media='(max-width: 1199)' srcSet={cabañaTab} /> */}
                    <Image src={manosLogo} alt='logo manos Penihues' width={70} height={50} />
                </picture>

                <article className="text-center py-4 text-penihue-text">
                    <p className="italic font-semibold">Te esperamos como siempre con amigos o en familia</p>
                </article>
            </section>
            

            <section className=" mt-6 gap-8 flex flex-col sm:flex-row sm:justify-center xl:mt-0">
                <article >
                        <h2 className="text-penihue-side font-bold ">Redes Sociales</h2>
                        
                        <div className="flex  pt-4  text-[0.85rem] 
                       ">
                            <ul>

                                <li>
                                    <a href='https://www.instagram.com/cabanas_penihue/' target="_blank" className="gap-x-1 flex">
                                            
                                        <AiOutlineInstagram size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                        <div className="flex  pt-1">
                                            <span className=" min-w-20">Instagram :</span>
                                            <span className="hover:text-white text-sm ">cabanas_penihue</span>
                                        </div>
                                    </a>        
                                </li>

                                <li className="mt-2">
                                    <a  href='https://www.facebook.com/cabanas.penihue' target="_blank" className="gap-x-1 flex">
                                            
                                        <FaFacebook size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                        <div className="flex  pt-1">
                                            <span className=" min-w-20">Facebook :</span>
                                            <span className="hover:text-white text-sm ">Cabañas Peñihue San Luis</span>
                                        </div>
                                    </a>        
                                </li>

                                <li className="mt-2">
                                    <a href='https://www.airbnb.com.ar/rooms/21802549?source_impression_id=p3_1711498488_glTf2el8ZoK9HJ6H'  target="_blank" className="gap-x-1 flex">
                                            
                                        <FaAirbnb size={25} className="cursor-pointer text-black min-w-[1.5rem]"/>

                                        <div className="flex  pt-1">
                                            <span className=" min-w-20">AirBnb</span>
                                            <span className="hover:text-white text-sm "></span>
                                        </div>
                                    </a>        
                                </li>

                                <li className="mt-2">
                                    <a href='https://www.booking.com/hotel/ar/cabanas-penihue.es-ar.html'  target="_blank" className="gap-x-1 flex">
                                            
                                        <TbBrandBooking size={25} className="cursor-pointer text-black min-w-[1.5rem]"/>

                                        <div className="flex  pt-1">
                                            <span className=" min-w-20">Booking</span>
                                            <span className="hover:text-white text-sm "></span>
                                        </div>
                                    </a>        
                                </li>
                                
                            </ul>
                    
                        </div>
                </article>

                <article className="sm:w-1/2">
                        <h2 className="text-penihue-side font-bold">Contacto</h2>
                            <div className="flex pt-4  text-[0.85rem] ">
                                <ul>
                                 
                                    <li>
                                        <a href='https://api.whatsapp.com/send?phone=5492664732234' target="_blank" className="gap-x-1 flex">
                                            
                                            <FaWhatsapp size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                            <div className="flex  pt-1">
                                                <span className=" min-w-20">WhatsApp :</span>
                                                <span className="hover:text-white text-sm ">+5492664732234
                                                </span>
                                            </div>
                                        </a>        
                                    </li>

                                    <li className="mt-2">
                                        <a href='mailto:penihue@hotmail.com.ar' target="_blank" className="gap-x-1 flex">
                                            
                                            <MdOutlineMail size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                            <div className="flex  pt-1">
                                                <span className=" min-w-20">Email :</span>
                                                <span className="hover:text-white text-sm ">penihue@hotmail.com.ar
                                                </span>
                                            </div>
                                        </a>        
                                    </li>

                                    <li className="mt-2">
                                        <a className="gap-x-1 flex">
                                            
                                            <FaMapMarkerAlt size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                            <div className="flex  pt-1">
                                                <span className=" min-w-20">Dirección :</span>
                                                <span className="hover:text-white text-sm ">Brisa Serrana Nº 35, Carpintería, Provincia de San Luis - ARG
                                                </span>
                                            </div>
                                        </a>        
                                    </li>
                                </ul>
                            </div>
                </article>
            </section>
            


        </div>     
    </footer>
  )
}
