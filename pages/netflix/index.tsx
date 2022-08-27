import Image from 'next/image'
import netflixImg from '../../public/assets/projects/netflix.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' src={netflixImg} layout='fill' objectFit='cover' alt='/' />
        <div className='absolute top-[70%] max-w[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] p-2 z-10'>
          <h2 className='capitalize py-2'>netflix app</h2>
          <h3 className='capitalize'>react JS / stitches / firebase</h3>
        </div>
      </div>

      <div className='max-w[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Projeto</p>
          <h2 className='py-4'>Overview</h2>
          <p className='py-2'>Construí esse site utilizando o framework Vite, junto com a ferramenta de CSS-in-JS Stitches.
          Nela pude utilizar a API do The Movie Database.
          </p>
          
          <a href="https://clone-netflix-rose.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>

          <a href="https://github.com/Gabriel-Leao/PROA/tree/main/React/Clone-NetflixV1" target="_blank" rel="noopener noreferrer">
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                React
              </p>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                stitches
              </p>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                TMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>voltar</p>
        </Link>
      </div>
    </div>
  )
}

export default Netflix