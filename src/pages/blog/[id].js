import { getAllPostIds, getPostData } from 'lib/posts'
import Head from 'next/head'
import Date from 'components/date'
import utilStyles from 'styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <section className="section">
                <div className="container">
                    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={postData.date} />
                    </div>
                </div>
                <div className="container py-6">
                    <div class="content">
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}