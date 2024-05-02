import Image from "next/image"
import Link from "next/link"
import aboutImg from "/public/assets/images/about.jpg"

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 py-16" id="about">
      <div className="container m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-justify">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">sobre</p>

          <h2 className="py-4 capitalize">quem sou eu</h2>

          <p className="py-4 text-gray-600">
            Sou um programador apaixonado pela área, com experiência em desenvolvimento web.
            Sou autodidata e sempre busco aprender novas tecnologias. Em 2022, concluí um curso
            profissionalizante na área de programação oferecido pela ONG Proa, fortalecendo minhas
            habilidades e adquirindo conhecimentos práticos essenciais para o mercado.
            <br/><br/>
            Atualmente, estou cursando Engenharia de Software na FIAP. Essa experiência
            complementa minha formação, preparando-me para enfrentar desafios mais complexos na
            área de tecnologia e integrando conhecimentos teóricos com a prática adquirida durante o
            curso.
            <br/><br/>
            Tenho a flexibilidade de atuar tanto como front-end quanto back-end, buscando sempre
            expandir minha expertise e contribuir de maneira eficaz para os projetos em que me
            envolvo.
            Sou um profissional motivado e dedicado, com forte capacidade de aprendizagem e
            trabalho em equipe. Tenho certeza de que posso contribuir para o crescimento da sua
            empresa.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">Veja alguns dos meus últimos projetos.</p>
          </Link>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={aboutImg} alt="/" priority={false} />
        </div>
      </div>
    </div>
  )
}

export default About
