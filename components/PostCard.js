import Link from 'next/link'
import { render } from 'react-dom'

const PostCard = ({ posts }) => {
  return posts.map((post) => {
    return (
      <div key={post.id} className='col-12 col-md-4'>
        <Link href={`/post/${post.slug}`}>
          <a>
            <h2 dangerouslySetInnerHTML={{ __html: post.title }}></h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
            <small dangerouslySetInnerHTML={{ __html: post.date }}></small>
          </a>
        </Link>
      </div>
    )
  })
}

export default PostCard
