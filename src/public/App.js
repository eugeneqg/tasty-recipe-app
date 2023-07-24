import './App.css';
import React from 'react';

import MainPage from '../pages/main-page';
import RecipePage from '../pages/recipe-page';
import CategoryPage from '../pages/category-page';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/header/navbar/navbar';
import AllCategoriesPage from '../pages/all-categories-page';
import SearchPage from '../pages/search-page';
import PageNotFound from '../pages/page-not-found';
import Footer from '../components/footer/footer';
import Favourite from '../pages/favourite';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='main'>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="search" element={<SearchPage/>}/>
          <Route path="recipe-page/:id" element={<RecipePage />}/>
          <Route path="category-page/:id" element={<CategoryPage/>}/>
          <Route path="categories" element={<AllCategoriesPage/>}/>
          <Route path="favourite" element={<Favourite />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
