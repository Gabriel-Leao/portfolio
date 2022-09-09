import Image from 'next/image'
import rickMortyImg from '../../public/assets/projects/rick-morty.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const RickMorty = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' src={rickMortyImg} layout='fill' objectFit='cover' alt='/' />
        <div className='absolute top-[70%] max-w[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] p-2 z-10'>
          <h2 className='capitalize py-2'>Squanchy!</h2>
          <h3 className='capitalize'>react JS / tailwind / bootstrap</h3>
        </div>
      </div>

      <div className='max-w[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Projeto</p>
          <h2>Overview</h2>
          <p>
            Este site foi criado utilizando a API do Rick and Morty. <br />
            Na página inicial você pode ver todos os personagens disponibilizados em cards, com algumas páginas, dá para procurar por um personagem específico através da barra de pesquisa ou utilizar alguns dos filtros. Ao clicar no card é aberta uma página com mais informações sobre o personagem. Além disso tem uma página com todos os episódios, nela você pode ver o nome em inglês, a data do lançamento, e os personagens do episódio. Na página de localização podemos ver a localização, a dimensão e o tipo dela, além disso podemos ver todos os personagens que vivem nesta localização.
          </p>
          <a  href='https://squanchy-eta.vercel.app/' target='_blank' rel='noopener noreferrer'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>

          <a href='https://github.com/Gabriel-Leao/Squanchy' target='_blank' rel='noopener noreferrer'>
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
                tailwind
              </p>

              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                typescript
              </p>

              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                bootstrap
              </p>

              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                Rick and Morty API
              </p>

              <p className='text-gray-600 py-2 flex items-center capitalize'>
                <RiRadioButtonFill className='pr-1'/>
                next-JS
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

export default RickMorty