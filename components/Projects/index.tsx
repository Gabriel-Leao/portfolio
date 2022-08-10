import ProjectItem from './ProjectItem'

import propertyImg from '../../public/assets/projects/property.jpg'
import cryptoImg from '../../public/assets/projects/crypto.jpg'
import netflixImg from '../../public/assets/projects/netflix.jpg'
import twitchImg from '../../public/assets/projects/property.jpg'
import { StaticImageData } from 'next/image'

interface projectItem {
  link: string,
  title: string,
  subTitle: string,
  img: StaticImageData
}

const projectList = [
  {
    img: propertyImg,
    title: "property finder",
    subTitle: "react js",
    link: "/"
  },
  {
    img: cryptoImg,
    title: "crypto app",
    subTitle: "react js",
    link: "/"
  },
  {
    img: netflixImg,
    title: "netflix",
    subTitle: "react js",
    link: "/"
  },
  {
    img: twitchImg,
    title: "twitch",
    subTitle: "react js",
    link: "/"
  },
]

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16" id="projects">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">projects</p>
        <h2 className="py-4 capitalize">what i’ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          { projectList.map(( item: projectItem, key: number ) => (
            <ProjectItem key={ key } imgSrc={ item.img } title={ item.title } link={ item.link } subTitle={ item.subTitle }/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects