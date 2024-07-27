import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../utils/types";

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
    reducers: {

    }
})

export const { } = postsSlice.actions;
export default postsSlice.reducer;