import Image from 'next/image'

import parrilla from '../../../public/parrilla.jpg'
import toalla from '../../../public/toalla.jpg'
import pb from '../../../public/pb.jpg'
import primerPiso from '../../../public/primer piso.jpg'
import primerPisoLat from '../../../public/primer piso lateral.jpg'
import balcon from '../../../public/balcon vista.jpg'
import interiorBalcon from '../../../public/vista primer piso.jpg'
import pile from '../../../public/pile.jpg'
import rejaPile from '../../../public/reja pile.jpg'
import piscu from '../../../public/piscuyaco.jpg'
import cartel from '../../../public/cartel merlo.jpg'
import cascada from '../../../public/agua.jpg'
import filo from '../../../public/filo.jpg'
import aventura from '../../../public/aventura.jpg'
import comercio from '../../../public/comercio.jpg'
import filo2 from '../../../public/filo2.jpg'
import sierra from '../../../public/sierras.jpg'



export default function Galeria() {
  return (
    <div className='pt-14 xl:max-w-5xl mx-auto'>

        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mt-7 sm:text-5xl">
          Galeria
        </h2>

        <div className="p-5 sm:p-8">
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <Image alt="parrilla" className="rounded" src={parrilla} />
            <Image alt="toalla" className="rounded" src={toalla} />
            <Image alt="pb" className="rounded" src={pb} />
            <Image alt="primer piso" className="rounded" src={primerPiso} />
            <Image alt="primer piso lateral" className="rounded" src={primerPisoLat} />
            <Image alt="balcon" className="rounded" src={balcon} />
            <Image alt="interior vista balcon" className="rounded" src={interiorBalcon} />
            <Image alt="pile" className="rounded" src={pile} />
            <Image alt="reja de pile" className="rounded" src={rejaPile} />
            <Image alt="piscuyaco" className="rounded" src={piscu} />
            <Image alt="cartel" className="rounded" src={cartel} />
            <Image alt="cascada" className="rounded" src={cascada} />
            <Image alt="filo" className="rounded" src={filo} />
            <Image alt="aventura" className="rounded" src={aventura} />
            <Image alt="comercio" className="rounded" src={comercio} />
            <Image alt="filo segunda vista" className="rounded" src={filo2} />
            <Image alt="sierra" className="rounded" src={sierra} />
            
            </div>
        </div>
  {/*credit by Surjith S M */}
</div>

  )
}
