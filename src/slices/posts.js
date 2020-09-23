import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  submitting: false,
  hasErrors: false,
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      state.posts = [Object.values(payload)[0]];
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    submitPost: (state) => {
      state.submitting = true;
    },
    submitPostSuccess: (state, { payload }) => {
      state.submitting = false;
      state.hasErrors = false;
      state.posts = [payload, ...state.posts];
    },
    submitPostFailure: (state) => {
      state.submitting = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  submitPost,
  submitPostSuccess,
  submitPostFailure,
} = postsSlice.actions;
export default postsSlice.reducer;
export const postsSelector = (state) => state.posts;

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(getPosts());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch(getPostsSuccess(data));
    } catch (e) {
      dispatch(getPostsFailure());
    }
  };
};

export const sendPost = ({ post }) => {
  return async (dispatch) => {
    dispatch(submitPost());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );
      const data = await response.json();
      dispatch(submitPostSuccess(data));
    } catch (e) {
      dispatch(submitPostFailure());
    }
  };
};
