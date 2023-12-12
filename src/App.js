import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import CocktailDetails from './page/CocktailDetails';
import AllCocktails from './page/AllCocktails';
import DrinksOfCategory from './page/DrinksOfCategory';
import AllCategories from './page/AllCategories';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/details/:id" element={<CocktailDetails />} />
        <Route path="/cocktails" element={<AllCocktails />} />
        <Route path="/category/:categoryName" element={<DrinksOfCategory />} />
        <Route path="/categories" element={<AllCategories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
