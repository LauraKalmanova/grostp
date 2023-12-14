import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';

const AllCocktails = () => {

    const [cocktails, setCocktails] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");

                if (!cocktailsResponse.ok) {
                    throw new Error("Failed to fetch cocktails");
                }

                const cocktailsResponseData = await cocktailsResponse.json();
                setCocktails(cocktailsResponseData.drinks);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <h2 className="title">All of our cocktails</h2>
            <div className="itemsBox">
                {cocktails ? (
                    cocktails.map((cocktail) => {
                        return (
                            <article>
                                <Link to={`/cocktail/details/${cocktail.idDrink}`}>
                                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                                </Link>
                                <div className="cocktailDetails">
                                    <h2>{cocktail.strDrink}</h2>
                                    <p>{cocktail.strInstructions}</p>
                                </div>
                            </article>
                        )
                    })) : (
                    <p>Cocktails are loading</p>
                )}
            </div>
            <Footer />
        </>
    )
};

export default AllCocktails;