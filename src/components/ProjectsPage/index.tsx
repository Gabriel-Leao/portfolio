import { RiRadioButtonFill } from 'react-icons/ri'
import { projectPageProps } from '../../interfaces'
import Image from 'next/image'
import Link from 'next/link'

const ProjectsPage = ({ coverImg, title, desc, technologies, linkDemo, linkCode }: projectPageProps) => {
  return (
    <div className='w-full'>
      <div className='h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' src={coverImg} layout='fill' objectFit='cover' alt='/' />
        <div
          className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] p-2 z-10'>
          <h2 className='capitalize py-2'>{title}</h2>
          <h3 className='capitalize'>
            { technologies.map((tech, index) => (
              index === technologies.length - 1 ? tech : tech + ' / '
            ))}
          </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 lg:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Projeto</p>
          <h2 className='py-4'>Overview</h2>
          <p className='py-2' dangerouslySetInnerHTML={{ __html: desc }}></p>
          <a href={linkDemo} target='_blank' rel='noopener noreferrer'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>

          <a href={linkCode} target='_blank' rel='noopener noreferrer'>
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>

        <div className='col-span-4 md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>technologies</p>
            <div className='grid'>
              {technologies.map((tech) => (
                <p key={tech} className='text-gray-600 py-2 flex items-center capitalize'>
                  <RiRadioButtonFill className='pr-1' />
                  {tech}
                </p>
              ))}
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

export default ProjectsPage
