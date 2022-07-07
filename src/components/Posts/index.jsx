import { useEffect } from 'react';
import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';

import './styles.css';
import { useRef } from 'react';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  console.log(isMounted);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();

        return (isMounted.current = false);
      }
    });
  }, [postsDispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {postsState.loading && (
        <div className="PostsNotFound">
          <h1>Posts não encontrados :S</h1>
          <p>Espere carregar, ou contate o administrador.</p>
        </div>
      )}

      {postsState.posts.map((posts) => (
        <div key={posts.id}>
          <h1 className="postTitle">{posts.title}</h1>
          <p className="postSubTitle">{posts.body}</p>
        </div>
      ))}
    </div>
  );
};
