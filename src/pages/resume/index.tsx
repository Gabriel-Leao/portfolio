import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Resume = () => {
  return (
    <>
      <Head>
        <title>Gabriel Leão | Currículo</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/assets/foto-perfil.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Currículo</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Gabriel Leão da Silva</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/leao-gabriel/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/gabriel-leao'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>

        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <p className='capitalize'>front-end developer JR.</p>
        </div>

        <p>
        Olá meu nome é Gabriel Leão e se você está procurando por um programador, você veio ao lugar certo. <br /> <br />
        Toda empresa precisa de pessoas competentes e comunicativas, por isso eu tenho certeza que posso contribuir para o crescimento, aumento de produtividade e de lucro da sua instituição. Entre em contato e poderemos falar mais sobre.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Hard Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Next.JS
          </p>

          <p className='py-2'>
            <span className='font-bold'>Soft Skills</span>
            <span className='px-2'>|</span>Flexibilidade
            <span className='px-2'>|</span> Trabalho em equipe <span className='px-2'>|</span>
            Determinação <span className='px-2'>|</span>Comunicação
            <span className='px-2'>|</span>Empatia
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Experiência profissional
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Caixa Econômica Federal
            </span>
            <span className='px-2'>|</span>São Bernardo do Campo, SP
          </p>
          <p className='py-1 italic font-bold'>Estágiario, (Maio 2021 — Dezembro 2021)</p>
          <p>Atender os clientes, digitalização de documentos. <br />
            Foi a minha primeira experiência profissional e onde pude aprender muito sobre o funcionamento da organização, Hierarquia, pontualidade e também no trato com as pessoas.</p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Formação
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Instituto Proa
            </span>
            <span className='px-2'>|</span>São Paulo, SP
          </p>
          <p className='py-1 italic font-bold'>Profissionalizante, (Fevereiro 2022 — Julho 2022)</p>
          <p>Durante 6 meses foram desenvolvidas as competências técnicas e comportamentais essenciais para desenvolvedores e todos os tipos de profissionais. <br />
          Durante ele pude aprender: Comunicação assertiva, HTML, CSS, Javascript, React, Banco de Dados, Java. Essas competências foram desenvolvidas por meio de trabalhos em grupos, projetos e atividades.</p>
        </div>
      </div>
    </>
  )
}

export default Resume