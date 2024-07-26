import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        updateUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    },
});

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;