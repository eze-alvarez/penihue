import Image from "next/image"
import manosLogo from "../../public/manosBlack.png"
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { FaFacebook, FaAirbnb, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className='bg-penihue-fondo'>
        <div className="mt-12 p-8 flex flex-col sm:px-16 xl:max-w-5xl xl:flex-row xl:items-center xl:mx-auto  xl:justify-between xl:px-12">

            <section className='max-w-60 flex flex-col items-center mx-auto xl:mx-0'>
                <picture className="">
                {/* <source media='(max-width: 1199)' srcSet={cabañaTab} /> */}
                    <Image src={manosLogo} alt='logo manos Penihues' width={70} height={50} />
                </picture>

                <article className="text-center py-4 text-penihue-text">
                    <p className="italic font-semibold">Te esperamos como siempre con amigos o en familia</p>
                </article>
            </section>
            

            <section className=" mt-6 gap-8 flex flex-col sm:flex-row justify-around  xl:mt-0">
                <article >
                        <h2 className="text-penihue-side font-bold">Redes Sociales</h2>
                        
                        <div className="flex justify-around pt-4  sm:justify-start lg:text-[0.75rem]">
                            <ul>
                                <li>
                                    <a href='https://www.instagram.com/cabanas_penihue/' target="_blank" className="flex items-center gap-x-1 ">
                                        <AiOutlineInstagram size={25} className="cursor-pointer"/>
                                        <span className="hover:text-white">Instagram : cabanas_penihue</span>
                                    </a>
                                </li>

                                <li>
                                    <a href='https://www.facebook.com/profile.php?id=100055115721974' target="_blank" className="flex items-center gap-x-1 mt-2">
                                    <FaFacebook size={25} className="cursor-pointer"/>
                                    <span className="hover:text-white">Facebook :  Cabanas Penihue</span>
                                    </a>
                                </li>

                                <li>
                                    <a href='https://www.airbnb.com.ar/rooms/21802549?source_impression_id=p3_1711498488_glTf2el8ZoK9HJ6H' target="_blank" className="flex items-center gap-x-1 mt-2">
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
                                
                            </ul>
                    
                        </div>
                </article>

                <article>
                        <h2 className="text-penihue-side font-bold">Contacto</h2>
                            <div className="flex justify-around pt-4 sm:justify-start lg:text-[0.75rem]">
                                <ul>
                                    <li>
                                        <a href='https://api.whatsapp.com/send?phone=5492664732234' target="_blank" className="flex items-center gap-x-1">
                                            <FaWhatsapp size={25} className="cursor-pointer"/>
                                            <span className="hover:text-white">WhatsApp : +5492664732234</span>
                                        </a>
                                    </li>
                                    
                                    <li className="mt-2">
                                        <a href='mailto:penihue@hotmail.com.ar' target="_blank" className="flex items-center gap-x-1 ">
                                            <MdOutlineMail size={25} className="cursor-pointer"/>
                                            <span className="hover:text-white">Email : penihue@hotmail.com.ar</span>
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
