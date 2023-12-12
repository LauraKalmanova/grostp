import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const CocktailDetails = () => {
    const {id} = useParams();

    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
            const cocktailsResponseData = await cocktailsResponse.json();
            setCocktail(cocktailsResponseData.drinks[0]);    
        })(); 
    }, []); 

    const ingredients = [];
    cocktail.forEach(cocktail => { 
        for (let i = 1; i <= 15; i++) {
            if (cocktail.strIngredient + i) {
                ingredients.push(cocktail.strIngredient + i);
            }
        }
    });

    return (
        <div>
            <Header />
                {cocktail ? (
                    <article>
                        <h2>{cocktail.strDrink}</h2>
                        <p>Category: <Link to={`/category/${cocktail.strCategory}`}>{cocktail.strCategory}</Link></p>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <p>Ingredients: {}</p>
                        <p>Recipe: {cocktail.strInstructions}</p>
                        <p>Last updated on: {cocktail.dateModified}</p>
                    </article>
                ) : (
                    <p>The cocktail is loading</p>
                )}
            <Footer />
        </div>
    )
};

export default CocktailDetails;