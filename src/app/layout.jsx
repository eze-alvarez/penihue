import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cabañas Penihue",
  description: "Sitio Web de Cabañas Penihue, podras ver las instalaciones, capacidad galeria de fotos, redes sociales y opiniones de nuestros huéspedes",
  keywords: "cabañas, vacaciones, feriado"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
