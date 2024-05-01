import ProjectsPage from '../../components/ProjectsPage'
import cepImg from '/public/assets/images/projects/cep.png'

const Cep = () => {
  const technologies = ['React', 'stitches', 'typescript']
  const desc = "Construí esse site utilizando a API dos correios, nele você pode consultar CEPS de todo o Brasil."
  return (
    <ProjectsPage
      coverImg={cepImg}
      title="busca cep"
      desc={desc}
      technologies={technologies}
      linkDemo="http://buscador-cep-nu.vercel.app/"
      linkCode="https://github.com/Gabriel-Leao/PROA/tree/main/React/Buscador-CEP"
    />
  )
}

export default Cep
