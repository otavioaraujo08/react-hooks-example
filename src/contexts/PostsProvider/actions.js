import * as types from './types';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POST_LOADING });

  const postRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postRaw.json();

  return () => dispatch({ type: types.POST_SUCCESS, payload: posts });
};
