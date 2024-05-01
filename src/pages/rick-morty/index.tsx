import rickMortyImg from '/public/assets/images/projects/rick-morty.png'
import ProjectsPage from '../../components/ProjectsPage'

const RickMorty = () => {
  const technologies = ['React', 'tailwind', 'typescript', 'bootstrap', 'Rick and Morty API', 'next-JS']
  const desc = "Este site foi criado utilizando a API do Rick and Morty. <br />\ Na página inicial você pode ver todos os personagens disponibilizados em cards, com algumas páginas, dá para procurar por um personagem específico através da barra de pesquisa ou utilizar alguns dos filtros. Ao clicar no card é aberta uma página com mais informações sobre o personagem. Além disso tem uma página com todos os episódios, nela você pode ver o nome em inglês, a data do lançamento, e os personagens do episódio. Na página de localização podemos ver a localização, a dimensão e o tipo dela, além disso podemos ver todos os personagens que vivem nesta localização."

  return (
    <ProjectsPage
      coverImg={rickMortyImg}
      title="Squanchy!"
      desc={desc}
      technologies={technologies}
      linkDemo="https://squanchy-eta.vercel.app/"
      linkCode="https://github.com/Gabriel-Leao/Squanchy"
    />
  )
}

export default RickMorty
