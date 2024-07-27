import { createSlice } from "@reduxjs/toolkit";

export type Post = {
    id: number;
    title: string;
}

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