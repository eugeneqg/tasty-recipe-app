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
        }
    }
});

export const {getResults} = searchSlice.actions;
export default searchSlice.reducer;