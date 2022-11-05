import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paulo Duarte</title>
        <meta name="description" content="Site pessoal do Paulo Guilherme Pilotti Duarte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
         <center><img src="pgpd.png"></img></center>
         Paulo Guilherme Pilotti Duarte
        </h1>

        <p>
          Tech Writer @ <a href="https://www.azion.com"><b>Azion</b></a> |
          Colorado |
          Mamífero |
          <a href="http://www.apps.paulogpd.net"> Contribuição no App <b>Techscriptor</b></a>
        </p>

        <div className={styles.grid}>
          <a href="https://paulogpd.substack.com" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Blog no Substack, feito por mim com nenhum critério.</p>
          </a>

          <a href="https://paulogpd.notion.site/Curr-culo-6eafc66cc9cd4b89a75a1f921fd5cf57" className={styles.card}>
            <h2>Portfólio &rarr;</h2>
            <p>Um currículo completo, com portfólio do que eu fiz até hoje.</p>
          </a>

          <a
            href="https://github.com/mtgr18977"
            className={styles.card}
          >
            <h2>GitHub pessoal &rarr;</h2>
            <p>Códigos variados de cursos de Java, Python e da minha Pós.</p>
          </a>

          <a
            href="https://github.com/mtgr18977/Site/blob/main/rndl.pdf" className={styles.card}
          >
            <h2>Redes Neurais e Deep Learning &rarr;</h2>
            <p>
              Documento sobre redes neurais. Minha primeira escrita técnica.
            </p>
          </a>

          <a href="https://github.com/mtgr18977/Site/blob/main/pgpd.pdf" className={styles.card}>
            <h2>Currículo em PDF &rarr;</h2>
            <p>Um currículo mais enxuto, pronto pra imprimir ou mandar por email.</p>
          </a>

          
          <a href="public/posts/" className={styles.card}>
            <h2>Gists &rarr;</h2>
            <p>Traduções, quebras de paywall e outras coisas que não coloquei no blog.</p>
          </a>

        </div>
      </main>
    </div>
  )
}
