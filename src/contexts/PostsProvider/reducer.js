import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POST_LOADING: {
      console.log(action.type);

      return { ...state, loading: true };
    }
    case types.POST_SUCCESS: {
      console.log(action.type);

      return { ...state, posts: action.payload, loading: false };
    }
    default:
      console.log('Não encontrei a action type');

      return { ...state };
  }
};
