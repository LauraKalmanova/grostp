import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import CocktailDetails from './page/CocktailDetails';
import AllCocktails from './page/AllCocktails';
import DrinksOfCategory from './page/DrinksOfCategory';
import AllCategories from './page/AllCategories';
import DrinksOfIngredient from './page/DrinksOfIngredient';
import AllGlasses from './page/AllGlasses';
import AllIngredients from './page/AllIngredients';
import DrinksOfGlasses from './page/DrinksOfGlasses';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/details/:id" element={<CocktailDetails />} />
        <Route path="/cocktails" element={<AllCocktails />} />
        <Route path="/category/:categoryName" element={<DrinksOfCategory />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/ingredient/:ingredientName" element={<DrinksOfIngredient />} />
        <Route path="/glasses" element={<AllGlasses />} />
        <Route path="/ingredients" element={<AllIngredients />} />
        <Route path="/glass/:glassName" element={<DrinksOfGlasses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
