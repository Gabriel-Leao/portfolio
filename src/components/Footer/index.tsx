import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-6 relative bottom-0">
      <p className="md:text-xl font-bold">Todos os direitos reservados &copy; { currentYear }</p>
      <div className='flex items-center justify-center gap-5 pt-4'>
        <a href="https://linkedin.com/in/leao-gabriel" target="_blank" rel="noreferrer" aria-label='Linkedin'>
          <div
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaLinkedinIn />
          </div>
        </a>

        <a href="https://github.com/Gabriel-Leao" rel="noreferrer" target="_blank" aria-label='Github'>
          <div
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaGithub />
          </div>
        </a>

        <a href="mailto:gabriel.2507@gmail.com" aria-label='e-mail'>
          <div
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail />
          </div>
        </a>

        <Link href="/resume">
          <div
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsPersonLinesFill />
          </div>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
