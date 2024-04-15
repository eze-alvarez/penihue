'use client'
import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value)
        };

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(response.ok){
            console.log("Message sent succesefully")
            setLoading(false)
            event.target.name.value = ''
            event.target.email.value = ''
            event.target.message.value = ''
        }
        if(!response.ok){
            console.log("Error sendind message")
            setLoading(false)
        }

      }
  return (
    <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Nombre
            </label>

            <input
            required
            placeholder="Escribinos tu nombre acá .."
            type="text"
            autoComplete="off"
            id="name"
            name="name"
            minLength={3}
            maxLength={50}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        </div>
        <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
            </label>
            <input
            required
            placeholder="ejemplo@mail.com"
            type="email"
            autoComplete="off"
            id="email"
            name="email"
            minLength={5}
            maxLength={50}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        </div>

        <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Mensaje
            </label>
            <textarea
            required
            placeholder="Dejanos tu mensaje .."
            id="message"
            name="message"
            rows={4}
            minLength={10}
            maxLength={500}

            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
            />
        </div>
        <button 
        type="submit"
        disabled={loading}
        className="text-white bg-indigo-500 border-0 py-2 px-6 
        disabled:bg-gray-400 disabled:text-gray-100
        focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
            Enviar
        </button>
    </form>
  )
}
