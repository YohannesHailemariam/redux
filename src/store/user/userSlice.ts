import { createSlice } from "@reduxjs/toolkit";

export interface userState {
    id: number;
    username: string;
    email: string;
}

const initialState: userState = {
    id: 1,
    username: 'Anson',
    email: 'anson@anson.com',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         
    }
}) 