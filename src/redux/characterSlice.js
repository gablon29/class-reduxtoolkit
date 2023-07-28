import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    characSearch: [],
}

export const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharacters:  (state, action) => {
            state.characters =  action?.payload
        },
    }
});
export const { addCharacters } = characterSlice.actions;
export default characterSlice.reducer
