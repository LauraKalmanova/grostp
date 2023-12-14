import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CocktailInfo = () => {

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
            {cocktails ? (
                cocktails.map((cocktail) => {
                    return (
                        <article>
                            <h2 className="title">{cocktail.strDrink}</h2>
                            <Link to={`/cocktail/details/${cocktail.idDrink}`}>
                                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            </Link>
                        </article>
                    )
                })
            ) : (
                <p>Cocktails are loading</p>
            )
            }
        </>
    )
};

export default CocktailInfo;