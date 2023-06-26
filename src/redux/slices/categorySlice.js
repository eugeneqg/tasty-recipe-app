import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    meals: [
        {
            strMeal: "",
            strMealThumb: "",
            idMeal: ""
        }
    ]
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        getCategory: (state, action) => {
            state.meals = action.payload;
        },
        clearCategory: (state) => {
            state = initialState;
        }
    }
});

export const {getCategory, clearCategory} = categorySlice.actions;
export default categorySlice.reducer;