import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ContactImg from '../../public/assets/contact.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='uppercase tracking-widest text-[#5651e5] text-xl'>Contact</p>
        <h2 className='py-4 capitalize'>get in touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="/"/>
              </div>
              <div>
                <h2 className='py-2 capitalize'>name here</h2>
                <p className='capitalize'>front-end developer</p>
                <p className='py-4'>I am available for freelance or full-time positions. Contact me and let’s talk.</p>
              </div>
              <div>
                <p className='pt-8 uppercase'>connect with me</p>
                <div className='flex items-center justify-between py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 py-2 w-full'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="text" />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>phone number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="text" />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>e-mail</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="email" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300 focus:outline-none' rows={10}></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>send message</button>
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