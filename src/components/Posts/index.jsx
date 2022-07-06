import { useEffect } from "react"
import { useContext } from "react"
import { PostsContext } from "../../contexts/PostsProvider/context"
import { loadPosts } from '../../contexts/PostsProvider/actions'

import './styles.css'

export const Posts = () => {
  const postsContext = useContext(PostsContext)
  const { postsState, postsDispatch } = postsContext

  useEffect(() => {
    loadPosts(postsDispatch)
  }, [postsDispatch])

  return(
    <div>
      <h1>Posts</h1>
      {postsState.posts.map(posts => (
        <div key={posts.id}>
          <h1 className="postTitle">{posts.title}</h1>
          <p className="postSubTitle">{posts.body}</p>
        </div>
      ))}
    </div>
  )
}
