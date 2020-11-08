import Head from 'next/head'
import styles from 'styles/Home.module.css'

const Index = (props) => {
  return (
    <div>
      <h1>Hello from Next JS</h1>
      <p>Description of the page</p>
      <p>{props.value}</p>
    </div>
  )
}

export async function getStaticProps() {
  
  return {
    props: {
      value: 1
    }
  }
}

export default Index;