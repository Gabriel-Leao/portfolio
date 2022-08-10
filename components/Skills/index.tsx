import SkillsList from '../SkillsList'
interface list {
  src: string,
  name: string
}

const skillsList = [
  {
    src: '/../public/assets/skills/html.png',
    name: "html"
  },
  {
    src: "/../public/assets/skills/css.png",
    name: "css"
  },
  {
    src: "/../public/assets/skills/tailwind.png",
    name: "tailwind"
  },
  {
    src: "/../public/assets/skills/Typescript.png",
    name: "typescript"
  },
  {
    src: "/../public/assets/skills/react.png",
    name: "react"
  },
  {
    src: "/../public/assets/skills/nextjs.png",
    name: "next js"
  },
  {
    src: "/../public/assets/skills/node.png",
    name: "node js"
  },
  {
    src: "/../public/assets/skills/java.png",
    name: "java"
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
            <SkillsList ImgSrc={ skills.src } tecnology={ skills.name } key={ key } /> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills