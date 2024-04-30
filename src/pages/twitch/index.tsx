import Image from 'next/image'
import twitchImg from '/public/assets/images/projects/twitch.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' src={twitchImg} layout='fill' objectFit='cover' alt='/' />
        <div className='absolute top-[70%] max-w[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] p-2 z-10'>
          <h2 className='capitalize py-2'>twitch UI</h2>
          <h3 className='capitalize'>next JS / tailwind / next auth</h3>
        </div>
      </div>

      <div className='max-w[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Projeto</p>
          <h2>Overview</h2>
          <p>This appplication was built using NEXT.JS and is styled with
            Tailwind CSS. The application is hosted statically using Vercel.
            This is a mobile responsive recreation of Twitch.tv and features
            Next/Auth.js for authentication. Users may choose to be
            authenticated with either a Github account or a Google account. A
            few features to note with this project are lazy loading images using
            the Image component, built in routing, and Next/Auth Context.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                next auth
              </p>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                google auth
              </p>
              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                github Auth
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

export default Twitch