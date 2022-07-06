import * as types from './types'

export const loadPosts = async (dispatch) => {
  const postRaw = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await postRaw.json()

  dispatch({ type: types.POST_SUCCESS, payload: posts })
}
