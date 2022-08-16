import Image from 'next/image'
import Link from 'next/link'

import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactImg from '../../public/assets/contact.jpg'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='uppercase tracking-widest text-[#5651e5] text-xl'>Contato</p>
        <h2 className='py-4 capitalize'>entrar em contato</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="/"/>
              </div>

              <div>
                <h2 className='py-2 capitalize'>Gabriel leão</h2>
                <p className='capitalize'>desenvolvedor front-end</p>
                <p className='py-4'>Estou disponível para PJ ou CLT. Entre em contato e vamos conversar.</p>
              </div>

              <div>
                <p className='pt-8 uppercase'>conecte-se comigo</p>

                <div className='flex items-center justify-between py-4'>
                  <a href="https://linkedin.com/in/leao-gabriel" target="_blank" rel="noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>

                  <a href="https://github.com/Gabriel-Leao" rel="noreferrer" target="_blank">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <a href="mailto:gabriel.2507@gmail.com">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </a>

                  <Link href="/Resume">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form action='https://getform.io/f/6b9a7436-40d0-4df5-9e8b-33d63f60c48a' method='POST'>
                <div className='grid md:grid-cols-2 gap-4 py-2 w-full'>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>nome</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="text" autoComplete='off' name='nome'/>
                  </div>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>número de telefone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="text" autoComplete='off' name='númeroTelefone'/>
                  </div>
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>e-mail</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="email" autoComplete='off' name='email'/>
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>assunto</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="text" autoComplete='off' name='assunto'/>
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>messagem</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300 focus:outline-none' rows={10} name='mensagem'></textarea>
                </div>

                <button className='w-full p-4 text-gray-100 mt-4'>enviar</button>
              </form>
            </div>
          </div>
        </div>

        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact