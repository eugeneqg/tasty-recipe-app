import './App.css';
import MainPage from '../pages/main-page';
import RecipePage from '../pages/recipe-page';
import CategoryPage from '../pages/category-page';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/header/navbar/navbar';
import AllCategoriesPage from '../pages/all-categories-page';
import SearchPage from '../pages/search-page';
import PageNotFound from '../pages/page-not-found';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="search" element={<SearchPage/>}/>
        <Route path="recipe-page/:id" element={<RecipePage/>}/>
        <Route path="category-page/:id" element={<CategoryPage/>}/>
        <Route path="categories" element={<AllCategoriesPage/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
