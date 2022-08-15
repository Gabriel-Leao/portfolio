import Image from "next/image"
import Link from "next/link"
import aboutImg from "../../public/assets/about.jpg"

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">sobre</p>

          <h2 className="py-4 capitalize">quem sou eu</h2>

          <p className="py-2 text-gray-600">Eu não sou seu desenvolvedor comum</p>

          <p className="py-2 text-gray-600">
            Sou uma pessoa tranquila e introvertida que gosta muito de Livros, Video Games e Rock N Roll. Já fui estagiário na Caixa Econômica Federal, foi a minha primeira experiência profissional e onde pude aprender muito sobre o funcionamento da organização, Hierarquia, pontualidade e também no trato com as pessoas, mas hoje pretendo ser um programador Web. 
          </p>

          <p className="py-2 text-gray-600">
            Fui aluno no Instituto Proa, fiz o curso PROPROFISSÃO que durante 4 meses desenvolve as competências técnicas e comportamentais essenciais para desenvolvedores.
            Durante ele pude aprender: Comunicação assertiva, HTML, CSS, Javascript, React, Banco de Dados, Java.
            Essas competências foram desenvolvidas por meio de trabalhos em grupos, projetos e atividades.
          </p>
          
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">Veja alguns dos meus últimos projetos.</p>
          </Link>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={aboutImg} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About