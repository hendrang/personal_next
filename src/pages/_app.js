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
    </div>
  )
}

export default MyApp
