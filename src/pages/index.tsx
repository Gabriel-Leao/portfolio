import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gabriel Leão da Silva</title>
        <meta name="description" content="Gabriel Leão da Silva, portfolio" />
        <meta name="author" content="Gabriel Leão da Silva" />
        <meta name="keywords" content="Gabriel Leão, Gabriel Leao, gabriel" />
        <link rel="icon" href="/assets/foto-perfil.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home