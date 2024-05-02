import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='container w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Olá, eu sou <span className='text-[#5651e5]'>Gabriel</span>
          </h1>

          <h1 className='py-2 text-gray-700 capitalize'>
            um desenvolvedor front-end
          </h1>

          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Estou focado no layout visual, interface, interação e experiência do usuário.
          </p>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href="https://linkedin.com/in/leao-gabriel" target="_blank" rel="noreferrer" aria-label='Linkedin'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>

            <a href="https://github.com/Gabriel-Leao" rel="noreferrer" target="_blank" aria-label='Github'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>

            <Link href="/#contact">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>

            <Link href="/resume">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
