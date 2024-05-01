import netflixImg from '/public/assets/images/projects/netflix.jpg'
import ProjectsPage from '../../components/ProjectsPage'

const Netflix = () => {
  const technologies = ['React', 'stitches', 'typescript', 'TMDB API']
  const desc = "Construí esse site utilizando o framework Vite, junto com a ferramenta de CSS-in-JS Stitches. Nela pude utilizar a API do The Movie Database."

  return (
    <ProjectsPage
      coverImg={netflixImg}
      title="netflix app"
      desc={desc}
      technologies={technologies}
      linkDemo="https://clone-netflix-rose.vercel.app/"
      linkCode="https://github.com/Gabriel-Leao/PROA/tree/main/React/Clone-NetflixV1"
    />
  )
}

export default Netflix
