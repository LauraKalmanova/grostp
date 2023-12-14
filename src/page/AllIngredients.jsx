import { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

const AllIngredients = () => {
    const [ingredients, setIngredients] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ingredientsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");

                if (!ingredientsResponse.ok) {
                    throw new Error("Failed to fetch ingredients");
                }

                const ingredientsResponseData = await ingredientsResponse.json();
                setIngredients(ingredientsResponseData.drinks);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <h2 className="title">All of the ingredients</h2>
            <div className="itemsBox">
                {ingredients ? (
                    ingredients.map((ingredient) => {
                        return (
                            <article>
                                <Link to={`/ingredient/${ingredient.strIngredient1}`}>
                                    <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Medium.png`} />
                                    <h3>{ingredient.strIngredient1}</h3>
                                </Link>
                            </article>
                        )
                    })) : (
                    <p>Ingredients are loading</p>
                )}
            </div>
            <Footer />
        </div>
    )
};

export default AllIngredients;