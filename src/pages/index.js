import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/Home.module.css';

const Index = (props) => {
  return (
    <section className="section">
      <div className="container">
        <h4 className="has-text-weight-bold is-italic is-family-primary">{props.quote}</h4>
        <hr />
      </div>
      <div className="container">
        <div className="content is-family-primary">
          <p>Let me start by introducing myself. I am Hendra, a new dad/husband and software developer at Charles Schwab, in that order.</p>
          <p>My interest in web technology probably started around my high school years when my good friend, Rinaldo, introduced me to it. I launched my first personal awesome site using Yahoo website builder (52k dialup modem... oh yeah). It's a cool site with fireworks, counters, and background song! I was amazed by how fast and easy I could share information to my friends and the world. Technology does make our lives easier!</p>
          <p>With my current personal site, my hope is to connect with other problem solvers. Feel free to check out my <Link href="/resume">resume</Link>. Even though I do documentation at work, I've never done it here. With my <Link href="/blog">blog</Link>, I'd like to start sharing more tips/tricks in my own way whenever I go through challenges learning new things. Consider it as my personal documentations that might make your life easier.</p>
          <p><br />Hendra Ng</p>
        </div>
      </div>
    </section>

  )
}

export async function getStaticProps() {

  return {
    props: {
      quote: "I can accept failure, but I can’t accept not trying – Michael Jordan"
    }
  }
}

export default Index;