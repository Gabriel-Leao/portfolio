import Image from 'next/image'
import Link from 'next/link'
import { projectItem } from '../../interfaces'

const ProjectItem = ({ imgSrc, link, title, subTitle }: projectItem) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image className="rounded-xl group-hover:opacity-10" src={ imgSrc } alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="uppercase text-2xl text-[#fff] text-center tracking-wider">{ title }</h3>
        <p className="capitalize pb-4 pt-2 text-[#fff] text-center">{ subTitle }</p>
        <Link href={ link }>
          <p className="text-center py-3 rounded-lg bg-[#fff] text-gray-700 font-bold text-lg cursor-pointer min-w-[220px]">Mais Informações</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem