import Image from 'next/image'
import CepImg from '../../public/assets/projects/cep.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Cep = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' src={CepImg} layout='fill' objectFit='cover' alt='/' />
        <div className='absolute top-[70%] max-w[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] p-2 z-10'>
          <h2 className='capitalize py-2'>busca cep</h2>
          <h3 className='capitalize'>react JS / stitches / typescript</h3>
        </div>
      </div>

      <div className='max-w[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Projeto</p>
          <h2 className='py-4'>Overview</h2>
          <p className='py-2'>I built this app to demonstrate knowledge working in React JS and
            accessing API endpoints. This app was built using React JS and is
            hosted on Firebase. This application supports user authentication
            using firebase. Users are able to create a new account using their
            email address and can then sign in to save coins to a user specific
            list. This is made possble by creating a firestore cloud storage
            database at the time of user registration. Another feature of this
            application is dynamic routing through the &quot;React Router DOM&quot;
            package. This application was built using the Coin Gecko API.
          </p>
          <a href="http://buscador-cep-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a href="https://github.com/Gabriel-Leao/PROA/tree/main/React/Buscador-CEP" target="_blank" rel="noopener noreferrer">
            <button className='px-8 py-2 mt-4'>Code</button>
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

export default Cep