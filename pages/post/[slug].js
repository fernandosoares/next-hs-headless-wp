import { QUERY_POST, QUERY_SLUGS } from '../../lib/queries'
import { request } from '../../lib/request'

const Post = ({ post }) => {
  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
      <div
        className='__content'
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </>
  )
}
export async function getStaticProps({ params: { slug } }) {
  const post = await request(QUERY_POST, {
    variables: { id: slug },
  })

  return {
    props: {
      post: post.post,
    },
  }
}

export async function getStaticPaths() {
  const response = await request(QUERY_SLUGS)

  const paths = response.posts.nodes.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Post
