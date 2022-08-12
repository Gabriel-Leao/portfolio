import SkillsList from '../SkillsList'
import htmlImg from '../../public/assets/skills/html.png'
import cssImg from '../../public/assets/skills/css.png'
import tailwindImg from '../../public/assets/skills/tailwind.png'
import typescriptImg from '../../public/assets/skills/Typescript.png'
import reactImg from '../../public/assets/skills/react.png'
import nextjsImg from '../../public/assets/skills/nextjs.png'
import nodeImg from '../../public/assets/skills/node.png'
import javaImg from '../../public/assets/skills/java.png'
import { list } from '../../interfaces'

const skillsList = [
  {
    ImgSrc: htmlImg,
    tecnology: "html"
  },
  {
    ImgSrc: cssImg,
    tecnology: "css"
  },
  {
    ImgSrc: tailwindImg,
    tecnology: "tailwind"
  },
  {
    ImgSrc: typescriptImg,
    tecnology: "typescript"
  },
  {
    ImgSrc: reactImg,
    tecnology: "react"
  },
  {
    ImgSrc: nextjsImg,
    tecnology: "next js"
  },
  {
    ImgSrc: nodeImg,
    tecnology: "node js"
  },
  {
    ImgSrc: javaImg,
    tecnology: "java"
  },
]

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2' id='skills'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>skills</p>
        <h2 className='capitalize py-4'>what i can do</h2>
  
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          { skillsList.map(( skills: list, key: number ) => (
            <SkillsList ImgSrc={ skills.ImgSrc } tecnology={ skills.tecnology } key={ key } /> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills