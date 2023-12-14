import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LastFourCocktails = () => {

    const [cocktails, setCocktails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");

                if (!cocktailsResponse.ok) {
                    throw new Error("Failed to fetch cocktails");
                }

                const cocktailsResponseData = await cocktailsResponse.json();
                const lastFourCocktails = cocktailsResponseData.drinks.slice(-4);
                setCocktails(lastFourCocktails);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="lastFourBox">
            <h2 className="title">Our latest four <Link to={`/cocktails`}>cocktails</Link>:</h2>
            <div className="itemsBox">
                {cocktails ? (
                    cocktails.map((cocktail) => {
                        return (
                            <>
                                <div key={cocktail.idDrink} className="cocktailItem">
                                    <Link to={`/cocktail/details/${cocktail.idDrink}`}>
                                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                                    </Link>
                                    <h4>{cocktail.strDrink}</h4>
                                </div>
                            </>
                        )
                    })
                ) : (
                    <p>The latest four cocktails are loading...</p>
                )}
            </div>
        </div>
    )

};

export default LastFourCocktails;