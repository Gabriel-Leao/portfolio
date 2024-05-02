import { Html, Main, Head, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='pt-BR'>
      <Head>
        <title>Gabriel Leão da Silva</title>
        <meta name="description" content="Gabriel Leão da Silva, portfolio" />
        <meta name="author" content="Gabriel Leão da Silva" />
        <meta name="keywords" content="Gabriel Leão, Gabriel Leao, gabriel" />
        <link rel="icon" href="/assets/images/foto-perfil.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
