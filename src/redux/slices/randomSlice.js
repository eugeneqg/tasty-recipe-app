import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    meal: [
        {
            strMeal: "",
            strMealThumb: "",
        }
    ]
}

export const RandomSlice = createSlice({
    name: "random",
    initialState,
    reducers: {
        getRandomRecipe: (state, action) => {
            state.meal = action.payload
        }
    }
});

export const {getRandomRecipe} = RandomSlice.actions;
export default RandomSlice.reducer;