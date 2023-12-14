import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import CocktailDetails from './page/CocktailDetails';
import AllCocktails from './page/AllCocktails';
import CocktailsOfCategory from './page/CocktailsOfCategory';
import AllCategories from './page/AllCategories';
import CocktailsOfIngredient from './page/CocktailsOfIngredient';
import AllGlasses from './page/AllGlasses';
import AllIngredients from './page/AllIngredients';
import CocktailsOfGlasses from './page/CocktailsOfGlasses';
import Search from './page/Search';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/cocktail/details/:id" element={<CocktailDetails />} />
        <Route path="/cocktails" element={<AllCocktails />} />
        <Route path="/category/:categoryName" element={<CocktailsOfCategory />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/ingredients" element={<AllIngredients />} />
        <Route path="/ingredient/:ingredientName" element={<CocktailsOfIngredient />} />
        <Route path="/glasses" element={<AllGlasses />} />
        <Route path="/glass/:glassName" element={<CocktailsOfGlasses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
