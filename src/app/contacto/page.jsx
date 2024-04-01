import React from 'react'

export default function Contacto() {
  return (
    <section className="text-gray-600 body-font relative pt-[106px] xl:max-w-5xl mx-auto">

        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 mt-10 sm:text-5xl">
          Contacto
        </h2>

        <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.206006848714!2d-65.00761762295194!3d-32.41363946627683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2e366d6327f05%3A0x9b4b8948b96e3ace!2sBrisa%20Serrana%2C%20Carpinter%C3%ADa%2C%20San%20Luis!5e0!3m2!1ses-419!2sar!4v1712006074943!5m2!1ses-419!2sar"
                style={{ filter: " contrast(1.2) opacity(0.8)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    DIRECCION
                </h2>
                <p className="mt-1">
                    Brisa Serrana Nº 35, Carpintería, Argentina
                </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed" href='mailto:penihue@hotmail.com.ar' target="_blank">penihue@hotmail.com.ar</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    WHATSAPP
                </h2>
                <a href='https://api.whatsapp.com/send?phone=5492664732234' target="_blank"  className="leading-relaxed">+5492664732234</a>
                </div>
            </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-0 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Escribinos tu consulta
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
                Nuestro equipo está listo para responder tus preguntas y ayudarte en todo lo que necesites
            </p>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Nombre
                </label>
                <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Mensaje
                </label>
                <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Enviar
            </button>
            <p className="text-xs text-gray-500 mt-3">
                Estamos emocionados de recibir tu mensaje y te agradecemos sinceramente por contactarnos 
            </p>
            </div>
        </div>
    </section>

  )
}
