import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    results: []
}

export const searchSlice = createSlice({
    name: "search-results",
    initialState,
    reducers: {
        getResults: (state, action) => {
            state.results = action.payload;
        },
        clearResults: (state) => {
            state.results = [];
        }
    }
});

export const {getResults, clearResults} = searchSlice.actions;
export default searchSlice.reducer;