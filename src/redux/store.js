import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categoriesSlice';
import searchSlice from './slices/searchSlice';
import randomSlice from './slices/randomSlice';
import categorySlice from './slices/categorySlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        category: categorySlice,
        search: searchSlice,
        random: randomSlice
    }
});