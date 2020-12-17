import Head from 'next/head'
import utilStyles from 'styles/utils.module.css'
import { getSortedPostsData } from 'lib/posts'
import Link from 'next/link'
import Date from 'components/date'

function getCategoryImage(category) {
  if(category == 'info') {
    return "assets/icons/info.svg"
  }
  else if(category == 'code') {
    return "assets/icons/code.svg"
  }
}

export default function Blog({ allPostsData }) {
  return (
    <section className="section">
      <div className="container py-4">
        <div className="columns is-centered">
          <div className="column is-11">
            {allPostsData.map(({ id, date, title, subtitle, category }) => (
              <div className="media" key={id}>
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img className="is-rounded" src={getCategoryImage(category)} alt=""></img>
                  </figure>
                </div>
                <div className="media-content">
                  <p><strong>
                    <Link href={`/blog/${id}`}>
                      <a>{title}</a>
                    </Link>
                  </strong>
                    <span className="subtitle is-size-7 pl-3 has-text-weight-light"><Date dateString={date} /></span>
                  </p>
                  <p>{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/*
<section class="section">
          <div class="container py-4">
            <div class="columns is-centered">
              <div class="column is-8">
                <div class="media">
                  <div class="media-left"><figure class="image is-64x64"><img class="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=12232E" alt=""></figure></div>
                    <div class="media-content">
                      <p><strong>Dinesh Chugtai</strong><span>5 min ago</span></p>
                      <p>Why I'm the Best Programmer Ever I feel like not everybody outside of Pied Piper knows it, so I wanted to make it clear why I'm the best programmer in the world.</p>
                    </div>
                  </div>
                  <div class="media">
                    <div class="media-left"><figure class="image is-64x64"><img class="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=12232E" alt=""></figure></div>
                      <div class="media-content">
                        <p><strong>Bertram Gilfoyle</strong><span>47 min ago</span></p>
                        <p>What makes decentralization so great? Let me enlighten you with my wisdom.</p>
                      </div>
                    </div>
                    <div class="media">
                      <div class="media-left"><figure class="image is-64x64"><img class="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=12232E" alt=""></figure></div>
                        <div class="media-content">
                          <p><strong>Monica Hall</strong><span>3 days ago</span></p>
                          <p>This is a short story about how we uncovered an insane problem with our ICO, fixed it, and still managed to secure vast funding.</p>
                        </div>
                      </div>
                      <div class="media">
                        <div class="media-left"><figure class="image is-64x64"><img class="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=12232E" alt=""></figure></div>
                          <div class="media-content">
                            <p><strong>Jared Dunn</strong><span>2 weeks ago</span></p>
                            <p>An exhaustive guide about how different teas can affect a CEO during their workday.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
</section>
*/

/*
<>
                  <Head>
                    <title>Blog</title>
                  </Head>
                  <section className="section">
                    <div className="container">
                      <h2 className={utilStyles.headingLg}>Blog</h2>
                      <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                          <li className={utilStyles.listItem} key={id}>
                            <Link href={`/blog/${id}`}>
                              <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                            </small>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </>
*/



export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}