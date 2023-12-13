import {useEffect, useState} from 'react';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
import {Link} from 'react-router-dom';

const AllIngredients =() => {
    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        (async () => {
            const ingredientsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
            const ingredientsResponseData = await ingredientsResponse.json();
            setIngredients(ingredientsResponseData.drinks);
        })(); 
    }, []);

    return (
        <div>
            <Header />
            <h2>All of our ingredients</h2>
                {ingredients ? (
                    ingredients.map((ingredient) => {
                        return (
                            <article>
                                <Link to={`/ingredient/${ingredient.strIngredient1}`}><h3>{ingredient.strIngredient1}</h3></Link>
                            </article>
                        )
                    })) : (
                            <p>Ingredients are loading</p>
                        )}
            <Footer />
        </div>
    )
};

export default AllIngredients;