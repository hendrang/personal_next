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
          <p>Let me introduce myself as a software developer. Currently, I am working full-time at Charles Schwab as lead developer. In the past, I worked as Software Developer Associate Manager at Accenture, Senior Software Engineer (Tech Lead) at Charles Schwab and Senior Application Programmer at Progressive Insurance.</p>
          <p>My career in technology can perhaps be traced back to when I was a teenager. With my friend’s help, I created my first my personal website using Yahoo website builder. Of course I wanted to have a cool site with fireworks and counters. Since then, I have been “addicted” to the web and other technologies. I am always amazed by how far technology has gone in order to solve problems effectively and efficiently. Making life and/or business easier with technology is great!</p>
          <p>With my personal site, I would like to market my experience (<Link href="/resume">see resume</Link>) and hope to connect with other fellow developers and/or entrepreneurs to solve real world problems. With my experience and willingness to learn, I hope I can work with you on any type of projects.</p>
          <p>From the quote above, I’m sure you know by now that I’m a huge fan of Michael “Air” Jordan. If you happen to live in Colorado and have some pick-up games, you can count on this average basketball player.</p>
          <p><br/>Hendra Ng</p>
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