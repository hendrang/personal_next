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
          <p>Let me start by introducing myself. I am a new dad/husband and software developer (in that order) at Charles Schwab. </p>
          <p>My interest in technology can be traced back to my high school time. With my friend’s help, I launched my first personal website using Yahoo website builder with the help of 52k dialup modem. It's a cool site with fireworks, counters, and don't forget the background music! Web technologies definitely helped me sharing my information to my friends and the world (dial-up modem speed) fast. Technology does make our lives easier!</p>
          <p>With my current personal site, my hope is to connect with other problem solvers. Feel free to check out my (<Link href="/resume">resume</Link>). I also plan to share more tips/tricks based on my challenges learning new things through my <Link href="/blog">blog</Link>. Perhaps, you can gain something from it. You can think of it as how-to documentation.</p>
          <p>Technology aside, I'm sure you can guess my hobby from the above quote. I would love to get some pick-up games (or golf) whenever possible.</p>
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