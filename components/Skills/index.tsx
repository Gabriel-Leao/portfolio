import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2' id='skills'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>skills</p>
        <h2 className='capitalize py-4'>what i can do</h2>
  
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src="/../public/assets/skills/html.png" alt="/" width='64px' height='64px'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>html</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src="/../public/assets/skills/css.png" alt="/" width='64px' height='64px'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>css</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src="/../public/assets/skills/javascript.png" alt="/" width='64px' height='64px'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>javascript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src="/../public/assets/skills/nextjs.png" alt="/" width='64px' height='64px'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>next js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src="/../public/assets/skills/node.png" alt="/" width='64px' height='64px'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>node</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src="/../public/assets/skills/react.png" alt="/" width='64px' height='64px'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>react</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src="/../public/assets/skills/java.png" alt="/" width='64px' height='64px'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>java</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src="/../public/assets/skills/tailwind.png" alt="/" width='64px' height='64px'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>tailwind</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills