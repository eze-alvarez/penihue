'use client'
import ContactForm from "./ContactForm";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="text-penihue-text body-font pt-14  mx-auto
    xl:max-w-5xl xl:min-h-[calc(100vh-17.5rem+36px)]">

        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl pt-12">
          Contacto
        </h2>

        <div className="container px-6 py-6  mx-auto sm:px-16 
        lg:flex lg:gap-12">
        

            <div className="flex flex-col lg:w-1/2">
                <article>
                    <div className="flex   text-base sm:justify-start">
                        <ul>
                                    
                            <li className="mt-2">
                                <a href='https://api.whatsapp.com/send?phone=5492664732234' target="_blank" className="gap-x-1 flex">
                                    
                                    <FaWhatsapp size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                    <div className="flex pt-1">
                                        <h4 className=" min-w-24">WhatsApp :</h4>
                                        <div className="hover:text-white text-sm  ">+5492664732234
                                        </div>
                                    </div>
                                </a>        
                            </li>

                            <li className="mt-2">
                                <a className="gap-x-1 flex">
                                    
                                    <FaMapMarkerAlt size={25} className="cursor-pointer text-black min-w-[25px]"/>

                                    <div className="flex  pt-1">
                                        <span className=" min-w-24">Dirección :</span>
                                        <span className="hover:text-white text-sm ">Brisa Serrana Nº 35, Carpintería, Provincia de San Luis - ARG
                                        </span>
                                    </div>
                                </a>        
                            </li>
                                    
                        </ul>
                    </div>
                </article>


                <div className='w-full py-6
                lg:landscape:max-w-1/2'>
              
                
                    <iframe
                        height="100%"
                        width="100%"
                        className="inset-0 h-60 sm:h-80"
                        frameBorder={0}
                        title="map"
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        referrerpolicy="no-referrer-when-downgrade"
                        loading="lazy"
                        allowFullScreen=""
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.1550746096777!2d-65.01003632458557!3d-32.415003945235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2e3673051faf9%3A0xb7ecfe089039c865!2zQ2FiYcOxYXMgUGXDsWlodWU!5e0!3m2!1ses-419!2sar!4v1712941133185!5m2!1ses-419!2sar"
                        // style={{ filter: " contrast(1.2) opacity(0.8)" }}
                    />

                </div>

            </div>



            {/* ---------------SECTOR FORMULARIO COMPLETO  */}

            <div className=" w-full   text-sm mt-4 text-penihue-text  flex flex-col
            md:ml-auto
             lg:w-1/2 ">
                <h2 className="text-penihue text-xl mb-1 font-medium title-font">
                    Escribinos tu consulta
                </h2>
                <p className="leading-relaxed mb-5 ">
                    Nuestro equipo está listo para responder tus preguntas y ayudarte en todo lo que necesites
                </p>

                <ContactForm/>

                <p className=" text-sm mt-3">
                    Estamos emocionados de recibir tu mensaje y te agradecemos sinceramente por contactarnos 
                </p>
                

            </div>


        </div>
    </section>

  )
}
