import PostCard from './PostCard'

const Posts = ({ posts }) => {
  return (
    <main>
      <div className='container'>
        <div className='row'>
          <PostCard posts={posts} />
        </div>
      </div>
    </main>
  )
}

export default Posts
