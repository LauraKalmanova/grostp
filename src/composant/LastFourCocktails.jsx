import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


const LastFourCocktails = () => {

    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
            const cocktailsResponseData = await cocktailsResponse.json();
            const lastFourCocktails = cocktailsResponseData.drinks.slice(-4);
            setCocktails(lastFourCocktails);
            
        })(); 
    }, []);

    return (
        <div className="lastFourBox">
            <h2>Our latest four <Link to={`/cocktails`}>cocktails</Link>:</h2>
            <div className="drinkContainer">
                {cocktails ? (
                    cocktails.map((cocktail) => {
                        return (
                            <>
                                <div key={cocktail.idDrink} className="drinkItem">
                                    <Link to={`/cocktail/details/${cocktail.idDrink}`}><img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} /></Link>
                                    <h4>{cocktail.strDrink}</h4>
                                </div>
                            </>
                    )})
                ):(
                    <p>The latest four cocktails are loading...</p>
                )}
            </div>
        </div>
    )
   
};

export default LastFourCocktails;