import Image from 'next/image'
import { list } from '../../@types'

const SkillsList = ({ ImgSrc, technology }: list) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={ImgSrc} alt="/" width='64' height='64'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='uppercase'>{ technology }</h3>
        </div>
      </div>
    </div>
  )
}

export default SkillsList
