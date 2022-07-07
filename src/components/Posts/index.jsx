import { useEffect } from 'react';
import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';

import './styles.css';
import { useRef } from 'react';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProvider/action';

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

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
      <div>
        <h1>{counterState.counter}</h1>
      </div>
      <button onClick={() => incrementCounter(counterDispatch)}>Incrementar Valor </button>
      <button onClick={() => decrementCounter(counterDispatch)}>Decrementar Valor </button>

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
