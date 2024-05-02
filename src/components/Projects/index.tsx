import rickMortyImg from '/public/assets/images/projects/rick-morty.png'
import cepImg from '/public/assets/images/projects/cep.png'
import netflixImg from '/public/assets/images/projects/netflix.jpg'
import ProjectItem from '../ProjectItem'
import { projectItem } from '../../@types'

const projectList = [
  {
    imgSrc: rickMortyImg,
    title: "Squanchy",
    subTitle: "react js",
    link: "/rick-morty"
  },
  {
    imgSrc: cepImg,
    title: "busca cep",
    subTitle: "react js",
    link: "/cep"
  },
  {
    imgSrc: netflixImg,
    title: "netflix",
    subTitle: "react js",
    link: "/netflix"
  }
]

const Projects = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-2 py-16" id="projects">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">projeto</p>
        <h2 className="py-4 capitalize">o que já fiz</h2>
        <div className="grid md:grid-cols-2 gap-8">
          { projectList.map(( item: projectItem, key: number ) => (
            <ProjectItem key={ key } imgSrc={ item.imgSrc } title={ item.title } link={ item.link } subTitle={ item.subTitle }/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
