import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import logoImg from '/public/assets/images/foto-perfil.png'

const Navbar = () => {
  const [nav, setnav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navbg, setNavbg] = useState('#ecf0f3')
  const [navcolor, setNavcolor] = useState('#1f2937')
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === '/rick-morty' ||
      router.asPath === '/netflix' ||
      router.asPath === '/cep'
    ) {
      setNavbg('transparent')
      setNavcolor('#ecf0f3')
    } else {
      setNavbg('#ecf0f3')
      setNavcolor('#1f2937')
    }
  }, [router])

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
        setNavbg('#ecf0f3')
        setNavcolor('#1f2937')
      }
      else {
        setShadow(false)
        setNavbg('transparent')
        setNavcolor('#ecf0f3')
      }
    }

    window.addEventListener('scroll', handleShadow)
  }, [])
  

  const handleNav = () => {
    setnav(!nav)
  }

  return (
    <div style={{
      backgroundColor: navbg,
      color: navcolor
    }} className={ shadow
      ? 'fixed w-full h-20 shadow-xl z-[100]' 
      : 'fixed w-full h-20 z-[100]'}
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image src={logoImg} alt="/" width='80' height='80' className='cursor-pointer' />
        </Link>

        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href="/#home">Home</Link>
            </li>

            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href="/#about">sobre</Link>
            </li>

            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href="/#skills">Skills</Link>
            </li>

            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href="/#projects">Projetos</Link>
            </li>

            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href="/#contact">Contato</Link>
            </li>

            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href="/resume">Currículo</Link>
            </li>
          </ul>

          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div 
          className={ nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 ease-in duration-500'
            : 'fixed left-[-200%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image src={logoImg} alt="/" width={80} height={80} onClick={() => setnav(false)} />
              </Link>

              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-[#1f2937]'>
                <AiOutlineClose />
              </div>
            </div>

            <div className='border-b border-gray-400 my-4 text-[#1f2937]'>
              <p className='w-[85%] md:w-[90%] py-4'>Vamos construir algo lendário juntos</p>
            </div>
          </div>

          <div className='py-4 flex flex-col text-[#1f2937]'>
            <ul className='uppercase'>
              <Link href="/#home">
                <li onClick={() => setnav(false)} className='py-4 text-sm'>Home</li>
              </Link>

              <Link href="/#about">
                <li onClick={() => setnav(false)} className='py-4 text-sm'>Sobre</li>
              </Link>

              <Link href="/#skills">
                <li onClick={() => setnav(false)} className='py-4 text-sm'>Skills</li>
              </Link>

              <Link href="/#projects">
                <li onClick={() => setnav(false)} className='py-4 text-sm'>Projetos</li>
              </Link>

              <Link href="/#contact">
                <li onClick={() => setnav(false)} className='py-4 text-sm'>Contato</li>
              </Link>

              <Link href="/resume">
                <li onClick={() => setnav(false)} className='py-4 text-sm'>Currículo</li>
              </Link>
            </ul>

            <div className='pt-[30%]'>
              <p className='uppercase tracking-widest text-[#5651e5]'>vamos nos conectar</p>

              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a href="https://linkedin.com/in/leao-gabriel" target="_blank" rel="noreferrer" aria-label='Linkedin'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>

                <a href="https://github.com/Gabriel-Leao" rel="noreferrer" target="_blank" aria-label='Github'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>

                <Link href="/#contact">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>

                <Link href="/resume">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar