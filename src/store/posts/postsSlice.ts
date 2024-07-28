import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../utils/types";
import { fetchPostsThunk } from "./postsThunk";

export interface PostsState {
    posts: Post[];
    loading: boolean;
}

const initialState: PostsState = {
    posts: [],
    loading: false,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsThunk.fulfilled, (state, action) => {
            console.log('fetchPostsThunk.fulfilled');
        });
    }
})

export const { } = postsSlice.actions;
export default postsSlice.reducer;