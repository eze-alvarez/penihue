import nodemailer from "nodemailer"
import { NextResponse } from "next/server";

export  async function POST(request){
    const {name, email, message} = await request.json()


    const user = process.env.USER
    const penihueEmail = process.env.PENIH
    const penihuePam = process.env.PAM
    const admin = process.env.ADMIN

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:465,
        secure: true,
        auth:{
            user: user,
            pass:process.env.PASS
        }
    })

    try{
        const mail = await transporter.sendMail({
            from: user,
            to: penihueEmail,
            replyTo: email,
            subject: `Cabanas Penihue recibio la consulta de : ${name}`,
            html: `
            <p>Nombre: ${name}</p>
            <p>Email: ${email}</p>
            <p>Mensaje: ${message}</p>
            `
        })
        const mail2 = await transporter.sendMail({
            from: user,
            to: penihuePam,
            replyTo: email,
            subject: `Cabanas Penihue recibio la consulta de : ${name}`,
            html: `
            <p>Nombre: ${name}</p>
            <p>Email: ${email}</p>
            <p>Mensaje: ${message}</p>
            `
        })
        const mail3 = await transporter.sendMail({
            from: user,
            to: admin,
            replyTo: email,
            subject: `Cabanas Penihue recibio la consulta de : ${name}`,
            html: `
            <p>Nombre: ${name}</p>
            <p>Email: ${email}</p>
            <p>Mensaje: ${message}</p>
            `
        })


        console.log('Message sent: %s', mail.messageId)
        console.log('Message sent: %s', mail2.messageId)
        console.log('Message sent: %s', mail3.messageId)

        return NextResponse.json({
            message:'success'
        })
        // return res.status(200).json({message:'success'})

    }catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Could not send the email. Your message was not sent"
        })
        // res.status(500).json({
        //     message: "Could not send the email. Your message was not sent"
        // })
    }

}