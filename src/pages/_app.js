import Navbar from 'components/navbar';
import Head from 'next/head';
import 'styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/hendrang_favicon.png" />
        <title>Hendra Ng</title>
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <footer>
        <section className="section">
          <div className="container">
            <hr />
            <div class="columns is-centered">
              <a href="https://www.linkedin.com/in/hendrang/" target="blank" class="fab fa-linkedin-in fa-lg"></a>
              <a href="https://github.com/hendrang" target="blank" class="fab fab fa-github fa-lg"></a>
              <a href="https://twitter.com/hendrangdev" class="fab fa-twitter fa-lg"></a>
            </div>
            <hr />
            <div class="columns is-centered">
              &#169;<em>Hendra Ng</em>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default MyApp
