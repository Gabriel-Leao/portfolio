import Head from 'next/head'
import ResumeItem from '../../components/ResumeItem'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Resume = () => {
  const hardSkills = ['Java', 'C#', 'Node.js', 'Angular', 'Python', 'Typescript', 'Tailwind', 'Next.JS']
  const softSkills = ['Flexibilidade', 'Trabalho em equipe', 'Determinação', 'Comunicação', 'Empatia']
  return (
    <>
      <Head>
        <title>Gabriel Leão | Currículo</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
      </Head>

      <div className='container mx-auto p-2 pt-[120px]'>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-center gap-2 md:justify-between items-center flex-wrap'>
          <h2 className='text-center text-xl md:text-3xl lg:text-4xl font-bold'>Gabriel Leão da Silva</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/leao-gabriel/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={ 20 } style={ { marginRight: '1rem' } } />
            </a>
            <a
              href='https://github.com/gabriel-leao'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={ 20 } style={ { marginRight: '1rem' } } />
            </a>
          </div>
        </div>

        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <p className='capitalize'>full-stack developer JR.</p>
        </div>

        <p>
          Olá meu nome é Gabriel Leão e se você está procurando por um programador, você veio ao lugar certo. <br />
          <br />
          Sou focado no desenvolvimento full-stack, cuidando tanto do layout e interface do usuário quanto da lógica e funcionalidade do sistema. Busco criar experiências completas e satisfatórias para os usuários, combinando habilidades front-end e back-end.
        </p>

        <h5 className='text-center underline text-[18px] py-4'>
          Experiência profissional
        </h5>
        {/* Experience */ }
        <ResumeItem
          type="experience"
          location="São Paulo, SP"
          startDate="Dezembro 2022"
          endDate="Janeiro 2024"
          description="Como desenvolvedor front-end, fui responsável por criar e implementar interfaces de usuário
             interativas e visualmente atraentes para aplicações web. Meu trabalho envolveu a colaboração
             próxima com equipes de design e back-end."
          company="Catskillet"
          position="Front End Jr."
        />
        <ResumeItem
          type="experience"
          location="São Bernardo do Campo, SP"
          startDate="Maio 2021"
          endDate="Dezembro 2021"
          description="Atender os clientes, digitalização de documentos. <br />
             Foi a minha primeira experiência profissional e onde pude aprender muito sobre o funcionamento da
             organização, Hierarquia, pontualidade e também no trato com as pessoas."
          company="Caixa Econômica Federal"
          position="Estagiário"
        />

        <h5 className='text-center underline text-[18px] py-4'>
          Formação
        </h5>
        {/* Experience */ }
        <ResumeItem
          type="education"
          location="São Paulo, SP"
          startDate="Agosto 2023"
          endDate="Julho 2027"
          description="O curso de Engenharia de Software oferece uma simulação profissional intensiva,
             proporcionando aos alunos uma experiência próxima à realidade do ambiente de trabalho na área de
             desenvolvimento de software. Este curso avançado combina teoria especializada com uma ênfase
             significativa em projetos práticos, visando preparar os estudantes para desafios complexos no
             mundo real."
          institution="FIAP"
          degree="Bacharelado: Engenharia de Software"
        />

        <ResumeItem
          type="education"
          location="São Paulo, SP"
          startDate="Fevereiro 2022"
          endDate="Julho 2022"
          description="Durante 6 meses foram desenvolvidas as competências técnicas e comportamentais essenciais para
             desenvolvedores e todos os tipos de profissionais. <br />
             Durante ele pude aprender: Comunicação assertiva, HTML, CSS, Javascript, React, Banco de Dados, Java. Essas
             competências foram desenvolvidas por meio de trabalhos em grupos, projetos e atividades."
          degree="Profissionalizante"
          institution="Instituto Proa"
        />

        {/* Skills */ }
        <div className='lg:text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <div className="py-4">
            <span className='text-center block lg:inline text-[18px] p-2 font-bold'>Hard Skills:</span>
            <ul className='flex md:inline-flex gap-4 flex-wrap flex-col md:flex-row items-center'>
              {hardSkills.map((skill, index) => (
                <li key={index}>
                  {index === hardSkills.length - 1 ?
                    skill :
                    <>
                      {skill} <span className="hidden md:inline px-2">|</span>
                    </>
                  }
                </li>
              ))}
            </ul>
          </div>
          <div className="py-4">
            <span className='text-center block lg:inline text-[18px] p-2 font-bold'>Soft skills:</span>
            <ul className='flex md:inline-flex gap-4 flex-col md:flex-row items-center'>
              {softSkills.map((skill, index) => (
                <li key={ index }>
                  {index === softSkills.length - 1 ?
                    skill :
                    <>
                      { skill } <span className="hidden md:inline px-2">|</span>
                    </>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
