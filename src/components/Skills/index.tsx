import SkillsList from '../SkillsList'
import angularImg from '/public/assets/images/skills/angular.png'
import csImg from '/public/assets/images/skills/csharp.png'
import tailwindImg from '/public/assets/images/skills/tailwind.png'
import typescriptImg from '/public/assets/images/skills/Typescript.png'
import pythonImg from '/public/assets/images/skills/python.png'
import nextjsImg from '/public/assets/images/skills/nextjs.png'
import nodeImg from '/public/assets/images/skills/node.png'
import javaImg from '/public/assets/images/skills/java.png'
import { list } from '../../@types'

const skillsList = [
  {
    ImgSrc: nextjsImg,
    technology: "next js"
  },
  {
    ImgSrc: angularImg,
    technology: "angular"
  },
  {
    ImgSrc: tailwindImg,
    technology: "tailwind"
  },
  {
    ImgSrc: typescriptImg,
    technology: "typescript"
  },
  {
    ImgSrc: nodeImg,
    technology: "node js"
  },
  {
    ImgSrc: csImg,
    technology: "C#"
  },
  {
    ImgSrc: pythonImg,
    technology: "python"
  },
  {
    ImgSrc: javaImg,
    technology: "java"
  },
]

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2' id='skills'>
      <div className='container mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>skills</p>
        <h2 className='capitalize py-4'>o que eu posso fazer</h2>
  
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          { skillsList.map(( skills: list, key: number ) => (
            <SkillsList ImgSrc={ skills.ImgSrc } technology={ skills.technology } key={ key } />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
