import rickMortyImg from '../../../public/assets/projects/rick-morty.png'
import cepImg from '../../../public/assets/projects/cep.png'
import netflixImg from '../../../public/assets/projects/netflix.jpg'
// import twitchImg from '../../../public/assets/projects/twitch.jpg'
import { projectItem } from '../../interfaces'
import ProjectItem from '../ProjectItem'

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
  },
  // {
  //   imgSrc: twitchImg,
  //   title: "twitch",
  //   subTitle: "react js",
  //   link: "/twitch"
  // },
]

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16" id="projects">
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