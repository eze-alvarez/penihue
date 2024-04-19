import Image from 'next/image';
import cabaña from '../../../public/cabana new.jpg';
import cabSmart from '../../../public/cabana smart.jpg';
import { getImageProps } from 'next/image'

export default function Heroe() {

  const common = { alt: 'Art Direction Example', sizes: '100vw' }
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 80,
    src: '/cabana new.jpg',
  })
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 650,
    height: 700,
    quality: 70,
    src: '/cabana smart.jpg',
  })

  return (
    <div className="relative w-full pt-14">
      <picture className="absolute w-full h-20">
        {/* <source media='(max-width: 1199)' srcSet={cabañaTab} /> */}
        <Image 
        src={cabaña} alt='pile y cabaña' 
        fill
        className=" object-cover h-[calc(100vh-3.5rem)] w-full" 
        priority
        sizes='(max-width: 768px) 100vw, 300px'/>
      
      </picture>

    </div>
   
  )
}
