import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        {idCategory: 1, strCategoryThumb: "", strCategory: ""},
        {idCategory: 2, strCategoryThumb: "", strCategory: ""},
        {idCategory: 3, strCategoryThumb: "", strCategory: ""},
        {idCategory: 4, strCategoryThumb: "", strCategory: ""},
        {idCategory: 5, strCategoryThumb: "", strCategory: ""},
        {idCategory: 6, strCategoryThumb: "", strCategory: ""},
        {idCategory: 7, strCategoryThumb: "", strCategory: ""},
        {idCategory: 8, strCategoryThumb: "", strCategory: ""}
    ]
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload; 
        }

    }
});

export const {getCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;