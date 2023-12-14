import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';

const CocktailDetails = () => {
    const { id } = useParams();

    const [cocktail, setCocktail] = useState(null);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

                if (!cocktailsResponse.ok) {
                    throw new Error('Failed to fetch cocktail details');
                }

                const cocktailsResponseData = await cocktailsResponse.json();
                setCocktail(cocktailsResponseData.drinks[0]);
            } catch (error) {
                console.error('Error fetching cocktail details:', error.message);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (cocktail) {
            const newIngredients = [];
            for (let i = 1; i <= 15; i++) {
                const ingredient = cocktail[`strIngredient${i}`];
                if (ingredient) {
                    newIngredients.push(ingredient);
                }
            }
            setIngredients(newIngredients);
        }
    }, [cocktail]);




    return (
        <>
            <Header />
            {cocktail ? (
                <article>
                    <h2 className="title">{cocktail.strDrink}</h2>
                    <div id="cocktail">
                        <img id="cocktailImg" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />

                        <div className="cocktailInfo">
                            <h3>Ingredients: </h3>
                            <ul>
                                {ingredients.map((ingredient, index) => (
                                    <Link to={`/ingredient/${ingredient}`}>
                                        <li key={index}>{`${ingredient}`}</li>
                                    </Link>
                                ))}
                            </ul>

                            <h3>Recipe: </h3>
                            <p>{cocktail.strInstructions}</p>

                            <h3>Category: </h3>
                            <p><Link to={`/category/${cocktail.strCategory}`}>
                                {cocktail.strCategory}
                            </Link>
                            </p>
                        </div>
                    </div>
                    <p id="cocktailUpdate">Last updated on: {cocktail.dateModified}</p>

                </article>
            ) : (
                <p>The cocktail is loading</p>
            )}
            <Footer />
        </>
    )
};

export default CocktailDetails;